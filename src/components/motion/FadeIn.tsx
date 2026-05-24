"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  VIEWPORT_ONCE,
} from "@/lib/constants/motion";
import type { Variants } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// FadeIn
//
// Animates children into view from a given direction.
// Skips animation entirely if the user prefers reduced motion.
// ─────────────────────────────────────────────────────────────────────────────

type Direction = "up" | "down" | "left" | "right";

const directionVariants: Record<Direction, Variants> = {
  up: fadeInUp,
  down: fadeInDown,
  left: fadeInLeft,
  right: fadeInRight,
};

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion: render immediately at full opacity, no transform
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = directionVariants[direction];

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
