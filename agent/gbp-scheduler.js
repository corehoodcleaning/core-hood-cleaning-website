require('dotenv').config({ path: '.env.local' });
const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');
const { SEO_AGENT_SYSTEM_PROMPT } = require('./seo-agent-prompt');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MEMORY_PATH = path.join(__dirname, 'agent-memory.json');

// ============================================================
// HARD CODED CONSTANTS - NEVER CHANGE THESE
// ============================================================

const GHL_BASE_URL = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';
const GBP_ACCOUNT_ID = process.env.GHL_GBP_ACCOUNT_ID;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const POSTS_PER_WEEK = 3;
const MAX_POST_LENGTH = 150;
const MIN_POST_LENGTH = 100;

// Posting windows in PST (24hr format)
const POSTING_SCHEDULE = {
  monday: { day: 1, minHour: 8, maxHour: 9 },
  wednesday: { day: 3, minHour: 14, maxHour: 17 },
  friday: { day: 5, minHour: 14, maxHour: 17 }
};

// Post type rotation - never repeat within same week
const POST_TYPE_ROTATION = [
  ['Service Spotlight', 'Fire Safety Tip', 'City Spotlight'],
  ['Compliance Reminder', 'Before/After Highlight', 'Seasonal Tip'],
  ['Service Spotlight', 'NFPA 96 Education', 'City Spotlight'],
  ['Customer Pain Point', 'Fire Safety Tip', 'Compliance Reminder']
];

// ============================================================
// HARD CODED SAFETY CHECKS
// ============================================================

function validateGHLCredentials() {
  if (!process.env.GHL_API_KEY) {
    throw new Error('SAFETY STOP: GHL_API_KEY is missing');
  }
  if (!process.env.GHL_LOCATION_ID) {
    throw new Error('SAFETY STOP: GHL_LOCATION_ID is missing');
  }
  if (!process.env.GHL_GBP_ACCOUNT_ID) {
    throw new Error('SAFETY STOP: GHL_GBP_ACCOUNT_ID is missing');
  }
  console.log('GHL credentials validation passed');
}

function validatePostContent(post) {
  const errors = [];

  // Check length
  if (!post.body || post.body.length < MIN_POST_LENGTH) {
    errors.push(`Post body too short: ${post.body?.length || 0} chars. Minimum ${MIN_POST_LENGTH}.`);
  }
  if (post.body && post.body.length > MAX_POST_LENGTH * 10) {
    errors.push(`Post body too long: ${post.body.length} chars. Maximum ${MAX_POST_LENGTH * 10}.`);
  }

  // Check required fields
  if (!post.topic) errors.push('Missing post topic');
  if (!post.post_type) errors.push('Missing post type');
  if (!post.image_description) errors.push('Missing image description');
  if (!post.scheduled_date) errors.push('Missing scheduled date');
  if (!post.scheduled_time) errors.push('Missing scheduled time');

  // Check phone number format
  if (post.body && post.body.includes('858') && !post.body.includes('(858) 361-2570')) {
    errors.push('Phone number must be formatted as (858) 361-2570');
  }

  // Check no pricing mentioned
  if (post.body && /\$\d+|\bprice\b|\bpricing\b|\bcost\b|\bfee\b/i.test(post.body)) {
    errors.push('Post contains pricing information which is not allowed');
  }

  // Check no competitor names
  if (post.body && /competitor|vs\.|versus/i.test(post.body)) {
    errors.push('Post may contain competitor references');
  }

  // Check no emojis
  if (post.body && /[\u{1F300}-\u{1F9FF}]/u.test(post.body)) {
    errors.push('Post contains emojis which are not allowed');
  }

  if (errors.length > 0) {
    throw new Error(`SAFETY STOP: Post validation failed:\n${errors.join('\n')}`);
  }

  console.log('Post content validation passed');
}

function validateScheduledDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  // Must be in the future
  if (date <= now) {
    throw new Error(`SAFETY STOP: Scheduled date ${dateString} is in the past`);
  }

  // Must be within the next 35 days (one month buffer)
  const maxDate = new Date(now.getTime() + 35 * 24 * 60 * 60 * 1000);
  if (date > maxDate) {
    throw new Error(`SAFETY STOP: Scheduled date ${dateString} is too far in the future`);
  }

  // Must be on Monday, Wednesday, or Friday
  const dayOfWeek = date.getDay();
  if (![1, 3, 5].includes(dayOfWeek)) {
    throw new Error(`SAFETY STOP: Post scheduled on wrong day (${dayOfWeek}). Must be Monday (1), Wednesday (3), or Friday (5)`);
  }

  console.log('Scheduled date validation passed:', dateString);
}

