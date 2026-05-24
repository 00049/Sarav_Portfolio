import type { Project } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// Projects Data
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "shieldcheck",
    title: "ShieldCheck",
    shortDescription:
      "AI-powered web security auditing SaaS — autonomous scanning, real-time findings, and enterprise-grade compliance reports.",
    problemStatement:
      "Security teams waste 70% of audit time on manual reconnaissance and report generation. ShieldCheck automates the full audit lifecycle, from passive OSINT gathering to DPDP-compliant PDF export.",
    techStack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Python",
      "TypeScript",
    ],
    metrics: [
      { label: "Scan speed", value: "< 90", unit: "seconds" },
      { label: "Findings detected", value: "40+", unit: "vuln classes" },
      { label: "Compliance frameworks", value: "4", unit: "DPDP / GDPR / PCI / SOC2" },
    ],
    securityHighlights: [
      "Passive + active reconnaissance pipeline",
      "CVSS-scored findings with remediation plans",
      "AI-generated fix suggestions via LLM integration",
      "DPDP penalty exposure analysis in INR",
    ],
    architectureSummary:
      "Microservices architecture with Celery workers handling async scan jobs, Redis for task queuing, FastAPI for the REST API layer, and Next.js for the frontend with real-time SSE polling.",
    status: "live",
    githubUrl: "https://github.com/00049",
    featured: true,
    year: 2025,
    tags: ["SaaS", "Security", "AI", "Full Stack"],
  },
  {
    id: "autonomous-threat-intel",
    title: "Autonomous Threat Intelligence Engine",
    shortDescription:
      "Real-time threat intelligence aggregation and correlation system using LLM-driven anomaly detection.",
    problemStatement:
      "SOC analysts are overwhelmed by alert noise — 10,000+ alerts per day with 95% false positives. This engine correlates signals across multiple feeds and uses semantic similarity to deduplicate and prioritize.",
    techStack: ["Python", "FastAPI", "Qdrant", "OpenAI API", "Redis", "PostgreSQL"],
    metrics: [
      { label: "Alert noise reduction", value: "87", unit: "%" },
      { label: "Mean time to triage", value: "< 2", unit: "minutes" },
    ],
    securityHighlights: [
      "Semantic deduplication via vector embeddings",
      "LLM-powered threat summarization",
      "MITRE ATT&CK framework mapping",
    ],
    architectureSummary:
      "Ingestion pipeline fetches from OSINT feeds, normalizes IOCs, embeds them into Qdrant, and uses GPT-4 for contextual threat narrative generation.",
    status: "in-progress",
    featured: true,
    year: 2026,
    tags: ["AI/ML", "Security", "Vector DB", "LLM"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Tech Stack Data
// ─────────────────────────────────────────────────────────────────────────────

export const techStack: Record<string, string | number>[] = [
  // Languages
  { name: "TypeScript", category: "Language", icon: "typescript", proficiency: 5, yearsUsed: 4 },
  { name: "Python", category: "Language", icon: "python", proficiency: 5, yearsUsed: 5 },
  { name: "Rust", category: "Language", icon: "rust", proficiency: 3, yearsUsed: 1 },

  // Frameworks
  { name: "Next.js", category: "Framework", icon: "nextjs", proficiency: 5, yearsUsed: 3 },
  { name: "FastAPI", category: "Framework", icon: "fastapi", proficiency: 5, yearsUsed: 3 },
  { name: "React", category: "Framework", icon: "react", proficiency: 5, yearsUsed: 4 },

  // Databases
  { name: "PostgreSQL", category: "Database", icon: "postgresql", proficiency: 4, yearsUsed: 4 },
  { name: "Redis", category: "Database", icon: "redis", proficiency: 4, yearsUsed: 3 },
  { name: "Qdrant", category: "Database", icon: "qdrant", proficiency: 3, yearsUsed: 1 },

  // AI/ML
  { name: "OpenAI API", category: "AI/ML", icon: "openai", proficiency: 5, yearsUsed: 2 },
  { name: "LangChain", category: "AI/ML", icon: "langchain", proficiency: 4, yearsUsed: 2 },
  { name: "Hugging Face", category: "AI/ML", icon: "huggingface", proficiency: 3, yearsUsed: 1 },

  // Security
  { name: "OWASP ZAP", category: "Security", icon: "owasp", proficiency: 4, yearsUsed: 3 },
  { name: "Burp Suite", category: "Security", icon: "burpsuite", proficiency: 4, yearsUsed: 3 },
  { name: "Nuclei", category: "Security", icon: "nuclei", proficiency: 4, yearsUsed: 2 },

  // Infrastructure
  { name: "Docker", category: "Infrastructure", icon: "docker", proficiency: 5, yearsUsed: 4 },
  { name: "Celery", category: "Infrastructure", icon: "celery", proficiency: 4, yearsUsed: 2 },
  { name: "Vercel", category: "Cloud", icon: "vercel", proficiency: 5, yearsUsed: 3 },
  { name: "AWS", category: "Cloud", icon: "aws", proficiency: 4, yearsUsed: 3 },
];

