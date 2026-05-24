import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/types";

interface CaseStudyNavProps {
  prev?: Project;
  next?: Project;
}

export function CaseStudyNav({ prev, next }: CaseStudyNavProps) {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div>
          {prev && (
            <Link
              href={`/projects/${prev.id}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                padding: 24,
                background: "var(--background-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                textDecoration: "none",
                transition: "all 200ms ease",
              }}
              className="nav-card"
            >
              <span style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: 6 }}>
                <ArrowLeft size={14} /> Previous Project
              </span>
              <span style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", fontFamily: "var(--font-geist-sans)" }}>{prev.title}</span>
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link
              href={`/projects/${next.id}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 8,
                padding: 24,
                background: "var(--background-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                textDecoration: "none",
                textAlign: "right",
                transition: "all 200ms ease",
              }}
              className="nav-card"
            >
              <span style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: 6 }}>
                Next Project <ArrowRight size={14} />
              </span>
              <span style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", fontFamily: "var(--font-geist-sans)" }}>{next.title}</span>
            </Link>
          )}
        </div>
      </div>
      <style>{`
        .nav-card:hover {
          border-color: var(--border-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59, 1, 11, 0.04);
        }
      `}</style>
    </section>
  );
}
