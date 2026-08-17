"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function InteractiveSystemsExplorer() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-32 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Column: Context */}
        <div className="w-full md:w-1/3 flex flex-col">
          <h2 className="text-sm font-mono uppercase tracking-widest mb-6 text-muted">
            01 — System Architecture
          </h2>
          <h3 className="text-3xl font-medium mb-4 tracking-tight text-primary">
            The Blueprint
          </h3>
          <p className="text-sm leading-relaxed mb-8 text-secondary">
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
                className="p-6 rounded-lg bg-[rgba(37,55,69,0.5)] border border-border"
                suppressHydrationWarning
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-secondary">NODE_DATA</span>
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                </div>
                <h4 className="text-lg font-medium mb-2 text-primary">{activeNode}</h4>
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-xs font-mono text-muted">Constraint</span>
                    <span className="text-xs font-mono text-secondary">Memory Bound</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-xs font-mono text-muted">Latency</span>
                    <span className="text-xs font-mono text-primary">&lt; 15ms p99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs font-mono text-muted">Throughput</span>
                    <span className="text-xs font-mono text-secondary">10k req/s</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="idle-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 rounded-lg flex items-center justify-center h-[220px] border border-border bg-[rgba(17,33,45,0.3)]"
                suppressHydrationWarning
              >
                <span className="text-sm font-mono text-muted">Awaiting node selection...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: The Visualizer */}
        <div className="w-full md:w-2/3 h-[500px] rounded-lg relative overflow-hidden flex items-center justify-center p-8 bg-blueprint-grid border border-border bg-[#06141B]">
          
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(17,33,45,0.6)] to-transparent" />

          {/* Abstract node graph placeholder */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-16">
            
            <div 
              className="px-6 py-3 rounded-md cursor-pointer transition-all duration-200 active-scale border border-border bg-[rgba(37,55,69,0.6)] hover:border-border-hover"
              onMouseEnter={() => setActiveNode("API Gateway")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <span className="text-sm font-mono text-secondary">API_GATEWAY</span>
            </div>

            <div className="w-[1px] h-16 bg-border"></div>

            <div className="flex gap-16">
              <div 
                className="px-6 py-3 rounded-md cursor-pointer transition-all duration-200 active-scale border border-border bg-[rgba(37,55,69,0.6)] hover:border-border-hover"
                onMouseEnter={() => setActiveNode("Celery Worker Pool")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <span className="text-sm font-mono text-secondary">WORKER_POOL</span>
              </div>
              
              <div 
                className="px-6 py-3 rounded-md cursor-pointer transition-all duration-200 active-scale border border-border bg-[rgba(37,55,69,0.6)] hover:border-border-hover"
                onMouseEnter={() => setActiveNode("PostgreSQL Primary")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <span className="text-sm font-mono text-secondary">PG_PRIMARY</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
