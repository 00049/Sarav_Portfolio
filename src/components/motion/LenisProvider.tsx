"use client";

import { useEffect } from "react";
import { useLenis } from "@/lib/hooks/useLenis";

// ─────────────────────────────────────────────────────────────────────────────
// LenisProvider
//
// Pure behavioral wrapper. Zero visible output.
//
// Responsibilities:
// 1. Boots Lenis smooth scroll
// 2. Registers Lenis as Framer Motion's scroll proxy so useScroll()
//    reads interpolated positions (not raw browser scroll)
// ─────────────────────────────────────────────────────────────────────────────

interface LenisProviderProps {
  children: React.ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useLenis();

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    // Notify Framer Motion that scroll position changed on every Lenis tick.
    // This keeps scroll-linked animations (useScroll, useTransform) in sync
    // with the smooth (interpolated) scroll position rather than the raw
    // browser scroll offset.
    const handleScroll = () => {
      // Dispatch a scroll event so any scroll listeners (including Framer
      // Motion's useScroll internals) receive the updated position.
      window.dispatchEvent(new Event("scroll"));
    };

    lenis.on("scroll", handleScroll);
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenisRef]);

  return <>{children}</>;
}
