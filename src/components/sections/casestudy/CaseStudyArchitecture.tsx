"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import dynamic from "next/dynamic";

const ArchitectureDiagram = dynamic(
  () => import("@/components/diagrams/ArchitectureDiagram"),
  { ssr: false, loading: () => <div style={{ height: 500, display: "flex", alignItems: "center", justifyContent: "center" }}>Loading diagram...</div> }
);

interface CaseStudyArchitectureProps {
  headline: string;
  body: string;
  keyDecisions: {
    decision: string;
    rationale: string;
    tradeoff: string;
  }[];
  projectId: string;
}

export function CaseStudyArchitecture({ headline, body, keyDecisions, projectId }: CaseStudyArchitectureProps) {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", marginBottom: 64 }}>
        <SectionLabel text="What I Built" />
        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.02em", margin: 0, marginBottom: 24, fontFamily: "var(--font-geist-sans)" }}>
          {headline}
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
          {body}
        </p>
      </div>

      {projectId === "shieldcheck" || projectId === "naanz" || projectId === "phishsim-pro" ? (
        <div style={{ width: "100%", height: 500, background: "var(--background-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", marginBottom: 64, overflow: "hidden", position: "relative" }}>
           <ArchitectureDiagram projectId={projectId} />
        </div>
      ) : null}

      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)", margin: 0, fontFamily: "var(--font-geist-sans)" }}>Key Technical Decisions</h3>
        {keyDecisions.map((decision, i) => (
          <div key={i} style={{ background: "var(--background-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: 24 }}>
            <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", margin: 0, marginBottom: 12, fontFamily: "var(--font-geist-sans)", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "var(--accent-gold)" }}>Decision {i + 1}:</span> {decision.decision}
            </h4>
            <div style={{ display: "grid", gap: 16 }}>
              <div>
                <span style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 4 }}>Rationale</span>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{decision.rationale}</p>
              </div>
              <div>
                <span style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 4 }}>Tradeoff</span>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{decision.tradeoff}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
