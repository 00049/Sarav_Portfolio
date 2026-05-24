"use client";

import { motion } from "framer-motion";

export function NodeGraphic({ size = 64 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, var(--background-elevated), var(--background-card))",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{
          position: "absolute",
          width: "150%",
          height: "150%",
          background: "conic-gradient(from 0deg, transparent 0 340deg, var(--accent-gold) 360deg)",
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-[1px] bg-[var(--background-card)] rounded-[calc(var(--radius-md)-1px)] flex items-center justify-center">
        <div className="relative w-1/2 h-1/2">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 rounded-full bg-[var(--accent-gold)] shadow-[0_0_10px_var(--glow-gold)]"
          />
          <motion.div 
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute inset-0 border border-[var(--border-hover)] rounded-full border-t-[var(--accent-blue)]"
          />
          <motion.div 
            animate={{ rotate: [360, 270, 180, 90, 0] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute inset-[10%] border border-[var(--border-hover)] rounded-full border-b-[var(--accent-cyan)] opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
