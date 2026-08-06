"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Database, LayoutTemplate, Box } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";

const techCategories = [
  {
    icon: <Shield size={16} className="text-[var(--accent-blue)]" />,
    title: "Security & Ops",
    code: "import { IBM_QRadar, FortiSIEM, Wireshark, Nmap } from 'soc-toolkit';\nawait detectThreats(network_traffic);",
  },
  {
    icon: <Database size={16} className="text-[var(--accent-cyan)]" />,
    title: "Backend & Data",
    code: "import { FastAPI, Node, PostgreSQL, Redis } from 'backend';\nconst system = new HighAvailabilityArchitecture();",
  },
  {
    icon: <LayoutTemplate size={16} className="text-[var(--accent-gold)]" />,
    title: "Frontend & UI",
    code: "import { React, NextJS, Tailwind, FramerMotion } from 'ui-layer';\nrender(<LuxuryUI />);",
  },
  {
    icon: <Box size={16} className="text-[var(--accent-green)]" />,
    title: "DevOps & Cloud",
    code: "import { Docker, Linux, Git, AWS } from 'infrastructure';\nawait deploy({ scalable: true });",
  }
];

export function TechStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = techCategories[activeIndex].code;
    setDisplayedText("");
    
    let currentIndex = 0;
    
    const typeNextChar = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(typeNextChar, Math.random() * 30 + 20);
      }
    };
    
    timeout = setTimeout(typeNextChar, 300);
    
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <SectionContainer id="stack" className="bg-[var(--background-secondary)]">
      <div className="flex flex-col lg:flex-row items-center gap-16 w-full relative z-10">
        
        {/* Left: Text & Categories */}
        <div className="w-full lg:w-1/2">
          <SectionHeader
            eyebrow="Technical Depth"
            heading="The Full Stack"
            subheading="Architecting at every layer. From raw network packet inspection to distributed production pipelines."
          />
          
          <div className="flex flex-col gap-4 mt-8">
            {techCategories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 ${
                  activeIndex === idx 
                    ? "border-[var(--border-hover)]" 
                    : "border-[var(--border)] hover:border-[var(--border-hover)]"
                }`}
                style={{
                  background: activeIndex === idx ? "rgba(74, 92, 106, 0.12)" : "transparent",
                }}
              >
                <div className={`p-2 rounded-lg transition-colors`}
                  style={{
                    background: activeIndex === idx ? "var(--background-card)" : "transparent",
                  }}>
                  {cat.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] font-sans">{cat.title}</h4>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Interactive Terminal */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full rounded-2xl overflow-hidden shadow-xl relative"
            style={{
              border: "1px solid var(--border)",
              background: "#11212D",
            }}
           suppressHydrationWarning>
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 border-b border-[var(--border)]"
              style={{ background: "#06141B" }}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                <Terminal size={12} />
                <span>system_architecture.ts</span>
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 h-[250px] font-mono text-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_24px] pointer-events-none opacity-20" />
              
              <div className="flex gap-4 relative z-10">
                {/* Line Numbers */}
                <div className="flex flex-col text-[var(--text-muted)] text-right select-none opacity-50">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
                
                {/* Code */}
                <div className="text-[var(--text-primary)] whitespace-pre-wrap leading-6">
                  {displayedText.split('\\n').map((line, i) => (
                    <span key={i} className="block">
                      {line.includes('import') ? (
                        <span className="text-[#c678dd]">import</span>
                      ) : line.includes('await') ? (
                        <span className="text-[#c678dd]">await</span>
                      ) : line.includes('const') ? (
                        <span className="text-[#c678dd]">const</span>
                      ) : null}
                      {line.replace(/import|await|const/g, '')}
                      {i === displayedText.split('\\n').length - 1 && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="inline-block w-2 h-4 bg-[var(--text-primary)] ml-1 translate-y-1"
                         suppressHydrationWarning />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
