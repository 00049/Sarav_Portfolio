import type { Variants } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// Shared transition config — applied to all variants for consistency
// ─────────────────────────────────────────────────────────────────────────────

export const TRANSITION_BASE = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export const TRANSITION_FAST = {
  duration: 0.35,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export const TRANSITION_SLOW = {
  duration: 0.7,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

// ─────────────────────────────────────────────────────────────────────────────
// Directional fade variants
// ─────────────────────────────────────────────────────────────────────────────

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_BASE,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_BASE,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_BASE,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_BASE,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Scale variant
// ─────────────────────────────────────────────────────────────────────────────

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITION_BASE,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Stagger container
// ─────────────────────────────────────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Utility: build a stagger container with custom delay
// ─────────────────────────────────────────────────────────────────────────────

export function buildStaggerContainer(delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren,
      },
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Viewport trigger config — used as whileInView trigger defaults
// ─────────────────────────────────────────────────────────────────────────────

export const VIEWPORT_ONCE = {
  once: true,
  margin: "-80px",
} as const;
