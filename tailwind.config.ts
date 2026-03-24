import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-card": "var(--bg-card)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "accent-cyan": "var(--accent-cyan)",
        "accent-violet": "var(--accent-violet)",
        border: "var(--border)",
        "focus-ring": "var(--focus-ring)",
        success: "var(--success)",
        warning: "var(--warning)",
      },
      fontSize: {
        caption: ["1rem", { lineHeight: "1.5" }],
        body: ["1.125rem", { lineHeight: "1.75" }],
        h4: ["1.375rem", { lineHeight: "1.4" }],
        "h3-mobile": ["1.25rem", { lineHeight: "1.4" }],
        h3: ["1.625rem", { lineHeight: "1.4" }],
        "h2-mobile": ["1.5rem", { lineHeight: "1.3" }],
        h2: ["2rem", { lineHeight: "1.3" }],
        "h1-mobile": ["1.75rem", { lineHeight: "1.2" }],
        h1: ["2.5rem", { lineHeight: "1.2" }],
      },
      maxWidth: {
        prose: "70ch",
      },
      fontFamily: {
        heading: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
