# Athilingam Subramanian — Portfolio

Premium portfolio for **Athilingam Subramanian**, AI Mobile Solutions Architect. Built as an
enterprise-grade product, not a personal page.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict, `noUncheckedIndexedAccess`)
- **Tailwind CSS 3.4** + `tailwindcss-animate`
- **Framer Motion** for micro-animations
- **next-themes** (dark / light)
- **MDX** blog via `next-mdx-remote`
- **Vercel Analytics** + **Speed Insights**
- **lucide-react** + **react-icons**
- ESLint · Prettier · Husky · Commitlint · lint-staged

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Set the site URL for canonical / OG / sitemap:

```bash
cp .env.example .env.local
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Scripts

| Script              | Purpose                    |
| ------------------- | -------------------------- |
| `npm run dev`       | Start dev server           |
| `npm run build`     | Production build           |
| `npm run start`     | Serve the production build |
| `npm run lint`      | ESLint                     |
| `npm run typecheck` | `tsc --noEmit`             |
| `npm run format`    | Prettier write             |

## Structure

```
src/
  app/            App Router routes + SEO (sitemap, robots, manifest, OG)
  components/
    ui/           Primitives (button, card, badge)
    layout/       Navbar, footer, theme, scroll progress, command palette
    shared/       Reveal, headings, counters, page header, JSON-LD
    sections/     Hero, experience, projects, skills, architecture, AI, contact
  constants/      Site config + navigation
  data/           Experience, projects, skills, achievements, architecture, AI
  hooks/          Reusable hooks
  lib/            utils, seo, jsonld, blog loader
  content/blog/   MDX posts
  styles/         Global CSS + design tokens
public/           Profile photo, resume PDF, icon
```

## Pages

Home · About · Experience · Projects (+ detail) · Architecture · AI · Skills · Blog (+ MDX post) ·
Contact — every route ships canonical URLs, Open Graph, Twitter cards and JSON-LD (Person,
WebSite, BreadcrumbList, BlogPosting).

## Customize

- **Content** — edit files in `src/data/*` and `src/content/blog/*.mdx`.
- **Links / identity** — `src/constants/site.ts`.
- **Theme tokens** — `tailwind.config.ts` and `src/styles/globals.css`.
- **Photo / resume** — replace `public/profile.png` and `public/Athilingam_Subramanian_Resume2.pdf`.

## Deploy

Optimized for **Vercel**. Push to GitHub, import the repo, set `NEXT_PUBLIC_SITE_URL`, deploy.

## Command palette

Press <kbd>⌘K</kbd> / <kbd>Ctrl K</kbd> anywhere to jump to pages, toggle theme, download the
resume or open social links.
