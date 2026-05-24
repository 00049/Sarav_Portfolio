interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}

export function PageHeader({ title, subtitle, badge, centered = false }: PageHeaderProps) {
  return (
    <div
      style={{
        paddingTop: 140,
        paddingBottom: 60,
        paddingInline: "clamp(24px, 5vw, 48px)",
        textAlign: centered ? "center" : "left",
        maxWidth: centered ? 800 : 1100,
        margin: "0 auto",
      }}
    >
      {badge && (
        <div style={{ marginBottom: 16 }}>
          <span
            style={{
              fontSize: 11,
              fontFamily: "var(--font-geist-mono)",
              color: "var(--accent-gold)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              border: "1px solid rgba(117,22,45,0.3)",
              background: "rgba(117,22,45,0.06)",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            {badge}
          </span>
        </div>
      )}

      <h1
        style={{
          fontSize: "clamp(40px, 6vw, 56px)",
          fontWeight: 600,
          color: "var(--text-primary)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          margin: 0,
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            fontSize: 16,
            color: "var(--text-muted)",
            lineHeight: 1.6,
            marginTop: 16,
            maxWidth: 600,
            marginInline: centered ? "auto" : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
