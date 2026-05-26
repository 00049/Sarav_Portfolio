"use client";

import { motion } from "framer-motion";
import { Shield, Server, Box, Terminal } from "lucide-react";

const proofItems = [
  { label: "CEH Certified", icon: Shield, type: "cert", href: "/certifications/ceh" },
  { label: "IBM QRadar Trained", icon: Server, type: "cert" },
  { label: "NAANZ — Live Product", icon: Box, type: "product", href: "https://nanz-drab.vercel.app/" },
  { label: "Internship @ Fencesense", icon: Terminal, type: "experience" },
];

export function SocialProofBar() {
  return (
    <section
      aria-label="Social Proof"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--background-card)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        {proofItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontFamily: "var(--font-geist-mono)",
              color: "var(--text-muted)",
              whiteSpace: "nowrap",
            }}
          >
            <item.icon size={14} style={{ color: "var(--text-secondary)" }} />
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: "var(--text-primary)", borderBottom: "1px solid var(--border)", paddingBottom: "2px" }}
              >
                {item.label}
              </a>
            ) : (
              item.label
            )}
            {i < proofItems.length - 1 && (
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "var(--border)",
                  marginLeft: 32,
                  display: "inline-block",
                }}
                className="proof-separator"
              />
            )}
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .proof-separator { display: none !important; }
        }
      `}</style>
    </section>
  );
}
