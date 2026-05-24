import type { CaseStudy } from "@/types";

export const caseStudiesData: CaseStudy[] = [
  {
    projectId: "naanz",
    title: "Building NAANZ",
    subtitle:
      "Architecting a distributed AI-powered security audit platform from zero to production as a solo engineer.",
    readTime: "6 min read",
    timeline: "2024 – Present",
    role: "Solo Architect & Full Stack Engineer",

    overview:
      "NAANZ is a production SaaS platform that automates external vulnerability scanning across SSL/TLS, DNS, and open-port attack surfaces, then uses an LLM to translate raw findings into business-impact reports. Built entirely solo — from distributed backend architecture to payment infrastructure to frontend delivery.",

    problemStatement: {
      headline: "Security audits are inaccessible to the businesses that need them most.",
      body: "Small and mid-size businesses face the same external attack surfaces as enterprises — misconfigured SSL/TLS, exposed DNS records, open ports. But they cannot afford dedicated security teams or expensive manual audits. Existing automated tools produce raw technical output that non-engineering stakeholders cannot interpret or act on. The gap is not scanning capability — the gap is translation from technical finding to business risk.",
    },

    architecture: {
      headline: "Distributed pipeline designed for concurrency from day one.",
      body: "The core architectural decision was to treat every scan as a collection of independent, concurrent jobs rather than a sequential blocking process. FastAPI handles inbound requests and immediately dispatches scan tasks to Celery workers via a Redis broker. Three scan engines — SSL/TLS, DNS, and port intelligence — execute in parallel with zero interdependency. Results converge in PostgreSQL. Claude API processes the aggregated findings asynchronously. The client polls for completion rather than holding an open connection.",
      keyDecisions: [
        {
          decision: "Celery + Redis over async background tasks",
          rationale:
            "Native FastAPI background tasks are process-bound and do not survive worker restarts. Celery with Redis as a broker provides true distributed execution, task persistence, and retry logic — essential for a production payment-gated SaaS.",
          tradeoff:
            "Adds operational complexity: two additional services (Redis + Celery workers) must be containerized and orchestrated. Accepted this cost for production reliability.",
        },
        {
          decision: "AsyncIO + SQLAlchemy async engine",
          rationale:
            "Scan jobs involve significant I/O wait — network calls to external services, DNS resolution, certificate fetching. Blocking the main thread during these waits would collapse throughput under concurrent load. AsyncIO ensures the event loop remains unblocked.",
          tradeoff:
            "Async SQLAlchemy requires careful session management — sessions cannot be shared across coroutines. Implemented explicit async context managers per database operation.",
        },
        {
          decision: "Claude API for report generation over templating",
          rationale:
            "Rule-based templates cannot handle the combinatorial complexity of vulnerability findings across three scan vectors with varying severity combinations. LLM generation produces coherent, contextual business-language reports that adapt to the specific finding set of each scan.",
          tradeoff:
            "Adds latency and per-report API cost. Mitigated by generating reports asynchronously post-scan and caching results in PostgreSQL — reports are never regenerated for the same scan.",
        },
      ],
    },

    challenges: [
      {
        title: "Preventing double-charging on payment webhook retries",
        body: "Razorpay retries webhooks on non-200 responses. Without idempotency handling, a network timeout between Razorpay and the API could trigger duplicate subscription activations and report deliveries.",
        resolution:
          "Implemented HMAC signature verification on every incoming webhook to confirm authenticity. Stored payment event IDs in PostgreSQL with a unique constraint. Any duplicate event ID is rejected at the database layer before any business logic executes — making the entire payment flow idempotent by construction.",
      },
      {
        title: "Scan engine timeout management under concurrent load",
        body: "External scan targets — particularly port scans against slow-responding hosts — can hang indefinitely, tying up Celery workers and starving the queue.",
        resolution:
          "Implemented per-engine timeout budgets using Python asyncio.wait_for with configurable TTLs per scan type. Timed-out scan tasks return a partial result with a timeout flag rather than failing the entire job, preserving data quality for the completed scan vectors.",
      },
      {
        title: "Schema evolution without downtime",
        body: "Adding new scan vector columns or modifying report schema mid-production without dropping existing customer data required a disciplined migration strategy.",
        resolution:
          "Alembic migration scripts version every schema change. All migrations are additive (new nullable columns, new tables) — never destructive. Deployed via Docker with migration step running before the API worker starts, ensuring zero-downtime schema updates.",
      },
    ],

    securityConsiderations: [
      {
        area: "Payment webhook authentication",
        implementation:
          "HMAC-SHA256 signature verification against Razorpay webhook secret on every inbound event",
        rationale:
          "Prevents forged webhook events from activating subscriptions without actual payment",
      },
      {
        area: "API authentication",
        implementation:
          "JWT with short expiry + refresh token rotation. Subscription tier encoded in token claims — validated on every protected endpoint.",
        rationale:
          "Stateless auth scales horizontally. Tier encoding in JWT eliminates a database round-trip per request for access control.",
      },
      {
        area: "API design (OWASP alignment)",
        implementation:
          "No sensitive data in URL parameters. Rate limiting on scan dispatch endpoints. Input validation on all scan targets (URL/domain format enforcement).",
        rationale:
          "Scan endpoints are the highest-risk surface — malformed input could be used to trigger scans against unauthorized targets.",
      },
      {
        area: "Report access control",
        implementation:
          "Reports are stored in PostgreSQL linked to authenticated user ID. Report delivery endpoint validates JWT ownership before returning data.",
        rationale:
          "Prevents horizontal privilege escalation — a user cannot retrieve another user's scan report by guessing report IDs.",
      },
    ],

    performanceOptimizations: [
      {
        metric: "Scan execution time",
        approach:
          "Parallel Celery workers executing all three scan engines concurrently with independent task queues",
        outcome:
          "Total scan time approaches the slowest single scan engine rather than the sum of all three — effectively eliminating sequential bottlenecks",
      },
      {
        metric: "API response time under load",
        approach:
          "AsyncIO event loop + async SQLAlchemy sessions prevent I/O blocking on the main thread",
        outcome:
          "Consistent API response times under parallel scan job load — no thread starvation",
      },
      {
        metric: "Report generation cost",
        approach:
          "LLM report generated once per scan, result persisted in PostgreSQL. All subsequent report views served from cache.",
        outcome:
          "Zero redundant Claude API calls — report cost is a one-time fixed cost per scan",
      },
    ],

    lessons: [
      "Idempotency is not optional in any payment-integrated system — design for duplicate events from day one.",
      "Async-first architecture pays dividends under concurrent load, but requires disciplined session and context management.",
      "LLMs in production pipelines need deterministic fallbacks — if the Claude API call fails, the scan result must still be deliverable in raw form.",
      "Schema migrations are a production concern, not a deployment afterthought — Alembic from day one prevented multiple potential data integrity issues.",
      "Celery worker health monitoring matters more than the happy path — silent worker death is harder to detect than an API crash.",
    ],

    outcomes: [
      {
        label: "Scan vectors",
        value: "3 concurrent",
        detail: "SSL/TLS, DNS, open-port running in parallel",
      },
      {
        label: "Payment security",
        value: "Idempotent",
        detail: "HMAC verified, duplicate-event safe",
      },
      {
        label: "Report generation",
        value: "Zero redundancy",
        detail: "LLM called once per scan, cached perpetually",
      },
      {
        label: "Deployment",
        value: "Zero-downtime",
        detail: "Alembic migrations pre-flight on every deploy",
      },
    ],
  },
  {
    projectId: "phishsim-pro",
    title: "Building PhishSim Pro",
    subtitle:
      "Engineering a full-stack enterprise phishing simulation platform to identify and measure human vulnerability.",
    readTime: "7 min read",
    timeline: "2025",
    role: "Full Stack Security Engineer",
    overview:
      "PhishSim Pro is an enterprise-grade platform that enables organizations to design, launch, and monitor controlled phishing campaigns. It features a comprehensive template system, robust campaign management, and a real-time analytics dashboard that visualizes human risk through granular interaction tracking.",
    problemStatement: {
      headline: "Traditional security focuses heavily on infrastructure, but humans remain the most vulnerable attack vector.",
      body: "Organizations spend millions on firewalls and endpoint protection, yet lack visibility into employee susceptibility to social engineering. A single click on a seemingly innocuous malicious link can lead to credential exposure and massive breaches. The challenge is safely simulating these attacks and measuring the risk before actual attackers exploit it.",
    },
    architecture: {
      headline: "Asynchronous task execution and granular telemetry.",
      body: "The platform relies on a React/Vite frontend communicating with a FastAPI gateway. When a campaign is launched, the API avoids blocking the main thread by handing off email dispatch tasks to a Redis message broker. A Celery worker processes these tasks asynchronously, interacting directly with PostgreSQL and an SMTP service. Crucially, tracking pixels and dynamic UUID tokens are injected on the fly to monitor email opens, link clicks, and simulated credential captures in real-time.",
      keyDecisions: [
        {
          decision: "Vite (React) + FastAPI Architecture",
          rationale:
            "Vite provides an extremely fast development environment and optimized production builds for the complex analytics dashboard, while FastAPI handles high-throughput asynchronous API requests efficiently.",
          tradeoff:
            "Requires maintaining two separate codebases and managing CORS/API contracts across environments.",
        },
        {
          decision: "Celery + Redis for Email Dispatch",
          rationale:
            "Sending hundreds of emails synchronously would crash the API or timeout the client request. Offloading to Celery enables reliable background processing, automatic retries, and decoupled execution.",
          tradeoff:
            "Introduces infrastructural complexity (requires running Redis and Celery worker instances alongside the API).",
        },
        {
          decision: "1x1 Pixel Tracking & Dynamic UUIDs",
          rationale:
            "It is notoriously difficult to track email opens. Generating a 1x1 transparent image with a unique UUID for each target enables exact telemetry on when an email is opened without requiring user interaction.",
          tradeoff:
            "Some modern email clients block external images by default, which can lead to under-reporting of email open rates.",
        },
      ],
    },
    challenges: [
      {
        title: "Reliable Asynchronous Sending & State Management",
        body: "Sending hundreds of emails synchronously would crash the API or time out the client's request. Moving this to Celery/Redis was necessary, but it introduced the challenge of tracking progress.",
        resolution:
          "The worker actively calculates progress percentage ((sent / total) * 100) and writes it back to the Postgres database after each email batch. Guard clauses were implemented to prevent race conditions (e.g., checking if campaign.status is already 'RUNNING') so a campaign cannot accidentally be triggered twice.",
      },
      {
        title: "Evading Spam Filters & Rate Limits",
        body: "Getting simulated emails past modern email provider firewalls (like Gmail or Outlook) is difficult without a warmed-up IP.",
        resolution:
          "The email generation script strips away common phishing red flags by utilizing clean inline CSS styling, standard system fonts (-apple-system), and corporate disclaimers. The email service also implements a retry loop with exponential backoff to prevent the SMTP server from rejecting the connection due to rate-limiting.",
      },
    ],
    securityConsiderations: [
      {
        area: "Simulated Credential Capture",
        implementation:
          "The credential capture form simulates a login portal but DOES NOT store the actual passwords entered.",
        rationale:
          "Ensures that even if the simulation database is compromised, no real employee passwords are leaked.",
      },
      {
        area: "Granular User Behavior Tracking",
        implementation:
          "A 1x1 transparent image pixel is dynamically generated for each individual target using their specific UUID tracking_token. This token is also appended to the malicious button.",
        rationale:
          "Allows the backend to know exactly who opened the email, when, and whether they clicked the link, logging events like EMAIL_SENT, OPENED, and CLICKED individually in an isolated context.",
      },
    ],
    performanceOptimizations: [
      {
        metric: "Email Dispatch Batching",
        approach: "Processing targets in segmented batches inside Celery rather than single-target tasks.",
        outcome: "Reduces broker overhead and ensures SMTP connection reuse, maximizing throughput."
      }
    ],
    lessons: [
      "Asynchronous architecture adds significant deployment complexity but is completely non-negotiable for external I/O bound systems.",
      "Email telemetry is inherently flawed due to modern client privacy protections, requiring a defense-in-depth approach to tracking (pixels + active link tracking)."
    ],
    outcomes: [
      {
        label: "Delivered",
        value: "Enterprise SaaS",
        detail: "Designed and delivered a full-stack phishing simulation SaaS."
      },
      {
        label: "Evasion",
        value: "Spam Filters",
        detail: "Successfully bypassed standard spam filters using engineered clean-CSS templates."
      },
      {
        label: "Scalability",
        value: "Non-blocking queue",
        detail: "Implemented a non-blocking queueing system capable of managing high-volume campaigns."
      }
    ]
  },
];
