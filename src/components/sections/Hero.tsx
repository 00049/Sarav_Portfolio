"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Download, ChevronDown, Shield, Zap, Lock } from "lucide-react";
import { resumeUrl } from "@/lib/data/site";

const stats = [
  { icon: Zap, value: "1", label: "Live SaaS Product" },
  { icon: Shield, value: "CEH", label: "EC-Council Certified" },
  { icon: Lock, value: "2+", label: "SIEM Platforms" },
];

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const textRevealVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen pt-20"
      style={{ background: "var(--background)" }}
    >
      {/* ── Background: Animated dot grid ────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(45,107,228,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          animation: "grid-pulse 6s ease-in-out infinite",
        }}
      />
      {/* ── Background: Radial glow layers ───────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(45,107,228,0.18) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 70% 80%, rgba(0,212,255,0.06) 0%, transparent 60%)",
        }}
      />
      {/* ── Background: Scanline texture ─────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(transparent 50%, rgba(0,0,0,0.15) 50%)",
          backgroundSize: "100% 3px",
          opacity: 0.4,
        }}
      />

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl mx-auto w-full"
        >
          {/* Eyebrow pills */}
          <motion.div variants={itemVariants} className="mb-8 flex flex-wrap justify-center gap-3">
            <span
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest"
              style={{
                background: "var(--glow-gold)",
                border: "1px solid var(--border-hover)",
                color: "var(--accent-gold)",
                fontFamily: "var(--font-geist-mono)",
                boxShadow: "0 0 20px var(--glow-gold), inset 0 0 12px var(--glow-gold)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "var(--accent-green)",
                  boxShadow: "0 0 8px var(--accent-green)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              Available for hire
            </span>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest backdrop-blur-md"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              <Shield size={14} className="text-[var(--accent-blue)]" />
              CEH Certified
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              variants={textRevealVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-geist-sans)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Architecting{" "}
              <span style={{ color: "var(--text-secondary)" }}>Secure</span>
              <br className="hidden md:block" />
              Scalable{" "}
              <span
                style={{
                  color: "var(--accent-gold)",
                  textShadow: "0 0 40px var(--glow-gold), 0 0 80px var(--glow-gold)",
                }}
              >
                Systems.
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
            style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
          >
            I bridge offensive security and production engineering. <br className="hidden md:block" />
            <span className="text-[var(--text-primary)] font-medium">I build resilient systems. And I break them too.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6 mb-16 w-full sm:w-auto"
          >
            <MagneticButton>
              <Link
                href="/projects"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-blue) 100%)",
                  color: "#000000",
                  fontFamily: "var(--font-geist-sans)",
                  boxShadow: "0 4px 20px var(--glow-gold), 0 0 0 1px var(--accent-gold)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(-2px) scale(1.02)";
                  el.style.boxShadow = "0 8px 32px var(--glow-gold), 0 0 0 1px var(--accent-gold)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = "0 4px 20px var(--glow-gold), 0 0 0 1px var(--accent-gold)";
                }}
              >
                See My Projects
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <a
                href={resumeUrl}
                download
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-geist-sans)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--border-hover)";
                  el.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--border)";
                  el.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <Download size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                Download Resume
              </a>
            </MagneticButton>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-0 w-full max-w-lg"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 flex-1"
                style={{
                  padding: "16px 12px",
                  borderLeft: i > 0 ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="flex items-center gap-1.5">
                  <stat.icon size={14} style={{ color: "var(--accent-gold)" }} />
                  <span
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-geist-mono)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-geist-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>


      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--accent-green); }
          50% { opacity: 0.6; box-shadow: 0 0 16px var(--accent-green); }
        }
      `}</style>
    </section>
  );
}