function checkMonthlyBatchNotAlreadyCreated(memory) {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' }).toLowerCase();
  if (memory.gbp_schedule.current_month === currentMonth && memory.gbp_schedule.batch_created) {
    throw new Error(`SAFETY STOP: GBP batch for ${currentMonth} already created. Only one batch per month allowed.`);
  }
  console.log('Monthly batch uniqueness check passed');
}

function checkPostTypeNotRepeatedInWeek(weekPosts, newPostType) {
  const typesThisWeek = weekPosts.map(p => p.post_type);
  if (typesThisWeek.includes(newPostType)) {
    throw new Error(`SAFETY STOP: Post type "${newPostType}" already used this week. Each type can only appear once per week.`);
  }
  console.log('Post type uniqueness check passed:', newPostType);
}

function validateBatchSize(posts) {
  if (posts.length < 12) {
    throw new Error(`SAFETY STOP: Batch too small. Generated ${posts.length} posts, minimum 12 required.`);
  }
  if (posts.length > 14) {
    throw new Error(`SAFETY STOP: Batch too large. Generated ${posts.length} posts, maximum 14 allowed.`);
  }
  console.log(`Batch size validation passed: ${posts.length} posts`);
}

// ============================================================
// SCHEDULING HELPERS
// ============================================================

function randomizeTime(minHour, maxHour) {
  // Generate random time within window
  const hour = minHour + Math.floor(Math.random() * (maxHour - minHour));
  const minute = Math.floor(Math.random() * 60);
  const second = Math.floor(Math.random() * 60);
  return { hour, minute, second };
}

function formatScheduledTime(date, hour, minute, second) {
  const d = new Date(date);
  d.setHours(hour, minute, second, 0);
  // Format as PST ISO string
  return d.toISOString().replace('Z', '-08:00');
}

function getMonthSchedule() {
  // Calculate all Monday, Wednesday, Friday dates for current month
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const scheduleDates = [];

  // Start from today or beginning of month whichever is later
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() + 1); // Start from tomorrow

  // Get 5 weeks worth of MWF dates to ensure we get full month
  for (let week = 0; week < 5; week++) {
    Object.values(POSTING_SCHEDULE).forEach(schedule => {
      const date = new Date(startDate);
      const currentDay = date.getDay();
      let daysUntil = schedule.day - currentDay;
      if (daysUntil <= 0) daysUntil += 7;
      date.setDate(startDate.getDate() + (week * 7) + daysUntil - 7);

      // Only include dates in current or next month
      if (date.getMonth() === month || date.getMonth() === (month + 1) % 12) {
        const time = randomizeTime(schedule.minHour, schedule.maxHour);
        scheduleDates.push({
          date: date.toISOString().split('T')[0],
          dayName: Object.keys(POSTING_SCHEDULE)[Object.values(POSTING_SCHEDULE).indexOf(schedule)],
          scheduledAt: formatScheduledTime(date, time.hour, time.minute, time.second),
          hour: time.hour,
          minute: time.minute
        });
      }
    });
  }

  // Sort by date and take first 13
  return scheduleDates
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 13);
}

// ============================================================
// GHL API FUNCTIONS
// ============================================================

async function ghlRequest(method, endpoint, body = null, retryCount = 0) {
  const maxRetries = 3;
  const url = `${GHL_BASE_URL}${endpoint}`;

  const headers = {
    'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
    'Content-Type': 'application/json',
    'Version': GHL_API_VERSION
  };

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null
    });

    // Handle rate limiting
    if (response.status === 429) {
      console.log('GHL rate limited - waiting 60 seconds...');
      await new Promise(resolve => setTimeout(resolve, 60000));
      return ghlRequest(method, endpoint, body, retryCount);
    }

    // Handle auth errors
    if (response.status === 401) {
      throw new Error('URGENT: GHL API key expired or invalid. Chase must update GHL_API_KEY secret.');
    }

    // Handle server errors with retry
    if (response.status >= 500) {
      if (retryCount < maxRetries) {
        console.log(`GHL server error - retry ${retryCount + 1} of ${maxRetries}...`);
        await new Promise(resolve => setTimeout(resolve, 30000));
        return ghlRequest(method, endpoint, body, retryCount + 1);
      }
      throw new Error(`GHL API server error after ${maxRetries} retries: ${response.status}`);
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`GHL API error ${response.status}: ${errorText}`);
    }

    return await response.json();
  } catch (err) {
    if (retryCount < maxRetries && !err.message.includes('URGENT') && !err.message.includes('SAFETY STOP')) {
      console.log(`GHL request failed - retry ${retryCount + 1} of ${maxRetries}...`);
      await new Promise(resolve => setTimeout(resolve, 30000));
      return ghlRequest(method, endpoint, body, retryCount + 1);
    }
    throw err;
  }
}

