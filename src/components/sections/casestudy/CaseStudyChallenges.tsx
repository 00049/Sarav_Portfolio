import { SectionLabel } from "@/components/ui/SectionLabel";

interface CaseStudyChallengesProps {
  challenges: {
    title: string;
    body: string;
    resolution: string;
  }[];
}

export function CaseStudyChallenges({ challenges }: CaseStudyChallengesProps) {
  if (!challenges || challenges.length === 0) return null;

  return (
    <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto", borderBottom: "1px solid var(--border)" }}>
      <SectionLabel text="Challenges & Resolutions" />
      <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.02em", margin: 0, marginBottom: 48, fontFamily: "var(--font-geist-sans)" }}>
        Overcoming bottlenecks.
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {challenges.map((challenge, i) => (
          <div key={i}>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)", margin: 0, marginBottom: 16, fontFamily: "var(--font-geist-sans)", display: "flex", gap: 12 }}>
              <span style={{ color: "var(--accent-gold)" }}>0{i + 1}</span> {challenge.title}
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
              <div>
                <span style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>The Challenge</span>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{challenge.body}</p>
              </div>
              <div>
                <span style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>The Resolution</span>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{challenge.resolution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
