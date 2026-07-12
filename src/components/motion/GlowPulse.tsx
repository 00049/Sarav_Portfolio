"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// GlowPulse
//
// Decorative ambient glow — an absolutely-positioned radial gradient that
// slowly pulses in opacity. Used behind hero text and section headings
// to give depth and life to the dark background.
//
// Accepts an optional style prop so callers can control size, position,
// filter, and opacity directly on the element.
// ─────────────────────────────────────────────────────────────────────────────

type GlowColor = "blue" | "indigo" | "cyan";

const colorMap: Record<GlowColor, string> = {
  blue: "radial-gradient(ellipse at center, rgba(59,130,246,0.25) 0%, transparent 70%)",
  indigo:
    "radial-gradient(ellipse at center, rgba(99,102,241,0.20) 0%, transparent 70%)",
  cyan: "radial-gradient(ellipse at center, rgba(6,182,212,0.18) 0%, transparent 70%)",
};

interface GlowPulseProps {
  className?: string;
  color?: GlowColor;
  /** Allows caller to set size, position, filter, opacity etc. */
  style?: CSSProperties;
}

export function GlowPulse({ className, color = "blue", style }: GlowPulseProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyle: CSSProperties = {
    background: colorMap[color],
    ...style,
  };

  // Render a static, dimmed version for reduced-motion users
  if (shouldReduceMotion) {
    return (
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute", className)}
        style={{ ...baseStyle, opacity: style?.opacity ?? 0.4 }}
      />
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      style={baseStyle}
      animate={{ opacity: [0.4, 0.7, 0.4] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
     suppressHydrationWarning />
  );
}
