// ─────────────────────────────────────────────────────────────────────────────
// Portfolio – Shared TypeScript Interfaces
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectStatus =
  | "live"
  | "production"
  | "complete"
  | "in-progress"
  | "archived"
  | "private";

export interface Metric {
  label: string;
  value: string;
  /** Short contextual note rendered below the value */
  detail?: string;
  unit?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problemStatement: string;
  techStack: string[];
  metrics: Metric[];
  securityHighlights: string[];
  architectureSummary: string;
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
  coverImage?: string;
  tags: string[];
}

// ─────────────────────────────────────────────────────────────────────────────

export interface TechCategory {
  id: string;
  label: string;
  description: string;
  icon: string;
  items: {
    name: string;
    proficiency: "core" | "proficient" | "familiar";
    note?: string;
  }[];
}

// ─────────────────────────────────────────────────────────────────────────────

export interface CaseStudy {
  projectId: string;
  title: string;
  subtitle: string;
  readTime: string;
  timeline: string;
  role: string;
  overview: string;
  problemStatement: {
    headline: string;
    body: string;
  };
  architecture: {
    headline: string;
    body: string;
    keyDecisions: {
      decision: string;
      rationale: string;
      tradeoff: string;
    }[];
  };
  challenges: {
    title: string;
    body: string;
    resolution: string;
  }[];
  securityConsiderations: {
    area: string;
    implementation: string;
    rationale: string;
  }[];
  performanceOptimizations: {
    metric: string;
    approach: string;
    outcome: string;
  }[];
  lessons: string[];
  outcomes: {
    label: string;
    value: string;
    detail: string;
  }[];
}

// ─────────────────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // icon name key e.g. "github" | "linkedin" | "mail"
}

// ─────────────────────────────────────────────────────────────────────────────

export interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export interface Section {
  id: string;
  label: string;
}
