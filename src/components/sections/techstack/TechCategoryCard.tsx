"use client";

import { useState } from "react";
import type { ElementType } from "react";
import * as Icons from "lucide-react";
import type { TechCategory } from "@/types";
import { cn } from "@/lib/utils";

interface TechCategoryCardProps {
  category: TechCategory;
}

export function TechCategoryCard({ category }: TechCategoryCardProps) {
  const [hovered, setHovered] = useState(false);

  // Dynamically resolve icon from lucide-react
  const IconComponent = (Icons[category.icon as keyof typeof Icons] || Icons.Code) as ElementType;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "bg-background-card border rounded-lg p-6 h-full flex flex-col transition-all duration-250 ease-out",
        hovered ? "border-border-hover" : "border-border"
      )}
    >
      {/* ── Header row ────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[rgba(242,217,160,0.08)] border border-border rounded-md flex items-center justify-center text-accent shrink-0">
          <IconComponent size={16} />
        </div>

        <h4 className="text-[15px] font-semibold text-primary tracking-[-0.01em] m-0 font-sans">
          {category.label}
        </h4>

        <div className="ml-auto text-[11px] font-mono text-muted bg-[rgba(255,255,255,0.04)] border border-border px-[7px] py-[2px] rounded-full">
          {category.items.length} tools
        </div>
      </div>

      {/* ── Description ───────────────────────────────────────────────────── */}
      <p className="text-[13px] text-muted leading-[1.6] mt-2 mb-4">
        {category.description}
      </p>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-border" />

      {/* ── Items List ────────────────────────────────────────────────────── */}
      <div className="mt-4 flex flex-col gap-2 flex-1">
        {category.items.map((item, idx) => {
          const isCore = item.proficiency === "core";
          const isProficient = item.proficiency === "proficient";

          return (
            <div
              key={idx}
              className="flex items-center justify-between gap-3"
            >
              {/* Left: Name + Note */}
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-[13px] text-secondary font-sans">
                  {item.name}
                </span>
                {item.note && (
                  <span className="text-[11px] text-muted font-mono">
                    {item.note}
                  </span>
                )}
              </div>

              {/* Right: Proficiency Indicator */}
              <div className="flex items-center gap-1 shrink-0">
                <div className="flex gap-[3px] items-center">
                  <div className="w-[6px] h-[6px] rounded-full bg-accent" />
                  <div
                    className={cn(
                      "w-[6px] h-[6px] rounded-full",
                      isCore || isProficient ? "bg-accent border-none" : "bg-transparent border border-border"
                    )}
                  />
                  <div
                    className={cn(
                      "w-[6px] h-[6px] rounded-full",
                      isCore ? "bg-accent border-none" : "bg-transparent border border-border"
                    )}
                  />
                </div>
                <span
                  className={cn(
                    "text-[10px] font-sans ml-1",
                    isCore ? "text-accent" : "text-muted"
                  )}
                >
                  {isCore ? "Core" : isProficient ? "Proficient" : "Familiar"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
