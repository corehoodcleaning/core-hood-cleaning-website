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

## Canonical Blog Post Template

The reference template is `emergency-hood-cleaning-san-diego/page.tsx`. Every new post must match this structure exactly.

### JSON-LD
- Single `const jsonLd` variable with `'@graph': [ BlogPosting, FAQPage ]` — never two separate scripts
- Author: `{ '@type': 'Organization', name: 'Core Hood Cleaning' }` — never Person
- Publisher: `{ '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' }`
- `datePublished` and `dateModified` in `'YYYY-MM-DD'` format

### Return Structure Order
```
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<Nav />
<article style={{ paddingTop: '100px' }}>
  [hero div]
  [content div]
</article>
<Footer />
```
- `<script>` is always first, before `<Nav />`
- Outer wrapper is `<article style={{ paddingTop: '100px' }}>` — never separate `<section>` elements

### Hero
```
<div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
  <div className="container" style={{ maxWidth: '760px' }}>
    <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
    [category badge + date — inline styles only, no className="section-label"]
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>...</h1>
    <p style={{ color: 'rgba(238,239,226,0.75)', ... }}>...</p>
  </div>
</div>
```
- maxWidth: `760px` — never 800px
- Background: `var(--true-blue)` for standard posts (emergency uses rust as a special case)
- Always include `← Blog` link
- NO CTA buttons in the hero section — description only

### Content Section
```
<div style={{ background: 'var(--white)', padding: '64px 0' }}>
  <div className="container" style={{ maxWidth: '760px' }}>
    [TOC box]
    [intro paragraphs]
    [h2 sections]
    [CTA block]
    [FAQ section]
    [Related Reading]
  </div>
</div>
```
- Background: `var(--white)` — never `var(--off-white)`
- maxWidth: `760px`

### TOC
```
<div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '28px 32px', marginBottom: '48px' }}>
  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--rust)', marginBottom: '16px' }}>In This Guide</p>
  <ol style={{ margin: 0, paddingLeft: '20px' }}>
    {tocItems.map(item => (
      <li key={item.href} style={{ marginBottom: '8px' }}>
        <a href={item.href} style={{ color: 'var(--true-blue)', fontSize: '0.92rem', fontWeight: 600, textDecoration: 'none' }}>{item.label}</a>
      </li>
    ))}
  </ol>
</div>
```
- TOC is inside the content section, NOT a separate `<section>` element
- Use `<ol>` numbered list (not a flex column of anchor links, not a CSS grid)

### H2 Section Headings
```
<h2 id="anchor" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
```
- fontSize: `1.6rem` — never 1.8rem

### FAQ Section
```
{faqs.map(faq => (
  <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
    <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
  </div>
))}
```
- FAQs are a flat bordered list — never card-style with background, border, borderRadius per item

### CTA Block (inside content, before FAQs)
```
<div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
  <p style={{ fontFamily: 'var(--font-display)', ... color: 'var(--off-white)', ... }}>Headline</p>
  <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', ... }}>Description</p>
  <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
    <a href="tel:8583612570" style={{ background: 'var(--off-white)', color: 'var(--rust)', ... }}>📞 (858) 361-2570</a>
    <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ background: 'transparent', color: 'var(--off-white)', border: '2px solid rgba(238,239,226,0.5)', ... }}>Book Online</a>
  </div>
</div>
```

### Related Reading
```
<div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <Link href="/blog/..." style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Title</Link>
    ...
  </div>
</div>
```
- Simple flex column of `<Link>` elements — never cards with background/border/radius

### What to Never Do in a Blog Post
- Use `className="section-label"` or any CSS class other than `className="container"`
- Use 800px maxWidth (always 760px)
- Use `<section>` elements — use `<div>` inside the `<article>` wrapper
- Put CTA buttons in the hero
- Use `var(--off-white)` for the main content background
- Use `fontSize: '1.8rem'` for H2 headings
- Use card-style FAQ items (background + border + radius per item)
- Use cards for Related Reading links

## Do Not

- Reference images that don't exist in `/public/images/`
- Use CSS class names not defined in `globals.css`
- State specific pricing unless Chase provides current numbers
- Repeat a keyword already tracked as `active` in `agent-memory.json`
- Push to git — Chase always does this step
