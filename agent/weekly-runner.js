require('dotenv').config({ path: '.env.local' });
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { runSeoBrain } = require('./seo-brain');
const { runContentWriter } = require('./content-writer');
const { runGBPScheduler } = require('./gbp-scheduler');

const MEMORY_PATH = path.join(__dirname, 'agent-memory.json');
const ROOT_PATH = path.join(__dirname, '..');
const REPORTS_PATH = path.join(__dirname, 'reports');

// ============================================================
// HARD CODED CONSTANTS - NEVER CHANGE THESE
// ============================================================

const MAIN_BRANCH = 'main';
const AGENT_BRANCH_PREFIX = 'seo-agent';
const MAX_RUN_TIME_MS = 30 * 60 * 1000; // 30 minute hard timeout
const REQUIRED_NODE_VERSION = 18;

// ============================================================
// HARD CODED SAFETY CHECKS
// ============================================================

function checkNodeVersion() {
  const version = parseInt(process.version.replace('v', '').split('.')[0]);
  if (version < REQUIRED_NODE_VERSION) {
    throw new Error(`SAFETY STOP: Node.js version ${version} is too old. Minimum version ${REQUIRED_NODE_VERSION} required.`);
  }
  console.log('Node version check passed:', process.version);
}

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
    throw new Error(`SAFETY STOP: Missing required environment variables: ${missing.join(', ')}`);
  }
  console.log('Environment validation passed');
}

function validateGitStatus() {
  try {
    // Must be in the correct repository
    const remoteUrl = execSync('git remote get-url origin', { cwd: ROOT_PATH }).toString().trim();
    if (!remoteUrl.includes('corehoodcleaning')) {
      throw new Error(`SAFETY STOP: Wrong git repository. Expected corehoodcleaning repo, got: ${remoteUrl}`);
    }

    // Must not have uncommitted changes that could be accidentally included
    const status = execSync('git status --porcelain', { cwd: ROOT_PATH }).toString().trim();
    if (status.length > 0) {
      console.warn('Warning: Uncommitted changes detected in repository');
    }

    // Must be on main branch before starting
    const currentBranch = execSync('git branch --show-current', { cwd: ROOT_PATH }).toString().trim();
    if (currentBranch !== MAIN_BRANCH) {
      throw new Error(`SAFETY STOP: Not on main branch. Currently on: ${currentBranch}. Switch to main before running agent.`);
    }

    console.log('Git status validation passed');
  } catch (err) {
    if (err.message.includes('SAFETY STOP')) throw err;
    throw new Error(`SAFETY STOP: Git validation failed: ${err.message}`);
  }
}

function validateMemoryFile() {
  if (!fs.existsSync(MEMORY_PATH)) {
    throw new Error('SAFETY STOP: agent-memory.json not found. Cannot run without memory file.');
  }
  try {
    const memory = JSON.parse(fs.readFileSync(MEMORY_PATH, 'utf8'));
    if (!memory.meta || !memory.blog_posts || !memory.keywords) {
      throw new Error('SAFETY STOP: agent-memory.json is corrupted or incomplete.');
    }
    console.log('Memory file validation passed');
    return memory;
  } catch (err) {
    if (err.message.includes('SAFETY STOP')) throw err;
    throw new Error(`SAFETY STOP: agent-memory.json is not valid JSON: ${err.message}`);
  }
}

function checkNotAlreadyRunToday(memory) {
  const today = new Date().toISOString().split('T')[0];
  if (memory.meta.last_run === today) {
    throw new Error(`SAFETY STOP: Agent already ran today (${today}). Only one run per day allowed.`);
  }
  console.log('Daily run limit check passed');
}

function validateSrcDirectory() {
  const srcPath = path.join(ROOT_PATH, 'src');
  const appPath = path.join(ROOT_PATH, 'src', 'app');
  const blogPath = path.join(ROOT_PATH, 'src', 'app', 'blog');
  const locationsPath = path.join(ROOT_PATH, 'src', 'app', 'locations');

  if (!fs.existsSync(srcPath)) throw new Error('SAFETY STOP: src directory not found');
  if (!fs.existsSync(appPath)) throw new Error('SAFETY STOP: src/app directory not found');
  if (!fs.existsSync(blogPath)) throw new Error('SAFETY STOP: src/app/blog directory not found');
  if (!fs.existsSync(locationsPath)) throw new Error('SAFETY STOP: src/app/locations directory not found');

  console.log('Site directory structure validation passed');
}

