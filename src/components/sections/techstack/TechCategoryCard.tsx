"use client";

import { useState } from "react";
import type { ElementType } from "react";
import * as Icons from "lucide-react";
import type { TechCategory } from "@/types";

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
      style={{
        background: "var(--background-card)",
        border: "1px solid",
        borderColor: hovered ? "var(--border-hover)" : "var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: 24,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 250ms ease",
      }}
    >
      {/* ── Header row ────────────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            background: "rgba(242,217,160,0.08)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent-gold)",
            flexShrink: 0,
          }}
        >
          <IconComponent size={16} />
        </div>

        <h4
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
            margin: 0,
            fontFamily: "var(--font-geist-sans)",
          }}
        >
          {category.label}
        </h4>

        <div
          style={{
            marginLeft: "auto",
            fontSize: 11,
            fontFamily: "var(--font-geist-mono)",
            color: "var(--text-muted)",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--border)",
            padding: "2px 7px",
            borderRadius: 999,
          }}
        >
          {category.items.length} tools
        </div>
      </div>

      {/* ── Description ───────────────────────────────────────────────────── */}
      <p
        style={{
          fontSize: 13,
          color: "var(--text-muted)",
          lineHeight: 1.6,
          marginTop: 8,
          marginBottom: 16,
        }}
      >
        {category.description}
      </p>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div
        style={{
          width: "100%",
          height: 1,
          background: "var(--border)",
        }}
      />

      {/* ── Items List ────────────────────────────────────────────────────── */}
      <div
        style={{
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          flex: 1,
        }}
      >
        {category.items.map((item, idx) => {
          const isCore = item.proficiency === "core";
          const isProficient = item.proficiency === "proficient";

          return (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              {/* Left: Name + Note */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  {item.name}
                </span>
                {item.note && (
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {item.note}
                  </span>
                )}
              </div>

              {/* Right: Proficiency Indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  flexShrink: 0,
                }}
              >
                <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--accent-gold)",
                    }}
                  />
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background:
                        isCore || isProficient ? "var(--accent-gold)" : "transparent",
                      border:
                        isCore || isProficient ? "none" : "1px solid var(--border)",
                    }}
                  />
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: isCore ? "var(--accent-gold)" : "transparent",
                      border: isCore ? "none" : "1px solid var(--border)",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontFamily: "var(--font-geist-sans)",
                    color: isCore ? "var(--accent-gold)" : "var(--text-muted)",
                    marginLeft: 4,
                  }}
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
