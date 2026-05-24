"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/layout/SectionHeader";
import ArchitectureDiagram from "@/components/diagrams/ArchitectureDiagram";

export function Architecture() {
  const legends = [
    { color: "var(--accent-gold)", label: "API Layer" },
    { color: "#75162D", label: "Worker Layer" },
    { color: "rgba(242,229,198,0.4)", label: "Storage Layer" },
    { color: "rgba(242,217,160,0.3)", label: "External Service" },
  ];

  return (
    <section
      id="architecture"
      style={{
        padding: "120px 0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <SectionHeader
          eyebrow="System Design"
          heading="Architecture Diagram"
          subheading="NAANZ — Interactive infrastructure map. Drag to explore, pinch to zoom."
          align="left"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 24,
          }}
        >
          {legends.map((l) => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: l.color }} />
              <span
                style={{
                  fontSize: 12,
                  fontFamily: "var(--font-geist-mono)",
                  color: "var(--text-muted)",
                }}
              >
                {l.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="architecture-canvas"
          role="img"
          aria-label="NAANZ system architecture diagram showing the distributed scanning pipeline from client request through FastAPI, Celery workers, PostgreSQL, Claude API, to report delivery"
        >
          <ArchitectureDiagram />
        </motion.div>

        <p
          aria-hidden="true"
          style={{
            fontSize: 12,
            fontFamily: "var(--font-geist-mono)",
            color: "var(--text-muted)",
            textAlign: "center",
            marginTop: 16,
          }}
        >
          ↑ This diagram is interactive. Every node represents a production service in the NAANZ scanning pipeline.
        </p>
      </div>

      <style>{`
        .architecture-canvas {
          height: 600px;
        }
        @media (max-width: 768px) {
          .architecture-canvas {
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
}
