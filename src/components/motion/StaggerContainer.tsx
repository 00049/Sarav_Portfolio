"use client";

import { motion } from "framer-motion";
import { useMotionContext } from "@/components/motion/MotionProvider";
import { buildStaggerContainer, VIEWPORT_ONCE } from "@/lib/constants/motion";

// ─────────────────────────────────────────────────────────────────────────────
// StaggerContainer
//
// Wraps children and staggers their entrance animations.
// Children must use FadeIn, ScaleIn, or any motion component that reads
// variant state from a parent (i.e., uses `variants` prop without `initial`).
//
// If reduced motion: fades in immediately with no stagger.
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
  const { isReducedMotion } = useMotionContext();
  const variants = buildStaggerContainer(delay, isReducedMotion);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}
