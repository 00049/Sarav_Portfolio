"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProjectCard } from "./projects/ProjectCard";
import { featuredProjects } from "@/lib/data/projects";

// ─────────────────────────────────────────────────────────────────────────────
// Projects Section
// ─────────────────────────────────────────────────────────────────────────────

export function Projects() {
  return (
    <SectionContainer id="work">
      {/* Section header */}
      <FadeIn>
        <SectionHeader
          eyebrow="Selected Work"
          heading="Projects That Ship"
          subheading="Production-grade systems. No tutorial clones."
        />
      </FadeIn>

      {/* Cards — A/B Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {featuredProjects.map((project, i) => (
          <FadeIn 
            key={project.id} 
            delay={i * 0.1}
            className={i < 2 ? "lg:col-span-2" : "lg:col-span-1"}
          >
            <ProjectCard project={project} featured={i < 2} />
          </FadeIn>
        ))}
      </div>

      {/* More on GitHub */}
      <div
        style={{
          marginTop: 40,
          textAlign: "center",
        }}
      >
        <a
          href="https://github.com/00049"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12,
            fontFamily: "var(--font-geist-mono)",
            color: "var(--text-muted)",
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "color 200ms ease",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color =
              "var(--text-secondary)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color =
              "var(--text-muted)";
          }}
        >
          More projects available on GitHub →
        </a>
      </div>
    </SectionContainer>
  );
}
