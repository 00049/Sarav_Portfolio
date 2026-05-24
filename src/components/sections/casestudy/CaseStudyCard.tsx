"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { CaseStudy } from "@/types";
import { CaseStudyExpanded } from "./CaseStudyExpanded";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: "var(--background-card)",
        border: "1px solid",
        borderColor: hovered || expanded ? "var(--border-hover)" : "var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: 32,
        cursor: "pointer",
        transform: hovered && !expanded ? "translateY(-2px)" : "translateY(0)",
        transition: "all 300ms ease",
        marginBottom: 24,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded(!expanded)}
    >
      {/* ── Top row ───────────────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 400px" }}>
          <div
            style={{
              fontSize: 11,
              fontFamily: "var(--font-geist-mono)",
              color: "var(--accent-gold)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Engineering Case Study
          </div>
          <h3
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              marginTop: 6,
              marginBottom: 0,
            }}
          >
            {caseStudy.title}
          </h3>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              lineHeight: 1.6,
              marginTop: 6,
              maxWidth: 560,
              marginBottom: 0,
            }}
          >
            {caseStudy.subtitle}
          </p>
        </div>

        {/* Desktop-only right metadata */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 6,
          }}
          className="desktop-metadata"
        >
          <div
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 12,
              color: "var(--text-muted)",
            }}
          >
            {caseStudy.readTime}
          </div>
          <div
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 12,
              color: "var(--text-muted)",
            }}
          >
            {caseStudy.timeline}
          </div>
          <div
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 11,
              color: "var(--accent-gold)",
            }}
          >
            {caseStudy.role}
          </div>
        </div>
      </div>

      {/* ── Mobile Metadata strip ─────────────────────────────────────────── */}
      <div
        className="mobile-metadata"
        style={{
          marginTop: 20,
          paddingTop: 20,
          borderTop: "1px solid var(--border)",
          display: "flex",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 10,
              fontFamily: "var(--font-geist-mono)",
              color: "var(--text-muted)",
              textTransform: "uppercase",
            }}
          >
            Timeline
          </div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>
            {caseStudy.timeline}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: 10,
              fontFamily: "var(--font-geist-mono)",
              color: "var(--text-muted)",
              textTransform: "uppercase",
            }}
          >
            Role
          </div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>
            {caseStudy.role}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: 10,
              fontFamily: "var(--font-geist-mono)",
              color: "var(--text-muted)",
              textTransform: "uppercase",
            }}
          >
            Read Time
          </div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>
            {caseStudy.readTime}
          </div>
        </div>
      </div>

      {/* ── Full Expanded View ────────────────────────────────────────────── */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <CaseStudyExpanded caseStudy={caseStudy} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Expand Button ─────────────────────────────────────────────────── */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          fontSize: 13,
          fontFamily: "var(--font-geist-mono)",
          color: hovered || expanded ? "var(--accent-gold)" : "var(--text-muted)",
          transition: "color 200ms ease",
        }}
      >
        {expanded ? "Close Engineering Deep Dive" : "Read Engineering Deep Dive"}
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .desktop-metadata {
            display: none !important;
          }
        }
        @media (min-width: 641px) {
          .mobile-metadata {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
