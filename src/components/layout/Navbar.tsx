"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { useCommandPalette } from "@/components/ui/CommandPalette";
import { Button } from "@/components/ui/button";

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
          className="fixed inset-0 z-[999] bg-background-secondary/95 backdrop-blur-xl flex flex-col items-center justify-center"
          suppressHydrationWarning
        >
          <button
            aria-label="Close menu"
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-transparent border border-border rounded-md text-secondary cursor-pointer hover:bg-background-elevated hover:text-primary transition-colors active-scale"
            onClick={onClose}
          >
            <X size={18} />
          </button>

          <nav className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link, i) => {
              const isActive = link.href === "/" ? activePath === "/" : activePath.startsWith(link.href);
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  suppressHydrationWarning
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`text-2xl font-semibold font-sans no-underline transition-colors ${
                      isActive ? "text-primary" : "text-secondary hover:text-primary"
                    }`}
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
            className="mt-10"
            suppressHydrationWarning
          >
            <Button asChild className="rounded-full font-sans gap-2 px-7 py-6 text-background bg-text-primary hover:bg-accent hover:text-background">
              <a href="/resume.pdf" download onClick={handleLinkClick}>
                <Download size={18} /> Download Resume
              </a>
            </Button>
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
        className={`fixed top-0 left-0 right-0 h-[72px] z-[1000] flex items-center px-6 md:px-12 transition-all duration-300 ${
          scrolled 
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-card" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex-1">
          <Link href="/" className="font-serif text-2xl font-medium tracking-tight text-primary no-underline">
            Saravpreet<span className="text-secondary">.</span>
          </Link>
        </div>

        <nav className="hidden md:flex flex-2 items-center justify-center gap-2">
          {NAV_LINKS.filter(l => l.label !== "Home").map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`inline-block px-4 py-2 text-sm font-sans no-underline transition-colors duration-200 ${
                    isActive ? "font-semibold text-white" : "font-normal text-secondary hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    suppressHydrationWarning 
                  />
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex-1 flex items-center justify-end gap-4">
          <button
            onClick={() => setOpen(true)}
            className="group active-scale flex items-center justify-center gap-2 min-w-[44px] min-h-[44px] md:min-h-0 md:min-w-0 md:px-3 md:py-2 rounded-full border border-border bg-background-card text-muted hover:border-border-hover hover:text-primary transition-colors duration-200"
            aria-label="Open command palette"
          >
            <Search size={16} />
            <span className="hidden md:inline-block text-xs font-medium tracking-widest uppercase">⌘K</span>
          </button>

          <Button asChild variant="outline" className="hidden md:flex rounded-full gap-1.5 px-4 h-9 text-xs uppercase tracking-widest font-medium group hover:bg-text-primary hover:text-background hover:border-text-primary transition-all duration-300">
            <a href="/resume.pdf" download>
              <Download size={14} className="group-hover:translate-y-[1px] transition-transform" />
              Resume
            </a>
          </Button>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-background-card border border-border rounded-md text-primary active-scale"
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
    </>
  );
}
