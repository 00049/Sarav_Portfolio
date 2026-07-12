"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ExternalLink, ShieldCheck } from "lucide-react";
import type { Project } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// Inline SVG — GitHub (avoids Lucide barrel-optimization issue)
// ─────────────────────────────────────────────────────────────────────────────
function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Metric Item Row — parses numbers into monospace
// ─────────────────────────────────────────────────────────────────────────────
function MetricItem({ text }: { text: string }) {
  const parts = text.split(/(\d+(?:[%+]|\.\d+)?)/);
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        color: "var(--text-muted)",
        fontFamily: "var(--font-geist-sans)",
      }}
    >
      <span
        style={{
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--text-muted)",
          opacity: 0.5,
        }}
      />
      <span>
        {parts.map((part, i) =>
          /^\d+(?:[%+]|\.\d+)?$/.test(part) ? (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: "var(--text-primary)",
                fontWeight: 500,
              }}
            >
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Status badge config
// ─────────────────────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<
  string,
  { label: string; color: string; bg: string; border: string; dot: string }
> = {
  production: {
    label: "Live",
    color: "var(--accent-gold)",
    bg: "rgba(117,22,45,0.08)",
    border: "rgba(117,22,45,0.15)",
    dot: "var(--accent-gold)",
  },
  live: {
    label: "Live",
    color: "var(--accent-gold)",
    bg: "rgba(117,22,45,0.08)",
    border: "rgba(117,22,45,0.15)",
    dot: "var(--accent-gold)",
  },
  complete: {
    label: "Complete",
    color: "var(--accent-warm)",
    bg: "rgba(86,11,24,0.08)",
    border: "rgba(86,11,24,0.15)",
    dot: "var(--accent-warm)",
  },
  "in-progress": {
    label: "In Progress",
    color: "var(--accent-cyan)",
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.2)",
    dot: "#06b6d4",
  },
  archived: {
    label: "Archived",
    color: "var(--text-muted)",
    bg: "rgba(107,114,128,0.1)",
    border: "rgba(107,114,128,0.2)",
    dot: "#6b7280",
  },
  private: {
    label: "Private",
    color: "var(--text-muted)",
    bg: "rgba(107,114,128,0.1)",
    border: "rgba(107,114,128,0.2)",
    dot: "#6b7280",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Label — small uppercase mono label used for Problem / Architecture
// ─────────────────────────────────────────────────────────────────────────────
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 11,
        fontFamily: "var(--font-geist-mono)",
        color: "var(--text-muted)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        margin: 0,
        marginBottom: 6,
      }}
    >
      {children}
    </p>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ProjectCard
