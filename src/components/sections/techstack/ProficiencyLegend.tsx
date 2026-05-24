export function ProficiencyLegend() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        fontSize: 12,
        fontFamily: "var(--font-geist-mono)",
        color: "var(--text-muted)",
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ display: "flex", gap: 3 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-gold)" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-gold)" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-gold)" }} />
        </div>
        <span>Core</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ display: "flex", gap: 3 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-gold)" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-gold)" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "transparent", border: "1px solid var(--border)" }} />
        </div>
        <span>Proficient</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ display: "flex", gap: 3 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-gold)" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "transparent", border: "1px solid var(--border)" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "transparent", border: "1px solid var(--border)" }} />
        </div>
        <span>Familiar</span>
      </div>
    </div>
  );
}
