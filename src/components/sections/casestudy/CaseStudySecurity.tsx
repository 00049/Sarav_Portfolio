import { SectionLabel } from "@/components/ui/SectionLabel";
import { ShieldCheck } from "lucide-react";

interface CaseStudySecurityProps {
  items: {
    area: string;
    implementation: string;
    rationale: string;
  }[];
}

export function CaseStudySecurity({ items }: CaseStudySecurityProps) {
  if (!items || items.length === 0) return null;

  return (
    <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto", borderBottom: "1px solid var(--border)" }}>
      <SectionLabel text="Security Engineering" />
      <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.02em", margin: 0, marginBottom: 48, fontFamily: "var(--font-geist-sans)" }}>
        Built secure by design.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {items.map((item, i) => (
          <div key={i} style={{ background: "var(--background-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <ShieldCheck size={18} style={{ color: "var(--accent-gold)" }} />
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", margin: 0, fontFamily: "var(--font-geist-sans)" }}>{item.area}</h3>
            </div>
            <div>
              <span style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 4 }}>Implementation</span>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{item.implementation}</p>
            </div>
            <div>
              <span style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 4 }}>Rationale</span>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{item.rationale}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
