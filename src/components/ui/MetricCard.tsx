interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  detail?: string;
  size?: "sm" | "lg";
}

export function MetricCard({ label, value, unit, detail, size = "sm" }: MetricCardProps) {
  const isLarge = size === "lg";

  return (
    <div
      className="metric-card-hover group"
      style={{
        background: "var(--background-card)",
        border: "1px solid var(--border)",
        borderTop: "2px solid rgba(45,107,228, 0.5)",
        borderRadius: "var(--radius-md)",
        padding: isLarge ? "24px 28px" : "16px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        transition: "all 300ms ease",
      }}
    >
      <style>{`
        .metric-card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          border-color: var(--border-hover);
          border-top-color: var(--accent-gold);
        }
      `}</style>
      <div
        style={{
          fontSize: 10,
          fontFamily: "var(--font-geist-mono)",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 6,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: isLarge ? 28 : 18,
            fontWeight: 600,
            color: "var(--text-primary)",
            fontFamily: "var(--font-geist-sans)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        {unit && (
          <span
            style={{
              fontSize: isLarge ? 13 : 11,
              color: "var(--text-muted)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            {unit}
          </span>
        )}
      </div>
      {detail && (
        <div
          style={{
            fontSize: 12,
            color: "var(--text-muted)",
            lineHeight: 1.5,
            marginTop: 2,
          }}
        >
          {detail}
        </div>
      )}
    </div>
  );
}
