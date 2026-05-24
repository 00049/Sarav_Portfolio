"use client";

import { TagPill } from "@/components/ui/TagPill";

interface ProjectFilterBarProps {
  tags: string[];
  activeTag: string;
  onChange: (tag: string) => void;
}

export function ProjectFilterBar({ tags, activeTag, onChange }: ProjectFilterBarProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
        padding: "0 24px",
        maxWidth: 1100,
        margin: "0 auto",
        marginBottom: 48,
      }}
    >
      <span
        style={{
          fontSize: 12,
          fontFamily: "var(--font-geist-mono)",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginRight: 8,
        }}
      >
        Filter by
      </span>
      {tags.map((tag) => (
        <TagPill
          key={tag}
          label={tag}
          active={activeTag === tag}
          onClick={() => onChange(tag)}
        />
      ))}
    </div>
  );
}
