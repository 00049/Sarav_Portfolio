"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  style?: React.CSSProperties;
}

export function FadeInSection({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
}: FadeInSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion || direction === "none") {
    return <div className={className} style={style}>{children}</div>;
  }

  const yOffsets = {
    up: 30,
    left: 0,
    right: 0,
    none: 0,
  };

  const xOffsets = {
    up: 0,
    left: 30,
    right: -30,
    none: 0,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffsets[direction], x: xOffsets[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      suppressHydrationWarning
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // easeOutQuint
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
