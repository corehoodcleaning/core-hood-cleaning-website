# Core Hood Cleaning Website

Production Next.js website for Core Hood Cleaning — San Diego's premier NFPA 96 certified commercial hood cleaning company.

## Tech Stack
- **Framework**: Next.js 14 (Static Export)
- **Hosting**: Vercel
- **Styling**: Pure CSS with CSS variables
- **SEO**: Full schema markup, sitemap, robots.txt, per-page metadata

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — zero config needed

## Site Structure

```
/                          → Homepage
/locations/la-jolla        → La Jolla location page
/locations/pacific-beach   → Pacific Beach location page
/locations/[slug]          → 20 total location pages
/sitemap.xml               → Auto-generated sitemap
/robots.txt                → Auto-generated robots.txt
```

## SEO Features
- LocalBusiness schema markup on every page
- Service schema on location pages
- Optimized meta titles + descriptions
- Canonical URLs
- Auto-generated XML sitemap
- Static export for maximum speed (Core Web Vitals)
- Google Fonts (Barlow Condensed + Barlow)

## After Deploying

1. Add your domain in Vercel dashboard
2. Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
3. Replace `YOUR_GOOGLE_VERIFICATION_CODE` in `src/app/layout.tsx`
4. Connect Google Analytics by adding GA4 script to layout

## Agent Integration (Phase 2)
This repo is structured for autonomous SEO agent updates:
- Content lives in TypeScript data objects — easy to parse and rewrite
- Location page data is centralized in one file
- FAQ content is an array — simple to add/update entries
- All metadata is programmatic — agent can update title/description per page
