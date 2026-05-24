import { projects } from "@/lib/data/projects";
import { caseStudiesData } from "@/lib/data/casestudies";
import type { Project, CaseStudy } from "@/types";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).slice(0, 3);
}

export function getAllTags(): string[] {
  const tags = projects.flatMap((p) => p.tags);
  return ["All", ...Array.from(new Set(tags))];
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.find((cs) => cs.projectId === slug);
}

export function getPrevNextProjects(
  currentSlug: string
): { prev?: Project; next?: Project } {
  const idx = projects.findIndex((p) => p.id === currentSlug);
  return {
    prev: idx > 0 ? projects[idx - 1] : undefined,
    next: idx < projects.length - 1 ? projects[idx + 1] : undefined,
  };
}
