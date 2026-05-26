"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Network, Terminal, Server, Layout, Database, GitBranch, Cpu, Factory, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

const skillsData = [
  {
    domain: "Security & SIEM",
    icon: Shield,
    color: "#EAEAEA",
    skills: ["IBM QRadar", "FortiSIEM", "FortiSOAR", "FortiGate", "Kali Linux", "Wireshark", "Nmap"],
  },
  {
    domain: "Networking",
    icon: Network,
    color: "#D4D4D8",
    skills: ["TCP/IP", "VLANs", "SSL/TLS", "DNS (SPF/DMARC)", "Firewall Config"],
  },
  {
    domain: "Backend",
    icon: Server,
    color: "#A1A1AA",
    skills: ["FastAPI", "AsyncIO", "Celery", "Redis", "REST API", "SQLAlchemy", "JWT", "HMAC"],
  },
  {
    domain: "Programming",
    icon: Terminal,
    color: "#EAEAEA",
    skills: ["Python", "TypeScript", "SQL"],
  },
  {
    domain: "AI/Integrations",
    icon: Cpu,
    color: "#D4D4D8",
    skills: ["LLM Integration", "Claude API", "Razorpay"],
  },
  {
    domain: "DevOps",
    icon: GitBranch,
    color: "#A1A1AA",
    skills: ["Docker", "Git", "Async Architecture"],
  },
  {
    domain: "Databases",
    icon: Database,
    color: "#EAEAEA",
    skills: ["PostgreSQL", "Alembic"],
  },
  {
    domain: "Frontend",
    icon: Layout,
    color: "#D4D4D8",
    skills: ["Next.js 14", "React.js"],
  },
  {
    domain: "OT/ICS",
    icon: Factory,
    color: "#A1A1AA",
    skills: ["CODESYS", "PLC Programming", "Modbus TCP", "Purdue Model", "IEC 62443"],
  },
];

export function SkillsSnapshot() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const progress = max > 0 ? el.scrollLeft / max : 0;
    setScrollProgress(progress);
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < max - 8);
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 md:py-32 overflow-hidden border-y"
      style={{
        background: "var(--background-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
          <div>
            <SectionLabel text="The Full Stack" />
            <h2
              className="text-4xl md:text-6xl mt-4"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-playfair)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              Breadth meets depth.
            </h2>
          </div>
          <p
            className="text-base md:text-lg max-w-md"
            style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}
          >
            A comprehensive overview of my technical capabilities spanning offensive security, enterprise infrastructure, and modern software engineering.
          </p>
        </div>

        {/* Featured Credential — fully clickable */}
        <Link href="/certifications/ceh" style={{ textDecoration: "none", display: "block" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl border mb-16 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, var(--background-card) 100%)",
              borderColor: "rgba(255,255,255,0.1)",
              transition: "all 300ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.3)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(255,255,255,0.05)";
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
            }}
          >
            <div
              className="flex items-center justify-center w-16 h-16 rounded-xl flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255, 0.15)",
                boxShadow: "0 0 20px rgba(255,255,255,0.05)",
              }}
            >
              <Award size={32} style={{ color: "var(--text-primary)" }} />
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-geist-sans)" }}
              >
                Certified Ethical Hacker (CEH v12)
              </h3>
              <p className="text-sm m-0" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                EC-Council credential validating advanced capabilities in vulnerability assessment, penetration testing methodologies, and defensive countermeasures.
                <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)", fontSize: 11 }}> · ECC3512964807</span>
              </p>
            </div>
            <div
              className="flex items-center gap-2 text-sm font-medium whitespace-nowrap"
              style={{ color: "var(--text-primary)" }}
            >
              View Details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Horizontal Scrolling Domain Cards */}
      <div className="relative w-full">
        {/* Left gradient fade — indicates more content to the left */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 24,
            width: 80,
            background: "linear-gradient(to right, var(--background-secondary) 0%, transparent 100%)",
            zIndex: 5,
            pointerEvents: "none",
            opacity: canScrollLeft ? 1 : 0,
            transition: "opacity 300ms ease",
          }}
        />
        {/* Right gradient fade — the professional scroll hint */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 24,
            width: 120,
            background: "linear-gradient(to left, var(--background-secondary) 0%, transparent 100%)",
            zIndex: 5,
            pointerEvents: "none",
            opacity: canScrollRight ? 1 : 0,
            transition: "opacity 300ms ease",
          }}
        />

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Spacer */}
          <div className="hidden xl:block min-w-[calc((100vw-1200px)/2-24px)] flex-shrink-0" />

          {skillsData.map((category, i) => (
            <motion.div
              key={category.domain}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="snap-center sm:snap-align-none min-w-[280px] w-[280px] md:min-w-[300px] md:w-[300px] flex-shrink-0 p-6 rounded-2xl border flex flex-col gap-5 skill-domain-card"
              style={{
                background: "var(--background-card)",
                borderColor: "var(--border)",
                transition: "all 250ms ease",
                borderTop: `2px solid ${category.color}22`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${category.color}44`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 24px ${category.color}15`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg"
                  style={{ background: `${category.color}15`, border: `1px solid ${category.color}30` }}
                >
                  <category.icon size={20} style={{ color: category.color }} />
                </div>
                <h4
                  className="text-base font-bold"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-geist-sans)" }}
                >
                  {category.domain}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-md"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      color: "var(--text-secondary)",
                      background: "var(--background-elevated)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* End spacer */}
          <div className="min-w-[24px] xl:min-w-[calc((100vw-1200px)/2)] flex-shrink-0" />
        </div>

        {/* Scroll progress track — Vercel/Linear style */}
        <div className="px-6 mt-2 max-w-[1200px] mx-auto">
          <div
            style={{
              height: 2,
              background: "var(--border)",
              borderRadius: 999,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${scrollProgress * 100}%`,
                background: "linear-gradient(90deg, #3f3f46 0%, #FFFFFF 100%)",
                borderRadius: 999,
                transition: "width 80ms linear",
                minWidth: scrollProgress > 0 ? 32 : 0,
              }}
            />
          </div>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </section>
  );
}
