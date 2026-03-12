require('dotenv').config({ path: '.env.local' });
const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');
const { SEO_AGENT_SYSTEM_PROMPT } = require('./seo-agent-prompt');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MEMORY_PATH = path.join(__dirname, 'agent-memory.json');
const SRC_PATH = path.join(__dirname, '..', 'src');

// ============================================================
// HARD CODED SAFETY CHECKS
// ============================================================

function validateSlug(slug) {
  // Slug must be lowercase, hyphens only, no special characters
  const slugPattern = /^[a-z0-9-]+$/;
  if (!slugPattern.test(slug)) {
    throw new Error(`Invalid slug format: ${slug}. Must be lowercase with hyphens only.`);
  }
  // Slug must be between 3 and 60 characters
  if (slug.length < 3 || slug.length > 60) {
    throw new Error(`Invalid slug length: ${slug}. Must be between 3 and 60 characters.`);
  }
  console.log('Slug validation passed:', slug);
}

function checkSlugNotExists(slug, memory) {
  // Hard stop if slug already exists in memory
  const existingSlugs = [
    ...memory.blog_posts.existing_pre_agent.map(p => p.slug),
    ...memory.blog_posts.created_by_agent.map(p => p.slug)
  ];
  if (existingSlugs.includes(`/blog/${slug}`)) {
    throw new Error(`SAFETY STOP: Blog post with slug /blog/${slug} already exists in memory.`);
  }
  console.log('Slug uniqueness check passed:', slug);
}

function checkFileNotExists(filePath) {
  // Hard stop if file already exists on disk
  if (fs.existsSync(filePath)) {
    throw new Error(`SAFETY STOP: File already exists on disk: ${filePath}`);
  }
  console.log('File existence check passed');
}

function checkKeywordNotFrozen(keyword, memory) {
  // Hard stop if keyword is within 90 day freeze window
  const activeTargets = memory.keywords.active_targets;
  const today = new Date();
  if (activeTargets[keyword.toLowerCase()]) {
    const freezeUntil = new Date(activeTargets[keyword.toLowerCase()].do_not_change_until);
    if (today < freezeUntil) {
      throw new Error(`SAFETY STOP: Keyword "${keyword}" is frozen until ${freezeUntil.toISOString().split('T')[0]}`);
    }
  }
  console.log('Keyword freeze check passed:', keyword);
}

function checkKeywordNotCannibalized(keyword, memory) {
  // Hard stop if keyword already targeted by another page
  const activeTargets = memory.keywords.active_targets;
  const normalizedKeyword = keyword.toLowerCase();
  if (activeTargets[normalizedKeyword]) {
    throw new Error(`SAFETY STOP: Keyword "${keyword}" already targeted by ${activeTargets[normalizedKeyword].page}`);
  }
  console.log('Cannibalization check passed:', keyword);
}

function checkCityNotExists(citySlug, memory) {
  // Hard stop if city page already exists
  const existingCities = [
    ...memory.location_pages.existing,
    ...memory.location_pages.created_by_agent.map(p => p.slug)
  ];
  if (existingCities.includes(citySlug)) {
    throw new Error(`SAFETY STOP: Location page for ${citySlug} already exists.`);
  }
  console.log('City uniqueness check passed:', citySlug);
}