async function scheduleGBPPost(post) {
  // Validate before sending to GHL
  validatePostContent(post);
  validateScheduledDate(post.scheduled_date);

  const payload = {
    locationId: GHL_LOCATION_ID,
    accountId: GBP_ACCOUNT_ID,
    type: 'gmb',
    status: 'scheduled',
    scheduledAt: post.scheduledAt,
    body: post.body,
    cta: {
      type: 'CALL',
      url: 'tel:+18583612570'
    }
  };

  const result = await ghlRequest('POST', '/social-media-posting/posts', payload);
  console.log('Post scheduled in GHL:', result.id || 'success');
  return result;
}

// ============================================================
// GBP POST WRITER
// ============================================================

async function writeMonthlyGBPPosts(schedule) {
  console.log('Writing monthly GBP posts with Claude...');

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const currentYear = new Date().getFullYear();

  // Build schedule context for Claude
  const scheduleContext = schedule.map((slot, index) => {
    const weekNumber = Math.floor(index / 3);
    const postTypeIndex = index % 3;
    const postType = POST_TYPE_ROTATION[weekNumber % 4][postTypeIndex];
    return {
      index: index + 1,
      date: slot.date,
      day: slot.dayName,
      scheduled_at: slot.scheduledAt,
      post_type: postType,
      week: weekNumber + 1
    };
  });

  const writePrompt = `
Write ${schedule.length} Google Business Profile posts for Core Hood Cleaning.

Month: ${currentMonth} ${currentYear}
Total posts: ${schedule.length}
Posts per week: 3 (Monday, Wednesday, Friday)

Post schedule and types:
${JSON.stringify(scheduleContext, null, 2)}

Requirements for EVERY post:
- Length: exactly 100-150 words
- Tone: local, friendly, direct
- Structure: hook sentence, 2-3 value sentences, CTA
- CTA must end with either (858) 361-2570 or lead form URL
- Never use emojis
- Never mention pricing
- Never mention competitors
- Phone format must be exactly: (858) 361-2570
- Rotate through San Diego neighborhoods naturally
- Align with ${currentMonth} seasonal theme where relevant
- Each post must be completely unique

Return ONLY a JSON array in this exact format:
[
  {
    "index": 1,
    "topic": "brief topic description",
    "post_type": "Service Spotlight",
    "week": 1,
    "scheduled_date": "2026-03-16",
    "scheduled_time": "8:23 AM PST",
    "scheduledAt": "2026-03-16T08:23:00-08:00",
    "body": "full post content 100-150 words",
    "image_description": "detailed description of ideal image for Chase to source"
  }
]

No explanation, no markdown, just the raw JSON array.
`;

  let posts = null;
  let retries = 0;
  const maxRetries = 3;

  while (retries < maxRetries) {
    try {
      const response = await client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 8000,
        system: SEO_AGENT_SYSTEM_PROMPT,
        messages: [{ role: 'user', content: writePrompt }]
      });

      const rawText = response.content[0].text.replace(/```json|```/g, '').trim();
      posts = JSON.parse(rawText);
      console.log(`Claude wrote ${posts.length} GBP posts`);
      break;
    } catch (err) {
      retries++;
      console.error(`GBP writer attempt ${retries} failed:`, err.message);
      if (retries < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 30000));
      } else {
        throw new Error('GBP writer failed after 3 attempts');
      }
    }
  }

  return posts;
}

// ============================================================
// MEMORY FUNCTIONS
// ============================================================

function readMemory() {
  const raw = fs.readFileSync(MEMORY_PATH, 'utf8');
  return JSON.parse(raw);
}

