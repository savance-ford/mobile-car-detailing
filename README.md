# DetailerStack (Vite + React)

A **public, SEO-focused** affiliate site for mobile car detailing software, tools, and equipment.

## What's changed (2026 update)
- ✅ **No auth / no Base44 backend dependency** (runs locally + on any static host).
- ✅ **SEO-friendly routes**:
  - `/tools`, `/tools/:slug`
  - `/categories`, `/categories/:slug`
  - `/guides`, `/guides/:slug`
  - `/best-for`, `/best-for/:feature`
  - `/vs`, `/vs/:slugs`
  - `/affiliate-disclosure`, `/privacy`, `/terms`
- ✅ Legacy Base44 routes (e.g. `/ToolDetail?slug=jobber`) **redirect** to canonical routes.
- ✅ Local data lives in `src/data/mockData.js` and powers the site.
- ✅ `robots.txt` + `sitemap.xml` included in `/public`.
- ✅ `vercel.json` and `public/_redirects` included for SPA deep-link support.

## Quick start
```bash
npm install
npm run dev
```

## Configure your domain (important for SEO)
Set your real domain in `.env.local`:
```bash
VITE_SITE_URL=https://yourdomain.com
```
This affects canonical URLs, JSON-LD, and affiliate link placeholders.

## Replace affiliate links
In `src/data/mockData.js`, replace each tool’s `affiliate_url` with your real tracking link.

## Deploy notes
Because this is a single-page app, your host must rewrite unknown routes to `/index.html`.
- **Netlify**: `public/_redirects` is included.
- **Vercel**: `vercel.json` is included.

## SEO note
Client-rendered sites can still rank, but for "best possible" SEO you may eventually want SSR (e.g. Next.js).
This project still includes strong on-page SEO (clean URLs, meta tags, JSON-LD, sitemap, internal linking).
