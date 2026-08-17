"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const SITE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/work" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "CEH Cert", href: "/certifications/ceh" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-background">
      {/* ── Upper footer ──────────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand + tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="no-underline">
              <span className="font-serif text-[26px] font-medium tracking-tight text-primary">
                Saravpreet<span className="text-secondary italic">.</span>
              </span>
            </Link>
            <p className="text-[13px] text-muted leading-relaxed max-w-[220px]">
              Securing systems. Shipping products.
            </p>
            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mt-2 bg-background-elevated border border-border text-[11px] font-mono text-primary uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(155,168,171,0.5)]" />
              Available for hire
            </div>
          </div>

          {/* Navigation sitemap */}
          <div>
            <p className="text-[11px] font-mono text-muted uppercase tracking-[0.1em] mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary no-underline transition-colors duration-200 hover:text-primary active-scale inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-mono text-muted uppercase tracking-[0.1em] mb-4">
              Get in Touch
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:Sarav.pruthi@gmail.com"
                className="flex items-center gap-2 text-sm text-secondary no-underline transition-colors duration-200 hover:text-primary group"
              >
                <Mail size={14} className="text-muted group-hover:text-primary transition-colors" />
                Sarav.pruthi@gmail.com
              </a>
              <a
                href="https://github.com/00049"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-secondary no-underline transition-colors duration-200 hover:text-primary group"
              >
                <Github size={14} className="text-muted group-hover:text-primary transition-colors" />
                github.com/00049
              </a>
              <a
                href="https://linkedin.com/in/saravpreetpruthi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-secondary no-underline transition-colors duration-200 hover:text-primary group"
              >
                <Linkedin size={14} className="text-muted group-hover:text-primary transition-colors" />
                linkedin.com/in/saravpreetpruthi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lower footer ──────────────────────────────────────────────────── */}
      <div className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-[12px] font-mono text-muted">
            © 2025 Saravpreet Singh Pruthi
          </span>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/00049"
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-all duration-200 flex items-center justify-center hover:text-primary hover:-translate-y-0.5 active-scale inline-block"
              aria-label="GitHub profile"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/saravpreetpruthi"
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-all duration-200 flex items-center justify-center hover:text-primary hover:-translate-y-0.5 active-scale inline-block"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:Sarav.pruthi@gmail.com"
              className="text-muted transition-all duration-200 flex items-center justify-center hover:text-primary hover:-translate-y-0.5 active-scale inline-block"
              aria-label="Send email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll-to-top button ───────────────────────────────────────────── */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={cn(
          "fixed bottom-8 right-8 w-11 h-11 rounded-full bg-background-elevated border border-border text-secondary flex items-center justify-center cursor-pointer transition-all duration-300 z-50 shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:border-border-hover hover:text-primary hover:-translate-y-0.5 hover:scale-105 active-scale",
          showTop ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        )}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
