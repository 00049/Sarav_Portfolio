"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 20;

/**
 * Returns true when window.scrollY > 20px.
 *
 * SSR-safe: returns false during server rendering (no window available).
 * Uses a passive scroll event listener for maximum performance.
 */
export function useScrolled(): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Sync immediately on mount so there's no delay if the page loads mid-scroll
    const check = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);

    check();

    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return scrolled;
}
