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

      <section className="px-6 pb-[120px] max-w-[1100px] mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-muted">
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
