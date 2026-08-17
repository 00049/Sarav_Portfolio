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
    coverImage: "/projects/jakhoo_crest_real.png",
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
    coverImage: "/projects/naanz_real.png",
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
    id: "cafe-1873",
    title: "Cafe 1873",
    shortDescription: "Heritage Hill-Café on Shimla's Mall Road",
    status: "production",
    featured: true,
    year: 2025,
    tags: ["Frontend", "Heritage", "Vanilla Web"],
    techStack: [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript",
      "Responsive Design",
    ],
    coverImage: "/projects/cafe_1873_real.png",
    cardMetrics: [
      "150+ years of legacy",
      "Hardware-accelerated animations",
      "Semantic HTML structure",
    ],
    metrics: [
      {
        label: "Performance",
        value: "Optimized",
        detail: "Vanilla web technologies with no framework bloat",
      },
      {
        label: "Design",
        value: "Timeless",
        detail: "Classic typography matching the cafe's heritage",
      },
    ],
    problemStatement:
      "A heritage brand like Cafe 1873 (established 1795 as a trading house, 1873 as a flagship on Shimla's Mall Road) needs a digital presence that reflects its legacy. The challenge was building an immersive story-driven experience without the overhead of heavy JavaScript frameworks, prioritizing smooth scroll animations and timeless typography.",
    architectureSummary:
      "Developed a custom static architecture utilizing pure HTML, CSS, and Vanilla JavaScript. Implemented Intersection Observers for high-performance scroll animations and dynamic timeline progression. Structured CSS with token-based methodology (tokens.css, layout.css, typography.css) for maintainability and precise design control.",
    securityHighlights: [],
    githubUrl: undefined,
    liveUrl: "https://cafe-1873.vercel.app/",
  },
  {
    id: "neta-samachar",
    title: "Neta Samachar",
    shortDescription: "Indian Political Data Aggregation Platform",
    status: "production",
    featured: true,
    year: 2026,
    tags: ["Data Engineering", "Next.js", "Full Stack", "Civic Tech"],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Python Scrapy",
      "Framer Motion",
    ],
    coverImage: "/projects/neta_samachar_real.png",
    cardMetrics: [
      "10,000+ verified leader records",
      "Asset & criminal case tracking",
      "Instant multi-parameter search",
    ],
    metrics: [
      {
        label: "Data Points",
        value: "Comprehensive",
        detail: "Election history, assets, cases, attendance",
      },
      {
        label: "Search Engine",
        value: "Optimized",
        detail: "Query by politician, constituency, or party",
      },
      {
        label: "UX",
        value: "Accessible",
        detail: "Complex affidavits simplified into plain UI",
      },
    ],
    problemStatement:
      "Indian voters lack a centralized, accessible platform to verify the background and performance of public leaders. Critical information regarding assets, criminal cases, and parliamentary attendance is often buried in lengthy official affidavits or scattered across disconnected portals, making it extremely difficult for citizens to make informed democratic decisions.",
    architectureSummary:
      "A robust data aggregation platform engineered with Next.js and Tailwind CSS. The system utilizes Python-based scraping pipelines to ingest and standardize complex data from various official government sources and election affidavits. It features a highly optimized, indexed search engine allowing users to instantly query politicians, constituencies, and parties, presenting the data through an accessible, dark-themed interface.",
    securityHighlights: [],
    githubUrl: "https://github.com/00049/NetaSamachar",
    liveUrl: "https://neta-samachar.vercel.app/",
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
    coverImage: "/projects/phishsim_project.jpg",
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
    coverImage: "/projects/siem_lab_project.jpg",
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
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "portfolio-website",
    title: "Saravpreet.dev Portfolio",
    shortDescription: "Interactive Security Engineer Portfolio",
    status: "production",
    featured: true,
    year: 2025,
    tags: ["Frontend", "UX/UI", "Next.js"],
    techStack: [
      "Next.js 14",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    cardMetrics: [
      "Dynamic Framer animations",
      "Responsive UI",
      "Performant static generation",
    ],
    metrics: [
      {
        label: "Performance",
        value: "Optimal",
        detail: "Next.js App Router static rendering",
      },
      {
        label: "UX",
        value: "Interactive",
        detail: "Framer Motion orchestrated transitions",
      },
    ],
    problemStatement:
      "A security engineer's portfolio must balance technical depth with an engaging, professional aesthetic. Standard templates fail to convey architectural thinking and fail to leave a lasting impression. The goal was to build a highly interactive digital resume that loads instantly and stands out.",
    architectureSummary:
      "Built with Next.js 14 App Router for optimized static generation. Designed a component-driven UI utilizing Tailwind CSS for styling and Framer Motion for sophisticated, coordinated animations (FadeIn, StaggerContainer). Structured data models (like projects and case studies) decouple content from presentation.",
    securityHighlights: [],
    githubUrl: "https://github.com/00049/Sarav_Portfolio",
    liveUrl: "https://saravpreet.dev",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
