"use client";

import { motion } from "framer-motion";
import { useMotionContext } from "@/components/motion/MotionProvider";
import { getScaleInVariants, VIEWPORT_ONCE } from "@/lib/constants/motion";

// ─────────────────────────────────────────────────────────────────────────────
// ScaleIn
//
// Entrance animation: opacity 0 → 1, scale 0.96 → 1
// Ideal for cards, images, and large UI blocks.
// Falls back to an opacity transition if reduced motion preferred.
// ─────────────────────────────────────────────────────────────────────────────

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleIn({ children, className, delay = 0 }: ScaleInProps) {
  const { isReducedMotion } = useMotionContext();
  const variants = getScaleInVariants(isReducedMotion);

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
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
              delay,
            }
      }
    >
      {children}
    </motion.div>
  );
}
