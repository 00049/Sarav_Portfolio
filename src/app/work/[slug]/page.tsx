import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getProjectBySlug, getCaseStudyBySlug, getPrevNextProjects } from "@/lib/utils/projects";
import { projects } from "@/lib/data/projects";

// Case study section components
import { ArchitectureDiagramDynamic } from "@/components/ui/ArchitectureDiagramDynamic";
import { CaseStudyHero } from "@/components/sections/casestudy/CaseStudyHero";
import { CaseStudyNav } from "@/components/sections/casestudy/CaseStudyNav";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const project = getProjectBySlug(slug);
  const caseStudy = getCaseStudyBySlug(slug);
  if (!project || !caseStudy) return { title: "Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: caseStudy.executiveSummary,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(project.title)}&subtitle=${encodeURIComponent(caseStudy.subtitle || '')}`,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      images: [`/api/og?title=${encodeURIComponent(project.title)}&subtitle=${encodeURIComponent(caseStudy.subtitle || '')}`],
    }
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Reusable Section Components
// ─────────────────────────────────────────────────────────────────────────────

function CaseStudyExecutiveSummary({ content }: { content: string }) {
  if (!content) return null;
  return (
    <section style={{ padding: "0 24px", maxWidth: 800, margin: "0 auto", marginBottom: 60 }}>
      <h2 style={{ fontSize: 14, fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-primary)", marginBottom: 16 }}>Executive Summary</h2>
      <p style={{ fontSize: 20, fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.6 }}>
        {content}
      </p>
    </section>
  );
}

function CaseStudyTextSection({ title, content }: { title: string; content: string }) {
  if (!content) return null;
  return (
    <section style={{ padding: "0 24px", maxWidth: 800, margin: "0 auto", marginBottom: 60 }}>
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "var(--text-primary)", marginBottom: 16, letterSpacing: "-0.02em" }}>{title}</h2>
      <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, whiteSpace: "pre-line" }}>
        {content}
      </p>
    </section>
  );
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
      <main id="main-content" style={{ minHeight: "100vh", paddingBottom: 80 }}>
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
        
        <CaseStudyExecutiveSummary content={caseStudy.executiveSummary} />
        
        {/* Decorative divider before deep dive */}
        <div style={{ maxWidth: 800, margin: "0 auto", marginBottom: 60, padding: "0 24px" }}>
          <div style={{ height: 1, background: "var(--border)", width: "100%" }} />
        </div>

        <CaseStudyTextSection title="The Core Problem" content={caseStudy.coreProblem} />
        <CaseStudyTextSection title="Architectural Constraints" content={caseStudy.architecturalConstraints} />
        <CaseStudyTextSection title="Technical Implementation" content={caseStudy.technicalImplementation} />
        <CaseStudyTextSection title="Tradeoffs & Mistakes" content={caseStudy.tradeoffsAndMistakes} />
        
        {caseStudy.architectureFlow && (
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
             <ArchitectureDiagramDynamic flow={caseStudy.architectureFlow} />
          </div>
        )}

        <CaseStudyTextSection title="Final Outcome" content={caseStudy.finalOutcome} />
        
        <CaseStudyNav prev={prev} next={next} />
      </main>
      <Footer />
    </>
  );
}