function validateGeneratedCode(code, type) {
  // Hard coded JSX safety checks
  const errors = [];

  // Check required imports
  if (!code.includes("import type { Metadata }")) {
    errors.push('Missing Metadata import');
  }
  if (!code.includes("import Nav from '@/components/Nav'")) {
    errors.push('Missing Nav import');
  }
  if (!code.includes("import Footer from '@/components/Footer'")) {
    errors.push('Missing Footer import');
  }

  // Check required exports
  if (!code.includes('export const metadata')) {
    errors.push('Missing metadata export');
  }
  if (!code.includes('export default function')) {
    errors.push('Missing default export function');
  }

  // Check required components
  if (!code.includes('<Nav')) {
    errors.push('Missing Nav component');
  }
  if (!code.includes('<Footer')) {
    errors.push('Missing Footer component');
  }

  // Check canonical tag
  if (!code.includes('canonical')) {
    errors.push('Missing canonical tag in metadata');
  }

  // Check for raw apostrophes in JSX (common build error)
  const jsxApostrophePattern = />([^<]*)'([^<]*)</g;
  if (jsxApostrophePattern.test(code)) {
    errors.push('Raw apostrophes found in JSX - must use &apos;');
  }

  // Check for CTA
  if (!code.includes('btn-primary') && !code.includes('btn-secondary')) {
    errors.push('Missing CTA button');
  }

  // Check for schema markup
  if (type === 'blog' && !code.includes('application/ld+json')) {
    errors.push('Missing JSON-LD schema markup');
  }

  // Check for internal links
  if (!code.includes("import Link from 'next/link'")) {
    errors.push('Missing next/link import');
  }

  if (errors.length > 0) {
    throw new Error(`SAFETY STOP: Generated code failed validation:\n${errors.join('\n')}`);
  }

  console.log('Code validation passed');
}

function validateLocationsFileIntegrity(originalFile, updatedFile) {
  // Verify the locations file was not corrupted during city insertion
  if (!updatedFile.includes('const LOCATIONS')) {
    throw new Error('SAFETY STOP: LOCATIONS object missing after city insertion');
  }
  if (!updatedFile.includes('export default function')) {
    throw new Error('SAFETY STOP: Default export missing after city insertion');
  }
  if (updatedFile.length < originalFile.length) {
    throw new Error('SAFETY STOP: Updated locations file is shorter than original - possible data loss');
  }
  console.log('Locations file integrity check passed');
}

function checkWordCount(code, target) {
  // Estimate word count from JSX content
  const textContent = code.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const wordCount = textContent.split(' ').length;
  if (wordCount < 300) {
    throw new Error(`SAFETY STOP: Generated content appears too short (${wordCount} estimated words). Minimum 300 required.`);
  }
  console.log(`Word count check passed: ~${wordCount} words`);
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

function generateSlug(title) {
  const stopWords = ['a', 'an', 'the', 'in', 'of', 'to', 'for', 'how', 'and', 'or', 'but', 'is', 'are', 'was', 'were'];
  return title
    .toLowerCase()
    .split(' ')
    .filter(word => !stopWords.includes(word))
    .slice(0, 6)
    .join('-')
    .replace(/[^a-z0-9-]/g, '');
}

// ============================================================
// BLOG POST WRITER
// ============================================================

async function writeBlogPost(plan) {
  console.log('Writing blog post:', plan.blog_post.title);

  const memory = readMemory();
  const today = new Date().toISOString().split('T')[0];
  const slug = plan.blog_post.slug || generateSlug(plan.blog_post.title);

  // Run all hard coded safety checks before writing anything
  console.log('Running blog post safety checks...');
  validateSlug(slug);
  checkSlugNotExists(slug, memory);
  checkKeywordNotFrozen(plan.blog_post.target_keyword, memory);
  checkKeywordNotCannibalized(plan.blog_post.target_keyword, memory);

  const blogDir = path.join(SRC_PATH, 'app', 'blog', slug);
  checkFileNotExists(blogDir);

  const writePrompt = `
Write a complete Next.js blog post page for Core Hood Cleaning.

Title: ${plan.blog_post.title}
Target Keyword: ${plan.blog_post.target_keyword}
Slug: ${slug}
Target Word Count: ${plan.blog_post.word_count_target} words
Today's Date: ${today}
Canonical URL: https://www.corehoodcleaning.com/blog/${slug}

Requirements:
- Follow the exact blog post format from your brain rules
- Use all required imports: Metadata, Image, Link, Nav, Footer
- Use only existing CSS variables and classNames
- Include export const metadata with title, description, canonical
- Include Open Graph and Twitter card tags in metadata
- Include JSON-LD BlogPosting schema
- Include JSON-LD FAQPage schema
- Include H1, H2, H3 structure
- Include Key Takeaways section
- Include minimum 4 FAQ questions
- Include author section with Chase Mangini
- Include correct CTA buttons using btn-primary and btn-secondary
- Escape ALL apostrophes as &apos; - this is critical for build
- Use next/image for all images
- Use next/link for all internal links
- Include minimum 2 internal links to service pages
- Write ${plan.blog_post.word_count_target} words of body content
- Component function name must be PascalCase and unique

Return ONLY the complete TypeScript/JSX code for the page.tsx file.
No explanation, no markdown code blocks, just the raw code.
`;

  let code = null;
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

      code = response.content[0].text.replace(/```tsx|```typescript|```jsx|```/g, '').trim();
      console.log('Blog post written by Claude');
      break;
    } catch (err) {
      retries++;
      console.error(`Content writer attempt ${retries} failed:`, err.message);
      if (retries < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 30000));
      } else {
        throw new Error('Content writer failed after 3 attempts');
      }
    }
  }

  // Run hard coded validation on generated code before saving
  console.log('Validating generated blog post code...');
  validateGeneratedCode(code, 'blog');
  checkWordCount(code, plan.blog_post.word_count_target);

  // Save the file only after all checks pass
  fs.mkdirSync(blogDir, { recursive: true });
  fs.writeFileSync(path.join(blogDir, 'page.tsx'), code);
  console.log('Blog post saved to:', blogDir);

  // Update memory only after successful save
  memory.blog_posts.created_by_agent.push({
    slug: `/blog/${slug}`,
    title: plan.blog_post.title,
    target_keyword: plan.blog_post.target_keyword,
    date_created: today,
    word_count: plan.blog_post.word_count_target,
    status: 'pending_approval'
  });

  memory.keywords.active_targets[plan.blog_post.target_keyword.toLowerCase()] = {
    page: `/blog/${slug}`,
    date_targeted: today,
    do_not_change_until: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  };

  writeMemory(memory);

  return {
    slug,
    filePath: path.join(blogDir, 'page.tsx'),
    title: plan.blog_post.title,
    keyword: plan.blog_post.target_keyword
  };
}

