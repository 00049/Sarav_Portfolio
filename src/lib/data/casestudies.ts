import type { CaseStudy } from "@/types";

export const caseStudiesData: CaseStudy[] = [
  {
    projectId: "thejakhoocrest",
    title: "Building The Jakhoo Crest",
    subtitle: "Engineering a high-performance, immersive luxury hospitality platform.",
    readTime: "5 min read",
    timeline: "2024",
    role: "Frontend Architect & Developer",
    executiveSummary:
      "The Jakhoo Crest is a luxury boutique hotel in Shimla. This project involved architecting a bespoke, highly immersive digital experience that mirrors the property's serene physical environment while providing robust reservation funnels.",
    coreProblem:
      "Luxury hospitality websites frequently suffer from bloat, relying heavily on massive raster images and third-party booking widgets that degrade performance. The challenge was delivering a visually stunning, hardware-accelerated experience that achieves optimal Lighthouse scores without sacrificing aesthetic quality.",
    architecturalConstraints:
      "The platform required flawless cross-device performance, particularly on low-power mobile devices. Animations needed to be fluid without triggering layout thrashing or draining battery life. Furthermore, SEO and Core Web Vitals were critical for organic discovery in a highly competitive hospitality market.",
    technicalImplementation:
      "The architecture is centered on Next.js 14 for static generation and optimized asset delivery. Framer Motion is utilized extensively for declarative, hardware-accelerated micro-interactions that respect users' reduced-motion preferences. Tailwind CSS enforces a strict, utility-first design system. To handle complex viewport transitions, custom React hooks were developed to synchronize scroll-driven animations with route changes.",
    tradeoffsAndMistakes:
      "Opting for Framer Motion instead of pure CSS animations introduced a ~30kb payload overhead. To mitigate this on slow networks, I implemented strict dynamic imports and a `useReducedMotion` context that completely bypasses the animation loop for constrained devices.",
    finalOutcome:
      "Delivered a striking, high-performance web platform that perfectly encapsulates the brand's luxury identity. The site achieves near-perfect Core Web Vitals and provides an immersive gateway for prospective guests.",
  },
  {
    projectId: "naanz",
    title: "Building NAANZ",
    subtitle:
      "Architecting a distributed AI-powered security audit platform from zero to production as a solo engineer.",
    readTime: "6 min read",
    timeline: "2024 – Present",
    role: "Solo Architect & Full Stack Engineer",

    executiveSummary:
      "NAANZ is a distributed AI-powered security audit SaaS built entirely solo from zero to production. It automates vulnerability scanning across SSL/TLS, DNS, and open-port attack surfaces for small/mid-size businesses, utilizing an LLM to translate raw findings into business-impact reports.",

    coreProblem:
      "Small and mid-size businesses face the same external attack surfaces as enterprises, but they cannot afford dedicated security teams or expensive manual audits. Existing automated tools produce raw technical output that non-engineering stakeholders cannot interpret or act on. The gap is not scanning capability — the gap is translation from technical finding to business risk.",

    architecturalConstraints:
      "The system required strict DPDP Act 2023 compliance mapping and accurate EPSS/CVE scoring for valid business-impact translation. Due to the long-running nature of network scans, the architecture could not rely on sequential blocking processes. Furthermore, it required an idempotent paywall/auth system (via Razorpay+HMAC+JWT) to prevent double-charging on webhook retries or duplicate scan dispatches.",

    technicalImplementation:
      "The distributed backend is architected using FastAPI for the REST layer, immediately dispatching inbound scan tasks to Celery workers via a Redis broker. Three scan engines — SSL/TLS, DNS, and port intelligence — execute concurrently with zero interdependency. Results converge asynchronously in PostgreSQL. A Claude API integration subsequently processes the aggregated findings to generate reports. The frontend (Next.js 14) uses real-time polling to retrieve the final results. Schema migrations are handled via Alembic to ensure zero-downtime updates.",
    tradeoffsAndMistakes:
      "Initially attempted synchronous vulnerability scanning, which immediately caused FastAPI to timeout on large payloads. Refactoring to a Celery/Redis async queue resolved the timeout but introduced idempotency challenges with Razorpay webhooks. The solution required implementing a strict database-level locking mechanism for transaction IDs to prevent double-billing during race conditions.",
    finalOutcome:
      "NAANZ is fully operational with 29 security modules actively running. The distributed backend is ~85% complete and deployed to production. The platform successfully generates actionable security insights, replacing manual audits with scalable, parallelized infrastructure.",

    architectureFlow: {
      fallbackText: "Architecture diagram showing a Next.js Frontend communicating with a FastAPI Backend. The Backend verifies requests via a Razorpay/HMAC/JWT Auth layer. The Backend dispatches scan tasks to a Celery/Redis queue, and results converge in a PostgreSQL database. Finally, the Backend interacts with the Claude API to generate business-impact reports.",
      nodes: [
        { id: "frontend", position: { x: 0, y: 100 }, data: { label: "Next.js Frontend", subLabel: "Vercel" }, type: "custom" },
        { id: "auth", position: { x: 250, y: 0 }, data: { label: "Auth & Payments", subLabel: "Razorpay / HMAC / JWT" }, type: "custom" },
        { id: "api", position: { x: 250, y: 100 }, data: { label: "FastAPI Backend", subLabel: "REST Layer" }, type: "custom" },
        { id: "queue", position: { x: 250, y: 200 }, data: { label: "Task Queue", subLabel: "Celery / Redis" }, type: "custom" },
        { id: "db", position: { x: 500, y: 100 }, data: { label: "Database", subLabel: "PostgreSQL" }, type: "custom" },
        { id: "llm", position: { x: 500, y: 200 }, data: { label: "LLM Integration", subLabel: "Claude API" }, type: "custom" }
      ],
      edges: [
        { id: "e1", source: "frontend", target: "api", animated: true },
        { id: "e2", source: "api", target: "auth", label: "Verify JWT" },
        { id: "e3", source: "api", target: "queue", label: "Dispatch Scans", animated: true },
        { id: "e4", source: "queue", target: "db", label: "Write Results" },
        { id: "e5", source: "api", target: "db", label: "Read Results" },
        { id: "e6", source: "api", target: "llm", label: "Generate Report", animated: true }
      ]
    }
  },
  {
    projectId: "phishsim-pro",
    title: "Building PhishSim Pro",
    subtitle:
      "Engineering a full-stack enterprise phishing simulation platform to identify and measure human vulnerability.",
    readTime: "7 min read",
    timeline: "2025",
    role: "Full Stack Security Engineer",
    executiveSummary:
      "PhishSim Pro is an enterprise-grade platform that enables organizations to design, launch, and monitor controlled phishing campaigns. It features a comprehensive template system, robust campaign management, and a real-time analytics dashboard that visualizes human risk through granular interaction tracking.",
    
    coreProblem:
      "Organizations spend millions on firewalls and endpoint protection, yet lack visibility into employee susceptibility to social engineering. A single click on a seemingly innocuous malicious link can lead to credential exposure and massive breaches. The challenge is safely simulating these attacks and measuring the risk before actual attackers exploit it.",

    architecturalConstraints:
      "The system required a non-blocking queueing mechanism to handle high-volume email dispatch without crashing the main API. It also required granular telemetry capabilities—bypassing modern email privacy protections when possible—to track email opens and link clicks securely without capturing real employee credentials.",

    technicalImplementation:
      "The platform utilizes a Vite (React) frontend and a FastAPI backend. Sending hundreds of emails synchronously would crash the API, so dispatch tasks are offloaded to a Redis message broker and processed by a Celery worker. 1x1 transparent image pixels with dynamic UUID tokens are injected on the fly to monitor email opens. The email generation script utilizes inline CSS styling and corporate disclaimers to evade modern spam filters.",
    tradeoffsAndMistakes:
      "Relying on 1x1 tracking pixels for telemetry is inherently flawed against modern corporate email gateways that pre-cache images. While the system effectively bypasses standard spam filters, the telemetry data must be treated as a lower-bound heuristic rather than absolute truth. Future iterations require an active proxy layer to differentiate between automated gateway scans and human interaction.",
    finalOutcome:
      "Designed and delivered a full-stack phishing simulation SaaS capable of managing high-volume campaigns through a non-blocking queueing system. Bypassed standard spam filters and enabled accurate tracking of risky human behaviors.",
    architectureFlow: {
      fallbackText: "Architecture diagram showing a Vite (React) frontend and a FastAPI backend. The backend pushes dispatch tasks to a Redis broker, handled by Celery workers. E-mails include tracking pixels for telemetry.",
      nodes: [
        { id: "frontend", position: { x: 0, y: 50 }, data: { label: "Vite Frontend", subLabel: "React / Tailwind" }, type: "custom" },
        { id: "api", position: { x: 250, y: 50 }, data: { label: "FastAPI Backend", subLabel: "Campaign Manager" }, type: "custom" },
        { id: "redis", position: { x: 500, y: 0 }, data: { label: "Message Broker", subLabel: "Redis" }, type: "custom" },
        { id: "worker", position: { x: 750, y: 0 }, data: { label: "Dispatch Worker", subLabel: "Celery" }, type: "custom" },
        { id: "target", position: { x: 750, y: 120 }, data: { label: "Target Inbox", subLabel: "Tracking Pixel" }, type: "custom" }
      ],
      edges: [
        { id: "e1", source: "frontend", target: "api", animated: true },
        { id: "e2", source: "api", target: "redis", label: "Queue Jobs", animated: true },
        { id: "e3", source: "redis", target: "worker" },
        { id: "e4", source: "worker", target: "target", label: "Send Email" },
        { id: "e5", source: "target", target: "api", label: "Telemetry", animated: true }
      ]
    }
  },
];
