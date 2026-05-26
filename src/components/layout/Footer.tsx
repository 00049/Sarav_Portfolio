"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import { useState, useEffect } from "react";

const SITE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
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
    <footer
      className="border-t"
      style={{ borderColor: "var(--border)", background: "var(--background)" }}
    >
      {/* ── Upper footer ──────────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand + tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: 26,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                }}
              >
                Saravpreet<span style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>.</span>
              </span>
            </Link>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 220 }}>
              Securing systems. Shipping products.
            </p>
            {/* Availability pill */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mt-2"
              style={{
                background: "var(--background-elevated)",
                border: "1px solid var(--border)",
                fontSize: 11,
                fontFamily: "var(--font-geist-mono)",
                color: "var(--text-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-white"
                style={{ boxShadow: "0 0 6px rgba(255,255,255,0.5)" }}
              />
              Available for hire
            </div>
          </div>

          {/* Navigation sitemap */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontFamily: "var(--font-geist-mono)",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 16,
              }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-3" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-nav-link"
                    style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none", transition: "color 200ms ease" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontFamily: "var(--font-geist-mono)",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 16,
              }}
            >
              Get in Touch
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:Sarav.pruthi@gmail.com"
                className="flex items-center gap-2"
                style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none", transition: "color 200ms ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")}
              >
                <Mail size={14} style={{ color: "var(--text-muted)" }} />
                Sarav.pruthi@gmail.com
              </a>
              <a
                href="https://github.com/00049"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
                style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none", transition: "color 200ms ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")}
              >
                <Github size={14} style={{ color: "var(--text-muted)" }} />
                github.com/00049
              </a>
              <a
                href="https://linkedin.com/in/saravpreetpruthi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
                style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none", transition: "color 200ms ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")}
              >
                <Linkedin size={14} style={{ color: "var(--text-muted)" }} />
                linkedin.com/in/saravpreetpruthi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lower footer ──────────────────────────────────────────────────── */}
      <div
        className="border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span style={{ fontSize: 12, fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)" }}>
            © 2025 Saravpreet Singh Pruthi
          </span>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/00049"
              target="_blank"
              rel="noreferrer"
              className="footer-icon-link"
              aria-label="GitHub profile"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/saravpreetpruthi"
              target="_blank"
              rel="noreferrer"
              className="footer-icon-link"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:Sarav.pruthi@gmail.com"
              className="footer-icon-link"
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
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "var(--background-elevated)",
          border: "1px solid var(--border)",
          color: "var(--text-secondary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)",
          pointerEvents: showTop ? "auto" : "none",
          zIndex: 50,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-hover)";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px) scale(1.05)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0) scale(1)";
        }}
      >
        <ArrowUp size={18} />
      </button>

      <style>{`
        .footer-icon-link {
          color: var(--text-muted);
          transition: color 200ms ease, transform 200ms ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-icon-link:hover {
          color: var(--text-primary);
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
