import { Handle, Position } from "@xyflow/react";
import { User, Zap, Shield, CreditCard, Layers, Server, Globe, Database, Brain, Box } from "lucide-react";
import { useState } from "react";
import type { ElementType } from "react";

const ICON_MAP: Record<string, ElementType> = {
  User, Zap, Shield, CreditCard, Layers, Server, Globe, Database, Brain, Box
};

export function ServiceNode({ data }: { data: Record<string, string> }) {
  const [hovered, setHovered] = useState(false);

  const Icon = ICON_MAP[data.icon] || Box;

  let borderLeftStyle = "3px solid transparent";
  let backgroundStyle = "var(--background-card)";
  let borderStyle = "solid";
  const borderColor = hovered ? "var(--border-hover)" : "var(--border)";

  switch (data.variant) {
    case "api":
      borderLeftStyle = "3px solid var(--accent-gold)";
      break;
    case "worker":
      borderLeftStyle = "3px solid #2D6BE4"; // Electric Blue
      break;
    case "storage":
      borderLeftStyle = "3px solid rgba(255,255,255,0.4)";
      break;
    case "external":
      borderLeftStyle = "3px solid rgba(45,107,228,0.3)";
      backgroundStyle = "rgba(45,107,228,0.05)";
      borderStyle = "dashed";
      break;
    case "auth":
      borderLeftStyle = "3px solid var(--accent-gold)";
      break;
    case "client":
      borderLeftStyle = "3px solid rgba(255,255,255,0.2)";
      break;
  }

  // Determine icon color based on variant
  let iconColor = "var(--text-muted)";
  if (data.variant === "api") iconColor = "var(--accent-gold)";
  if (data.variant === "worker") iconColor = "#2D6BE4";
  if (data.variant === "storage") iconColor = "rgba(255,255,255,0.4)";
  if (data.variant === "external") iconColor = "rgba(45,107,228,0.5)";
  if (data.variant === "auth") iconColor = "var(--accent-gold)";
  if (data.variant === "client") iconColor = "rgba(255,255,255,0.2)";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--background-elevated)" : backgroundStyle,
        border: `1px ${borderStyle}`,
        borderColor,
        borderLeft: borderLeftStyle,
        borderRadius: "var(--radius-md)",
        padding: "12px 16px",
        minWidth: 140,
        position: "relative",
        boxShadow: hovered ? "0 0 16px rgba(45,107,228,0.2)" : "none",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
        transition: "all 200ms ease",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        style={{ opacity: 0 }}
        isConnectable={false}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ color: iconColor }}>
          <Icon size={20} />
        </div>
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-primary)",
              fontFamily: "var(--font-geist-sans)",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            {data.label}
          </div>
          {data.sublabel && (
            <div
              style={{
                fontSize: 10,
                color: "var(--text-muted)",
                fontFamily: "var(--font-geist-mono)",
                marginTop: 2,
              }}
            >
              {data.sublabel}
            </div>
          )}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        style={{ opacity: 0 }}
        isConnectable={false}
      />
    </div>
  );
}
