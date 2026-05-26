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
      style={{
        padding: "120px 0",
        background: "var(--background)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <FadeInSection>
          <SectionLabel text="Featured Work" />
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 500,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              margin: 0,
              marginBottom: 48,
              fontFamily: "var(--font-playfair)",
            }}
          >
            Built for production.
          </h2>
        </FadeInSection>

        <div
          className="featured-projects-grid"
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
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
