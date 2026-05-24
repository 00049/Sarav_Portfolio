import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// SectionContainer
//
// Reusable wrapper for every portfolio section.
// Handles padding, max-width centering, and horizontal padding.
// ─────────────────────────────────────────────────────────────────────────────

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
  /** Override max-width (default 1100px) */
  maxWidth?: number | string;
  style?: CSSProperties;
}

export function SectionContainer({
  id,
  className,
  children,
  maxWidth = 1100,
  style,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(className)}
      style={{
        paddingBlock: "120px",
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
          marginInline: "auto",
          paddingInline: "clamp(20px, 4vw, 48px)",
        }}
      >
        {children}
      </div>
    </section>
  );
}
