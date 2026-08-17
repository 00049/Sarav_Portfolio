"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useMotionContext } from "@/components/motion/MotionProvider";
import { HeroBackground } from "./HeroBackground";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export function Hero() {
  const { isReducedMotion } = useMotionContext();

  const sectionRef = useRef<HTMLElement>(null);
  
  // Track scroll progress within the Hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Calculate parallax/fade values for text
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [1, 1, 0, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Calculate bloom/fade values for abstract artwork
  const artworkOpacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.75], [0.35, 0.6, 0.1, 0]);
  const artworkScale = useTransform(scrollYProgress, [0, 0.15, 0.75], [1, 1.05, 0.95]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-background"
    >
      <HeroBackground />

      {/* ── Main Content (Editorial Typography) ───────────────────────────── */}
      <div className="relative z-30 w-full h-full min-h-[100vh] flex flex-col items-center justify-center pointer-events-none overflow-hidden pt-20 pb-12">
        
        {/* Scroll-animated container */}
        <motion.div
          style={{
            opacity: heroOpacity,
            y: isReducedMotion ? 0 : heroY,
            scale: isReducedMotion ? 1 : heroScale,
          }}
          className="relative w-full h-full flex flex-col items-center justify-center"
          suppressHydrationWarning
        >
          {/* Abstract Artwork Layer (z-0 to sit behind text) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
             <motion.div 
               className="relative w-[150vw] h-[150vw] sm:w-[90vw] sm:h-[90vw] md:w-[900px] md:h-[900px] lg:w-[1100px] lg:h-[1100px] mix-blend-screen filter brightness-[0.7] blur-[1px]"
               style={{
                 opacity: isReducedMotion ? 0.35 : artworkOpacity,
                 scale: isReducedMotion ? 1 : artworkScale,
                 maskImage: 'radial-gradient(circle, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0) 65%)',
                 WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0) 65%)',
               }}
             >
               <Image
                 src="/abstract-cube.jpg"
                 alt="Systems Architecture Abstract Cube"
                 fill
                 sizes="(max-width: 768px) 100vw, 1100px"
                 className="object-contain"
                 priority
               />
             </motion.div>
          </div>


          {/* Main Composition Container */}
          <div className="w-full flex flex-col items-center justify-center pointer-events-auto z-40 relative px-4 md:px-8">

            {/* Editorial Identity Marker */}
            <div className="flex flex-col items-center justify-center gap-5 md:gap-6 mb-8 md:mb-12">
               <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden grayscale contrast-125 border border-white/20 shadow-2xl">
                 <Image 
                   src="/profile.jpg" 
                   alt="Saravpreet Singh Pruthi" 
                   fill 
                   sizes="64px" 
                   className="object-cover object-[center_top]" 
                 />
               </div>
               <div className="flex flex-col items-center text-center text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-mono text-white/60">
                 <span>OFFENSIVE SECURITY &</span>
                 <span>SYSTEMS ARCHITECTURE</span>
               </div>
            </div>

            {/* Typography Composition */}
            <div className="flex flex-col items-center justify-center w-full max-w-[1440px] text-center">
               
               {/* Line 1: ARCHITECTING */}
               <h1 className={`text-[13vw] md:text-[9vw] lg:text-[10vw] leading-[0.9] font-medium tracking-tighter text-white/95 ${playfair.className} drop-shadow-lg`}>
                 ARCHITECTING
               </h1>

               {/* Line 2 & 3: secure SYSTEMS */}
               <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 mt-2 md:mt-4 w-full">
                 <span className={`text-[10vw] md:text-[5vw] lg:text-[6vw] leading-[0.9] font-normal italic text-white ${playfair.className} drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)] z-20`}>
                   secure
                 </span>
                 <span className={`text-[11vw] md:text-[7vw] lg:text-[8vw] leading-[0.9] font-medium tracking-tighter text-white/85 ${playfair.className} drop-shadow-lg z-10`}>
                   SYSTEMS
                 </span>
               </div>

            </div>

          </div>

          {/* Bottom Information Layer */}
          <div className="absolute bottom-0 w-full px-6 md:px-12 pb-8 md:pb-12 flex flex-col justify-end pointer-events-auto">
            {/* Subtle Divider */}
            <div className="w-full h-[1px] bg-white/10 mb-6" />
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-6">
              
              {/* Lower-left description */}
              <p className="text-[9px] md:text-[10px] leading-relaxed tracking-widest font-mono text-white/40 max-w-[280px] uppercase">
                I build secure systems, intelligent products, and infrastructure designed to withstand real-world threats.
              </p>
              
              {/* Lower-right Scroll Indicator */}
              <div className="flex flex-col items-end gap-3 hidden sm:flex">
                <span className="text-[9px] tracking-[0.4em] uppercase font-mono text-white/40">SCROLL TO EXPLORE</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/40">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
