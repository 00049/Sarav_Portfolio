"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, Terminal, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const education = [
  { institution: "Bennett University", degree: "B.Tech Cyber Security", year: "Expected 2027" },
  { institution: "Bishop Cotton School", degree: "High School", year: "2023" },
  { institution: "Auckland House School", degree: "Primary & Middle", year: "2019" },
];

export function AboutTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left: Text Content & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <SectionLabel text="The Engineer" />
            <h2
              className="text-4xl md:text-6xl mt-4 mb-8"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-playfair)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              I build secure systems. <br /> And I break them too.
            </h2>

            <div
              className="space-y-6 text-base md:text-lg mb-12"
              style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
            >
              <p>
                I am a security-first engineer driven by the tension between building resilient architecture and uncovering its flaws. My foundation sits squarely at the intersection of offensive security knowledge and defensive full-stack development. I don&apos;t just find vulnerabilities—I engineer the systems that prevent them.
              </p>
              <p>
                I prioritize execution. Over the past year, I built and deployed NAANZ, a distributed vulnerability scanning SaaS that leverages LLMs to translate raw security data into actionable business reports. Concurrently, I engineered a SOC-grade threat detection lab using IBM QRadar and FortiSIEM to actively correlate and tune alerts against simulated enterprise attack vectors.
              </p>
              <p>
                I am currently looking for roles as a Security Engineer, SOC Analyst, or Security-focused Full-Stack Developer at a product-driven company. I thrive in environments where infrastructure code and security posture are treated with equal rigor.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="pt-8 border-t mb-10" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-3 mb-10">
                <GraduationCap size={20} style={{ color: "var(--text-primary)" }} />
                <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--text-primary)", fontFamily: "var(--font-geist-sans)" }}>Education</h3>
              </div>

              <div className="relative">
                {/* Animated continuous line */}
                <motion.div
                  className="absolute left-[5px] top-3 w-[2px]"
                  style={{
                    background: "linear-gradient(to bottom, var(--border) 80%, transparent 100%)",
                  }}
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Glowing flowing pulse over the line */}
                <motion.div
                  className="absolute left-[5px] top-3 w-[2px]"
                  style={{
                    background: "linear-gradient(to bottom, transparent 0%, var(--accent-gold) 50%, transparent 100%)",
                  }}
                  initial={{ height: 0, opacity: 0, top: 0 }}
                  whileInView={{ height: "40%", opacity: 1, top: "60%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                />

                <div className="space-y-10">
                  {education.map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="relative pl-8"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
                    >
                      {/* Animated Dot */}
                      <motion.div
                        className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2"
                        style={{
                          background: i === 0 ? "var(--background)" : "var(--background)",
                          borderColor: i === 0 ? "var(--accent-gold)" : "var(--text-muted)",
                          boxShadow: i === 0 ? "0 0 12px var(--glow-gold)" : "none",
                          zIndex: 10,
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.2 + 0.1 }}
                      >
                        {i === 0 && (
                          <motion.div 
                            className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full"
                            style={{ background: "var(--accent-gold)" }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                          />
                        )}
                      </motion.div>

                      <h4 
                        className="font-semibold text-lg tracking-tight" 
                        style={{ color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)", transition: "color 300ms ease" }}
                      >
                        {item.institution}
                      </h4>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{item.degree}</span>
                        <span 
                          className="text-xs px-2.5 py-0.5 rounded-full" 
                          style={{ 
                            background: "var(--background-card)", 
                            color: "var(--text-muted)", 
                            fontFamily: "var(--font-geist-mono)", 
                            border: "1px solid var(--border)" 
                          }}
                        >
                          {item.year}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-medium transition-all duration-200"
              style={{
                color: "var(--accent-gold)",
                fontSize: 14,
                fontFamily: "var(--font-geist-sans)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "10px"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "8px"; }}
            >
              Full Profile <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: Premium Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[420px] flex-shrink-0"
          >
            <div
              className="w-full rounded-2xl relative overflow-hidden"
              style={{
                background: "var(--background-card)",
                border: "1px solid var(--border)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
              }}
            >
              {/* Card top: identity block */}
              <div
                className="relative flex flex-col items-center justify-center py-16 px-8"
                style={{
                  background: "linear-gradient(135deg, #13131A 0%, #13131A 50%, #0A0A0F 100%)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {/* Dot grid overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l" style={{ borderColor: "var(--accent-gold)", opacity: 0.4 }} />
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r" style={{ borderColor: "var(--accent-gold)", opacity: 0.4 }} />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l" style={{ borderColor: "var(--accent-gold)", opacity: 0.4 }} />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r" style={{ borderColor: "var(--accent-gold)", opacity: 0.4 }} />

                {/* Monogram */}
                <div
                  className="relative z-10 flex items-center justify-center w-28 h-28 rounded-2xl mb-6"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 0 32px rgba(255,255,255,0.03), inset 0 0 24px rgba(255,255,255,0.02)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 44,
                      fontWeight: 500,
                      fontFamily: "var(--font-playfair)",
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    SSP
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="relative z-10 text-xl font-bold mb-1 text-center"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-geist-sans)" }}
                >
                  Saravpreet Singh Pruthi
                </h3>
                <p
                  className="relative z-10 text-xs uppercase tracking-widest mb-4 text-center"
                  style={{ color: "var(--accent-gold)", fontFamily: "var(--font-geist-mono)" }}
                >
                  Security / Full-Stack Engineer
                </p>

                {/* Available badge */}
                <div
                  className="relative z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    background: "var(--background-elevated)",
                    border: "1px solid var(--border)",
                    fontSize: 11,
                    fontFamily: "var(--font-geist-mono)",
                    color: "var(--text-primary)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-white"
                    style={{ boxShadow: "0 0 6px rgba(255,255,255,0.5)", animation: "pulse 2s ease-in-out infinite" }}
                  />
                  Available for hire
                </div>
              </div>

              {/* Card bottom: metadata */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <MapPin size={14} style={{ color: "var(--text-muted)" }} />
                  <span style={{ fontSize: 13, color: "var(--text-secondary)", fontFamily: "var(--font-geist-sans)" }}>
                    Shimla, India · Open to Remote
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Terminal size={14} style={{ color: "var(--text-muted)" }} />
                  <span style={{ fontSize: 13, color: "var(--text-secondary)", fontFamily: "var(--font-geist-sans)" }}>
                    B.Tech Cybersecurity · Bennett University
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 mt-1 pt-4 border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid var(--border)",
                      fontSize: 10,
                      fontFamily: "var(--font-geist-mono)",
                      color: "var(--text-primary)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    CEH v12
                  </div>
                  <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
                    ECC3512964807
                  </span>
                </div>
              </div>

              {/* Terminal footer */}
              <div
                className="px-6 py-3 border-t flex items-center gap-2"
                style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.3)" }}
              >
                <span style={{ fontSize: 10, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
                  SYS.USR_SSP · ONLINE
                </span>
                <span
                  className="w-1.5 h-3 rounded-sm ml-auto"
                  style={{ background: "var(--accent-gold)", animation: "blink-cursor 1.2s step-end infinite" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px var(--accent-green); }
          50% { opacity: 0.5; box-shadow: 0 0 12px var(--accent-green); }
        }
      `}</style>
    </section>
  );
}
