"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollTimeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={ref} className="relative pl-6">
      {/* Background static line */}
      <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-[var(--border)]" />
      
      {/* Animated glowing fill line */}
      <motion.div 
        className="absolute left-0 top-2 bottom-0 w-[2px] bg-[var(--accent-blue)] origin-top shadow-[0_0_12px_var(--glow-blue)]"
        style={{ scaleY }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col gap-12">
        {children}
      </div>
    </div>
  );
}
