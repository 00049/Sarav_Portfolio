"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface MotionContextType {
  isReducedMotion: boolean;
  isMobile: boolean;
}

const MotionContext = createContext<MotionContextType>({
  isReducedMotion: false,
  isMobile: false,
});

export const useMotionContext = () => useContext(MotionContext);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is < 768px
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return (
    <MotionContext.Provider
      value={{
        isReducedMotion: !!shouldReduceMotion,
        isMobile,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}
