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
        "background-card-hover": "var(--background-card-hover)",
        border: "var(--border)",
        "border-hover": "var(--border-hover)",
        "border-accent": "var(--border-accent)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "accent-blue": "var(--accent-blue)",
        "accent-indigo": "var(--accent-indigo)",
        "accent-cyan": "var(--accent-cyan)",
        "accent-violet": "var(--accent-violet)",
        "accent-emerald": "var(--accent-emerald)",
        "glow-blue": "var(--glow-blue)",
        "glow-indigo": "var(--glow-indigo)",
        "glow-cyan": "var(--glow-cyan)",
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
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)",
        "glow-strong": "var(--shadow-glow-strong)",
        inset: "var(--shadow-inset)",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both",
        "slide-up": "slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "border-spin": "borderSpin 8s linear infinite",
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
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        borderSpin: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
