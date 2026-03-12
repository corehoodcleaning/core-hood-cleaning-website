require('dotenv').config({ path: '.env.local' });
const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');
const { SEO_AGENT_SYSTEM_PROMPT } = require('./seo-agent-prompt');
const { fetchSearchConsoleData } = require('../scripts/fetch-search-data');
const { fetchGA4Data } = require('../scripts/fetch-ga4-data');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MEMORY_PATH = path.join(__dirname, 'agent-memory.json');

// ============================================================
// HARD CODED SAFETY CHECKS
// ============================================================

function validateEnvironment() {
  const required = [
    'ANTHROPIC_API_KEY',
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
    'GOOGLE_REFRESH_TOKEN',
    'GA4_PROPERTY_ID',
    'GHL_API_KEY',
    'GHL_LOCATION_ID',
    'GHL_GBP_ACCOUNT_ID'
  ];
  const missing = required.filter(key => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
  console.log('Environment validation passed');
}

function validateMemoryFile(memory) {
  const requiredKeys = [
    'meta', 'blog_posts', 'location_pages', 'keywords',
    'rankings', 'gbp_posts', 'technical_issues', 'pr_log'
  ];
  const missingKeys = requiredKeys.filter(key => !memory[key]);
  if (missingKeys.length > 0) {
    throw new Error(`Memory file is corrupted. Missing keys: ${missingKeys.join(', ')}`);
  }
  console.log('Memory file validation passed');
}

function checkAgentRunLimit(memory) {
  // Hard stop: never run more than once per day
  const today = new Date().toISOString().split('T')[0];
  if (memory.meta.last_run === today) {
    throw new Error(`SAFETY STOP: Agent already ran today (${today}). Only one run per day allowed.`);
  }
  console.log('Run limit check passed');
}

function validatePlan(plan) {
  // Verify Claude returned a valid plan structure
  const requiredFields = [
    'week_summary', 'keyword_opportunities', 'content_gaps',
    'conversion_issues', 'technical_issues', 'blog_post',
    'location_page', 'gbp_batch', 'blog_refresh',
    'cannibalization_flags', 'penalty_flags', 'urgent_issues'
  ];
  const missingFields = requiredFields.filter(field => plan[field] === undefined);
  if (missingFields.length > 0) {
    throw new Error(`Claude returned invalid plan. Missing fields: ${missingFields.join(', ')}`);
  }
  console.log('Plan structure validation passed');
}

function checkForPenaltySignals(searchData, memory) {
  // Hard coded penalty detection
  if (!searchData || searchData.fallback) return [];
  const flags = [];

  // Check for sudden impression drop
  const snapshots = memory.rankings.weekly_snapshots;
  if (snapshots.length >= 2) {
    const latest = snapshots[snapshots.length - 1];
    const previous = snapshots[snapshots.length - 2];
    if (latest.total_impressions && previous.total_impressions) {
      const dropPercent = ((previous.total_impressions - latest.total_impressions) / previous.total_impressions) * 100;
      if (dropPercent >= 50) {
        flags.push({
          type: 'SUDDEN_IMPRESSION_DROP',
          severity: 'URGENT',
          detail: `Impressions dropped ${dropPercent.toFixed(1)}% in one week`,
          date_detected: new Date().toISOString().split('T')[0]
        });
      }
    }
  }
  return flags;
}

function checkKeywordCannibalization(plan, memory) {
  // Hard coded cannibalization check
  const flags = [];
  if (!plan.blog_post || !plan.blog_post.create) return flags;

  const targetKeyword = plan.blog_post.target_keyword.toLowerCase();
  const activeTargets = memory.keywords.active_targets;

  Object.entries(activeTargets).forEach(([keyword, data]) => {
    if (keyword.toLowerCase() === targetKeyword) {
      flags.push({
        keyword: targetKeyword,
        conflict_page: data.page,
        date_targeted: data.date_targeted
      });
    }
  });

  return flags;
}

function checkKeywordFreeze(plan, memory) {
  // Hard coded 90 day keyword freeze check
  if (!plan.blog_post || !plan.blog_post.create) return null;

  const targetKeyword = plan.blog_post.target_keyword.toLowerCase();
  const activeTargets = memory.keywords.active_targets;
  const today = new Date();

  if (activeTargets[targetKeyword]) {
    const freezeUntil = new Date(activeTargets[targetKeyword].do_not_change_until);
    if (today < freezeUntil) {
      return {
        keyword: targetKeyword,
        freeze_until: activeTargets[targetKeyword].do_not_change_until,
        existing_page: activeTargets[targetKeyword].page
      };
    }
  }
  return null;
}

// ============================================================
// MEMORY FUNCTIONS
// ============================================================

function readMemory() {
  try {
    const raw = fs.readFileSync(MEMORY_PATH, 'utf8');
    const memory = JSON.parse(raw);
    validateMemoryFile(memory);
    return memory;
  } catch (err) {
    console.error('Failed to read memory file:', err.message);
    throw err;
  }
}

function writeMemory(memory) {
  try {
    memory.meta.last_updated = new Date().toISOString();
    fs.writeFileSync(MEMORY_PATH, JSON.stringify(memory, null, 2));
    console.log('Memory updated successfully');
  } catch (err) {
    console.error('Failed to write memory file:', err.message);
    throw err;
  }
}

// ============================================================
// MAIN BRAIN FUNCTION
// ============================================================

async function runSeoBrain() {
  console.log('Starting SEO Brain...');
  console.log('Running safety checks...');

  // Hard coded safety check 1: environment variables
  validateEnvironment();

  // Hard coded safety check 2: read and validate memory
  console.log('Reading agent memory...');
  const memory = readMemory();

  // Hard coded safety check 3: run limit
  checkAgentRunLimit(memory);

  // Pull Search Console data
  console.log('Fetching Search Console data...');
  let searchData = null;
  try {
    searchData = await fetchSearchConsoleData();
    console.log('Search Console data fetched successfully');
  } catch (err) {
    console.error('Search Console fetch failed:', err.message);
    searchData = { error: err.message, fallback: true };
  }

  // Pull GA4 data
  console.log('Fetching GA4 data...');
  let ga4Data = null;
  try {
    ga4Data = await fetchGA4Data();
    console.log('GA4 data fetched successfully');
  } catch (err) {
    console.error('GA4 fetch failed:', err.message);
    ga4Data = { error: err.message, fallback: true };
  }

  // Hard coded safety check 4: penalty signals
  console.log('Checking for penalty signals...');
  const penaltySignals = checkForPenaltySignals(searchData, memory);
  if (penaltySignals.length > 0) {
    console.warn('URGENT: Penalty signals detected:', penaltySignals);
  }

  // Build context for Claude
  const today = new Date().toISOString().split('T')[0];
  const currentMonth = new Date().toLocaleString('default', { month: 'long' }).toLowerCase();

  const userPrompt = `
Today's date: ${today}
Current month: ${currentMonth}

AGENT MEMORY:
${JSON.stringify(memory, null, 2)}

SEARCH CONSOLE DATA:
${JSON.stringify(searchData, null, 2)}

GA4 DATA:
${JSON.stringify(ga4Data, null, 2)}

PENALTY SIGNALS DETECTED BY SAFETY SYSTEM:
${JSON.stringify(penaltySignals, null, 2)}

Based on your brain rules, the memory above, and this weeks data:

1. Identify the top 3 keyword opportunities
2. Identify the top 3 content gaps
3. Identify any conversion issues on existing pages
4. Identify any technical issues found
5. Identify any seasonal content opportunities
   coming up in the next 4-6 weeks
6. Decide what content to create this week:
   - One blog post topic with target keyword
   - One location page if any city is missing
   - Whether this is the first week of the month
     and GBP batch posts need to be written
7. Check if any existing blogs need refreshing
8. Check for any cannibalization issues
9. Check for any ranking drops that could
   indicate a penalty
10. If any penalty signals were detected above
    set urgent_issues and do NOT create content

Respond in this exact JSON format only:
{
  "week_summary": "3-4 sentence plain English summary",
  "keyword_opportunities": [
    {
      "keyword": "",
      "current_position": "",
      "monthly_searches": "",
      "action": ""
    }
  ],
  "content_gaps": [
    {
      "topic": "",
      "reason": "",
      "priority": ""
    }
  ],
  "conversion_issues": [
    {
      "page": "",
      "issue": "",
      "recommendation": "",
      "priority": ""
    }
  ],
  "technical_issues": [
    {
      "issue": "",
      "page": "",
      "priority": "",
      "needs_chase_approval": true
    }
  ],
  "seasonal_opportunities": [
    {
      "topic": "",
      "target_month": "",
      "publish_by": "",
      "priority": ""
    }
  ],
  "blog_post": {
    "create": true,
    "title": "",
    "slug": "",
    "target_keyword": "",
    "word_count_target": 1200,
    "reason": ""
  },
  "location_page": {
    "create": false,
    "city": "",
    "reason": ""
  },
  "gbp_batch": {
    "create": false,
    "reason": ""
  },
  "blog_refresh": {
    "refresh": false,
    "slug": "",
    "reason": ""
  },
  "cannibalization_flags": [],
  "penalty_flags": [],
  "urgent_issues": []
}
`;

  // Send to Claude with retries
  console.log('Sending data to Claude for analysis...');
  let plan = null;
  let retries = 0;
  const maxRetries = 3;

  while (retries < maxRetries) {
    try {
      const response = await client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        system: SEO_AGENT_SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userPrompt }]
      });

      const rawText = response.content[0].text;
      const cleanJson = rawText.replace(/```json|```/g, '').trim();
      plan = JSON.parse(cleanJson);
      console.log('Claude analysis complete');
      break;
    } catch (err) {
      retries++;
      console.error(`Claude API attempt ${retries} failed:`, err.message);
      if (retries < maxRetries) {
        console.log('Retrying in 30 seconds...');
        await new Promise(resolve => setTimeout(resolve, 30000));
      } else {
        throw new Error('Claude API failed after 3 attempts');
      }
    }
  }

  // Hard coded safety check 5: validate plan structure
  validatePlan(plan);

  // Hard coded safety check 6: keyword freeze check
  const freezeViolation = checkKeywordFreeze(plan, memory);
  if (freezeViolation) {
    console.warn('Keyword freeze violation detected:', freezeViolation);
    plan.blog_post.create = false;
    plan.blog_post.blocked_reason = `Keyword "${freezeViolation.keyword}" is frozen until ${freezeViolation.freeze_until}. Existing page: ${freezeViolation.existing_page}`;
    plan.urgent_issues.push({
      type: 'KEYWORD_FREEZE_VIOLATION',
      detail: plan.blog_post.blocked_reason
    });
  }

  // Hard coded safety check 7: cannibalization check
  const cannibalizationFlags = checkKeywordCannibalization(plan, memory);
  if (cannibalizationFlags.length > 0) {
    console.warn('Cannibalization detected:', cannibalizationFlags);
    plan.blog_post.create = false;
    plan.blog_post.blocked_reason = `Cannibalization risk: keyword already targeted by ${cannibalizationFlags[0].conflict_page}`;
    plan.cannibalization_flags.push(...cannibalizationFlags);
  }

  // Hard coded safety check 8: if penalty detected stop all content creation
  if (penaltySignals.length > 0) {
    console.warn('Penalty signals detected - blocking all content creation');
    plan.blog_post.create = false;
    plan.location_page.create = false;
    plan.gbp_batch.create = false;
    plan.blog_refresh.refresh = false;
    plan.urgent_issues.push(...penaltySignals);
  }

  // Update memory
  const today2 = new Date().toISOString().split('T')[0];
  memory.meta.last_run = today2;
  memory.meta.total_runs += 1;

  if (plan.cannibalization_flags.length > 0) {
    memory.keywords.cannibalization_flags.push(...plan.cannibalization_flags);
  }

  if (plan.penalty_flags.length > 0 || penaltySignals.length > 0) {
    memory.performance.penalty_flags.push(...[...plan.penalty_flags, ...penaltySignals]);
  }

  if (plan.technical_issues.length > 0) {
    memory.technical_issues.open.push(...plan.technical_issues.map(issue => ({
      ...issue,
      date_flagged: today2
    })));
  }

  // Save rankings snapshot
  if (searchData && !searchData.fallback) {
    memory.rankings.weekly_snapshots.push({
      date: today2,
      data: searchData
    });
  }

  writeMemory(memory);

  console.log('SEO Brain analysis complete');
  console.log('Week summary:', plan.week_summary);
  if (plan.urgent_issues.length > 0) {
    console.warn('URGENT ISSUES DETECTED:', plan.urgent_issues);
  }

  return plan;
}

module.exports = { runSeoBrain };