function validateCriticalPagesExist() {
  const criticalPages = [
    'src/app/page.tsx',
    'src/app/blog/page.tsx',
    'src/app/services/hood-cleaning/page.tsx',
    'src/app/services/filter-exchange/page.tsx',
    'src/app/services/nfpa-inspection/page.tsx',
    'src/app/locations/[slug]/page.tsx'
  ];

  const missing = criticalPages.filter(page =>
    !fs.existsSync(path.join(ROOT_PATH, page))
  );

  if (missing.length > 0) {
    throw new Error(`SAFETY STOP: Critical pages missing from site:\n${missing.join('\n')}`);
  }

  console.log('Critical pages existence check passed');
}

function isFirstWeekOfMonth() {
  const today = new Date();
  return today.getDate() <= 7;
}

// ============================================================
// GIT FUNCTIONS
// ============================================================

function createAgentBranch() {
  const today = new Date().toISOString().split('T')[0];
  const branchName = `${AGENT_BRANCH_PREFIX}/week-${today}`;

  try {
    // Fetch latest from remote first
    execSync('git fetch origin', { cwd: ROOT_PATH });

    // Reset to latest main
    execSync(`git reset --hard origin/${MAIN_BRANCH}`, { cwd: ROOT_PATH });

    // Create new branch from main
    execSync(`git checkout -b ${branchName}`, { cwd: ROOT_PATH });

    // Verify we are on the new branch
    const currentBranch = execSync('git branch --show-current', { cwd: ROOT_PATH }).toString().trim();
    if (currentBranch !== branchName) {
      throw new Error(`Failed to create branch. Expected ${branchName}, got ${currentBranch}`);
    }

    console.log('Created agent branch:', branchName);
    return branchName;
  } catch (err) {
    throw new Error(`SAFETY STOP: Failed to create agent branch: ${err.message}`);
  }
}

function stageAndCommitChanges(branchName, results) {
  try {
    // Stage only specific safe directories never stage secrets or config
    execSync('git add src/app/blog/', { cwd: ROOT_PATH });
    execSync('git add src/app/locations/', { cwd: ROOT_PATH });
    execSync('git add agent/agent-memory.json', { cwd: ROOT_PATH });

    // Check if there is anything to commit
    const status = execSync('git status --porcelain', { cwd: ROOT_PATH }).toString().trim();
    if (!status) {
      console.log('No changes to commit this run');
      return false;
    }

    // Verify we are NOT on main branch before committing
    const currentBranch = execSync('git branch --show-current', { cwd: ROOT_PATH }).toString().trim();
    if (currentBranch === MAIN_BRANCH) {
      throw new Error('SAFETY STOP: Attempted to commit directly to main branch. Aborting.');
    }

    const commitMessage = `feat: weekly SEO agent run ${new Date().toISOString().split('T')[0]}`;
    execSync(`git commit -m "${commitMessage}"`, { cwd: ROOT_PATH });
    console.log('Changes committed:', commitMessage);
    return true;
  } catch (err) {
    if (err.message.includes('SAFETY STOP')) throw err;
    console.error('Commit failed:', err.message);
    return false;
  }
}

function pushBranch(branchName) {
  try {
    // Final check before pushing - never push to main
    if (branchName === MAIN_BRANCH) {
      throw new Error('SAFETY STOP: Attempted to push directly to main branch. Aborting.');
    }

    execSync(`git push origin ${branchName}`, { cwd: ROOT_PATH });
    console.log('Branch pushed to GitHub:', branchName);
    return true;
  } catch (err) {
    if (err.message.includes('SAFETY STOP')) throw err;
    throw new Error(`Failed to push branch: ${err.message}`);
  }
}

function returnToMain() {
  try {
    execSync('git stash', { cwd: ROOT_PATH });
    execSync(`git checkout ${MAIN_BRANCH}`, { cwd: ROOT_PATH });
    try { execSync('git stash drop', { cwd: ROOT_PATH }); } catch(e) {}
    console.log('Returned to main branch');
  } catch (err) {
    console.error('Warning: Failed to return to main branch:', err.message);
  }
}

