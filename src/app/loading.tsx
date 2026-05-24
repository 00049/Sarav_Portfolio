"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--background)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        className="flex items-center justify-center w-24 h-24 rounded-2xl border"
        style={{
          background: "var(--background-card)",
          borderColor: "var(--border)",
          boxShadow: "0 0 40px var(--glow-gold)",
        }}
      >
        <div className="text-3xl font-bold font-mono" style={{ color: "var(--text-primary)" }}>
          SSP<span style={{ color: "var(--accent-gold)" }}>.</span>
        </div>
      </motion.div>
    </div>
  );
}
