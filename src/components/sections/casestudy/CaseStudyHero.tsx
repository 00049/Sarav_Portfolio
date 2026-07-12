import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { ProjectStatus } from "@/types";

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  status: ProjectStatus;
  year: number;
  role: string;
  readTime: string;
  timeline: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function CaseStudyHero({
  title,
  subtitle,
  status,
  year,
  role,
  readTime,
  timeline,
  techStack,
  githubUrl,
  liveUrl,
}: CaseStudyHeroProps) {
  return (
    <section style={{ paddingTop: 140, paddingBottom: 60, paddingInline: 24, maxWidth: 900, margin: "0 auto" }}>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 13,
          fontFamily: "var(--font-geist-mono)",
          color: "var(--text-muted)",
          textDecoration: "none",
          marginBottom: 32,
          transition: "color 200ms ease",
        }}
      >
        <ArrowLeft size={14} /> Back to Work
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
        <StatusBadge status={status} size="md" />
        <span style={{ fontSize: 13, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)", background: "var(--background-card)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: 999 }}>
          {year}
        </span>
        <span style={{ fontSize: 13, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)" }}>{readTime}</span>
      </div>

      <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0, marginBottom: 24, fontFamily: "var(--font-playfair)" }}>
        {title}
      </h1>

      <p style={{ fontSize: "clamp(18px, 3vw, 24px)", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0, marginBottom: 48, maxWidth: 800 }}>
        {subtitle}
      </p>

      {/* Meta grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, padding: 32, background: "var(--background-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", marginBottom: 48 }}>
        <div>
          <div style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Role</div>
          <div style={{ fontSize: 15, color: "var(--text-primary)", fontWeight: 500 }}>{role}</div>
        </div>
        <div>
          <div style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Timeline</div>
          <div style={{ fontSize: 15, color: "var(--text-primary)", fontWeight: 500 }}>{timeline}</div>
        </div>
        <div>
          <div style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Core Stack</div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>{techStack.slice(0, 5).join(" · ")}{techStack.length > 5 && " · +more"}</div>
        </div>
      </div>

      {/* Links row */}
      {(githubUrl || liveUrl) && (
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", fontSize: 14, fontWeight: 500, color: "#000000", background: "#FFFFFF", borderRadius: "999px", textDecoration: "none", transition: "all 200ms ease", boxShadow: "0 4px 14px rgba(255,255,255,0.15)" }}>
              <ExternalLink size={16} /> Live Project
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", fontSize: 14, fontWeight: 500, color: "var(--text-primary)", background: "transparent", border: "1px solid var(--border)", borderRadius: "999px", textDecoration: "none", transition: "all 200ms ease" }}>
              <Github size={16} /> Repository
            </a>
          )}
        </div>
      )}
    </section>
  );
}
