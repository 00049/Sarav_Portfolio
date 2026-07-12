"use client";

import type { CaseStudy } from "@/types";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 10,
        fontFamily: "var(--font-geist-mono)",
        color: "var(--text-muted)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

export function CaseStudyExpanded({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div
      style={{
        paddingTop: 32,
        borderTop: "1px solid var(--border)",
        marginTop: 24,
      }}
    >
      <div style={{ maxWidth: 720 }}>
        {/* 1. EXECUTIVE SUMMARY */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Executive Summary</SectionLabel>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {caseStudy.executiveSummary}
          </p>
        </div>

        {/* 2. THE CORE PROBLEM */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>The Core Problem</SectionLabel>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {caseStudy.coreProblem}
          </p>
        </div>

        {/* 3. ARCHITECTURAL CONSTRAINTS */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Architectural Constraints</SectionLabel>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {caseStudy.architecturalConstraints}
          </p>
        </div>

        {/* 4. TECHNICAL IMPLEMENTATION */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Technical Implementation</SectionLabel>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {caseStudy.technicalImplementation}
          </p>
        </div>

        {/* 5. FINAL OUTCOME */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Final Outcome</SectionLabel>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {caseStudy.finalOutcome}
          </p>
        </div>
      </div>
    </div>
  );
}
