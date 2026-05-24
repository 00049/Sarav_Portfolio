import { SectionLabel } from "@/components/ui/SectionLabel";

interface CaseStudyProblemProps {
  headline: string;
  body: string;
}

export function CaseStudyProblem({ headline, body }: CaseStudyProblemProps) {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto", borderBottom: "1px solid var(--border)" }}>
      <SectionLabel text="The Problem" />
      <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.02em", margin: 0, marginBottom: 24, fontFamily: "var(--font-geist-sans)", maxWidth: 700 }}>
        {headline}
      </h2>
      <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8, margin: 0, maxWidth: 800 }}>
        {body}
      </p>
    </section>
  );
}
