"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Check } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useCopyEmail } from "@/hooks/useCopyEmail";

export function ContactCTAStrip() {
  const { copied, copyEmail } = useCopyEmail();

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
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 65%)", filter: "blur(60px)" }}
        />
      </div>

      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
         suppressHydrationWarning>
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              background: "var(--background-elevated)",
              border: "1px solid var(--border)",
              fontSize: 11,
              fontFamily: "var(--font-geist-mono)",
              color: "var(--text-primary)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-white"
              style={{ boxShadow: "0 0 6px rgba(255,255,255,0.5)", animation: "pulse-white 2s ease-in-out infinite" }}
            />
            Open to opportunities
          </div>

          <h2
            className="text-5xl md:text-7xl mb-6"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-playfair)",
              fontWeight: 500,
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
            <button
              onClick={copyEmail}
              className="active-scale flex items-center gap-2 px-8 py-4 rounded-xl font-semibold w-full sm:w-auto justify-center transition-all duration-300"
              style={{
                background: "#FFFFFF",
                color: "#000000",
                boxShadow: "0 4px 20px rgba(255,255,255,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,255,255,0.15)";
              }}
            >
              {copied ? <Check size={18} className="text-green-600" /> : <Mail size={18} />}
              {copied ? "Email Copied!" : "Copy Email Address"}
            </button>

            <a
              href="https://linkedin.com/in/saravpreetpruthi"
              target="_blank"
              rel="noreferrer"
              className="active-scale flex items-center gap-2 px-8 py-4 rounded-xl font-medium border w-full sm:w-auto justify-center transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
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
              className="active-scale flex items-center gap-2 font-medium transition-colors"
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
              className="active-scale flex items-center gap-2 font-medium transition-colors"
              style={{ color: "var(--text-muted)", fontSize: 14 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <FiGithub size={18} />
              GitHub <ArrowUpRight size={13} className="opacity-50" />
            </a>
            <button
              onClick={copyEmail}
              className="active-scale flex items-center gap-2 font-medium transition-colors"
              style={{ color: "var(--text-muted)", fontSize: 14 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {copied ? <Check size={18} className="text-green-500" /> : <Mail size={18} />}
              {copied ? "Copied!" : "Email"}
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-white {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(255,255,255,0.5); }
          50% { opacity: 0.5; box-shadow: 0 0 14px rgba(255,255,255,0.8); }
        }
      `}</style>
    </section>
  );
}