// ─────────────────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  // Subtle parallax move for the abstract background graphic
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const statusCfg = STATUS_CONFIG[project.status] ?? STATUS_CONFIG["archived"];
  const isPlaceholderGithub =
    !project.githubUrl ||
    project.githubUrl.startsWith("[") ||
    project.githubUrl === "";
  const isPlaceholderLive =
    !project.liveUrl ||
    project.liveUrl.startsWith("[") ||
    project.liveUrl === "";

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(14, 14, 16, 0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid",
        borderColor: hovered ? "var(--border-hover)" : "var(--border)",
        borderRadius: "var(--radius-lg)",
        position: "relative",
        overflow: "hidden",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px var(--border-hover)"
          : "0 4px 20px rgba(0,0,0,0.2)",
        transition: "all 400ms cubic-bezier(0.23, 1, 0.32, 1)",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* ── Parallax Header Graphic ─────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: featured ? 280 : 180, borderBottom: "1px solid var(--border)" }}>
        <motion.div 
          style={{ 
            y,
            position: "absolute",
            inset: -40,
            background: `linear-gradient(135deg, var(--background-elevated) 0%, var(--background-card) 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
         suppressHydrationWarning>
          {/* Abstract Wireframe Mesh based on project ID */}
          <div 
            className="w-full h-full opacity-30" 
            style={{
              backgroundImage: `
                radial-gradient(circle at ${project.id === 'naanz' ? '80% 20%' : project.id === 'phishsim-pro' ? '20% 20%' : '20% 80%'}, ${project.id === 'phishsim-pro' ? '#FF3366' : 'var(--accent-gold)'}, transparent 40%),
                radial-gradient(circle at ${project.id === 'naanz' ? '20% 80%' : project.id === 'phishsim-pro' ? '80% 80%' : '80% 20%'}, ${project.id === 'phishsim-pro' ? 'var(--accent-cyan)' : 'var(--accent-blue)'}, transparent 40%),
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "100% 100%, 100% 100%, 32px 32px, 32px 32px"
            }}
          />
        </motion.div>
      </div>

      <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(117,22,45,0.2), transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 300ms ease",
          pointerEvents: "none",
        }}
      />

      {/* ── Top row: title + status ──────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Left: title + short description */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              margin: 0,
              fontFamily: "var(--font-geist-sans)",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              marginTop: 4,
            }}
          >
            {project.shortDescription}
          </p>
        </div>

        {/* Right: status badge */}
        <div style={{ flexShrink: 0 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "3px 8px",
              borderRadius: 9999,
              fontSize: 11,
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.05em",
              color: statusCfg.color,
              background: statusCfg.bg,
              border: `1px solid ${statusCfg.border}`,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: statusCfg.dot,
                flexShrink: 0,
              }}
            />
            {statusCfg.label}
          </span>
        </div>
      </div>

      {/* ── Impact Metrics Row ───────────────────────────────────────── */}
      {project.cardMetrics && project.cardMetrics.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px 16px",
            marginTop: 16,
          }}
        >
          {project.cardMetrics.map((metric, i) => (
            <MetricItem key={i} text={metric} />
          ))}
        </div>
      )}

      {/* ── Divider ──────────────────────────────────────────────────── */}
      <div
        style={{
          width: "100%",
          height: 1,
          background: "var(--border)",
          marginBlock: 20,
        }}
      />

      {/* ── Problem statement ────────────────────────────────────────── */}
      <div style={{ marginBottom: 16 }}>
        <FieldLabel>Problem</FieldLabel>
        <p
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.problemStatement}
        </p>
      </div>

      {/* ── Architecture summary ─────────────────────────────────────── */}
      <div style={{ marginBottom: 20 }}>
        <FieldLabel>Architecture</FieldLabel>
        <p
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.architectureSummary}
        </p>
      </div>

      </div>

      {/* ── Tech stack tags ──────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          marginTop: 20,
        }}
      >
        {project.techStack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: 11,
              fontFamily: "var(--font-geist-mono)",
              background: "rgba(117,22,45,0.04)",
              border: "1px solid var(--border)",
              padding: "3px 8px",
              borderRadius: "var(--radius-sm)",
              color: "var(--text-muted)",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* ── Security details expandable ──────────────────────────────── */}
      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setSecurityOpen((v) => !v)}
          className="active-scale"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "transparent",
            border: "none",
            padding: 0,
            fontSize: 12,
            color: "var(--text-muted)",
            cursor: "pointer",
            fontFamily: "var(--font-geist-sans)",
            transition: "color 200ms ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color =
              "var(--text-secondary)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color =
              "var(--text-muted)";
          }}
          aria-expanded={securityOpen}
          aria-controls={`security-${project.id}`}
        >
          <ShieldCheck size={12} />
          Security Details
          <motion.span
            animate={{ rotate: securityOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "inline-flex" }}
           suppressHydrationWarning>
            <ChevronDown size={12} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {securityOpen && (
            <motion.div
              id={`security-${project.id}`}
              key="security-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: "hidden" }}
             suppressHydrationWarning>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {project.securityHighlights.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    <ShieldCheck
                      size={12}
                      style={{
                        color: "var(--accent-cyan)",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Bottom action row ────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 24,
          paddingTop: 20,
          borderTop: "1px solid var(--border)",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        {/* Left: GitHub link */}
        <div>
          {isPlaceholderGithub ? (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: "var(--text-muted)",
                opacity: 0.5,
                cursor: "not-allowed",
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              <GitHubIcon size={13} />
              Private Repository
            </span>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 200ms ease",
                fontFamily: "var(--font-geist-sans)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-muted)";
              }}
            >
              <GitHubIcon size={13} />
              Source Code
            </a>
          )}
        </div>

        {/* Right: Live demo link */}
        {!isPlaceholderLive && project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 500,
              color: "#000000",
              background: "var(--accent-gold)",
              padding: "6px 14px",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              fontFamily: "var(--font-geist-sans)",
              border: "none",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.boxShadow = "0 0 16px var(--glow-gold)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.boxShadow = "none";
              el.style.transform = "translateY(0)";
            }}
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
