"use client";

import { useEffect, useState } from "react";

/**
 * Tracks scroll progress from 0 (top) to 1 (bottom) for the full page,
 * or for a specific element ref if provided.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const percent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(1, Math.max(0, percent)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
