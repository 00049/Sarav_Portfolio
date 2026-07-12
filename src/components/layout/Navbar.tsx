"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { useCommandPalette } from "@/components/ui/CommandPalette";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
}

function MobileMenu({ isOpen, onClose, activePath }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            backgroundColor: "rgba(10, 10, 15, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
         suppressHydrationWarning>
          <button
            aria-label="Close menu"
            className="active-scale"
            onClick={onClose}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              color: "var(--text-secondary)",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>

          <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            {NAV_LINKS.map((link, i) => {
              const isActive = link.href === "/" ? activePath === "/" : activePath.startsWith(link.href);
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                 suppressHydrationWarning>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    style={{
                      fontSize: 24,
                      fontWeight: 600,
                      color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                      fontFamily: "var(--font-geist-sans)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: NAV_LINKS.length * 0.05 + 0.05 }}
            style={{ marginTop: 40 }}
           suppressHydrationWarning>
            <a
              href="/resume.pdf"
              download
              onClick={handleLinkClick}
              className="active-scale"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                fontSize: 15,
                fontWeight: 500,
                color: "#000",
                background: "var(--accent-gold)",
                borderRadius: "999px",
                fontFamily: "var(--font-geist-sans)",
                textDecoration: "none",
              }}
            >
              <Download size={18} /> Download Resume
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const pathname = usePathname() || "";
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setOpen } = useCommandPalette();

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 72,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          paddingInline: "clamp(24px, 5vw, 48px)",
          backgroundColor: scrolled ? "rgba(10, 10, 15, 0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: scrolled ? "0 1px 32px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div style={{ flex: 1 }}>
          <Link href="/" className="font-serif text-2xl font-medium tracking-tight" style={{ color: "var(--text-primary)", textDecoration: "none", fontFamily: "var(--font-playfair)" }}>
            Saravpreet<span style={{ color: "var(--text-secondary)" }}>.</span>
          </Link>
        </div>

        <nav
          className="hidden-mobile"
          style={{
            flex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {NAV_LINKS.filter(l => l.label !== "Home").map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <div key={link.href} style={{ position: "relative" }}>
                <Link
                  href={link.href}
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                    fontFamily: "var(--font-geist-sans)",
                    textDecoration: "none",
                    transition: "color 200ms ease, font-weight 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 16,
                      right: 16,
                      height: 2,
                      background: "var(--accent-gold)",
                      borderRadius: "2px",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                   suppressHydrationWarning />
                )}
              </div>
            );
          })}
        </nav>

        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 16 }}>
          {/* Command Palette Trigger */}
          <button
            onClick={() => setOpen(true)}
            className="group active-scale flex items-center justify-center gap-2 min-w-[44px] min-h-[44px] md:min-h-0 md:min-w-0 md:px-3 md:py-2 rounded-full border border-zinc-800/50 bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Open command palette"
          >
            <Search size={16} />
            <span className="hidden md:inline-block text-xs font-medium tracking-widest uppercase">⌘K</span>
          </button>

          {/* Always visible Resume button */}
          <a
            href="/resume.pdf"
            download
            className="hidden-mobile group"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              fontSize: 12,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "var(--text-primary)",
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "999px",
              fontFamily: "var(--font-geist-sans)",
              textDecoration: "none",
              transition: "all 300ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--text-primary)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
            }}
          >
            <Download size={14} className="group-hover:translate-y-[1px] transition-transform" />
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="hamburger-btn"
            style={{
              width: 40,
              height: 40,
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--background-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              color: "var(--text-primary)",
            }}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activePath={pathname}
      />

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
