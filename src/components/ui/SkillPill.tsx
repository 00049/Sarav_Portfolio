import * as Icons from "lucide-react";

interface SkillPillProps {
  name: string;
  proficiency?: "core" | "proficient" | "familiar";
  icon?: string;
  size?: "sm" | "md";
}

export function SkillPill({ name, proficiency = "core", icon, size = "md" }: SkillPillProps) {
  const IconComponent = icon ? (Icons[icon as keyof typeof Icons] as React.ElementType) : undefined;
  
  const isSm = size === "sm";
  const opacity = proficiency === "core" ? 1 : proficiency === "proficient" ? 0.8 : 0.6;
  const borderColor = proficiency === "core" ? "var(--border-hover)" : "var(--border)";

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: isSm ? 6 : 8,
        padding: isSm ? "4px 10px" : "6px 14px",
        borderRadius: 999,
        background: "var(--background-card)",
        border: `1px solid ${borderColor}`,
        opacity,
        transition: "all 200ms ease",
      }}
    >
      {IconComponent && (
        <IconComponent size={isSm ? 12 : 14} style={{ color: "var(--accent)" }} />
      )}
      <span
        style={{
          fontSize: isSm ? 12 : 13,
          fontFamily: "var(--font-geist-sans)",
          color: "var(--text-primary)",
        }}
      >
        {name}
      </span>
    </div>
  );
}