// ============================================================
// LOCATION PAGE WRITER
// ============================================================

async function writeLocationPage(plan) {
  console.log('Writing location page for:', plan.location_page.city);

  const memory = readMemory();
  const today = new Date().toISOString().split('T')[0];
  const citySlug = plan.location_page.city.toLowerCase().replace(/\s+/g, '-');

  // Run all hard coded safety checks before writing anything
  console.log('Running location page safety checks...');
  checkCityNotExists(citySlug, memory);

  const locationsFilePath = path.join(SRC_PATH, 'app', 'locations', '[slug]', 'page.tsx');

  if (!fs.existsSync(locationsFilePath)) {
    throw new Error(`SAFETY STOP: Locations file not found at ${locationsFilePath}`);
  }

  const existingLocationsFile = fs.readFileSync(locationsFilePath, 'utf8');

  const writePrompt = `
Write a new city entry to add to the LOCATIONS object in the Core Hood Cleaning locations page.

City: ${plan.location_page.city}
City Slug: ${citySlug}
Today's Date: ${today}

Here is the existing locations file for reference on the exact data structure to follow:
${existingLocationsFile.substring(0, 3000)}

Requirements:
- Follow the exact LOCATIONS object data structure shown above
- Write completely unique content for ${plan.location_page.city}
- Include real neighborhood names specific to ${plan.location_page.city}
- Include city specific restaurant scene details
- Include city specific fire code or health inspection references
- Include 4 unique FAQs specific to ${plan.location_page.city}
- Include unique heroDesc, intro, and whyUs content
- Never copy content from other city entries
- Use (858) 361-2570 in FAQ answers where relevant
- heroImage must be: '/images/hero-commercial-kitchen.jpg'

Return ONLY the JavaScript object entry for this city.
Format it exactly like the existing city entries.
No explanation, no markdown, just the raw object code.
Start with: '${citySlug}': {
End with: },
`;

  let cityCode = null;
  let retries = 0;
  const maxRetries = 3;

  while (retries < maxRetries) {
    try {
      const response = await client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        system: SEO_AGENT_SYSTEM_PROMPT,
        messages: [{ role: 'user', content: writePrompt }]
      });

      cityCode = response.content[0].text.replace(/```javascript|```js|```/g, '').trim();
      console.log('Location page content written by Claude');
      break;
    } catch (err) {
      retries++;
      console.error(`Location writer attempt ${retries} failed:`, err.message);
      if (retries < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 30000));
      } else {
        throw new Error('Location writer failed after 3 attempts');
      }
    }
  }

  // Verify city code contains required fields
  const requiredCityFields = ['name:', 'title:', 'heroDesc:', 'intro:', 'whyUs:', 'neighborhoods:', 'faqs:', 'heroImage:'];
  const missingFields = requiredCityFields.filter(field => !cityCode.includes(field));
  if (missingFields.length > 0) {
    throw new Error(`SAFETY STOP: Generated city code missing required fields: ${missingFields.join(', ')}`);
  }
  console.log('City code field validation passed');

  // Insert new city into LOCATIONS object safely
  const insertMarker = '= {';
  const locationsStart = existingLocationsFile.indexOf('const LOCATIONS');
  if (locationsStart === -1) {
    throw new Error('SAFETY STOP: Could not find LOCATIONS object in locations file');
  }

  const objectStart = existingLocationsFile.indexOf(insertMarker, locationsStart) + insertMarker.length;
  const updatedFile =
    existingLocationsFile.slice(0, objectStart) +
    '\n  ' + cityCode + '\n' +
    existingLocationsFile.slice(objectStart);

  // Validate file integrity before saving
  validateLocationsFileIntegrity(existingLocationsFile, updatedFile);

  // Save only after all checks pass
  fs.writeFileSync(locationsFilePath, updatedFile);
  console.log('Location page added to locations file');

  // Update memory only after successful save
  memory.location_pages.created_by_agent.push({
    slug: citySlug,
    city: plan.location_page.city,
    date_created: today,
    status: 'pending_approval'
  });

  writeMemory(memory);

  return {
    citySlug,
    filePath: locationsFilePath,
    city: plan.location_page.city
  };
}

// ============================================================
// BLOG REFRESH WRITER
// ============================================================

async function refreshBlogPost(plan) {
  console.log('Refreshing blog post:', plan.blog_refresh.slug);

  const memory = readMemory();
  const today = new Date().toISOString().split('T')[0];
  const slug = plan.blog_refresh.slug.replace('/blog/', '');
  const blogFilePath = path.join(SRC_PATH, 'app', 'blog', slug, 'page.tsx');

  // Hard coded safety checks
  console.log('Running blog refresh safety checks...');

  if (!fs.existsSync(blogFilePath)) {
    throw new Error(`SAFETY STOP: Blog post file not found: ${blogFilePath}`);
  }

  // Check this blog was not already refreshed within 6 months
  const refreshLog = memory.content_refreshes.completed;
  const sixMonthsAgo = new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const recentRefresh = refreshLog.find(r => r.slug === plan.blog_refresh.slug && r.date_refreshed > sixMonthsAgo);
  if (recentRefresh) {
    throw new Error(`SAFETY STOP: Blog ${plan.blog_refresh.slug} was already refreshed on ${recentRefresh.date_refreshed}. Wait 6 months between refreshes.`);
  }

  console.log('Blog refresh safety checks passed');

  const existingCode = fs.readFileSync(blogFilePath, 'utf8');

  const refreshPrompt = `
Refresh and improve this existing Core Hood Cleaning blog post to match current standards.

Existing file content:
${existingCode}

Today's Date: ${today}
Canonical URL must stay exactly the same as in the existing file.

Requirements:
- Keep the exact same slug and canonical URL
- Keep the same general topic and target keyword
- Improve to match current blog post format:
  proper H1 H2 H3 structure
  Key Takeaways section
  FAQ section with minimum 4 questions
  FAQPage JSON-LD schema
  BlogPosting JSON-LD schema with dateModified: ${today}
  Author section with Chase Mangini
  Open Graph and Twitter card tags
  Correct CTA buttons using btn-primary and btn-secondary
- Expand content to minimum 1000 words
- Improve internal linking with minimum 2 service page links
- Escape ALL apostrophes as &apos;
- Use next/image for all images
- Use next/link for all internal links

Return ONLY the complete updated TypeScript/JSX code.
No explanation, no markdown code blocks, just the raw code.
`;

  let refreshedCode = null;
  let retries = 0;
  const maxRetries = 3;

  while (retries < maxRetries) {
    try {
      const response = await client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 8000,
        system: SEO_AGENT_SYSTEM_PROMPT,
        messages: [{ role: 'user', content: refreshPrompt }]
      });

      refreshedCode = response.content[0].text.replace(/```tsx|```typescript|```jsx|```/g, '').trim();
      console.log('Blog post refreshed by Claude');
      break;
    } catch (err) {
      retries++;
      console.error(`Blog refresh attempt ${retries} failed:`, err.message);
      if (retries < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 30000));
      } else {
        throw new Error('Blog refresh failed after 3 attempts');
      }
    }
  }

  // Validate refreshed code before saving
  console.log('Validating refreshed blog post code...');
  validateGeneratedCode(refreshedCode, 'blog');
  checkWordCount(refreshedCode, 1000);

  // Verify canonical URL was not changed
  const originalCanonical = existingCode.match(/canonical:\s*['"]([^'"]+)['"]/)?.[1];
  const refreshedCanonical = refreshedCode.match(/canonical:\s*['"]([^'"]+)['"]/)?.[1];
  if (originalCanonical && refreshedCanonical && originalCanonical !== refreshedCanonical) {
    throw new Error(`SAFETY STOP: Canonical URL was changed during refresh. Original: ${originalCanonical} New: ${refreshedCanonical}`);
  }
  console.log('Canonical URL preservation check passed');

  // Save refreshed file only after all checks pass
  fs.writeFileSync(blogFilePath, refreshedCode);
  console.log('Refreshed blog post saved');

  // Update memory
  const existingEntry = memory.blog_posts.existing_pre_agent.find(p => p.slug === plan.blog_refresh.slug);
  if (existingEntry) {
    existingEntry.refreshed = true;
    existingEntry.refresh_date = today;
    existingEntry.needs_refresh = false;
  }

  memory.content_refreshes.completed.push({
    slug: plan.blog_refresh.slug,
    date_refreshed: today,
    reason: plan.blog_refresh.reason
  });

  writeMemory(memory);

  return {
    slug: plan.blog_refresh.slug,
    filePath: blogFilePath
  };
}

// ============================================================
// MAIN CONTENT WRITER FUNCTION
// ============================================================

async function runContentWriter(plan) {
  console.log('Starting Content Writer...');
  console.log('All safety checks will run before any file is written');
  const results = {};

  // Write blog post if planned
  if (plan.blog_post && plan.blog_post.create) {
    try {
      results.blog_post = await writeBlogPost(plan);
      console.log('Blog post complete:', results.blog_post.slug);
    } catch (err) {
      console.error('Blog post failed safety check or writing:', err.message);
      results.blog_post_error = err.message;
    }
  } else if (plan.blog_post && plan.blog_post.blocked_reason) {
    console.log('Blog post blocked by safety system:', plan.blog_post.blocked_reason);
    results.blog_post_blocked = plan.blog_post.blocked_reason;
  }

  // Write location page if planned
  if (plan.location_page && plan.location_page.create) {
    try {
      results.location_page = await writeLocationPage(plan);
      console.log('Location page complete:', results.location_page.citySlug);
    } catch (err) {
      console.error('Location page failed safety check or writing:', err.message);
      results.location_page_error = err.message;
    }
  }

  // Refresh blog post if planned
  if (plan.blog_refresh && plan.blog_refresh.refresh) {
    try {
      results.blog_refresh = await refreshBlogPost(plan);
      console.log('Blog refresh complete:', results.blog_refresh.slug);
    } catch (err) {
      console.error('Blog refresh failed safety check or writing:', err.message);
      results.blog_refresh_error = err.message;
    }
  }

  console.log('Content Writer complete');
  console.log('Results:', JSON.stringify(results, null, 2));
  return results;
}

module.exports = { runContentWriter };
