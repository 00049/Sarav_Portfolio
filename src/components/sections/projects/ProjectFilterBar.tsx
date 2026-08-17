"use client";

import { TagPill } from "@/components/ui/TagPill";

interface ProjectFilterBarProps {
  tags: string[];
  activeTag: string;
  onChange: (tag: string) => void;
}

export function ProjectFilterBar({ tags, activeTag, onChange }: ProjectFilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 px-6 max-w-[1100px] mx-auto mb-12">
      <span className="text-xs font-mono text-muted uppercase tracking-[0.08em] mr-2">
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
