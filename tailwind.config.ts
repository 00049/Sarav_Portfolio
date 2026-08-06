import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4 config — consumes all CSS custom properties defined
 * in globals.css as Tailwind utility classes via the theme extension.
 *
 * In Tailwind v4, most configuration moves to CSS @theme blocks.
 * This file handles content paths and any JS-level plugin needs.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        "background-card": "var(--background-card)",
        "background-elevated": "var(--background-elevated)",
        border: "var(--border)",
        "border-hover": "var(--border-hover)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-subtle": "var(--accent-subtle)",
        // Legacy aliases for backward compat
        "accent-gold": "var(--accent)",
        "accent-blue": "var(--accent)",
        "accent-cyan": "var(--accent)",
        "accent-green": "var(--text-muted)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        lifted: "var(--shadow-lifted)",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both",
        "slide-up": "slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
