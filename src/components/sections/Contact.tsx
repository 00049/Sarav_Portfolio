"use client";

import { motion } from "framer-motion";
import { Mail, Download, MapPin } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

export function Contact() {
  return (
    <section
      id="contact"
      className="pt-[100px] pb-[80px] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(37,55,69,0.5)_0%,transparent_70%)] opacity-60 pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_70%)] pointer-events-none -z-10" />

      <div className="w-full max-w-[800px] mx-auto px-6 text-center flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-mono text-secondary uppercase tracking-[0.12em]"
          suppressHydrationWarning
        >
          Let&apos;s Work Together
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-[clamp(32px,5vw,52px)] font-semibold text-primary tracking-[-0.03em] leading-[1.1] m-0"
          suppressHydrationWarning
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-[15px] text-muted leading-[1.7] max-w-[480px] mx-auto"
          suppressHydrationWarning
        >
          Open to SOC analyst, cybersecurity engineering, and security-focused
          full-stack roles. Based in India, available globally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2"
          suppressHydrationWarning
        >
          <a
            href="mailto:Sarav.pruthi@gmail.com"
            className="bg-[#CCD0CF] text-[#06141B] hover:bg-[#9BA8AB] font-mono text-[15px] font-medium px-7 py-3.5 rounded-md inline-flex items-center gap-2 no-underline transition-all duration-250 ease-out hover:-translate-y-0.5"
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
          className="flex items-center justify-center gap-4 flex-wrap mt-4"
          suppressHydrationWarning
        >
          <a
            href="https://github.com/00049"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-border bg-transparent text-secondary px-4 py-2.5 rounded-md text-[13px] no-underline transition-all duration-200 ease-out hover:border-border-hover hover:text-primary hover:bg-[rgba(74,92,106,0.1)]"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/saravpreetpruthi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-border bg-transparent text-secondary px-4 py-2.5 rounded-md text-[13px] no-underline transition-all duration-200 ease-out hover:border-border-hover hover:text-primary hover:bg-[rgba(74,92,106,0.1)]"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href="/resume.pdf" download className="flex items-center gap-1.5 border border-border bg-transparent text-secondary px-4 py-2.5 rounded-md text-[13px] no-underline transition-all duration-200 ease-out hover:border-border-hover hover:text-primary hover:bg-[rgba(74,92,106,0.1)]">
            <Download size={16} />
            Resume PDF
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-1.5 text-xs font-mono text-muted mt-6"
          suppressHydrationWarning
        >
          <MapPin size={12} />
          Shimla, India · Available for remote & relocation
        </motion.div>
      </div>
    </section>
  );
}
