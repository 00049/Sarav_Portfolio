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
  cardMetrics?: string[];
  securityHighlights: string[];
  architectureSummary: string;
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
  coverImage?: string;
  tags: string[];
  priority?: boolean;
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

export interface ArchitectureNode {
  id: string;
  position: { x: number; y: number };
  data: { label: string; subLabel?: string };
  type?: string;
}

export interface ArchitectureEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
}

export interface ArchitectureFlow {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  fallbackText: string;
}

// ─────────────────────────────────────────────────────────────────────────────

export interface CaseStudy {
  projectId: string;
  title: string;
  subtitle: string;
  readTime: string;
  timeline: string;
  role: string;
  executiveSummary: string;
  coreProblem: string;
  architecturalConstraints: string;
  technicalImplementation: string;
  tradeoffsAndMistakes: string;
  finalOutcome: string;
  architectureFlow?: ArchitectureFlow;
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
