interface SectionLabelProps {
  text: string;
  accent?: boolean;
}

export function SectionLabel({ text, accent = false }: SectionLabelProps) {
  return (
    <p
      style={{
        fontSize: 11,
        fontFamily: "var(--font-geist-mono)",
        color: accent ? "var(--accent-gold)" : "var(--text-muted)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        margin: 0,
        marginBottom: 16,
      }}
    >
      {text}
    </p>
  );
}
