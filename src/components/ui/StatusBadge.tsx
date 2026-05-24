import type { ProjectStatus } from "@/types";

interface StatusBadgeProps {
  status: ProjectStatus | string;
  size?: "sm" | "md";
}

const STATUS_MAP: Record<string, { label: string; color: string; dot: string; glow: boolean }> = {
  live:        { label: "LIVE PRODUCT", color: "#00FF94", dot: "#00FF94", glow: true },
  production:  { label: "LIVE PRODUCT", color: "#00FF94", dot: "#00FF94", glow: true },
  lab:         { label: "Personal Lab", color: "var(--text-secondary)", dot: "var(--text-muted)", glow: false },
  complete:    { label: "Complete",    color: "var(--text-primary)", dot: "var(--text-muted)", glow: false },
  "in-progress": { label: "In Progress", color: "#F5A623", dot: "#F5A623", glow: true },
  archived:    { label: "Archived",   color: "var(--text-muted)", dot: "var(--border)", glow: false },
  private:     { label: "Private",    color: "var(--text-muted)", dot: "var(--border)", glow: false },
};

export function StatusBadge({ status, size = "sm" }: StatusBadgeProps) {
  const statusKey = typeof status === "string" ? status.toLowerCase() : status;
  const cfg = STATUS_MAP[statusKey] ?? { label: status, color: "var(--text-secondary)", dot: "var(--text-muted)", glow: false };
  const fontSize = size === "md" ? 12 : 11;
  const padding = size === "md" ? "4px 10px" : "3px 8px";
  const dotSize = size === "md" ? 8 : 6;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize,
        fontFamily: "var(--font-geist-mono)",
        color: cfg.color,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid var(--border)",
        borderRadius: 999,
        padding,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}
    >
      <span
        style={{
          width: dotSize,
          height: dotSize,
          borderRadius: "50%",
          background: cfg.dot,
          flexShrink: 0,
          boxShadow: cfg.glow ? `0 0 8px ${cfg.dot}` : "none",
          ...(cfg.glow ? { animation: "pulseDotStatus 2s ease-in-out infinite" } : {}),
        }}
      />
      {cfg.label}
      <style>{`
        @keyframes pulseDotStatus {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.85); box-shadow: 0 0 4px ${cfg.dot}; }
        }
      `}</style>
    </span>
  );
}