function writeMemory(memory) {
  memory.meta.last_updated = new Date().toISOString();
  fs.writeFileSync(MEMORY_PATH, JSON.stringify(memory, null, 2));
  console.log('Memory updated successfully');
}

// ============================================================
// MAIN GBP SCHEDULER FUNCTION
// ============================================================

async function runGBPScheduler() {
  console.log('Starting GBP Scheduler...');
  console.log('Running safety checks...');

  // Hard coded safety check 1: validate GHL credentials
  validateGHLCredentials();

  // Hard coded safety check 2: read memory
  const memory = readMemory();

  // Hard coded safety check 3: check monthly batch not already created
  checkMonthlyBatchNotAlreadyCreated(memory);

  // Calculate this months schedule
  console.log('Calculating monthly posting schedule...');
  const schedule = getMonthSchedule();
  console.log(`Schedule calculated: ${schedule.length} posting slots`);

  // Write all posts with Claude
  const posts = await writeMonthlyGBPPosts(schedule);

  // Hard coded safety check 4: validate batch size
  validateBatchSize(posts);

  // Hard coded safety check 5: validate all posts
  console.log('Validating all posts before scheduling...');
  const weekTracker = { 1: [], 2: [], 3: [], 4: [] };

  posts.forEach((post, index) => {
    // Validate post content
    validatePostContent(post);

    // Check post type not repeated in same week
    const week = post.week || Math.floor(index / 3) + 1;
    checkPostTypeNotRepeatedInWeek(weekTracker[week] || [], post.post_type);
    if (!weekTracker[week]) weekTracker[week] = [];
    weekTracker[week].push(post);
  });

  console.log('All posts validated successfully');

  // Schedule all posts in GHL
  console.log('Scheduling posts in GHL...');
  const scheduledPosts = [];
  const failedPosts = [];

  for (const post of posts) {
    try {
      const result = await scheduleGBPPost(post);
      scheduledPosts.push({
        ...post,
        ghl_post_id: result.id || 'scheduled',
        status: 'scheduled',
        image_attached: false,
        image_pending: true
      });
      console.log(`Post ${post.index} scheduled: ${post.scheduled_date} ${post.scheduled_time}`);

      // Small delay between API calls to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err) {
      console.error(`Failed to schedule post ${post.index}:`, err.message);
      failedPosts.push({
        ...post,
        error: err.message,
        status: 'failed'
      });
    }
  }

  // Update memory
  const currentMonth = new Date().toLocaleString('default', { month: 'long' }).toLowerCase();
  const today = new Date().toISOString().split('T')[0];

  memory.gbp_schedule.current_month = currentMonth;
  memory.gbp_schedule.batch_created = true;
  memory.gbp_schedule.posts_this_month = scheduledPosts;

  memory.gbp_posts.scheduled.push(...scheduledPosts);

  // Log all pending image requests
  const imageRequests = scheduledPosts.map(post => ({
    post_index: post.index,
    scheduled_date: post.scheduled_date,
    post_type: post.post_type,
    image_description: post.image_description,
    status: 'pending',
    date_requested: today
  }));

  memory.image_requests.pending.push(...imageRequests);

  writeMemory(memory);

  // Build results report
  const results = {
    month: currentMonth,
    total_posts_written: posts.length,
    total_scheduled: scheduledPosts.length,
    total_failed: failedPosts.length,
    scheduled_posts: scheduledPosts,
    failed_posts: failedPosts,
    image_requests: imageRequests,
    urgent_issues: []
  };

  // Flag urgent issues
  if (failedPosts.length > 0) {
    results.urgent_issues.push({
      type: 'GBP_SCHEDULING_FAILURES',
      detail: `${failedPosts.length} posts failed to schedule in GHL`,
      posts: failedPosts
    });
  }

  if (failedPosts.length === posts.length) {
    results.urgent_issues.push({
      type: 'COMPLETE_GBP_BATCH_FAILURE',
      severity: 'URGENT',
      detail: 'All GBP posts failed to schedule. GHL API may be down or credentials expired.'
    });
  }

  console.log('GBP Scheduler complete');
  console.log(`Scheduled: ${scheduledPosts.length} posts`);
  console.log(`Failed: ${failedPosts.length} posts`);
  console.log(`Images needed: ${imageRequests.length}`);

  return results;
}

module.exports = { runGBPScheduler };
