# BAIC UAE Homepage Clone

A Next.js recreation of [baicuae.com](https://baicuae.com/) — homepage structure, styling, and interactions matched to the live Nuxt site.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Build for production

```bash
npm run build
npm start
```

## What’s included

Homepage (`/`) matches the live site order:

1. Quick links
2. Header (Models megamenu + Innovation / About / Newsroom / Connect)
3. Hero banner slider (live BAIC offer creatives)
4. **360° models** via iframe to `https://360.baicuae.com` (local recreation fallback)
5. Capital Beauty teaser
6. Services grid (R&D, Off-Road, History, Overview)
7. Find BAIC / UAE map
8. News feed
9. Footer

Secondary routes for navigation CTAs: test drive, contact, capital beauty, model pages, and the rest of the footer/header sitemap.

## Data & assets

- Live API: `baicserver.baicuae.com` with JSON fallbacks in `src/data/`
- Mirrored homepage images in `public/images/api/`
- Original Nuxt CSS in `public/baic-original.css`
- Fonts: Poppins & Roboto (as on the original)

## Project structure

```
src/
  app/           # App Router pages
  components/    # Header, Hero, 360 embed, sections, forms, Footer
  data/          # API JSON fallbacks + local image map
  lib/           # fetch helpers, imageUrl, constants
public/images/   # Banners, 360 frames, Nuxt section assets
```
