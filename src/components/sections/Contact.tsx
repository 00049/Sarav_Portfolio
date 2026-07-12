"use client";

import { motion } from "framer-motion";
import { Mail, Download, MapPin } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 0 80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #75162D 0%, transparent 70%)",
          opacity: 0.3,
          pointerEvents: "none",
          animation: "pulseSlow 4s infinite alternate",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 0%, var(--background) 70%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: 11,
            fontFamily: "var(--font-geist-mono)",
            color: "var(--accent-gold)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}
         suppressHydrationWarning>
          Let&apos;s Work Together
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 600,
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: 0,
          }}
         suppressHydrationWarning>
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          style={{
            fontSize: 15,
            color: "var(--text-muted)",
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto",
          }}
         suppressHydrationWarning>
          Open to SOC analyst, cybersecurity engineering, and security-focused
          full-stack roles. Based in India, available globally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginTop: 8 }}
         suppressHydrationWarning>
          <a
            href="mailto:Sarav.pruthi@gmail.com"
            className="cta-button"
            style={{
              background: "var(--accent-gold)",
              color: "#3B010B",
              fontFamily: "var(--font-geist-mono)",
              fontSize: 15,
              fontWeight: 500,
              padding: "14px 28px",
              borderRadius: "var(--radius-md)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              transition: "all 250ms ease",
            }}
          >
            <Mail size={16} />
            Sarav.pruthi@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.26 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            marginTop: 16,
          }}
         suppressHydrationWarning>
          <a
            href="https://github.com/00049"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-link"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/saravpreetpruthi"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-link"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href="/resume.pdf" download className="secondary-link">
            <Download size={16} />
            Resume PDF
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontFamily: "var(--font-geist-mono)",
            color: "var(--text-muted)",
            marginTop: 24,
          }}
         suppressHydrationWarning>
          <MapPin size={12} />
          Shimla, India · Available for remote & relocation
        </motion.div>
      </div>

      <style>{`
        @keyframes pulseSlow {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
          100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.35; }
        }
        
        .cta-button:hover {
          background: #F2E5C6 !important;
          box-shadow: 0 0 32px rgba(242, 217, 160, 0.4);
          transform: translateY(-2px);
        }

        .secondary-link {
          display: flex;
          alignItems: center;
          gap: 6px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-secondary);
          padding: 10px 16px;
          border-radius: var(--radius-md);
          font-size: 13px;
          text-decoration: none;
          transition: all 200ms ease;
        }
        
        .secondary-link:hover {
          border-color: var(--border-hover);
          color: var(--text-primary);
          background: rgba(242, 229, 198, 0.04);
        }
      `}</style>
    </section>
  );
}
