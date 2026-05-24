"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { scaleIn, VIEWPORT_ONCE } from "@/lib/constants/motion";

// ─────────────────────────────────────────────────────────────────────────────
// ScaleIn
//
// Entrance animation: opacity 0 → 1, scale 0.96 → 1
// Ideal for cards, images, and large UI blocks.
// ─────────────────────────────────────────────────────────────────────────────

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleIn({ children, className, delay = 0 }: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
