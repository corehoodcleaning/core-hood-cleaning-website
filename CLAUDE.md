# CLAUDE.md — Workflow Preferences for Core Hood Cleaning Website

## Terminal & Git Commands

- **Always** use computer-use to open Terminal and write any shell commands to the clipboard before asking Chase to run them
- Chase just opens Terminal, pastes (Cmd+V), and hits Enter
- Never paste commands only in chat — always put them on the clipboard via computer-use
- Applies to: git commits, npm runs, or any other CLI work

### Standard deploy command
```
cd ~/Desktop/core-hood-cleaning-website && git add . && git commit -m "<message>" && git push
```

## Weekly SEO Workflow

1. Chase drops Google Search Console CSV export (or pastes key metrics)
2. Claude analyzes for keyword gaps and opportunities
3. Claude writes 1 new blog post as a `.tsx` file targeting an opportunity keyword
4. Claude updates `src/app/blog/page.tsx` POSTS array
5. Claude updates `src/app/sitemap.ts` with the new post
6. Claude updates `agent/agent-memory.json` to track the keyword as active — NOTE: agent-memory.json also lives in ~/Desktop/core-services-agents/seo/ as the master copy
7. Claude writes deploy command to clipboard via computer-use
8. Chase pastes in Terminal and hits Enter → Vercel auto-deploys

## File Structure Reference

- Blog posts: `src/app/blog/[slug]/page.tsx` — each post is its own file using **inline styles** (not CSS classes)
- Blog index: `src/app/blog/page.tsx` — update the `POSTS` array when adding a post
- Sitemap: `src/app/sitemap.ts` — add new posts to `BLOG_POSTS` array
- SEO config: `src/seo-config.json` — meta titles/descriptions for static pages
- Agent memory: `agent/agent-memory.json` — tracks keywords used, posts created, rankings
- Context doc: `CONTEXT.md` (uploaded to Claude sessions) — business info, brand voice, SEO backlog

## Blog Post Style Rules

- Use **inline styles** with CSS variables (`var(--rust)`, `var(--true-blue)`, `var(--font-display)`, etc.) — never CSS class names that don't exist in globals.css
- Use existing images from `/public/images/` — never reference images that don't exist
- Internal links must use correct paths: `/services/hood-cleaning`, `/services/filter-exchange`, `/services/nfpa-inspection`
- Always include: `export const metadata` with title, description, and canonical URL
- Always add to POSTS array in `blog/page.tsx` after creating
- Always add to `BLOG_POSTS` in `sitemap.ts` after creating

## Do Not

- Reference images that don't exist in `/public/images/`
- Use CSS class names not defined in `globals.css`
- State specific pricing unless Chase provides current numbers
- Repeat a keyword already tracked as `active` in `agent-memory.json`
- Push to git — Chase always does this step
