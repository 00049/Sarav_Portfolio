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
      className="py-24 md:py-32 relative overflow-hidden bg-background-secondary border-t border-border"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[60px]"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 65%)" }}
        />
      </div>

      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          suppressHydrationWarning
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 bg-background-elevated border border-border text-[11px] font-mono text-primary tracking-[0.08em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.5)] animate-pulse" />
            Open to opportunities
          </div>

          <h2 className="text-5xl md:text-7xl mb-6 text-primary font-playfair font-medium tracking-[-0.03em]">
            Let&apos;s Talk.
          </h2>
          <p className="text-base md:text-lg mx-auto max-w-xl mb-12 text-secondary leading-relaxed">
            I&apos;m actively looking for roles in cybersecurity engineering, SOC analysis, and
            security-focused full-stack development. Based in India, open to remote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={copyEmail}
              className="active-scale flex items-center gap-2 px-8 py-4 rounded-xl font-semibold w-full sm:w-auto justify-center transition-all duration-300 bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,255,255,0.25)]"
            >
              {copied ? <Check size={18} className="text-green-600" /> : <Mail size={18} />}
              {copied ? "Email Copied!" : "Copy Email Address"}
            </button>

            <a
              href="https://linkedin.com/in/saravpreetpruthi"
              target="_blank"
              rel="noreferrer"
              className="active-scale flex items-center gap-2 px-8 py-4 rounded-xl font-medium border w-full sm:w-auto justify-center transition-all duration-300 bg-white/5 border-border text-primary backdrop-blur-md hover:border-white/40 hover:-translate-y-[1px]"
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
              className="active-scale flex items-center gap-2 font-medium transition-colors text-[14px] text-muted hover:text-primary"
            >
              <FiLinkedin size={18} />
              LinkedIn <ArrowUpRight size={13} className="opacity-50" />
            </a>
            <a
              href="https://github.com/00049"
              target="_blank"
              rel="noreferrer"
              className="active-scale flex items-center gap-2 font-medium transition-colors text-[14px] text-muted hover:text-primary"
            >
              <FiGithub size={18} />
              GitHub <ArrowUpRight size={13} className="opacity-50" />
            </a>
            <button
              onClick={copyEmail}
              className="active-scale flex items-center gap-2 font-medium transition-colors text-[14px] text-muted hover:text-primary"
            >
              {copied ? <Check size={18} className="text-green-500" /> : <Mail size={18} />}
              {copied ? "Copied!" : "Email"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
