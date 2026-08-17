"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export function CorePrinciples() {
  const shouldReduceMotion = useReducedMotion();
  const displayProjects = projects.slice(0, 4);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-32 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
        {/* Left Context - Sticky */}
        <div className="w-full md:w-1/3 flex flex-col md:sticky md:top-32 shrink-0">
          <h2 className="text-sm font-mono uppercase tracking-widest mb-6 text-muted">
            02 — Case Studies
          </h2>
          <h3 className="text-3xl font-medium mb-4 tracking-tight text-primary">
            Featured Projects
          </h3>
          <p className="text-sm leading-relaxed mb-8 text-secondary">
            Systems built with strict adherence to performance, security, and scalability constraints. Explore the architecture and outcomes behind each deployment.
          </p>
        </div>

        {/* Right Scrolling Stack */}
        <div className="w-full md:w-2/3 max-w-[500px] mx-auto">
          <div className="relative w-full pb-32">
            {displayProjects.map((project, i) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                i={i}
                reduceMotion={!!shouldReduceMotion} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  i,
  reduceMotion,
}: {
  project: typeof projects[0];
  i: number;
  reduceMotion: boolean;
}) {
  const rotateTarget = i % 2 === 0 ? -4 : 4;

  const cardVariants: Variants = {
    offscreen: {
      y: reduceMotion ? 0 : 250,
      opacity: reduceMotion ? 1 : 0,
      rotate: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: reduceMotion ? 0 : rotateTarget,
      transition: reduceMotion
        ? { duration: 0.2 }
        : { ease: [0.16, 1, 0.3, 1], duration: 1.2 }, // Ultra-smooth cinematic ease out
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      style={{
        position: "relative",
        marginBottom: -220, // Creates the stack overlap
        zIndex: i,
      }}
      whileHover={{
        y: -50, // Pop out further
        rotate: 0, // Straighten out perfectly on hover
        zIndex: 50, // Bring to absolute front
        transition: { ease: [0.16, 1, 0.3, 1], duration: 0.6 } // Glide smoothly
      }}
      className="origin-bottom group cursor-pointer"
    >
      <motion.div 
        variants={cardVariants}
        className="flex flex-col bg-[var(--background-card)] border border-[var(--border)] rounded-md overflow-hidden shadow-2xl"
      >
        {project.coverImage && (
          <div className="relative w-full h-[220px] border-b border-[var(--border)] overflow-hidden bg-[#0a1118]">
            <Image 
              src={project.coverImage} 
              alt={project.title}
              fill
              className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 mix-blend-screen"
            />
            {/* Subtle cyan glow overlay from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06141B] via-transparent to-transparent opacity-80" />
          </div>
        )}
        
        <div className="p-8 flex flex-col gap-5">
          <div>
            <div className="flex justify-between items-start mb-3">
              <span className="text-[12px] font-mono text-[var(--accent)] uppercase tracking-wider">
                {project.tags.slice(0, 2).join(" // ")}
              </span>
              <span className="text-[12px] font-mono text-[var(--text-muted)]">
                {project.year}
              </span>
            </div>
            
            <h3 className="text-2xl font-medium text-[var(--text-primary)] tracking-tight mb-3">
              {project.title}
            </h3>
            <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.slice(0, 4).map(tech => (
              <span 
                key={tech} 
                className="text-[11px] font-mono text-[var(--accent)] bg-[rgba(74,92,106,0.1)] px-2 py-1 rounded-[4px] border border-[var(--border)]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[11px] font-mono text-[var(--text-muted)] px-2 py-1">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>

          {/* Footer Link */}
          <div className="mt-4 pt-5 border-t border-[var(--border)] flex justify-between items-center relative z-20">
            <span className="text-[12px] text-[var(--text-muted)] line-clamp-1 pr-4">
              {project.metrics?.[0]?.detail || "View architecture & implementation"}
            </span>
            <Link 
              href={project.liveUrl || project.githubUrl || `/work/${project.id}`} 
              className="text-[13px] font-mono text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              EXPLORE <span className="text-[var(--accent)]">→</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
