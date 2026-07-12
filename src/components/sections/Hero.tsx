"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { ArrowDownRight } from "lucide-react";
import { useMotionContext } from "@/components/motion/MotionProvider";
// Initialize the serif font for the elegant typography
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export function Hero() {
  const { isReducedMotion } = useMotionContext();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: isReducedMotion ? { duration: 0.15 } : {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: isReducedMotion ? 0 : 20,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: isReducedMotion 
        ? { duration: 0.15 } 
        : { type: "spring", stiffness: 400, damping: 30 },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-6 overflow-hidden"
      style={{ backgroundColor: "#060608" }}
    >
      {/* ── Ultra-minimal subtle glow ───────────────────────────────── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at top, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center flex-1 w-full pt-20 pb-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
         suppressHydrationWarning>
          {/* Top Label */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-12" suppressHydrationWarning>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-zinc-500 font-medium">
              Offensive Security & Systems Architecture
            </span>
          </motion.div>

          {/* Massive Typography Headline */}
          <motion.div variants={itemVariants} className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-2 md:gap-4" suppressHydrationWarning>
            
            {/* Line 1: uppercase serif */}
            <h1 
              className={`text-5xl md:text-[7rem] lg:text-[9rem] leading-[0.9] text-[#EAEAEA] font-medium tracking-tight ${playfair.className}`}
            >
              ARCHITECTING
            </h1>

            {/* Line 2: italic serif + uppercase sans */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-2 md:mt-4">
              <span 
                className={`text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.8] text-zinc-400 font-normal italic ${playfair.className}`}
              >
                secure
              </span>
              <span className={`text-4xl md:text-[6rem] lg:text-[7.5rem] leading-[0.9] text-[#EAEAEA] font-medium tracking-tight ${playfair.className}`}>
                SYSTEMS
              </span>
            </div>

            {/* Line 3: Small elegant subtext embedded */}
            <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-4 gap-8">
              <p className="text-zinc-500 text-sm md:text-base max-w-[280px] text-center md:text-left leading-relaxed font-light">
                Bridging offensive security and production engineering to build resilient infrastructure.
              </p>
              
              <div className="flex flex-col items-center md:items-end gap-2">
                 <Link
                    href="/work"
                    className="group flex items-center justify-center gap-3 w-16 h-16 rounded-full bg-white text-black hover:scale-105 transition-transform duration-500 ease-out"
                  >
                    <ArrowDownRight size={24} className="group-hover:rotate-[-45deg] transition-transform duration-500 ease-out" />
                  </Link>
                  <span className="text-xs uppercase tracking-widest text-zinc-500 mt-2">View Work</span>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
