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
// Reduced Motion Fallback
// ─────────────────────────────────────────────────────────────────────────────

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.15, ease: "linear" },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Directional fade variants
// ─────────────────────────────────────────────────────────────────────────────

export function getFadeInVariants(direction: "up" | "down" | "left" | "right", isReducedMotion = false): Variants {
  if (isReducedMotion) return reducedMotionVariants;

  switch (direction) {
    case "up":
      return {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: TRANSITION_BASE, transitionEnd: { willChange: "auto" } },
      };
    case "down":
      return {
        hidden: { opacity: 0, y: -16 },
        visible: { opacity: 1, y: 0, transition: TRANSITION_BASE, transitionEnd: { willChange: "auto" } },
      };
    case "left":
      return {
        hidden: { opacity: 0, x: -16 },
        visible: { opacity: 1, x: 0, transition: TRANSITION_BASE, transitionEnd: { willChange: "auto" } },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: 16 },
        visible: { opacity: 1, x: 0, transition: TRANSITION_BASE, transitionEnd: { willChange: "auto" } },
      };
  }
}

export const fadeInUp = getFadeInVariants("up");
export const fadeInDown = getFadeInVariants("down");
export const fadeInLeft = getFadeInVariants("left");
export const fadeInRight = getFadeInVariants("right");

// ─────────────────────────────────────────────────────────────────────────────
// Scale variant
// ─────────────────────────────────────────────────────────────────────────────

export function getScaleInVariants(isReducedMotion = false): Variants {
  if (isReducedMotion) return reducedMotionVariants;

  return {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: TRANSITION_BASE,
      transitionEnd: { willChange: "auto" }
    },
  };
}

export const scaleIn = getScaleInVariants();

// ─────────────────────────────────────────────────────────────────────────────
// Stagger container
// ─────────────────────────────────────────────────────────────────────────────

export function buildStaggerContainer(delayChildren = 0, isReducedMotion = false): Variants {
  if (isReducedMotion) return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.15, ease: "linear" } },
  };

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

export const staggerContainer = buildStaggerContainer(0);

// ─────────────────────────────────────────────────────────────────────────────
// Viewport trigger config — used as whileInView trigger defaults
// ─────────────────────────────────────────────────────────────────────────────

export const VIEWPORT_ONCE = {
  once: true,
  margin: "-80px",
} as const;
