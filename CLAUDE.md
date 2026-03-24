# CLAUDE.md

## Project

QuantVibe AI — marketing intelligence platform website.
Brand tagline: "Human Intelligence, Vibe Coded"
Domain: quantvibe.ai | Entity: QuantVibe AI, LLC (Washington, DC)

Read `BLUEPRINT.md` for full page-by-page specs, copy outlines, and visual strategy. This file covers build rules.

## Tech Stack

- Next.js 14 (App Router), TypeScript strict mode, Tailwind CSS
- Framer Motion for animations
- MDX for blog posts (rendered at build time)
- Self-hosted fonts via `next/font/local`: Satoshi (headings), Plus Jakarta Sans (body), JetBrains Mono (code)
- Deploy target: Vercel

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (must pass before any PR)
- `npm run lint` — ESLint check (includes jsx-a11y)
- `npx tsc --noEmit` — type check

## Architecture

```
app/                  → Pages and layouts (App Router)
components/layout/    → Navbar, Footer, MobileMenu
components/ui/        → Button, Card, Badge, GradientText, AnimatedSection, AnimatedLogo
components/sections/  → Home page sections (Hero, ServiceCards, CTASection, etc.)
components/diagrams/  → SVG/React visuals for service pages (coded, not images)
components/blog/      → PostCard, CategoryFilter
lib/                  → blog.ts, schema.ts (JSON-LD), constants.ts
content/blog/         → MDX blog posts
public/logo/          → Logo SVG/PNG variants
public/fonts/         → Self-hosted font files
```

## Design System

Dark-mode only. All colors via CSS variables:

```
--bg-primary: #0A0F1C       --text-primary: #F8FAFC
--bg-secondary: #111827      --text-secondary: #CBD5E1
--bg-card: #1E293B           --accent-cyan: #22D3EE
--accent-violet: #A78BFA     --focus-ring: #22D3EE
```

Logo: "Layered Depth Neuron" — violet (#A78BFA) input nodes → cyan (#22D3EE) output nodes.
Wordmark: "Quant" in text-primary + "Vibe" in accent-cyan + "AI" in text-secondary.

## Hard Rules — Accessibility

These are not suggestions. Every commit must comply.

- Body text: 18px minimum. Captions/footnotes: 16px floor. NEVER smaller.
- WCAG AAA contrast (7:1) on all body text. WCAG AA (4.5:1) minimum on large headings.
- Full keyboard navigation. Visible 3px focus ring on every interactive element.
- Skip-to-content link as first focusable element on every page.
- No `outline: none` without a replacement focus style.
- Proper heading hierarchy: one `<h1>` per page, no skipped levels.
- All images: descriptive `alt` text or `aria-hidden` if decorative.
- Form fields: associated `<label>` elements, not just placeholders.
- All hover effects must also trigger on focus.
- Minimum 48×48px touch/click targets with 8px spacing between adjacent targets.
- Install and fix all `eslint-plugin-jsx-a11y` warnings.

## Hard Rules — Responsive (Mobile-First)

- Build mobile-first. Single column below `md` (768px).
- Body text stays 18px on ALL screen sizes — never shrink.
- Heading scale: H1 28px (mobile) → 40px (desktop). H2 24px → 32px. H3 20px → 26px.
- Hamburger nav with full-screen drawer below `lg` (1024px). Focus trap when open.
- No horizontal scrolling at any breakpoint. Test at 320px.
- All tap targets: 48×48px minimum.
- Footer: stacked on mobile, 2×2 tablet, 4-col desktop.
- Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) consistently.

## Hard Rules — SEO

- All text content MUST render in Server Components. Never put display-only content in `'use client'` components.
- Verify with: `curl [url] | grep "[expected text]"` — if it's missing, the content is client-rendered.
- Pattern: Server Component renders text → thin `'use client'` wrapper for animation/interactivity only.
- Metadata + canonical URL on every page via Next.js metadata API.
- JSON-LD structured data: Organization (home), Service (service pages), Article (blog posts).
- Auto-generate `sitemap.ts` and `robots.ts`.
- Blog posts: MDX rendered at build time, Article schema, frontmatter with title/description/slug/publishedAt/tags.
- Descriptive anchor text on all internal links — never "click here" or "learn more."
- One `<h1>` per page. Headings keyword-relevant and descriptive.

## Hard Rules — Animations

- ALL animations and transitions wrapped in `prefers-reduced-motion` check.
- Users who request reduced motion see the static final state — no motion at all.
- No flashing content (nothing >3 flashes/second).
- No auto-playing animations that can't be paused.

## Code Style

- TypeScript strict mode. No `any` types.
- Use named exports, not default exports (exception: page.tsx default exports required by Next.js).
- Tailwind utility classes only — no custom CSS files.
- Components are functional with hooks. No class components.
- Use `cn()` utility (clsx + tailwind-merge) for conditional class names.
- Prefer `const` over `let`. No `var`.
- File naming: PascalCase for components (`ServiceCards.tsx`), camelCase for utils (`schema.ts`).

## Visual Strategy

- No stock photography. No generic AI imagery.
- Hero visuals are coded components (animated SVG, CSS gradient meshes).
- Service page diagrams are React/SVG components in `components/diagrams/`.
- Only raster images at launch: founder headshot + book cover mockup.
- Blog featured images optional — text-only cards are the default.
- OG images: generate dynamically with `@vercel/og`.

## Don't

- Don't use `'use client'` on components that only display text/content.
- Don't use font sizes below 16px anywhere.
- Don't use color alone to convey meaning.
- Don't use `outline: none` without providing a visible alternative.
- Don't put text inside images, `<canvas>`, or CSS pseudo-elements.
- Don't use `position: fixed` on mobile (iOS Safari issues).
- Don't import stock photos or placeholder images.
- Don't skip heading levels.
- Don't hardcode colors — always use CSS variables or Tailwind classes.
