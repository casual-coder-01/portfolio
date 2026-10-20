# Abhinav Thakur — portfolio

Personal portfolio: business development, growth systems and AI marketing.
Static site built with [Astro](https://astro.build), hosted free on GitHub Pages.

- **Live:** https://casual-coder-01.github.io/portfolio/
- **Stack:** Astro 5 (static output) · MDX case studies · zero UI framework · ~3 KB of JavaScript
- **Images:** optimised automatically at build time (AVIF + WebP, several sizes)
- **Lighthouse (mobile):** Performance 99 · Accessibility 100 · Best practices 100 · SEO 100

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321/portfolio/
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

Requires Node 20+. The first build takes ~2 minutes while images are optimised; later builds reuse the cache.

## Résumés

Five role-specific résumés are generated from one content file:

| File | Role | QR / link goes to |
|---|---|---|
| `Abhinav-Thakur-Resume-CRM-RevOps.pdf` | CRM & Revenue Operations Specialist | `/for/revops/` |
| `Abhinav-Thakur-Resume-Digital-Marketing.pdf` | Growth & Digital Marketing Coordinator | `/for/marketing/` |
| `Abhinav-Thakur-Resume-Business-Development.pdf` | Business Development — Fintech, Payments & SaaS | `/for/sales/` |
| `Abhinav-Thakur-Resume-Operations.pdf` | Operations & Growth Associate | `/for/operations/` |
| `Abhinav-Thakur-Zoho-Automation-Services.pdf` | Zoho & Automation Consultant (1-page services sheet) | `/for/consulting/` |

```bash
npm run resume     # rebuild all five into public/resume/
```

Needs a local Chrome or Chromium (set `CHROME_PATH` if it isn't found). The build fails if any
page overflows or has less than 8 mm bottom margin, so trim a bullet in `resume/content.mjs`
if that happens. Layout is one column top to bottom with real embedded fonts, so job-portal
(ATS) parsers read it in order.

## Deploying

Every push to `main` deploys automatically (`.github/workflows/deploy.yml`):
build → internal link check → publish to GitHub Pages.

One-time setting (already done): **Settings → Pages → Source: GitHub Actions**.

### Moving to a cleaner free URL (optional)

The GitHub Pages address includes your GitHub username. For a URL like
`abhinavthakur.pages.dev`:

1. Create a free Cloudflare account → **Workers & Pages → Create → Pages → Connect to Git** → pick this repo.
2. Build command `npm run build`, output directory `dist`.
3. Add environment variables `SITE_URL=https://<project>.pages.dev` and `BASE_PATH=/`.

Netlify works the same way (`<name>.netlify.app`). Alternatively, rename your GitHub username
and the Pages URL follows.

---

## Everyday edits

| I want to… | Edit this |
|---|---|
| Add email / LinkedIn / GitHub | `src/data/site.ts` → `email`, `linkedin`, `github` |
| Set my title and dates | `src/data/site.ts` → `role.title`, `role.period` |
| Edit a résumé (5 role versions) | words in `resume/content.mjs`, look in `resume/resume.css`, then `npm run resume` → PDFs in `public/resume/` |
| Change hero, proof row, experience, toolkit, about | `src/pages/index.astro` (hero) and `src/data/profile.ts` (everything else) |
| Edit a case study | `src/content/work/<name>.mdx` |
| Add / swap gallery images | `src/data/creative.ts` + files in `src/assets/creative/` |
| Add / swap a video | `npm run video -- <input.mp4> <slug> [width] [poster-second]`, then add an entry in `src/data/creative.ts` → `videos` |

Find anything still unfilled:

```bash
npm run check:placeholders
```

Anything marked `[NEEDS USER INFORMATION: …]` shows on the site as an orange dashed chip until you replace it.

### Replacing images

1. Drop the full-quality original (PNG/JPG, ideally ≥1000 px wide) into `src/assets/creative/rbp/` or `src/assets/creative/mego/`.
2. In `src/data/creative.ts`, import it at the top and add an entry with a `title`, `format` and a descriptive `alt` (what the image shows, including its headline).
3. Build. Resizing, AVIF/WebP conversion and lazy loading happen automatically.

### Replacing videos

```bash
# landscape: width 1280, poster taken at second 2
npm run video -- ~/Downloads/new-ad.mp4 new-ad 1280 2
# portrait reel: width 720
npm run video -- ~/Downloads/reel.mp4 new-reel 720 5
```

This writes `public/media/video/<slug>.mp4`, `.webm` and two poster frames (needs `ffmpeg` installed).
Add the video to `videos` in `src/data/creative.ts` with `kind: 'client' | 'spec'`.
Videos don't download until someone presses play, so they never slow the page.

### Adding a project

1. Copy an existing file in `src/content/work/` (e.g. `outbound.mdx`) to `src/content/work/<slug>.mdx`.
2. Update the frontmatter: `order`, `title`, `cardTitle`, `kicker`, `summary`, `preview`, `meta`, `tools`, `tags`,
   `visual` (one of `markets`, `crm`, `outbound`, `whatsapp`, `creative`) and `seoDescription`.
3. Write the body with the building blocks below. It appears on the homepage and at `/work/<slug>/` automatically.

**Building blocks for case studies**

- `<Part n="01" title="…">markdown…</Part>` — a titled section
- `<Wide title="…" note="…">…</Wide>` — full-width area for diagrams or media
- `<Flow steps={[{ label, note?, tool? }]} cols={4} compact? />` — process diagram (horizontal on desktop, vertical on phones)
- `<Tiers tiers={[…]} />` — layered architecture diagram
- `<TemplateCard name body button footer legend />` — WhatsApp template with `{{n}}` variables highlighted
- `<QueryMatrix total rows />`, `<Rules rules />`, `<Gallery items />`, `<VideoCard video />`

---

## Project structure

```
src/
  content/work/*.mdx     case studies (one file each)
  data/site.ts           contact details, résumé switch, title/dates
  data/profile.ts        proof points, experience scope, toolkit, about
  data/creative.ts       gallery images and videos
  components/            Header, Footer, Flow, Tiers, Gallery, Lightbox, VideoCard, …
  layouts/Base.astro     <head>, SEO/Open Graph, JSON-LD
  pages/                 index, work/[slug], 404
  styles/global.css      design tokens (colour, type, spacing) and base styles
public/
  media/video/           web-encoded videos + posters
  og.png                 social preview image (1200×630)
  resume/                drop the résumé PDF here
scripts/                 video encoder, placeholder finder, link checker
```

## Design system (for future edits)

- **Colour:** warm paper `#f4f2ed`, ink `#141414`, one accent (vermilion `#c13f19`) used sparingly. Creative work sits in dark "studio" sections (`.night`).
- **Type:** Schibsted Grotesk (headlines and body), Newsreader italic (editorial accents), IBM Plex Mono (labels, diagrams). All self-hosted.
- **Grid:** 12 columns, max width 88 rem, fluid gutters.
- **Motion:** subtle reveal-on-scroll and diagram draw-in only; disabled for `prefers-reduced-motion`. Everything reads fine with JavaScript off.

## Confidentiality rules for new content

Never publish client or staff names, emails, phone numbers, pricing, commission rates, internal IDs, credentials or screenshots with live data. Redraw systems as diagrams instead of screenshotting them, and never state a metric without evidence.
