import type { CSSProperties } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// SectionHeader
//
// Reusable eyebrow / heading / subheading pattern used across all sections.
// ─────────────────────────────────────────────────────────────────────────────

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  style?: CSSProperties;
}

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "left",
  style,
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "center" : "left";

  return (
    <div style={{ textAlign, marginBottom: 56, ...style }}>
      {/* Eyebrow */}
      <p
        style={{
          fontSize: 12,
          fontFamily: "var(--font-geist-mono)",
          color: "var(--text-muted)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          margin: 0,
          marginBottom: 8,
          fontWeight: 500,
        }}
      >
        {eyebrow}
      </p>

      {/* Heading */}
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 600,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          margin: 0,
          marginBottom: subheading ? 10 : 0,
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        {heading}
      </h2>

      {/* Subheading */}
      {subheading && (
        <p
          style={{
            fontSize: 15,
            color: "var(--text-secondary)",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
