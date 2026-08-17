"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { useMotionContext } from "@/components/motion/MotionProvider";
import type { Project } from "@/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

interface SelectedWorkProps {
  projects: Project[];
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  const { isReducedMotion } = useMotionContext();
  const titleRef = useRef<HTMLDivElement>(null);

  // Scroll effect for the huge "SELECTED WORK" typography dissolving in
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "center center"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section id="selected-work" className="w-full bg-background relative z-10">
      
      {/* ── Transition Typography ── */}
      <div 
        ref={titleRef} 
        className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-6"
      >
        <motion.div
          style={{ 
            opacity: isReducedMotion ? 1 : titleOpacity,
            y: isReducedMotion ? 0 : titleY
          }}
          className="flex flex-col items-center justify-center text-center w-full"
        >
          <span className="text-[10px] md:text-[11px] tracking-[0.4em] font-mono text-white/40 uppercase mb-8">
            Portfolio Archive
          </span>
          <h2 className={`text-[12vw] md:text-[8vw] lg:text-[9vw] leading-[0.9] font-medium tracking-tighter text-white/95 ${playfair.className} drop-shadow-lg`}>
            SELECTED
            <br />
            <span className="italic font-normal text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">
              WORK
            </span>
          </h2>
        </motion.div>
      </div>

      {/* ── Editorial Project Layout ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pb-32 flex flex-col gap-32">
        {projects.map((project, index) => (
          <EditorialProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      
    </section>
  );
}

// Sub-component for the large editorial visual
function EditorialProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="flex flex-col gap-8 md:gap-12 w-full group">
       {/* Large Visual Block */}
       <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-[#0A1217] border border-white/5 relative overflow-hidden group-hover:border-white/20 transition-colors duration-500 rounded-[2px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#11212D]/60 to-transparent z-10" />
          
          {/* Wireframe/Grid Aesthetic (Since we don't have actual project images yet) */}
          <div 
            className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }} 
          />
          
          <div className="absolute inset-0 flex items-center justify-center flex-col z-20">
             <span className="text-white/10 font-mono text-[10vw] md:text-[8vw] tracking-tighter font-bold uppercase select-none">
               {project.id}
             </span>
          </div>
       </div>

       {/* Project Info Block */}
       <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 w-full px-2">
          <div className="flex flex-col max-w-2xl">
             <div className="flex items-center gap-4 mb-5">
                <span className="text-[9px] font-mono text-white/50 border border-white/10 px-2 py-1 rounded-[2px] uppercase tracking-[0.2em]">
                  {project.year}
                </span>
                <span className="text-[9px] font-mono text-white/40 tracking-[0.2em] uppercase">
                  {project.status}
                </span>
             </div>
             <h3 className={`text-4xl md:text-5xl font-medium text-white/95 mb-6 ${playfair.className} tracking-tight`}>
               {project.title}
             </h3>
             <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-xl">
               {project.shortDescription}
             </p>
          </div>

          <div className="flex flex-col lg:items-end gap-8 lg:w-[320px] shrink-0">
             <div className="flex flex-wrap gap-2 lg:justify-end">
               {project.techStack.map(tech => (
                 <span key={tech} className="text-[9px] font-mono text-white/40 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1.5 uppercase tracking-[0.1em] rounded-[2px]">
                   {tech}
                 </span>
               ))}
             </div>
             <Link href={`/work/${project.id}`} className="group/link flex items-center gap-3 text-[10px] font-mono text-white/70 tracking-[0.2em] uppercase mt-2 border-b border-white/20 pb-2 hover:border-white hover:text-white transition-all">
                View Case Study
                <ArrowRight size={14} className="group-hover/link:translate-x-1.5 transition-transform" />
             </Link>
          </div>
       </div>
    </div>
  );
}
