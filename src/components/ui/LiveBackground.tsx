"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {/* Base Mesh Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 50%, rgba(56, 189, 248, 1), transparent 25%),
            radial-gradient(circle at 85% 30%, rgba(129, 140, 248, 1), transparent 25%)
          `,
          filter: "blur(100px)",
        }}
      />

      {/* Interactive Spotlight */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-300 opacity-40 mix-blend-screen"
        animate={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(129, 140, 248, 0.06), transparent 100%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />
    </div>
  );
}
