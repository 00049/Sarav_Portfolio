"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { CaseStudy } from "@/types";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 10,
        fontFamily: "var(--font-geist-mono)",
        color: "var(--text-muted)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

export function CaseStudyExpanded({ caseStudy }: { caseStudy: CaseStudy }) {
  const [openDecisions, setOpenDecisions] = useState<number[]>([]);

  const toggleDecision = (idx: number) => {
    setOpenDecisions((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div
      style={{
        paddingTop: 32,
        borderTop: "1px solid var(--border)",
        marginTop: 24,
      }}
    >
      <div style={{ maxWidth: 720 }}>
        {/* 1. OVERVIEW */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Overview</SectionLabel>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {caseStudy.overview}
          </p>
        </div>

        {/* 2. OUTCOMES GRID */}
        <div
          style={{
            display: "grid",
            gap: 16,
            marginBottom: 48,
          }}
          className="outcomes-grid"
        >
          {caseStudy.outcomes.map((outcome, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(242,217,160,0.04)",
                border: "1px solid rgba(242,217,160,0.08)",
                borderRadius: "var(--radius-md)",
                padding: "16px 20px",
              }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 600,
                  color: "var(--accent-gold)",
                }}
              >
                {outcome.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginTop: 4,
                }}
              >
                {outcome.label}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--text-muted)",
                  fontStyle: "italic",
                  marginTop: 2,
                }}
              >
                {outcome.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 3. PROBLEM STATEMENT */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Problem Statement</SectionLabel>
          <h4
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
              marginBottom: 12,
            }}
          >
            {caseStudy.problemStatement.headline}
          </h4>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {caseStudy.problemStatement.body}
          </p>
        </div>

        {/* 4. ARCHITECTURE & KEY DECISIONS */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Architecture</SectionLabel>
          <h4
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: 12,
            }}
          >
            {caseStudy.architecture.headline}
          </h4>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: 24,
            }}
          >
            {caseStudy.architecture.body}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {caseStudy.architecture.keyDecisions.map((decision, idx) => {
              const isOpen = openDecisions.includes(idx);
              return (
                <div key={idx}>
                  <div
                    id={`decision-${idx}`}
                    onClick={() => toggleDecision(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleDecision(idx);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      padding: "14px 16px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      {decision.decision}
                    </span>
                    {isOpen ? (
                      <Minus size={16} color="var(--text-muted)" />
                    ) : (
                      <Plus size={16} color="var(--text-muted)" />
                    )}
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        role="region"
                        aria-labelledby={`decision-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          style={{
                            padding: "16px 16px 8px 16px",
                          }}
                        >
                          <div style={{ marginBottom: 12 }}>
                            <span
                              style={{
                                fontSize: 13,
                                color: "var(--text-secondary)",
                              }}
                            >
                              <strong>Rationale: </strong>
                              {decision.rationale}
                            </span>
                          </div>
                          <div>
                            <span
                              style={{
                                fontSize: 13,
                                color: "var(--text-muted)",
                              }}
                            >
                              <strong style={{ color: "var(--accent-gold)" }}>
                                Tradeoff accepted:{" "}
                              </strong>
                              {decision.tradeoff}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. CHALLENGES */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Challenges & Resolutions</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {caseStudy.challenges.map((challenge, idx) => (
              <div key={idx}>
                <div
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 11,
                    color: "var(--accent-gold)",
                    background: "rgba(242,217,160,0.08)",
                    border: "1px solid rgba(242,217,160,0.15)",
                    padding: "3px 8px",
                    borderRadius: 999,
                  }}
                >
                  0{idx + 1}
                </div>
                <h5
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginTop: 8,
                    marginBottom: 8,
                  }}
                >
                  {challenge.title}
                </h5>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {challenge.body}
                </p>
                <div
                  style={{
                    fontSize: 10,
                    fontFamily: "var(--font-geist-mono)",
                    color: "var(--accent-gold)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: 12,
                    marginBottom: 4,
                  }}
                >
                  Resolution
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {challenge.resolution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. SECURITY CONSIDERATIONS */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Security Considerations</SectionLabel>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
            }}
          >
            {caseStudy.securityConsiderations.map((sec, idx) => (
              <div
                key={idx}
                className="security-row"
                style={{
                  display: "flex",
                  padding: "16px",
                  borderBottom:
                    idx === caseStudy.securityConsiderations.length - 1
                      ? "none"
                      : "1px solid var(--border)",
                  background:
                    idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    width: 180,
                    flexShrink: 0,
                  }}
                  className="security-area"
                >
                  {sec.area}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      marginBottom: 6,
                    }}
                  >
                    {sec.implementation}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      fontStyle: "italic",
                    }}
                  >
                    {sec.rationale}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. PERFORMANCE OPTIMIZATIONS */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Performance Optimizations</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {caseStudy.performanceOptimizations.map((opt, idx) => (
              <div
                key={idx}
                className="perf-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom:
                    idx === caseStudy.performanceOptimizations.length - 1
                      ? "none"
                      : "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    width: 180,
                    flexShrink: 0,
                  }}
                  className="perf-metric"
                >
                  {opt.metric}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    flex: 1,
                    padding: "0 24px",
                  }}
                  className="perf-approach"
                >
                  {opt.approach}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: "var(--font-geist-mono)",
                    color: "var(--accent-gold)",
                    textAlign: "right",
                    minWidth: 160,
                  }}
                  className="perf-outcome"
                >
                  {opt.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. LESSONS LEARNED */}
        <div>
          <SectionLabel>Lessons Learned</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {caseStudy.lessons.map((lesson, idx) => (
              <div
                key={idx}
                style={{
                  borderLeft: "2px solid rgba(242,217,160,0.15)",
                  paddingLeft: 16,
                  display: "flex",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "var(--accent-gold)",
                    fontSize: 13,
                    marginTop: 2, // Alignment adjustment
                  }}
                >
                  0{idx + 1}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {lesson}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .outcomes-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 640px) {
          .outcomes-grid {
            grid-template-columns: 1fr;
          }
          .security-row {
            flex-direction: column;
            gap: 8px !important;
          }
          .security-area {
            width: 100% !important;
          }
          .perf-row {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 8px;
          }
          .perf-metric {
            width: 100% !important;
          }
          .perf-approach {
            padding: 0 !important;
          }
          .perf-outcome {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
}
