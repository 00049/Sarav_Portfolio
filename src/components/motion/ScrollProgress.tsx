"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

// ─────────────────────────────────────────────────────────────────────────────
// ScrollProgress
//
// Fixed top progress bar that tracks page scroll depth.
//
// Implementation details:
// - useScroll() provides scrollYProgress (0 → 1) in sync with Lenis because
//   LenisProvider dispatches scroll events on every Lenis tick.
// - useSpring() adds a subtle physical lag so the bar doesn't feel mechanical.
// - scaleX is applied on a full-width div with transform-origin: left.
// - The bar uses a CSS gradient from --accent-blue → --accent-indigo.
// - z-index: 9999 ensures it sits above all content including the navbar.
// ─────────────────────────────────────────────────────────────────────────────

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  // Spring config: stiffness 200, damping 40 gives a slightly trailing feel
  // Skip spring when reduced motion is on (snapTo instant)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 1000 : 200,
    damping: shouldReduceMotion ? 100 : 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background:
          "linear-gradient(90deg, var(--accent-blue), var(--accent-indigo))",
        zIndex: 9999,
        // Subtle glow on the bar itself
        boxShadow:
          "0 0 8px rgba(59,130,246,0.8), 0 0 20px rgba(99,102,241,0.4)",
      }}
    />
  );
}
