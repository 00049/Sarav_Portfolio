"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectFilterBar } from "./ProjectFilterBar";
import { FadeInSection } from "@/components/motion/FadeInSection";
import type { Project } from "@/types";

interface ProjectsGridProps {
  projects: Project[];
  tags: string[];
}

export function ProjectsGrid({ projects, tags }: ProjectsGridProps) {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <>
      <FadeInSection delay={0.2}>
        <ProjectFilterBar
          tags={tags}
          activeTag={activeTag}
          onChange={setActiveTag}
        />
      </FadeInSection>

      <section
        style={{
          padding: "0 24px 120px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-muted)" }}>
            No projects found matching the selected tag.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, i) => (
              <FadeInSection key={project.id} delay={0.1 + i * 0.05}>
                <ProjectCard project={project} />
              </FadeInSection>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
