export const SITE_NAME = "QuantVibe AI";
export const SITE_URL = "https://quantvibe.ai";
export const SITE_DESCRIPTION =
  "AI-powered tools and training for marketers who want to build what's next.";
export const SITE_TAGLINE = "Human Intelligence, Vibe Coded";

export const NAV_SERVICES = [
  { label: "Media Mix Modeling", href: "/services/media-mix-modeling" },
  { label: "Weekly Reporting", href: "/services/weekly-reporting" },
  { label: "CRO AI Agent", href: "/services/cro-agent" },
  { label: "Google Ads AI Agent", href: "/services/google-ads-launcher" },
  { label: "Customer Segmentation", href: "/services/customer-segmentation" },
  { label: "Data-Driven Attribution", href: "/services/data-driven-attribution" },
] as const;

export const NAV_LEARN = [
  { label: "Vibe Coding Courses", href: "/learn/vibe-coding" },
  { label: "Know What Works (Book)", href: "/learn/know-what-works" },
] as const;

interface NavItem {
  label: string;
  href: string;
  children?: ReadonlyArray<{ label: string; href: string }>;
}

const APPS_AND_TOOLS = [
  { label: "Media Mix Modeling", href: "/media-mix-model" },
  { label: "Data-Driven Attribution", href: "/data-driven-attribution" },
  { label: "Customer Segmentation", href: "/customer-segmentation" },
  { label: "Automated Weekly Reporting", href: "/automated-weekly-reporting" },
  { label: "Google Ads Launcher", href: "/google-ads-launcher" },
  { label: "CRO AI Agent", href: "/cro-ai-agent" },
] as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Apps & Tools", href: "/#services", children: APPS_AND_TOOLS },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Media Mix Modeling", href: "/services/media-mix-modeling" },
  { label: "Weekly Reporting", href: "/services/weekly-reporting" },
  { label: "CRO AI Agent", href: "/services/cro-agent" },
  { label: "Google Ads AI Agent", href: "/services/google-ads-launcher" },
  { label: "Segmentation", href: "/services/customer-segmentation" },
  { label: "Attribution", href: "/services/data-driven-attribution" },
] as const;

export const FOOTER_LINKS = {
  services: FOOTER_SERVICES,
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
