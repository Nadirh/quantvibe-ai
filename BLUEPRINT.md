# QuantVibe AI — Website Strategic Blueprint

**Brand:** QuantVibe AI  
**Domain:** quantvibe.ai  
**Tagline:** Human Intelligence, Vibe Coded  
**Entity:** QuantVibe AI, LLC (Washington, DC)  
**Tech Stack:** Next.js 14 (App Router) + Tailwind CSS  
**Deployment:** Vercel  

---

## 1. Brand Identity & Design Direction

### Voice & Tone
- **Primary:** Approachable educator — explains complex topics without condescension
- **Secondary:** Technical credibility — uses real terminology, shows real frameworks
- **Tertiary:** Modern/AI-forward — feels like the future without being gimmicky
- **Anti-patterns:** No "unlock the power of AI" fluff. No stock-photo vibes. No enterprise jargon.

### Visual Direction
- **Aesthetic:** Dark-mode primary (deep navy/charcoal #0A0F1C) with electric accent gradients (cyan → violet, #06B6D4 → #8B5CF6)
- **Typography:**
  - Display/Headings: **Satoshi** (modern geometric, distinctive, excellent legibility at large sizes)
  - Body: **Plus Jakarta Sans** (clean, open letterforms, generous x-height — highly readable at all sizes)
  - Code snippets: **JetBrains Mono**
  - **Minimum body text: 18px** (not 16px — significantly easier on older eyes)
  - **Line height: 1.7–1.8** for body copy (generous leading reduces reading fatigue)
  - **Paragraph max-width: 70ch** (prevents long lines that cause readers to lose their place)
  - **Font weight: 400 minimum for body, 500+ for secondary/muted text** (thin fonts disappear for low-vision users)
- **Visual motifs:** Subtle grid patterns, data visualization elements as texture, animated gradient meshes on hero sections, noise/grain overlays for depth
- **Icons:** Lucide or Phosphor (line style, consistent weight)

### Visual Strategy: Intentional Minimalism

No stock photography. No generic AI imagery. No placeholder illustrations that "we'll replace later." The site earns visual credibility through confident typography, purposeful whitespace, and real product evidence. The dark theme with gradient accents carries the visual weight — images are supporting evidence, not decoration.

**What goes on each page:**

**Home page:**
- Hero: Animated logo mark (neural network nodes draw in, connections appear, violet fades to cyan). This IS the hero visual — no separate image needed. Pair with subtle gradient mesh background.
- Problem statement: No image. Let the copy breathe.
- Service cards: Icon per card (Lucide/Phosphor), no images. The icon + title + one-liner is sufficient.
- Education section: No images. Two strong feature blocks with CTAs.
- Founder section: One high-quality headshot (professional but approachable — not corporate). Only photo on the page.
- Blog preview: No images on cards at launch. Title + excerpt + date is cleaner and avoids placeholder image debt.
- CTA section: Gradient accent background, no image.

**Service pages:**
- Hero: Geometric background pattern (subtle grid or dot matrix), no image.
- How it works: Diagrammatic visualization built in SVG/code — not an imported image. Example: for MMM, a simplified channel → model → budget allocation flow diagram. For CRO, a before/after wireframe. These are coded components, not image files.
- The rest: Typography-driven. No images.
- Phase 4 upgrade: Replace "how it works" diagrams with actual product UI screenshots when tools are production-ready.

**Learn pages:**
- Vibe Coding: No images at launch. Course module cards with icons are sufficient.
- Know What Works: Book cover mockup — this CAN be a designed image (a simple 3D book render using CSS transforms, or a flat cover graphic built in Figma/Canva). This is the one place a produced visual is worth the investment, since books need covers.

**Blog posts:**
- No featured images required at launch. Clean typography-first layout. 
- If/when adding images later: only use diagrams, charts, or screenshots you create — never stock.
- Code blocks and data visualizations (built with Recharts or inline SVG) count as visuals.

**About page:**
- Founder headshot (same as home page, or a second angle).
- No other images. Values section and mission statement are text-only.

**Contact page:**
- No images. Form + Cal.com embed is the content.

**What this means technically:**
- No `/public/images/` directory full of stock JPEGs to manage
- Hero visuals are coded components (animated SVG, CSS gradient meshes), not image assets
- Product diagrams on service pages are React/SVG components that stay in sync with the actual product
- The only raster images at launch: founder headshot (1-2 files) + book cover mockup (1 file)
- Blog post images are optional and added per-post as needed, never required by the template
- OG images (for social sharing) are the main image investment — generate dynamically with `@vercel/og` using the logo mark + page title on the brand gradient

**Photography guidelines (for the headshot):**
- Natural light, neutral or dark background
- Shoulders-up or seated at desk — not standing in front of a whiteboard with equations (cliché)
- Genuine expression, not corporate smile
- High resolution (at least 800×800px for flexibility)
- Deliver as WebP with JPEG fallback

### Logo
- **Concept:** "Layered Depth Neuron" — a left-to-right neural network flow representing human intelligence becoming vibe-coded output
- **Structure:** 3 violet input nodes → 2 violet hidden-layer nodes → 1 large cyan central hub → 2 cyan output nodes. Connection lines vary in weight (thicker = stronger signal) and opacity (fading on weaker cross-connections)
- **Color mapping:** Violet (#A78BFA) = human intelligence inputs, Cyan (#22D3EE) = coded outputs. The color shift from left to right tells the brand story
- **Wordmark:** "Quant" in primary text color + "Vibe" in cyan (#22D3EE), with "AI" as a small sub-label in secondary text color. Letter-spacing: 0.02em on wordmark, 0.15–0.2em on "AI"
- **Formats to produce:**
  - Full logo (icon + wordmark, horizontal) — navbar, footer, email signatures
  - Icon only — favicon (16px, 32px), Apple touch icon (180px), social profile pictures
  - Stacked (icon above, wordmark below) — OG images, presentation slides, business cards
- **File formats needed:** SVG (scalable), PNG (transparent bg, @1x and @2x), ICO (favicon)

### Color System (CSS Variables)
```css
--bg-primary: #0A0F1C;        /* Deep navy */
--bg-secondary: #111827;       /* Slightly lighter */
--bg-card: #1E293B;            /* Card surfaces */
--text-primary: #F8FAFC;       /* Near-white — 16.8:1 on bg-primary (WCAG AAA) */
--text-secondary: #CBD5E1;     /* Light slate — 9.1:1 on bg-primary (WCAG AAA) */
--accent-cyan: #22D3EE;        /* Brightened cyan — 8.5:1 on bg-primary (WCAG AAA) */
--accent-violet: #A78BFA;      /* Brightened violet — 5.2:1 on bg-primary (WCAG AA+) */
--accent-gradient: linear-gradient(135deg, #22D3EE, #A78BFA);
--success: #34D399;            /* Brightened green — 8.2:1 on bg-primary */
--warning: #FBBF24;            /* Brightened amber — 11.3:1 on bg-primary */
--border: rgba(148, 163, 184, 0.2);  /* Slightly more visible border */
--focus-ring: #22D3EE;         /* High-visibility focus indicator */
```
**Contrast policy:** All text must meet **WCAG AAA (7:1)** for body copy and **WCAG AA (4.5:1) minimum** for large headings. No exceptions for "decorative" text — if it conveys meaning, it meets contrast.

### Accessibility Requirements (WCAG 2.1 AA minimum, AAA where feasible)

This site must be fully accessible. A significant portion of the audience includes older professionals who may have reduced vision, slower motor control, or less familiarity with modern web patterns. Accessibility is not a polish step — it's a build requirement.

**Vision & Readability:**
- Body text: 18px minimum, never smaller (even captions and footnotes: 16px floor)
- Heading scale: H1=40px, H2=32px, H3=26px, H4=22px — all comfortably readable
- Letter-spacing: 0.01–0.02em on body text (slight tracking aids readability)
- Never rely on color alone to convey meaning — pair with icons, text labels, or patterns
- Links must be visually distinct: underline + color (not color alone)
- Avoid pure white (#FFFFFF) on dark backgrounds — use off-white (#F8FAFC) to reduce glare/haloing
- No text over images or gradient backgrounds unless a solid overlay guarantees contrast
- Buttons and CTAs: minimum 48×48px touch target, 16px+ label text, high contrast fill

**Keyboard & Motor Accessibility:**
- Full keyboard navigation on every interactive element (tab, enter, escape, arrow keys)
- Visible focus indicators: 3px solid outline using --focus-ring color, never `outline: none` without replacement
- Skip-to-content link as first focusable element
- Dropdown menus operable by keyboard (arrow keys to navigate, escape to close)
- No interactions that require hover-only — everything hover does, focus must also do
- Form inputs: large click/tap targets (min 48px height), clear labels (not just placeholder text)

**Screen Reader & Semantic HTML:**
- Proper heading hierarchy (one H1 per page, no skipped levels)
- All images: meaningful alt text or aria-hidden if decorative
- Form fields: associated `<label>` elements (not just visual labels)
- ARIA landmarks: nav, main, footer, aside where appropriate
- Live regions for dynamic content updates (form validation, notifications)
- Page titles that are unique and descriptive for every route

**Motion & Cognitive:**
- `prefers-reduced-motion` media query: disable all animations and transitions for users who request it
- No auto-playing video or animation that can't be paused
- No flashing content (nothing that flashes more than 3 times per second)
- Clear, predictable navigation — no unexpected layout shifts or scroll-jacking
- Error messages in plain language, positioned near the relevant field
- Reading level: aim for grade 8–10 for marketing copy (clear, not dumbed down)

**Testing Checklist (before launch):**
- Run axe DevTools or Lighthouse accessibility audit — score 95+
- Test full keyboard-only navigation on every page
- Test with browser zoom at 200% — no content should be clipped or overlapping
- Test with macOS VoiceOver or NVDA screen reader
- Verify all contrast ratios with WebAIM Contrast Checker
- Test on iPad/tablet at arm's length (common use case for older users)

### Responsive Design (Mobile-First)

Build mobile-first — start with the smallest screen and scale up. Every page must look polished and function fully on a phone. No features, content, or CTAs should be desktop-only.

**Breakpoints (Tailwind defaults):**
```
sm:  640px   — large phones / small tablets
md:  768px   — tablets
lg:  1024px  — small laptops
xl:  1280px  — desktops
2xl: 1536px  — wide screens
```

**Layout Rules:**
- Single column below `md` (768px) — no side-by-side content on phones
- 2×2 service card grids → stack to single column on mobile
- Hero sections: reduce heading sizes by ~30% on mobile (e.g., H1: 40px desktop → 28px mobile)
- Body text stays at 18px on all screen sizes — do not shrink on mobile
- Horizontal padding: 16px on mobile, 24px on tablet, 32px+ on desktop
- Max content width: 1280px centered, with auto margins on wider screens
- No horizontal scrolling — ever, on any device

**Navigation:**
- Desktop (lg+): full horizontal nav with dropdown menus
- Mobile/tablet (<lg): hamburger menu → full-screen slide-out drawer
- Mobile nav drawer: large tap targets (min 48px height per item), clear close button, trap focus inside when open
- Sticky header on all devices — but keep it slim on mobile (max 56px height) to preserve screen real estate
- CTA button ("Book a Call") visible in both desktop nav and mobile drawer

**Touch & Interaction:**
- All tap targets: minimum 48×48px with at least 8px spacing between adjacent targets
- No hover-dependent interactions — hover effects are enhancements only, never gates
- Swipe-friendly where natural (e.g., blog category filters as horizontal scroll pills on mobile)
- Form inputs: use appropriate input types (`tel`, `email`, `url`) to trigger correct mobile keyboards
- Avoid fixed-position elements that eat mobile viewport (especially on iOS Safari)

**Images & Media:**
- Use `next/image` with responsive `sizes` attribute for automatic srcset generation
- Hero images/illustrations: art-direct for mobile (tighter crops or simplified compositions, not just scaled-down desktop images)
- Lazy load everything below the fold
- Serve WebP with JPEG fallback

**Typography Scaling:**
```
          Mobile    Tablet    Desktop
H1:       28px      34px      40px
H2:       24px      28px      32px
H3:       20px      22px      26px
Body:     18px      18px      18px   (never shrinks)
Caption:  16px      16px      16px   (never shrinks)
```

**Component-Specific Responsive Behavior:**
- Service cards: 1-col stack (mobile) → 2×2 grid (tablet+)
- Blog post grid: 1-col (mobile) → 2-col (tablet) → 3-col (desktop)
- Footer: stack all columns vertically on mobile, 2×2 on tablet, 4-col on desktop
- Contact form: full-width inputs on mobile, 2-col (name/email side by side) on desktop
- Cal.com embed: must be tested on mobile — use their responsive embed option
- Book cover mockup (Know What Works page): center and scale down on mobile, don't let it crowd the CTA

**Testing Checklist:**
- Test on real devices: iPhone SE (small), iPhone 15 (standard), iPad, Android phone
- Test in Chrome DevTools responsive mode at 320px, 375px, 768px, 1024px, 1440px
- Verify no horizontal overflow at any breakpoint (check with `overflow-x: hidden` temporarily removed)
- Test mobile nav: open/close, keyboard focus trap, back button behavior
- Test all forms on mobile: keyboard doesn't obscure inputs, submit button always reachable
- Lighthouse mobile score: 90+

---

## 2. Sitemap & Information Architecture

```
quantvibe.ai/
├── / (Home — landing page)
├── /services
│   ├── /services/ai-consulting
│   ├── /services/cro-agent
│   ├── /services/media-mix-model
│   └── /services/attribution-testing (attribution + A/B testing)
├── /learn
│   ├── /learn/vibe-coding (course landing page)
│   └── /learn/know-what-works (book landing page)
├── /blog (content marketing hub)
│   └── /blog/[slug]
├── /about
├── /contact
├── /privacy
└── /terms
```

### Navigation Structure

**Desktop Nav (lg+, sticky header):**
`Logo | Services ▾ | Learn ▾ | Blog | About | [CTA: Book a Call]`

**Mobile/Tablet Nav (<lg):**
`Logo | [CTA: Book a Call] | ☰ Hamburger`
- Hamburger opens full-screen slide-out drawer with all nav items
- Services and Learn expand as accordions within the drawer
- Large tap targets (56px row height), clear ✕ close button top-right
- Focus trapped inside drawer when open; Escape key closes it

**Services dropdown:**
- AI Consulting
- CRO Agent
- Media Mix Model
- Attribution & Testing

**Learn dropdown:**
- Vibe Coding Courses
- Know What Works (Book)

**Footer:**
- Desktop: 4 columns side by side
- Tablet: 2×2 grid
- Mobile: stacked single column
- Column 1: Services links
- Column 2: Learn links
- Column 3: Company (About, Blog, Contact, Privacy, Terms)
- Column 4: Connect (LinkedIn, Twitter/X, GitHub, Email)
- Bottom bar: © 2026 QuantVibe AI, LLC · Washington, DC

---

## 3. Page-by-Page Wireframes & Copy Outline

---

### 3.1 HOME PAGE ( / )

**Goal:** Establish positioning, build trust, drive visitors to services or learning content.

#### Section 1: Hero
- **Layout:** Full-width, dark background with subtle gradient mesh
- **Headline:** "Human Intelligence, Vibe Coded"
- **Subheadline:** "AI-powered tools and training for marketers who want to measure what matters — and build what's next."
- **CTAs:** [Explore Services] [Start Learning] — stack vertically and go full-width on mobile
- **Visual element:** Animated logo mark — the neural network icon draws itself on page load (nodes fade in, connections trace, violet transitions to cyan). This replaces a traditional hero image. Built as a React/SVG component, not an imported image.
- **Responsive:** Center-aligned text on all sizes. CTAs side by side on desktop, stacked full-width on mobile. Logo animation below text on mobile (not beside it). Animation respects `prefers-reduced-motion` (shows static final state instead).

#### Section 2: Problem Statement
- **Headline:** "Marketing measurement is broken. Building software is gatekept. We fix both."
- **Layout:** Two-column with short punchy copy on desktop, single stacked column on mobile
- **Left column:** "Most marketing teams fly blind — vanity metrics, broken attribution, guesswork budgets. We bring the quant rigor."
- **Right column:** "Most marketers can't build their own tools. With vibe coding + AI, that changes. You bring the domain expertise; AI handles the code."

#### Section 3: Core Offerings (Card Grid)
- **Layout:** 2×2 card grid on desktop/tablet, single stacked column on mobile. Each card with icon, title, one-liner, and link
- **Card 1 — AI Consulting:** "Custom AI strategy for your marketing stack. From agent design to deployment."
- **Card 2 — CRO Agent:** "AI-powered conversion rate optimization grounded in behavioral science."
- **Card 3 — Media Mix Model:** "Know exactly which channels drive revenue. Bayesian MMM without the consultancy price tag."
- **Card 4 — Attribution & Testing:** "Incrementality tests, A/B frameworks, and attribution models that tell the truth."

#### Section 4: Education / Learn Section
- **Headline:** "Learn to Build with AI"
- **Layout:** Two feature blocks side by side on desktop, stacked on mobile
- **Block 1 — Vibe Coding Courses:** "Go from idea to deployed AI tool — no CS degree required. Built for marketers and operators."
  - CTA: [View Courses]
- **Block 2 — Know What Works (Book):** "The definitive guide to marketing measurement. Attribution, incrementality, MMM — explained for practitioners."
  - CTA: [Learn About the Book]

#### Section 5: Credibility / Why QuantVibe
- **Headline:** "Built by a practitioner, not a pitch deck"
- **Layout:** Brief founder story (2-3 sentences) + credential highlights
- **Key points to hit:**
  - Data science + behavioral economics background
  - Built MMMs, CRO systems, and AI agents from scratch
  - Not selling theory — selling working tools and transferable knowledge
- **Optional:** Small headshot or stylized avatar

#### Section 6: Blog Preview
- **Headline:** "Latest Thinking"
- **Layout:** 3 latest blog post cards on desktop (3-col), 2-col on tablet, stacked on mobile. Cards are text-only at launch: title, excerpt, date, category tag. No featured images — keeps it clean and avoids placeholder debt.

#### Section 7: CTA / Contact
- **Headline:** "Ready to measure smarter and build faster?"
- **CTAs:** [Book a Free Consultation] [Subscribe to the Newsletter]
- **Background:** Gradient accent strip

---

### 3.2 SERVICES OVERVIEW ( /services )

**Goal:** Orient visitors to the right service.

#### Hero
- **Headline:** "AI-Powered Marketing Intelligence"
- **Subheadline:** "From measurement to automation — tools and consulting to make your marketing truly data-driven."

#### Service Cards (expanded)
- Each service gets a larger card block with:
  - Icon/illustration
  - Title
  - 2-3 sentence description
  - 3-4 bullet points of what's included
  - [Learn More →] link to individual page
  - Optional: "Best for:" tag (e.g., "Best for: DTC ecommerce brands under $80 AOV")

#### Bottom CTA
- "Not sure which service fits? Let's talk." → [Book a Call]

---

### 3.3 SERVICE DETAIL PAGES

Each follows the same template:

#### Template Structure:
1. **Hero:** Service name, one-line value prop, relevant visual
2. **The Problem:** 2-3 paragraphs on what pain point this solves
3. **How It Works:** 3-step or 4-step process visualization
4. **What You Get:** Deliverables list
5. **Who It's For:** Ideal customer profile description
6. **Case Study / Example:** (Even if hypothetical at launch — "Here's what this looks like in practice")
7. **Pricing Signal:** Not exact pricing, but positioning (e.g., "Starting at $X" or "Custom scoping" or "Book a discovery call")
8. **CTA:** [Book a Call] + [See Other Services]

#### 3.3.1 AI Consulting ( /services/ai-consulting )
- **Hero tagline:** "Custom AI strategy that ships, not slides."
- **Problem:** "You know AI could transform your marketing ops, but you don't know where to start — or who to trust."
- **How it works:** Discovery → Architecture → Build → Deploy
- **Deliverables:** AI roadmap, custom agent prototypes, implementation support, team training
- **Audience:** Marketing leaders, ops teams, growth teams at mid-market companies

#### 3.3.2 CRO Agent ( /services/cro-agent )
- **Hero tagline:** "Behavioral science meets AI. Your landing pages, optimized."
- **Problem:** "Most CRO is guesswork dressed up as 'best practices.' Our agent applies Kahneman, Cialdini, and Fogg — systematically."
- **How it works:** URL Analysis → Behavioral Audit → Prioritized Recommendations → Before/After Visualization
- **Deliverables:** Scored audit report (PDF), prioritized opportunity list, behavioral framework mapping, implementation guidance
- **Audience:** B2C ecommerce brands, especially under $80 AOV

#### 3.3.3 Media Mix Model ( /services/media-mix-model )
- **Hero tagline:** "Finally know which channels actually drive revenue."
- **Problem:** "Last-click attribution lies. Your CFO wants proof. An MMM delivers it."
- **How it works:** Data Integration → Bayesian Modeling → Budget Optimization → Ongoing Calibration
- **Key differentiators to mention:** Bayesian priors from holdout tests, adstock modeling (Weibull, half-life parameterization), marginal ROI curves, budget optimizer
- **Deliverables:** Channel-level ROI estimates, optimized budget allocation, scenario planner, calibration framework
- **Audience:** Brands spending $50K+/month on paid media across 3+ channels

#### 3.3.4 Attribution & Testing ( /services/attribution-testing )
- **Hero tagline:** "Stop guessing. Start testing."
- **Problem:** "Multi-touch attribution models are just math on top of bad data. Incrementality testing tells you what actually moved the needle."
- **How it works:** Measurement Audit → Test Design → Execution Support → Analysis & Reporting
- **Deliverables:** Attribution model audit, incrementality test design, geo-lift or holdout frameworks, statistical analysis
- **Audience:** Performance marketing teams tired of attribution theater

---

### 3.4 LEARN: VIBE CODING COURSES ( /learn/vibe-coding )

**Goal:** Sell the concept of vibe coding to non-technical marketers, drive course signups.

#### Hero
- **Headline:** "Build AI-Powered Tools — No CS Degree Required"
- **Subheadline:** "Vibe coding lets you describe what you want in plain English and let AI write the code. We teach you how to go from idea to deployed product."

#### What Is Vibe Coding? (Explainer Section)
- Short, accessible explanation
- "You bring the domain expertise and the product vision. AI handles the syntax."
- Visual: side-by-side of a natural language prompt → working application

#### Course Modules (Preview)
- Module cards showing curriculum outline
- Example modules:
  - "Your First AI Agent in 2 Hours"
  - "From Claude Code to Production: Deploying on Vercel"
  - "Building a CRO Tool with AI"
  - "Data Pipelines Without Data Engineering"

#### Who This Is For
- Marketers who want to build their own tools
- Founders who want to prototype without hiring engineers
- Analysts who want to go from insight to application

#### Social Proof / Testimonials
- Placeholder section for future testimonials

#### CTA
- [Join the Waitlist] or [Enroll Now] depending on launch state
- Email capture form

---

### 3.5 LEARN: KNOW WHAT WORKS ( /learn/know-what-works )

**Goal:** Book landing page — drive pre-orders/purchases and establish authority.

#### Hero
- **Layout:** Book cover mockup + title + subtitle. The cover mockup is the one designed visual asset worth investing in at launch — either a CSS 3D-transform book render or a flat cover graphic. Keep the design on-brand: dark background, cyan/violet accent, clean typography.
- **Title:** "Know What Works"
- **Subtitle:** "The Practitioner's Guide to Marketing Measurement"
- **Author:** Nadir [Last Name]
- **CTA:** [Pre-Order Now] or [Get the Book]

#### What's Inside
- Chapter preview / table of contents summary
- Key topics: Attribution models, incrementality testing, marginal analysis, media mix modeling
- "Written for marketers and operators, not academics."

#### Who Should Read This
- CMOs and VPs of Marketing who need to justify spend
- Growth marketers building measurement frameworks
- Data scientists entering marketing analytics
- Anyone tired of vanity metrics

#### Companion Course Teaser
- "Prefer video? The Know What Works course is coming to Descript. Get notified."
- Email capture

#### CTA
- [Buy the Book] + [Get a Free Chapter]

---

### 3.6 BLOG ( /blog )

**Goal:** SEO, thought leadership, content marketing funnel.

#### Layout
- Featured post (large card, top — full-width on all devices)
- Grid of recent posts: 3-col desktop, 2-col tablet, 1-col mobile
- Category filters: horizontal scroll pill bar on mobile (no wrapping), full row on desktop
- Newsletter signup: below posts on mobile (not sidebar — sidebars collapse poorly on small screens)

#### Content Strategy (initial post ideas)
- "What Is Vibe Coding? A Marketer's Guide"
- "Why Last-Click Attribution Is Lying to You"
- "How to Build Your First AI Agent in a Weekend"
- "Media Mix Models Explained: No PhD Required"
- "The Behavioral Science Behind High-Converting Landing Pages"
- "Incrementality Testing: The Gold Standard You're Not Using"

---

### 3.7 ABOUT ( /about )

#### Sections
1. **Mission statement:** "We believe every marketer should be able to measure what works and build what's next — without waiting for engineering, without trusting black-box vendors, and without a PhD in statistics."
2. **Founder story:** Brief bio — data science + behavioral economics background, practitioner not theorist, built these tools from scratch
3. **Values:** (keep to 3)
   - Measurement over opinion
   - Building over buying
   - Clarity over complexity
4. **CTA:** [Work With Us] [Follow on LinkedIn]

---

### 3.8 CONTACT ( /contact )

#### Layout
- **Headline:** "Let's Build Something Smart Together"
- **Form fields:** Name, Email, Company (optional), Service Interest (dropdown: AI Consulting / CRO Agent / MMM / Attribution & Testing / Vibe Coding Courses / Other), Message
- **Alternative:** "Prefer email? hello@quantvibe.ai"
- **Calendar embed:** Calendly or Cal.com widget for booking discovery calls
- **Response time note:** "We typically respond within 24 hours."

---

## 4. Technical Architecture Notes (for Claude Code)

### Project Structure
```
quantvibe-ai/
├── app/
│   ├── layout.tsx              # Root layout (nav, footer, fonts)
│   ├── page.tsx                # Home
│   ├── services/
│   │   ├── page.tsx            # Services overview
│   │   ├── ai-consulting/page.tsx
│   │   ├── cro-agent/page.tsx
│   │   ├── media-mix-model/page.tsx
│   │   └── attribution-testing/page.tsx
│   ├── learn/
│   │   ├── vibe-coding/page.tsx
│   │   └── know-what-works/page.tsx
│   ├── blog/
│   │   ├── page.tsx            # Blog index
│   │   └── [slug]/page.tsx     # Individual post
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── GradientText.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── AnimatedLogo.tsx       # Neural network SVG with draw-in animation
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProblemStatement.tsx
│   │   ├── ServiceCards.tsx
│   │   ├── LearnSection.tsx
│   │   ├── FounderSection.tsx
│   │   ├── BlogPreview.tsx
│   │   └── CTASection.tsx
│   ├── diagrams/                  # SVG/React visuals for service pages (coded, not images)
│   │   ├── CROFlowDiagram.tsx
│   │   ├── MMMChannelDiagram.tsx
│   │   ├── AttributionDiagram.tsx
│   │   └── BookCoverMockup.tsx    # CSS 3D book render
│   └── blog/
│       ├── PostCard.tsx
│       └── CategoryFilter.tsx
├── lib/
│   ├── blog.ts                 # MDX/content loader
│   ├── schema.ts               # JSON-LD structured data generators
│   └── constants.ts            # Site metadata, nav items
├── content/
│   └── blog/                   # MDX blog posts
├── public/
│   ├── fonts/
│   ├── images/
│   ├── logo/                    # Logo variants (SVG, PNG @1x/@2x, ICO)
│   │   ├── quantvibe-full.svg   # Icon + wordmark horizontal
│   │   ├── quantvibe-icon.svg   # Icon only
│   │   └── quantvibe-stacked.svg # Icon above wordmark
│   └── og/                     # OG images (per-page + dynamic)
├── app/
│   ├── sitemap.ts              # Auto-generated sitemap.xml
│   ├── robots.ts               # robots.txt
│   └── feed.xml/route.ts       # RSS feed
├── tailwind.config.ts
├── next.config.js
└── package.json
```

### Key Technical Decisions
- **Blog engine:** MDX via `@next/mdx` or `contentlayer` — keeps content in repo, no CMS needed at launch
- **Animations:** `framer-motion` for scroll-triggered reveals, hover states, page transitions — all wrapped in `prefers-reduced-motion` checks
- **Forms:** React Hook Form + server action, or integrate with Formspree/Resend for email
- **Booking:** Cal.com embed (free tier) or Calendly
- **Analytics:** Vercel Analytics + Plausible (privacy-friendly)
- **SEO:** Next.js metadata API, canonical URLs, JSON-LD structured data (lib/schema.ts), auto-generated sitemap.xml + robots.txt, RSS feed, dynamic OG images
- **Fonts:** Self-hosted via `next/font/local` for performance
- **Newsletter:** Buttondown or ConvertKit integration (simple API POST)
- **Accessibility testing:** `eslint-plugin-jsx-a11y` (lint-time), `@axe-core/react` (dev-time overlay), Lighthouse CI (automated)

### Performance Targets
- Lighthouse score: 95+ across all categories **including Accessibility and SEO** (desktop), 90+ (mobile)
- First Contentful Paint: < 1.2s desktop, < 2.0s mobile (3G)
- No layout shift on hero section — desktop or mobile
- Images: next/image with responsive `sizes`, WebP, lazy loading below fold
- Zoom test: no breakage at 200% browser zoom
- Keyboard test: every page fully navigable without a mouse
- Mobile test: no horizontal scroll, no clipped content, no inaccessible CTAs at 320px width

### SEO Architecture

This site will be a primary content marketing channel over time. SEO must be structural, not an afterthought. The goal: every blog post, service page, and educational page is a potential Google entry point.

**Foundational Principle: Text Must Be Text**
- All headings, body copy, CTAs, and navigation links must render as real HTML elements in the initial server response — not injected via client-side JavaScript
- Next.js App Router Server Components handle this by default. **Never convert a content-bearing component to `'use client'`** unless it genuinely needs interactivity (forms, animations, toggles). If a component is purely display, it stays a Server Component
- Test: `curl https://quantvibe.ai/services/cro-agent | grep "Behavioral science"` should return a match. If it doesn't, the content is client-rendered and invisible to crawlers
- No critical text inside `<canvas>`, SVG `<text>`, background images, or CSS `::before`/`::after` pseudo-elements
- Blog post content (MDX) renders at build time as static HTML — no client-side markdown parsing

**Server Rendering Rules:**
- Every page route uses Server Components by default
- `'use client'` only on interactive leaf components: mobile nav toggle, form inputs, animation wrappers, category filter buttons
- Content components (Hero headline, service descriptions, blog body, about page) must NEVER be `'use client'`
- Pattern: Server Component renders all text/content → wraps children in a thin `'use client'` AnimatedSection for scroll-triggered reveal. The text is in the HTML; the animation is progressive enhancement

**URL Structure:**
- Clean, descriptive, keyword-rich paths (already designed above)
- No trailing slashes (configure in `next.config.js`: `trailingSlash: false`)
- No query parameters for content variations — use path segments
- Blog slugs from the post title: `/blog/what-is-vibe-coding` not `/blog/post-37`
- Canonical URLs on every page via metadata API

**Metadata Template (every page):**
```tsx
export const metadata = {
  title: "Page Title | QuantVibe AI",        // ≤60 chars, keyword-front-loaded
  description: "...",                          // ≤155 chars, compelling + keyword-rich
  alternates: {
    canonical: "https://quantvibe.ai/...",     // Canonical URL — always absolute
  },
  openGraph: {
    title: "...",
    description: "...",
    url: "https://quantvibe.ai/...",
    siteName: "QuantVibe AI",
    images: [{ url: "/og/page-name.png", width: 1200, height: 630 }],
    type: "website",                           // Use "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "...",
    description: "...",
  },
};
```

**Blog Post Metadata (additional for articles):**
```tsx
// In each blog post's MDX frontmatter or generateMetadata():
{
  openGraph: {
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    modifiedTime: "2026-03-25T00:00:00Z",
    authors: ["Nadir"],
    tags: ["media mix model", "marketing measurement"],
  }
}
```

**Structured Data (JSON-LD):**
Add schema.org markup via `<script type="application/ld+json">` in the page head:
- **Home page:** `Organization` schema (name, URL, logo, sameAs for social profiles)
- **Service pages:** `Service` schema (name, description, provider)
- **Blog posts:** `Article` schema (headline, author, datePublished, dateModified, image)
- **Book page:** `Book` schema (name, author, description, isbn when available)
- **Course page:** `Course` schema (name, description, provider)
- **About page:** `Person` schema for founder (name, jobTitle, worksFor)
- Generate these in a `lib/schema.ts` helper to keep markup consistent

**Sitemap & Indexing:**
- Auto-generate `sitemap.xml` via Next.js `app/sitemap.ts` — includes all static pages + dynamically generated blog post URLs
- `robots.txt` via `app/robots.ts`: allow all, point to sitemap
- Set `<meta name="robots" content="index, follow">` on all public pages
- Add `noindex` only on utility pages (privacy, terms) if desired
- Submit sitemap to Google Search Console on launch

**Heading Hierarchy (per page):**
- Exactly one `<h1>` per page — the main page title
- Logical `<h2>` → `<h3>` nesting for sections and subsections
- Never skip levels (no `<h1>` → `<h3>`)
- Blog posts: post title is `<h1>`, section headings are `<h2>`, sub-sections `<h3>`
- Headings must be descriptive and keyword-relevant, not clever (e.g., "Media Mix Modeling Services" not "The Quant Side")

**Internal Linking Strategy:**
- Every service page links to related services ("Also explore: Media Mix Model")
- Blog posts link to relevant service pages and other posts
- Service pages link to relevant blog posts ("Read more: Why Last-Click Attribution Is Lying to You")
- Learn pages cross-link (book ↔ course, both → related blog posts)
- Use descriptive anchor text, not "click here" or "learn more" — write "explore our CRO agent" or "read the attribution guide"

**Blog SEO Specifics:**
- Each post targets a primary keyword + 2–3 secondary keywords
- Frontmatter includes: title, description, slug, publishedAt, updatedAt, category, tags, ogImage
- Auto-generate table of contents from headings for long posts (improves time-on-page + jump links)
- Add `reading time` estimate to post metadata
- Previous/next post navigation at bottom of each post
- Related posts section (by category or tag match)
- RSS feed at `/feed.xml` — aids discovery and syndication

**Image SEO:**
- Minimal images at launch (headshot, book cover, blog-specific diagrams only) — fewer images done right beats many done poorly
- All images: descriptive `alt` text (not "image1.png")
- Blog images (when added): include `title` attribute for additional context
- Use descriptive filenames: `media-mix-model-budget-optimizer.webp` not `screenshot-3.webp`
- Serve from the same domain (not external CDN) so image search credits quantvibe.ai
- OG images are the primary image investment — generate dynamically with `@vercel/og` using logo mark + page title on brand gradient

**Performance as SEO:**
- Core Web Vitals directly impact rankings — LCP, FID/INP, CLS targets already covered in Performance Targets
- Self-hosted fonts eliminate render-blocking external requests
- No large JavaScript bundles blocking first paint — Server Components keep the client bundle minimal
- Preload critical assets: hero font weights, above-fold images

**Content Freshness Signals:**
- Blog post `updatedAt` date shown on page and in structured data
- Regularly update cornerstone content (service pages, pillar blog posts)
- Add a "Last updated" note on service pages when offerings evolve

**Technical SEO Checklist (before launch):**
- Validate all pages render full content without JavaScript (`curl` test)
- Validate structured data with Google Rich Results Test
- Submit sitemap to Google Search Console
- Verify canonical URLs are correct on every page
- Check for duplicate title tags or meta descriptions
- Run Screaming Frog or Ahrefs site audit for crawl issues
- Verify 404 page returns proper HTTP 404 status code
- Set up redirects for any URL changes (next.config.js redirects)

---

## 5. Launch Phases

### Phase 1: MVP (Week 1-2)
- Home page (all sections)
- Services overview + 4 detail pages
- About page
- Contact page with form
- Navbar + Footer (with mobile responsive drawer)
- SEO foundations: metadata on every page, canonical URLs, heading hierarchy, structured data (Organization + Service schemas)
- Verify all content renders server-side (`curl` test)
- Deploy to Vercel

### Phase 2: Content (Week 3-4)
- Blog engine + 3 launch posts (MDX, server-rendered)
- Blog post structured data (Article schema), reading time, TOC generation
- Learn: Know What Works book page (Book schema)
- Learn: Vibe Coding course waitlist page (Course schema)
- Internal linking: service pages ↔ blog posts ↔ learn pages
- Newsletter signup integration
- Privacy policy + Terms

### Phase 3: Polish (Week 5-6)
- Animations and micro-interactions (prefers-reduced-motion wrapped)
- Dynamic OG images per page
- Auto-generated sitemap.xml + robots.txt
- RSS feed at /feed.xml
- Analytics integration (Plausible + Vercel Analytics)
- Performance optimization pass (Core Web Vitals)
- Cal.com booking integration on Contact page
- Submit sitemap to Google Search Console
- Run full technical SEO audit (structured data validation, crawl test, duplicate content check)

### Phase 4: Growth (Ongoing)
- Weekly blog content targeting specific keywords
- Update cornerstone content quarterly (service pages, pillar posts)
- Course platform integration (when ready)
- Case studies section (when client work ships)
- Testimonials (as collected)
- A/B test CTAs and hero copy
- Monitor Search Console for indexing issues, keyword opportunities, and crawl errors
- Related posts and "also explore" cross-linking as content library grows

---

## 6. Claude Code Build Prompt

When you open Claude Code, you can use this as your initial prompt:

```
Build a Next.js 14 (App Router) website for QuantVibe AI based on the blueprint 
in quantvibe-ai-blueprint.md. Start with Phase 1:

1. Initialize the project with: npx create-next-app@latest quantvibe-ai --typescript --tailwind --app --src-dir=false
2. Set up the design system: dark theme, color variables, typography (Satoshi + Plus Jakarta Sans via next/font)
3. Build layout components: Navbar with dropdown menus, responsive MobileMenu drawer, Footer
4. Build the Home page with all 7 sections from the blueprint
5. Build the Services overview page and 4 service detail pages
6. Build the About page and Contact page with form
7. Add Framer Motion for scroll-triggered section reveals
8. Configure SEO: metadata + canonical URLs on every page, JSON-LD structured data, sitemap.ts, robots.ts
9. Verify all content renders server-side — no text inside 'use client' components
10. Deploy-ready for Vercel

Design direction: Dark-mode primary (#0A0F1C), cyan-to-violet gradient accents,
modern/technical aesthetic. Avoid generic AI website patterns. Make it feel like
a tool built by someone who actually builds tools.

Accessibility is a hard requirement — not a polish step:
- 18px minimum body text, 16px floor for captions
- WCAG AAA contrast (7:1) on all body text
- Full keyboard navigation with visible focus rings
- Skip-to-content link, proper heading hierarchy, ARIA landmarks
- All animations wrapped in prefers-reduced-motion checks
- Install eslint-plugin-jsx-a11y and fix all warnings before shipping

Responsive is a hard requirement — build mobile-first:
- Single column below 768px, body text stays 18px on all screens
- Hamburger nav with full-screen drawer on mobile (<1024px)
- All tap targets 48×48px minimum
- No horizontal scrolling at any breakpoint (test at 320px)
- Responsive heading scale: H1 28px mobile → 40px desktop
- Use Tailwind responsive prefixes (sm:, md:, lg:) throughout

SEO is a hard requirement — content must be crawlable:
- All text content in Server Components (never 'use client' for display-only components)
- Validate with: curl [url] | grep [expected text]
- Metadata + canonical URL on every page
- JSON-LD structured data: Organization (home), Service (service pages), Article (blog)
- Auto-generate sitemap.ts and robots.ts
- Proper heading hierarchy: one H1 per page, no skipped levels
- Descriptive anchor text on all internal links
- Blog posts: MDX rendered at build time, Article schema, reading time, TOC
```