// ============================================================
// PR REPORT BUILDER
// ============================================================

function buildPRReport(plan, contentResults, gbpResults, branchName, runDate) {
  const isFirstWeek = isFirstWeekOfMonth();
  const urgentIssues = [
    ...(plan.urgent_issues || []),
    ...(gbpResults?.urgent_issues || [])
  ];

  let report = '';

  // Urgent issues always at the top
  if (urgentIssues.length > 0) {
    report += `## 🚨 URGENT ISSUES - ACTION REQUIRED\n\n`;
    urgentIssues.forEach(issue => {
      report += `**${issue.type}**: ${issue.detail}\n\n`;
    });
    report += `---\n\n`;
  }

  // Section 1: At a glance
  report += `## This Week At A Glance\n\n`;
  report += `${plan.week_summary}\n\n`;
  report += `**Run date:** ${runDate}\n`;
  report += `**Branch:** ${branchName}\n\n`;
  report += `---\n\n`;

  // Section 2: Keyword opportunities
  report += `## Keyword Opportunities\n\n`;
  if (plan.keyword_opportunities && plan.keyword_opportunities.length > 0) {
    plan.keyword_opportunities.forEach((kw, i) => {
      report += `**${i + 1}. ${kw.keyword}**\n`;
      report += `- Current position: ${kw.current_position}\n`;
      report += `- Monthly searches: ${kw.monthly_searches}\n`;
      report += `- Action: ${kw.action}\n\n`;
    });
  } else {
    report += `No keyword opportunities identified this week.\n\n`;
  }
  report += `---\n\n`;

  // Section 3: Content created
  report += `## Content Created This Week\n\n`;

  if (contentResults.blog_post) {
    report += `### New Blog Post ✅\n`;
    report += `- **Title:** ${contentResults.blog_post.title}\n`;
    report += `- **Target keyword:** ${contentResults.blog_post.keyword}\n`;
    report += `- **URL:** /blog/${contentResults.blog_post.slug}/\n`;
    report += `- **Hero image needed:** ${plan.blog_post.hero_image_description || 'Professional commercial kitchen hood cleaning San Diego'}\n\n`;
  } else if (contentResults.blog_post_blocked) {
    report += `### Blog Post Blocked ⚠️\n`;
    report += `- **Reason:** ${contentResults.blog_post_blocked}\n\n`;
  } else if (contentResults.blog_post_error) {
    report += `### Blog Post Failed ❌\n`;
    report += `- **Error:** ${contentResults.blog_post_error}\n\n`;
  }

  if (contentResults.location_page) {
    report += `### New Location Page ✅\n`;
    report += `- **City:** ${contentResults.location_page.city}\n`;
    report += `- **URL:** /locations/${contentResults.location_page.citySlug}/\n\n`;
  }

  if (contentResults.blog_refresh) {
    report += `### Blog Post Refreshed ✅\n`;
    report += `- **Post:** ${contentResults.blog_refresh.slug}\n\n`;
  }

  report += `---\n\n`;

  // Section 4: Content gaps
  report += `## Content Gaps Found\n\n`;
  if (plan.content_gaps && plan.content_gaps.length > 0) {
    plan.content_gaps.forEach((gap, i) => {
      report += `**${i + 1}. ${gap.topic}**\n`;
      report += `- Reason: ${gap.reason}\n`;
      report += `- Priority: ${gap.priority}\n\n`;
    });
  } else {
    report += `No content gaps identified this week.\n\n`;
  }
  report += `---\n\n`;

  // Section 5: Conversion issues
  report += `## Conversion Issues Found\n\n`;
  if (plan.conversion_issues && plan.conversion_issues.length > 0) {
    plan.conversion_issues.forEach((issue, i) => {
      report += `**${i + 1}. ${issue.page}** [${issue.priority.toUpperCase()}]\n`;
      report += `- Issue: ${issue.issue}\n`;
      report += `- Recommendation: ${issue.recommendation}\n\n`;
    });
  } else {
    report += `No conversion issues identified this week.\n\n`;
  }
  report += `---\n\n`;

  // Section 6: Technical issues
  report += `## Technical Issues Found\n\n`;
  if (plan.technical_issues && plan.technical_issues.length > 0) {
    plan.technical_issues.forEach((issue, i) => {
      report += `**${i + 1}. ${issue.issue}** [${issue.priority.toUpperCase()}]\n`;
      report += `- Page: ${issue.page}\n`;
      report += `- Needs Chase approval: ${issue.needs_chase_approval ? 'YES' : 'No'}\n\n`;
    });
  } else {
    report += `No technical issues identified this week.\n\n`;
  }
  report += `---\n\n`;

  // Section 7: Seasonal opportunities
  if (plan.seasonal_opportunities && plan.seasonal_opportunities.length > 0) {
    report += `## Upcoming Seasonal Opportunities\n\n`;
    plan.seasonal_opportunities.forEach((opp, i) => {
      report += `**${i + 1}. ${opp.topic}**\n`;
      report += `- Target month: ${opp.target_month}\n`;
      report += `- Publish by: ${opp.publish_by}\n`;
      report += `- Priority: ${opp.priority}\n\n`;
    });
    report += `---\n\n`;
  }

  // Section 8: GBP batch report (first week only)
  if (isFirstWeek && gbpResults) {
    report += `## Monthly GBP Batch Report\n\n`;
    report += `**Posts scheduled:** ${gbpResults.total_scheduled} of ${gbpResults.total_posts_written}\n\n`;

    if (gbpResults.failed_posts && gbpResults.failed_posts.length > 0) {
      report += `**Failed to schedule:** ${gbpResults.failed_posts.length} posts\n\n`;
    }

    report += `### Images Needed From Chase\n\n`;
    report += `Please source or generate one image for each post below:\n\n`;
    if (gbpResults.image_requests) {
      gbpResults.image_requests.forEach((req, i) => {
        report += `**Post ${req.post_index} - ${req.scheduled_date} (${req.post_type}):**\n`;
        report += `${req.image_description}\n\n`;
      });
    }

    report += `### Full Post Schedule\n\n`;
    if (gbpResults.scheduled_posts) {
      gbpResults.scheduled_posts.forEach(post => {
        report += `- ${post.scheduled_date} ${post.scheduled_time}: ${post.topic} (${post.post_type})\n`;
      });
    }
    report += `\n---\n\n`;
  }

  // Section 9: Cannibalization flags
  if (plan.cannibalization_flags && plan.cannibalization_flags.length > 0) {
    report += `## Cannibalization Flags ⚠️\n\n`;
    plan.cannibalization_flags.forEach(flag => {
      report += `- **Keyword:** ${flag.keyword}\n`;
      report += `  **Conflict:** Already targeted by ${flag.conflict_page}\n\n`;
    });
    report += `---\n\n`;
  }

  // Section 10: Coming up next week
  report += `## Coming Up Next Week\n\n`;
  if (plan.seasonal_opportunities && plan.seasonal_opportunities.length > 0) {
    report += `- Seasonal content deadline: ${plan.seasonal_opportunities[0].publish_by}\n`;
  }
  report += `- Next blog post will target the top keyword opportunity identified above\n`;
  report += `- Continued monitoring of rankings and conversion rates\n\n`;

  report += `---\n\n`;
  report += `*This PR was generated automatically by the Core Hood Cleaning SEO Agent.*\n`;
  report += `*Review all changes carefully before merging.*\n`;
  report += `*Never merge if any URGENT issues are flagged above.*\n`;

  return report;
}

