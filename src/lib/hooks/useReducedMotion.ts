"use client";

import { useEffect, useState } from "react";

/**
 * Returns true if the user has requested reduced motion.
 *
 * SSR-safe: returns false during server rendering and first client render,
 * then updates after hydration via useEffect to prevent hydration mismatch.
 */
export function useReducedMotion(): boolean {
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

  return mediaReduced;
}
