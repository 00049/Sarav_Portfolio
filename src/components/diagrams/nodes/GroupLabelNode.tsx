export function GroupLabelNode({ data }: { data: Record<string, string> }) {
  return (
    <div
      style={{
        fontSize: 10,
        fontFamily: "var(--font-geist-mono)",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        pointerEvents: "none",
      }}
    >
      {data.label}
    </div>
  );
}
