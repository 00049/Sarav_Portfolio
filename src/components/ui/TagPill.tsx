interface TagPillProps {
  label: string;
  variant?: "default" | "accent" | "muted";
  active?: boolean;
  onClick?: () => void;
}

export function TagPill({ label, variant = "default", active = false, onClick }: TagPillProps) {
  const isInteractive = !!onClick;

  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    fontSize: 11,
    fontFamily: "var(--font-geist-mono)",
    letterSpacing: "0.03em",
    padding: "3px 8px",
    borderRadius: 999,
    border: "1px solid",
    whiteSpace: "nowrap",
    transition: "all 150ms ease",
    cursor: isInteractive ? "pointer" : "default",
    background: "none",
    userSelect: "none",
  };

  const variants: Record<string, React.CSSProperties> = {
    default: {
      color: active ? "var(--text-primary)" : "var(--text-muted)",
      borderColor: active ? "var(--border-hover)" : "var(--border)",
      background: active ? "var(--background-card)" : "transparent",
    },
    accent: {
      color: "var(--text-secondary)",
      borderColor: "var(--border-hover)",
      background: "rgba(74, 92, 106, 0.12)",
    },
    muted: {
      color: "var(--text-muted)",
      borderColor: "transparent",
      background: "transparent",
    },
  };

  return (
    <span
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
      style={{ ...base, ...variants[variant] }}
    >
      {label}
    </span>
  );
}
