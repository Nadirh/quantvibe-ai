export const SITE_NAME = "QuantVibe AI";
export const SITE_URL = "https://quantvibe.ai";
export const SITE_DESCRIPTION =
  "AI-powered tools and training for marketers who want to measure what matters — and build what's next.";
export const SITE_TAGLINE = "Human Intelligence, Vibe Coded";

export const NAV_SERVICES = [
  { label: "AI Consulting", href: "/services/ai-consulting" },
  { label: "CRO Agent", href: "/services/cro-agent" },
  { label: "Media Mix Model", href: "/services/media-mix-model" },
  { label: "Attribution & Testing", href: "/services/attribution-testing" },
] as const;

export const NAV_LEARN = [
  { label: "Vibe Coding Courses", href: "/learn/vibe-coding" },
  { label: "Know What Works (Book)", href: "/learn/know-what-works" },
] as const;

export const NAV_ITEMS = [
  { label: "Services", href: "/services", children: NAV_SERVICES },
  { label: "Learn", href: "/learn", children: NAV_LEARN },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_LINKS = {
  services: NAV_SERVICES,
  learn: NAV_LEARN,
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  connect: [
    { label: "LinkedIn", href: "https://linkedin.com/company/quantvibe-ai", external: true },
    { label: "Twitter / X", href: "https://x.com/quantvibeai", external: true },
    { label: "GitHub", href: "https://github.com/quantvibe-ai", external: true },
    { label: "Email", href: "mailto:hello@quantvibe.ai", external: true },
  ],
} as const;
