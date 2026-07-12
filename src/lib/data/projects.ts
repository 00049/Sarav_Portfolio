import type { Project } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects
//
// Two production-grade systems. No tutorial clones.
// Replace [GITHUB_URL_TO_BE_PROVIDED] and [LIVE_URL_TO_BE_PROVIDED]
// with actual URLs when they are available.
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "naanz",
    title: "NAANZ",
    shortDescription: "AI-Powered Security Audit SaaS",
    status: "production",
    featured: true,
    priority: true,
    year: 2025,
    tags: ["SaaS", "Security", "AI", "Full Stack"],
    techStack: [
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "AsyncIO",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "Claude API",
      "Razorpay",
      "JWT",
      "Next.js 14",
    ],
    cardMetrics: [
      "29 security modules",
      "DPDP Act 2023 mapped",
      "85% backend complete → production",
    ],
    metrics: [
      {
        label: "Concurrent scan execution",
        value: "Fully parallel",
        detail: "via Celery distributed task queue",
      },
      {
        label: "Scan coverage",
        value: "3 vectors",
        detail: "SSL/TLS, DNS (SPF/DMARC), open-port intelligence",
      },
      {
        label: "Payment security",
        value: "HMAC verified",
        detail: "idempotent transactions with gated report delivery",
      },
      {
        label: "LLM integration",
        value: "Claude API",
        detail: "raw findings → business-impact reports",
      },
    ],
    problemStatement:
      "Inspired by Razorpay's 'Fix My Itch' initiative, NAANZ addresses the challenge of making affordable cybersecurity checks accessible to small businesses. Security audits are expensive, slow, and produce reports that non-technical stakeholders cannot act on. NAANZ automates vulnerability scanning across SSL/TLS, DNS, and open-port attack surfaces, then uses an LLM to translate raw findings into plain-language business impact reports — making security intelligence accessible without a dedicated security team.",
    architectureSummary:
      "Distributed scanning pipeline built on FastAPI + Celery + Redis. Each scan job is broken into concurrent async workers, eliminating request-blocking bottlenecks. PostgreSQL with Alembic migrations handles persistent state. Razorpay + HMAC verification + JWT governs monetization and access control. Claude API processes raw vulnerability data into structured reports. Full Docker containerization ensures environment reproducibility.",
    securityHighlights: [
      "HMAC signature verification on all payment webhooks",
      "JWT-based access control with subscription tier gating",
      "OWASP-aligned API design (no sensitive data in URLs, rate limiting)",
      "SSL/TLS scan engine validates cipher suites and certificate chains",
    ],
    githubUrl: "https://github.com/00049/NANZ",
    liveUrl: "https://nanz-drab.vercel.app/",
  },

  {
    id: "thejakhoocrest",
    title: "The Jakhoo Crest",
    shortDescription: "Modern Himalayan Luxury Hotel",
    status: "production",
    featured: true,
    year: 2024,
    tags: ["Frontend", "UX/UI", "Next.js", "Tailwind CSS"],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    cardMetrics: [
      "Modern luxury aesthetic",
      "Seamless fluid animations",
      "Optimal performance score",
    ],
    metrics: [
      {
        label: "Performance",
        value: "Optimal",
        detail: "Fast load times via Next.js",
      },
      {
        label: "Design",
        value: "Immersive",
        detail: "Interactive mountain retreat experience",
      },
      {
        label: "UX",
        value: "Fluid",
        detail: "Hardware-accelerated animations",
      }
    ],
    problemStatement:
      "Luxury hospitality websites typically suffer from severe performance bloat due to oversized media and third-party widgets. The Jakhoo Crest required a digital sanctuary that mirrored the physical property's serenity without sacrificing speed. The challenge was delivering a striking, hardware-accelerated experience that achieves optimal Core Web Vitals on low-power mobile devices.",
    architectureSummary:
      "Engineered a Next.js 14 static generation architecture to ensure optimal SEO and instantaneous delivery. Leveraged Framer Motion for declarative, physics-based micro-interactions that strictly respect user reduced-motion preferences. Developed custom React hooks to synchronize scroll-driven animations with route transitions, achieving near-perfect Lighthouse scores.",
    securityHighlights: [],
    githubUrl: "https://github.com/00049/thejakhoocrest",
    liveUrl: "https://www.thejakhoocrest.com/",
  },
  {
    id: "phishsim-pro",
    title: "PhishSim Pro",
    shortDescription: "Enterprise Phishing Simulation Platform",
    status: "production",
    featured: true,
    year: 2025,
    tags: ["Security", "SaaS", "Full Stack", "Simulation"],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "PostgreSQL",
    ],
    cardMetrics: [
      "4+ attack vectors simulated",
      "Real-time behavioral scoring",
      "1 comprehensive dashboard",
    ],
    metrics: [
      {
        label: "Attack simulation",
        value: "Multiple Vectors",
        detail: "credentials, urgency, attachments, curiosity",
      },
      {
        label: "Real-time tracking",
        value: "Analytics",
        detail: "email opens, link clicks, credential capture",
      },
      {
        label: "Risk profiling",
        value: "Behavior Scoring",
        detail: "identifies human vulnerability distribution",
      },
    ],
    problemStatement:
      "Traditional security focuses heavily on infrastructure, but humans remain the most vulnerable attack vector. Organizations lack visibility into employee susceptibility to social engineering, leading to credential exposure and breaches through seemingly innocuous malicious links.",
    architectureSummary:
      "A full-stack simulation environment that enables organizations to design, launch, and monitor controlled phishing campaigns. It features a comprehensive template system, robust campaign management, and a real-time analytics dashboard that visualizes human risk through granular interaction tracking.",
    securityHighlights: [
      "Safe credential capture simulation (does not store real passwords)",
      "Realistic, categorized email templating system",
      "Granular user interaction tracking and telemetry",
    ],
    githubUrl: "https://github.com/00049/phishsim-pro",
    liveUrl: "https://phishsim-pro.vercel.app/login",
  },


  {
    id: "siem-lab",
    title: "SIEM Threat Detection Lab",
    shortDescription: "SOC-Grade Home Lab — IBM QRadar + FortiSIEM",
    status: "complete",
    featured: true,
    year: 2024,
    tags: ["Security", "SIEM", "SOC", "Detection Engineering"],
    techStack: [
      "IBM QRadar",
      "FortiSIEM",
      "Kali Linux",
      "Wireshark",
      "Nmap",
      "FortiGate",
    ],
    cardMetrics: [
      "3 attack categories simulated",
      "2 SIEM platforms integrated",
      "100% custom correlation rules",
    ],
    metrics: [
      {
        label: "Attack scenarios simulated",
        value: "3 categories",
        detail: "port scans, brute-force auth, lateral movement",
      },
      {
        label: "SIEM platforms integrated",
        value: "2 platforms",
        detail: "IBM QRadar + FortiSIEM running in parallel",
      },
      {
        label: "Alert tuning outcome",
        value: "Reduced false positives",
        detail: "via custom correlation rule refinement",
      },
      {
        label: "Detection method",
        value: "Cross-log correlation",
        detail: "auth logs + network packets validated in Wireshark",
      },
    ],
    problemStatement:
      "Enterprise SIEM platforms are difficult to learn without live infrastructure. This lab replicates a production SOC environment using IBM QRadar and FortiSIEM to ingest, correlate, and alert on real simulated attack data — providing hands-on experience with threat detection workflows that mirrors enterprise security operations.",
    architectureSummary:
      "Controlled network segments with IBM QRadar and FortiSIEM deployed in parallel to ingest logs from the same attack surface. Kali Linux as the attacker node generating representative log data via port scans, brute-force attempts, and lateral movement simulations. Wireshark packet capture cross-referenced against SIEM alerts to validate detection fidelity. Custom correlation rules tuned iteratively to reduce false-positive volume.",
    securityHighlights: [
      "Dual-SIEM architecture: QRadar + FortiSIEM running against same threat surface",
      "Simulated TTPs aligned with MITRE ATT&CK framework",
      "Wireshark packet-level validation of SIEM alert accuracy",
      "Custom detection rules refined through iterative tuning cycles",
    ],
    githubUrl: "[GITHUB_URL_TO_BE_PROVIDED]",
    liveUrl: undefined,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
