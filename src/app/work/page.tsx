import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { projects } from "@/lib/data/projects";
import { getAllTags } from "@/lib/utils/projects";
import { FadeInSection } from "@/components/motion/FadeInSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my production-grade security and full-stack projects.",
};

export default function ProjectsPage() {
  const tags = getAllTags();

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <FadeInSection>
          <PageHeader
            title="Projects"
            subtitle="Production systems, autonomous security tooling, and AI integrations."
            badge={`${projects.length} Projects`}
          />
        </FadeInSection>
        <ProjectsGrid projects={projects} tags={tags} />
      </main>
      <Footer />
    </>
  );
}