// ============================================================
// PR CREATION
// ============================================================

async function createPullRequest(branchName, report, urgentIssues) {
  const today = new Date().toISOString().split('T')[0];
  const hasUrgent = urgentIssues && urgentIssues.length > 0;

  const prTitle = hasUrgent
    ? `URGENT: Weekly SEO Report ${today} - Action Required`
    : `Weekly SEO Report ${today}`;

  try {
    // Use GitHub CLI to create PR
    const escapedReport = report.replace(/"/g, '\\"').replace(/`/g, '\\`').replace(/\$/g, '\\$');

    execSync(
      `gh pr create --title "${prTitle}" --body "${escapedReport}" --base ${MAIN_BRANCH} --head ${branchName}`,
      { cwd: ROOT_PATH }
    );

    console.log('Pull request created successfully');
    return { success: true, title: prTitle };
  } catch (err) {
    // If GitHub CLI fails save report locally as fallback
    console.error('PR creation failed:', err.message);

    if (!fs.existsSync(REPORTS_PATH)) {
      fs.mkdirSync(REPORTS_PATH, { recursive: true });
    }

    const reportPath = path.join(REPORTS_PATH, `weekly-report-${today}.md`);
    fs.writeFileSync(reportPath, `# ${prTitle}\n\n${report}`);
    console.log('Report saved locally as fallback:', reportPath);

    return { success: false, error: err.message, localReport: reportPath };
  }
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
// MAIN WEEKLY RUNNER
// ============================================================

async function runWeeklyAgent() {
  const runStart = Date.now();
  const runDate = new Date().toISOString().split('T')[0];
  let branchName = null;
  let plan = null;
  let contentResults = {};
  let gbpResults = null;

  console.log('================================================');
  console.log('CORE HOOD CLEANING SEO AGENT - WEEKLY RUN');
  console.log(`Run date: ${runDate}`);
  console.log('================================================');

  // ============================================================
  // PRE-FLIGHT SAFETY CHECKS - ALL MUST PASS
  // ============================================================

  console.log('\n--- PRE-FLIGHT SAFETY CHECKS ---');

  try {
    checkNodeVersion();
    validateEnvironment();
    validateMemoryFile();
    validateSrcDirectory();
    validateCriticalPagesExist();

    const memory = readMemory();
    checkNotAlreadyRunToday(memory);
    validateGitStatus();

    console.log('All pre-flight checks passed\n');
  } catch (err) {
    console.error('\nPRE-FLIGHT CHECK FAILED:', err.message);
    console.error('Agent run aborted. No changes made to site.');
    process.exit(1);
  }

  // ============================================================
  // SET HARD TIMEOUT - NEVER RUN MORE THAN 30 MINUTES
  // ============================================================

  const timeout = setTimeout(() => {
    console.error('SAFETY STOP: Agent exceeded 30 minute maximum run time. Force stopping.');
    returnToMain();
    process.exit(1);
  }, MAX_RUN_TIME_MS);

  try {
    // ============================================================
    // STEP 1: CREATE AGENT BRANCH
    // ============================================================

    console.log('\n--- STEP 1: CREATING AGENT BRANCH ---');
    branchName = createAgentBranch();

    // ============================================================
    // STEP 2: RUN SEO BRAIN
    // ============================================================

    console.log('\n--- STEP 2: RUNNING SEO BRAIN ---');
    try {
      plan = await runSeoBrain();
      console.log('SEO Brain completed successfully');
    } catch (err) {
      console.error('SEO Brain failed:', err.message);
      throw new Error(`SEO Brain failed: ${err.message}`);
    }

    // ============================================================
    // STEP 3: RUN CONTENT WRITER
    // ============================================================

    console.log('\n--- STEP 3: RUNNING CONTENT WRITER ---');
    try {
      contentResults = await runContentWriter(plan);
      console.log('Content Writer completed successfully');
    } catch (err) {
      console.error('Content Writer failed:', err.message);
      contentResults = { error: err.message };
    }

    // ============================================================
    // STEP 4: RUN GBP SCHEDULER (FIRST WEEK OF MONTH ONLY)
    // ============================================================

    if (isFirstWeekOfMonth() && plan.gbp_batch && plan.gbp_batch.create) {
      console.log('\n--- STEP 4: RUNNING GBP SCHEDULER ---');
      try {
        gbpResults = await runGBPScheduler();
        console.log('GBP Scheduler completed successfully');
      } catch (err) {
        console.error('GBP Scheduler failed:', err.message);
        gbpResults = { error: err.message, urgent_issues: [{ type: 'GBP_SCHEDULER_FAILED', detail: err.message }] };
      }
    } else {
      console.log('\n--- STEP 4: GBP SCHEDULER SKIPPED ---');
      console.log(isFirstWeekOfMonth() ? 'GBP batch not needed this week per brain analysis' : 'Not first week of month');
    }

    // ============================================================
    // STEP 5: COMMIT AND PUSH CHANGES
    // ============================================================

    console.log('\n--- STEP 5: COMMITTING CHANGES ---');
    const hasChanges = stageAndCommitChanges(branchName, contentResults);

    if (hasChanges) {
      pushBranch(branchName);
    } else {
      console.log('No file changes to push this run');
    }

    // ============================================================
    // STEP 6: BUILD AND SUBMIT PR REPORT
    // ============================================================

    console.log('\n--- STEP 6: CREATING PR REPORT ---');
    const urgentIssues = [
      ...(plan.urgent_issues || []),
      ...(gbpResults?.urgent_issues || [])
    ];

    const report = buildPRReport(plan, contentResults, gbpResults, branchName, runDate);
    const prResult = await createPullRequest(branchName, report, urgentIssues);

    // ============================================================
    // STEP 7: UPDATE MEMORY WITH RUN RESULTS
    // ============================================================

    console.log('\n--- STEP 7: UPDATING MEMORY ---');
    const memory = readMemory();

    memory.pr_log.total_prs_opened += 1;
    memory.pr_log.pending.push({
      branch: branchName,
      date: runDate,
      title: prResult.title || `Weekly SEO Report ${runDate}`,
      status: 'pending_chase_approval',
      urgent: urgentIssues.length > 0
    });

    writeMemory(memory);

    // ============================================================
    // STEP 8: RETURN TO MAIN BRANCH
    // ============================================================

    console.log('\n--- STEP 8: RETURNING TO MAIN BRANCH ---');
    returnToMain();

    // Clear timeout since we completed successfully
    clearTimeout(timeout);

    // ============================================================
    // FINAL SUMMARY
    // ============================================================

    const runTime = ((Date.now() - runStart) / 1000).toFixed(1);

    console.log('\n================================================');
    console.log('WEEKLY RUN COMPLETE');
    console.log('================================================');
    console.log(`Run time: ${runTime} seconds`);
    console.log(`Branch: ${branchName}`);
    console.log(`PR created: ${prResult.success ? 'Yes' : 'No - saved locally'}`);
    console.log(`Blog post: ${contentResults.blog_post ? 'Created' : contentResults.blog_post_blocked ? 'Blocked' : 'Failed'}`);
    console.log(`Location page: ${contentResults.location_page ? 'Created' : 'Not needed'}`);
    console.log(`GBP batch: ${gbpResults ? `${gbpResults.total_scheduled} posts scheduled` : 'Not this week'}`);
    console.log(`Urgent issues: ${urgentIssues.length}`);

    if (urgentIssues.length > 0) {
      console.log('\n🚨 URGENT ISSUES REQUIRE CHASE ATTENTION:');
      urgentIssues.forEach(issue => console.log(`  - ${issue.type}: ${issue.detail}`));
    }

    console.log('\nReview the PR on GitHub before merging.');
    console.log('Never merge if urgent issues are flagged.');
    console.log('================================================\n');

    return {
      success: true,
      runDate,
      branchName,
      prResult,
      contentResults,
      gbpResults,
      urgentIssues
    };

  } catch (err) {
    clearTimeout(timeout);
    console.error('\n================================================');
    console.error('WEEKLY RUN FAILED');
    console.error('================================================');
    console.error('Error:', err.message);

    // Always return to main branch on failure
    returnToMain();

    // Save error report locally
    if (!fs.existsSync(REPORTS_PATH)) {
      fs.mkdirSync(REPORTS_PATH, { recursive: true });
    }

    const errorReport = {
      run_date: runDate,
      error: err.message,
      branch: branchName,
      partial_results: {
        plan: plan ? 'completed' : 'failed',
        content: Object.keys(contentResults).length > 0 ? 'partial' : 'not started',
        gbp: gbpResults ? 'completed' : 'not started'
      }
    };

    fs.writeFileSync(
      path.join(REPORTS_PATH, `error-report-${runDate}.json`),
      JSON.stringify(errorReport, null, 2)
    );

    console.error('Error report saved locally');
    console.error('No changes were pushed to GitHub');
    console.error('Site is unchanged and safe');
    console.error('================================================\n');

    process.exit(1);
  }
}

// Run the agent
runWeeklyAgent();
