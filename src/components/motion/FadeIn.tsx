"use client";

import { motion } from "framer-motion";
import { useMotionContext } from "@/components/motion/MotionProvider";
import { getFadeInVariants, VIEWPORT_ONCE } from "@/lib/constants/motion";

// ─────────────────────────────────────────────────────────────────────────────
// FadeIn
//
// Animates children into view from a given direction.
// Falls back to an opacity transition if the user prefers reduced motion.
// ─────────────────────────────────────────────────────────────────────────────

type Direction = "up" | "down" | "left" | "right";

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
  const { isReducedMotion } = useMotionContext();
  const variants = getFadeInVariants(direction, isReducedMotion);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      suppressHydrationWarning
      transition={
        isReducedMotion
          ? undefined // handled by variants
          : {
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
              delay,
            }
      }
    >
      {children}
    </motion.div>
  );
}
