import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getProjectBySlug, getCaseStudyBySlug, getPrevNextProjects } from "@/lib/utils/projects";
import { projects } from "@/lib/data/projects";

// Case study section components
import { CaseStudyHero } from "@/components/sections/casestudy/CaseStudyHero";
import { CaseStudyMetrics } from "@/components/sections/casestudy/CaseStudyMetrics";
import { CaseStudyProblem } from "@/components/sections/casestudy/CaseStudyProblem";
import { CaseStudyArchitecture } from "@/components/sections/casestudy/CaseStudyArchitecture";
import { CaseStudyChallenges } from "@/components/sections/casestudy/CaseStudyChallenges";
import { CaseStudySecurity } from "@/components/sections/casestudy/CaseStudySecurity";
import { CaseStudyOutcomes } from "@/components/sections/casestudy/CaseStudyOutcomes";
import { CaseStudyNav } from "@/components/sections/casestudy/CaseStudyNav";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await Promise.resolve(params);
  const project = getProjectBySlug(slug);
  const caseStudy = getCaseStudyBySlug(slug);

  if (!project || !caseStudy) {
    notFound();
  }

  const { prev, next } = getPrevNextProjects(slug);

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ minHeight: "100vh" }}>
        <CaseStudyHero
          title={caseStudy.title}
          subtitle={caseStudy.subtitle}
          status={project.status}
          year={project.year}
          role={caseStudy.role}
          readTime={caseStudy.readTime}
          timeline={caseStudy.timeline}
          techStack={project.techStack}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
        />
        <CaseStudyMetrics metrics={project.metrics} />
        <CaseStudyProblem headline={caseStudy.problemStatement.headline} body={caseStudy.problemStatement.body} />
        <CaseStudyArchitecture headline={caseStudy.architecture.headline} body={caseStudy.architecture.body} keyDecisions={caseStudy.architecture.keyDecisions} projectId={project.id} />
        {caseStudy.challenges && <CaseStudyChallenges challenges={caseStudy.challenges} />}
        {caseStudy.securityConsiderations && <CaseStudySecurity items={caseStudy.securityConsiderations} />}
        <CaseStudyOutcomes outcomes={caseStudy.outcomes} lessons={caseStudy.lessons} />
        <CaseStudyNav prev={prev} next={next} />
      </main>
      <Footer />
    </>
  );
}
