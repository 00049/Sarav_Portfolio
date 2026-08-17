import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeInSection } from "@/components/motion/FadeInSection";
import type { Project } from "@/types";

interface FeaturedProjectsGridProps {
  projects: Project[];
}

export function FeaturedProjectsGrid({ projects }: FeaturedProjectsGridProps) {
  return (
    <section
      aria-label="Featured Projects"
      className="py-[120px] bg-background"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeInSection>
          <SectionLabel text="Featured Work" />
          <h2 className="text-[clamp(36px,5vw,56px)] font-medium text-primary tracking-[-0.02em] m-0 mb-12 font-playfair">
            Built for production.
          </h2>
        </FadeInSection>

        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {projects.map((project, i) => (
            <FadeInSection key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
