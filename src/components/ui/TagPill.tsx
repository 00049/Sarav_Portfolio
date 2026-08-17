import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagPillVariants = cva(
  "inline-flex items-center text-[11px] font-mono tracking-[0.03em] px-2 py-[3px] rounded-full border whitespace-nowrap transition-all duration-150 select-none",
  {
    variants: {
      variant: {
        default: "border-border text-muted bg-transparent",
        accent: "border-border-hover text-secondary bg-[rgba(74,92,106,0.12)]",
        muted: "border-transparent text-muted bg-transparent",
      },
      active: {
        true: "",
        false: "",
      },
      interactive: {
        true: "cursor-pointer",
        false: "cursor-default",
      }
    },
    compoundVariants: [
      {
        variant: "default",
        active: true,
        className: "border-border-hover text-primary bg-background-card",
      }
    ],
    defaultVariants: {
      variant: "default",
      active: false,
      interactive: false,
    },
  }
);

interface TagPillProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagPillVariants> {
  label: string;
  active?: boolean;
}

export function TagPill({
  className,
  label,
  variant,
  active = false,
  onClick,
  ...props
}: TagPillProps) {
  const isInteractive = !!onClick;

  return (
    <span
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={onClick}
      onKeyDown={isInteractive ? (e) => e.key === "Enter" && onClick?.(e as unknown as React.MouseEvent<HTMLSpanElement>) : undefined}
      className={cn(tagPillVariants({ variant, active, interactive: isInteractive, className }))}
      {...props}
    >
      {label}
    </span>
  );
}
