"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Initializes Lenis smooth scrolling with the portfolio's exact config values.
 *
 * - Respects prefers-reduced-motion: if true, duration is set to 0 and
 *   smoothWheel is disabled so scrolling is instant and accessible.
 * - Uses autoRaf: true so Lenis manages its own requestAnimationFrame loop.
 * - Returns a stable ref to the Lenis instance so callers can imperatively
 *   call lenis.scrollTo() for anchor navigation.
 */
export function useLenis(): React.RefObject<Lenis | null> {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Detect OS-level reduced motion preference
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: prefersReduced ? 0 : 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !prefersReduced,
      syncTouch: false,
      syncTouchLerp: 0.075,
      touchInertiaExponent: 2,
      autoRaf: true,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
