"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { StatusBadge } from "./StatusBadge";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isLive = project.status === "production";

  return (
    <Card
      className={cn(
        "group flex flex-col h-full overflow-hidden transition-all duration-300 relative border",
        project.priority
          ? "border-[rgba(155,168,171,0.35)] shadow-[0_4px_24px_rgba(6,20,27,0.4)]"
          : "border-border shadow-none",
        "hover:border-border-hover hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(6,20,27,0.6),0_4px_12px_rgba(6,20,27,0.4)]"
      )}
    >
      {/* Top accent bar */}
      <div
        className="shrink-0"
        style={{
          height: project.priority ? 3 : 2,
          background: project.priority
            ? "linear-gradient(90deg, #4A5C6A 0%, #9BA8AB 100%)"
            : isLive
            ? "linear-gradient(90deg, #CCD0CF 0%, #9BA8AB 100%)"
            : "linear-gradient(90deg, #253745 0%, #11212D 100%)",
        }}
      />

      {/* Card body */}
      <CardContent className="p-5 pb-6 pt-5 flex flex-col grow">
        {/* Top row: Status + Year */}
        <div className="flex items-center justify-between mb-4">
          <StatusBadge status={project.status} />
          <span className="text-[11px] font-mono text-muted bg-background-elevated border border-border px-2 py-0.5 rounded-full">
            {project.year}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl text-primary tracking-[-0.01em] m-0 font-playfair font-medium">
          {project.title}
        </h3>

        <p className="text-sm text-secondary leading-relaxed mt-2 mb-5 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Spacer */}
        <div className="grow" />

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-secondary bg-[rgba(17,33,45,0.8)] border border-border px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[11px] font-mono text-muted bg-background-elevated border border-border px-2.5 py-0.5 rounded">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/work/${project.id}`}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary no-underline transition-all duration-200 group-hover:gap-2.5"
        >
          Case Study <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-[3px]" />
        </Link>
      </CardContent>
    </Card>
  );
}
