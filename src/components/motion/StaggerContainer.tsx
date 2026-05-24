"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { buildStaggerContainer, VIEWPORT_ONCE } from "@/lib/constants/motion";

// ─────────────────────────────────────────────────────────────────────────────
// StaggerContainer
//
// Wraps children and staggers their entrance animations.
// Children must use FadeIn, ScaleIn, or any motion component that reads
// variant state from a parent (i.e., uses `variants` prop without `initial`).
//
// If reduced motion: renders children immediately with no stagger.
// ─────────────────────────────────────────────────────────────────────────────

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = buildStaggerContainer(delay);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {children}
    </motion.div>
  );
}
