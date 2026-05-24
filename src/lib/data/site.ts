import type { SocialLink } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// Hero Content
// ─────────────────────────────────────────────────────────────────────────────

export const heroContent = {
  /** Availability badge text */
  availability: "Available for opportunities",

  /** Full legal name — rendered large in the hero */
  name: "Saravpreet Singh Pruthi",

  /** Primary role — rendered below the name */
  role: "Full Stack & AI Security Engineer",

  /**
   * Tagline — rendered in Geist Mono with accent-blue color.
   * Short, punchy, memorable.
   */
  tagline: "Building autonomous cybersecurity infrastructure.",

  /**
   * Description — one sentence, max ~20 words.
   * Conveys the depth and specialization clearly.
   */
  description:
    "Architecting production-grade security systems at the intersection of distributed infrastructure and AI-driven threat intelligence.",

  /** Scroll-to target when the chevron is clicked */
  scrollTarget: "#work",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Resume
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Path to the resume PDF served from /public.
 * Replace /public/resume.pdf with the actual file before deploying.
 */
export const resumeUrl = "/resume.pdf";

// ─────────────────────────────────────────────────────────────────────────────
// Social Links
// ─────────────────────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/00049",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/saravpreetpruthi",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:Sarav.pruthi@gmail.com",
    icon: "mail",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Display labels (used in social link row)
// ─────────────────────────────────────────────────────────────────────────────

export const socialDisplayLabels: Record<string, string> = {
  GitHub: "github.com/00049",
  LinkedIn: "linkedin.com/in/saravpreetpruthi",
  Email: "Sarav.pruthi@gmail.com",
};
