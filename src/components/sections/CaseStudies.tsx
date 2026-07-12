"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { CaseStudyCard } from "./casestudy/CaseStudyCard";
import { caseStudiesData } from "@/lib/data/casestudies";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
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
          eyebrow="Engineering Depth"
          heading="Case Studies"
          subheading="How systems were actually designed. The tradeoffs, the challenges, the decisions."
          align="left"
        />

        <div style={{ marginTop: 40 }}>
          {caseStudiesData.map((caseStudy, idx) => (
            <motion.div
              key={caseStudy.projectId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 + 0.1 }}
             suppressHydrationWarning>
              <CaseStudyCard caseStudy={caseStudy} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: 24,
            fontSize: 12,
            fontFamily: "var(--font-geist-mono)",
            color: "var(--text-muted)",
            textAlign: "center",
          }}
         suppressHydrationWarning>
          Additional case studies added as projects ship.
        </motion.div>
      </div>
    </section>
  );
}
