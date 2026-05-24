import { MetricCard } from "@/components/ui/MetricCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CheckCircle2 } from "lucide-react";

interface CaseStudyOutcomesProps {
  outcomes: { label: string; value: string; detail: string }[];
  lessons: string[];
}

export function CaseStudyOutcomes({ outcomes, lessons }: CaseStudyOutcomesProps) {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto", borderBottom: "1px solid var(--border)" }}>
      <SectionLabel text="Impact / Results" />
      <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.02em", margin: 0, marginBottom: 48, fontFamily: "var(--font-geist-sans)" }}>
        Impact and takeaways.
      </h2>

      {/* Outcomes Grid */}
      {outcomes && outcomes.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginBottom: 64 }}>
          {outcomes.map((outcome, i) => (
            <MetricCard
              key={i}
              label={outcome.label}
              value={outcome.value}
              detail={outcome.detail}
            />
          ))}
        </div>
      )}

      {/* Lessons */}
      {lessons && lessons.length > 0 && (
        <div style={{ background: "var(--background-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 32 }}>
          <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)", margin: 0, marginBottom: 24, fontFamily: "var(--font-geist-sans)" }}>Key Learnings</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {lessons.map((lesson, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <CheckCircle2 size={18} style={{ color: "var(--accent-gold)", flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6 }}>{lesson}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
