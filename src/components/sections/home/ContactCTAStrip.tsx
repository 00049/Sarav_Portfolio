"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export function ContactCTAStrip() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--background-secondary)", borderTop: "1px solid var(--border)" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,107,228,0.08) 0%, transparent 65%)", filter: "blur(60px)" }}
        />
      </div>

      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(0,200,150,0.08)",
              border: "1px solid rgba(0,200,150,0.2)",
              fontSize: 11,
              fontFamily: "var(--font-geist-mono)",
              color: "var(--accent-green)",
              letterSpacing: "0.08em",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent-green)", boxShadow: "0 0 6px var(--accent-green)", animation: "pulse-green 2s ease-in-out infinite" }}
            />
            Open to opportunities
          </div>

          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-geist-sans)",
              letterSpacing: "-0.03em",
            }}
          >
            Let&apos;s Talk.
          </h2>
          <p
            className="text-base md:text-lg mx-auto max-w-xl mb-12"
            style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
          >
            I&apos;m actively looking for roles in cybersecurity engineering, SOC analysis, and
            security-focused full-stack development. Based in India, open to remote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="mailto:Sarav.pruthi@gmail.com"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold w-full sm:w-auto justify-center transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #2D6BE4 0%, #1a4fc4 100%)",
                color: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(45,107,228,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(45,107,228,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(45,107,228,0.35)";
              }}
            >
              <Mail size={18} />
              Send me an Email
            </a>

            <a
              href="https://linkedin.com/in/saravpreetpruthi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-medium border w-full sm:w-auto justify-center transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(45,107,228,0.4)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FiLinkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://linkedin.com/in/saravpreetpruthi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-medium transition-colors"
              style={{ color: "var(--text-muted)", fontSize: 14 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <FiLinkedin size={18} />
              LinkedIn <ArrowUpRight size={13} className="opacity-50" />
            </a>
            <a
              href="https://github.com/00049"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-medium transition-colors"
              style={{ color: "var(--text-muted)", fontSize: 14 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <FiGithub size={18} />
              GitHub <ArrowUpRight size={13} className="opacity-50" />
            </a>
            <a
              href="mailto:Sarav.pruthi@gmail.com"
              className="flex items-center gap-2 font-medium transition-colors"
              style={{ color: "var(--text-muted)", fontSize: 14 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-green {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px var(--accent-green); }
          50% { opacity: 0.5; box-shadow: 0 0 14px var(--accent-green); }
        }
      `}</style>
    </section>
  );
}
