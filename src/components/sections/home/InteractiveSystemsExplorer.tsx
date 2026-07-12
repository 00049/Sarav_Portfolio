"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function InteractiveSystemsExplorer() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // A brutalist, highly constrained signature moment.
  // Instead of a generic diagram, this is a minimalist blueprint of a core system.

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-32 border-t border-zinc-900/50">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Column: Context */}
        <div className="w-full md:w-1/3 flex flex-col">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-6">
            01 — System Architecture
          </h2>
          <h3 className="text-3xl font-medium text-zinc-100 mb-4 tracking-tight">
            The Blueprint
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            Interactive visualization of a high-throughput offensive security scanning engine. 
            Hover over the nodes to inspect the engineering constraints, latency metrics, and core tradeoffs.
          </p>

          <AnimatePresence mode="popLayout">
            {activeNode ? (
              <motion.div
                key="active-data"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-lg backdrop-blur-sm"
               suppressHydrationWarning>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-zinc-300">NODE_DATA</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">{activeNode}</h4>
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-xs text-zinc-500 font-mono">Constraint</span>
                    <span className="text-xs text-zinc-300 font-mono">Memory Bound</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-xs text-zinc-500 font-mono">Latency</span>
                    <span className="text-xs text-emerald-400 font-mono">&lt; 15ms p99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-zinc-500 font-mono">Throughput</span>
                    <span className="text-xs text-zinc-300 font-mono">10k req/s</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="idle-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 border border-zinc-900/50 rounded-lg bg-zinc-950/20 flex items-center justify-center h-[220px]"
               suppressHydrationWarning>
                <span className="text-sm font-mono text-zinc-600">Awaiting node selection...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: The Visualizer */}
        <div className="w-full md:w-2/3 h-[500px] border border-zinc-900/50 rounded-lg bg-[#08080A] relative overflow-hidden flex items-center justify-center p-8 bg-blueprint-grid">
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#060608]/80 to-transparent z-0"></div>

          {/* Abstract node graph placeholder */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-16">
            
            <div 
              className="px-6 py-3 border border-zinc-800 bg-zinc-900/80 rounded-md cursor-pointer hover:border-zinc-500 transition-colors active-scale"
              onMouseEnter={() => setActiveNode("API Gateway")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <span className="text-sm font-mono text-zinc-300">API_GATEWAY</span>
            </div>

            <div className="w-[1px] h-16 bg-zinc-800"></div>

            <div className="flex gap-16">
              <div 
                className="px-6 py-3 border border-zinc-800 bg-zinc-900/80 rounded-md cursor-pointer hover:border-zinc-500 transition-colors active-scale"
                onMouseEnter={() => setActiveNode("Celery Worker Pool")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <span className="text-sm font-mono text-zinc-300">WORKER_POOL</span>
              </div>
              
              <div 
                className="px-6 py-3 border border-zinc-800 bg-zinc-900/80 rounded-md cursor-pointer hover:border-zinc-500 transition-colors active-scale"
                onMouseEnter={() => setActiveNode("PostgreSQL Primary")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <span className="text-sm font-mono text-zinc-300">PG_PRIMARY</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
