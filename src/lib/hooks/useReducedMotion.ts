"use client";

import { useEffect, useState } from "react";
import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Returns true if the user has requested reduced motion.
 *
 * Combines two sources for maximum reliability:
 * 1. Framer Motion's built-in useReducedMotion() hook
 * 2. A direct window.matchMedia check as a fallback
 *
 * SSR-safe: returns false during server rendering (no window available).
 */
export function useReducedMotion(): boolean {
  // Framer Motion's hook — reads the media query reactively
  const framerReduced = useFramerReducedMotion();

  // Direct media query state — initialized false for SSR safety
  const [mediaReduced, setMediaReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMediaReduced(mq.matches);

    const handler = (e: MediaQueryListEvent) => setMediaReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Either source can trigger reduced motion
  return Boolean(framerReduced) || mediaReduced;
}
