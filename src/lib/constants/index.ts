import type { NavLink, SocialLink, Section } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Social / Contact Links
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
// Page Sections (used for scroll-spy and navbar active state)
// ─────────────────────────────────────────────────────────────────────────────

export const sections: Section[] = [
  { id: "hero", label: "Hero" },
  { id: "projects", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Misc
// ─────────────────────────────────────────────────────────────────────────────

export const RESUME_URL = "/resume.pdf"; // placeholder — swap with actual URL
