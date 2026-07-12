"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { StatusBadge } from "./StatusBadge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isLive = project.status === "production";

  return (
    <div
      className="project-card-group group"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "var(--background-card)",
        border: project.priority ? "1px solid rgba(16, 185, 129, 0.4)" : "1px solid var(--border)",
        boxShadow: project.priority ? "0 8px 32px rgba(16, 185, 129, 0.08)" : "none",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: project.priority ? 4 : 3,
          background: project.priority
            ? "linear-gradient(90deg, #10B981 0%, #06B6D4 100%)"
            : isLive
            ? "linear-gradient(90deg, #FFFFFF 0%, #A1A1AA 100%)"
            : "linear-gradient(90deg, #3f3f46 0%, #27272a 100%)",
          flexShrink: 0,
        }}
      />

      {/* Card body */}
      <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        {/* Top row: Status + Year */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <StatusBadge status={project.status} />
          <span
            style={{
              fontSize: 11,
              fontFamily: "var(--font-geist-mono)",
              color: "var(--text-muted)",
              background: "var(--background-elevated)",
              border: "1px solid var(--border)",
              padding: "2px 8px",
              borderRadius: "999px",
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Content */}
        <h3
          style={{
            fontSize: 20,
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
            margin: 0,
            fontFamily: "var(--font-playfair)",
            fontWeight: 500,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            margin: 0,
            marginBottom: 20,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.shortDescription}
        </p>

        {/* Spacer */}
        <div style={{ flexGrow: 1 }} />

        {/* Tech stack chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: 11,
                fontFamily: "var(--font-geist-mono)",
                color: isLive ? "var(--text-primary)" : "var(--text-muted)",
                background: isLive ? "rgba(255, 255, 255, 0.08)" : "var(--background-elevated)",
                border: `1px solid ${isLive ? "rgba(255, 255, 255, 0.2)" : "var(--border)"}`,
                padding: "3px 10px",
                borderRadius: 4,
              }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span
              style={{
                fontSize: 11,
                fontFamily: "var(--font-geist-mono)",
                color: "var(--text-muted)",
                background: "var(--background-elevated)",
                border: "1px solid var(--border)",
                padding: "3px 10px",
                borderRadius: 4,
              }}
            >
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/work/${project.id}`}
          className="project-card-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            fontWeight: 500,
            color: "var(--text-primary)",
            textDecoration: "none",
            transition: "gap 200ms ease",
          }}
        >
          Case Study <ArrowRight size={14} className="arrow-icon" style={{ transition: "transform 200ms ease" }} />
        </Link>
      </div>

      <style>{`
        .project-card-group:hover {
          border-color: var(--border-hover);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.5);
        }
        .project-card-group:hover .project-card-cta {
          gap: 10px;
        }
        .project-card-group:hover .arrow-icon {
          transform: translateX(3px);
        }
      `}</style>
    </div>
  );
}
