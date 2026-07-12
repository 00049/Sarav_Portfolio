"use client";

import dynamic from "next/dynamic";
import type { ArchitectureFlow } from "@/types";

const ArchitectureDiagram = dynamic(
  () => import("./ArchitectureDiagram"),
  { 
    ssr: false, 
    loading: () => (
      <div style={{ marginBottom: 60, height: 400, width: "100%", border: "1px dashed var(--border)", borderRadius: "var(--radius-lg)", background: "var(--background-elevated)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 13, color: "var(--text-muted)" }}>Loading Interactive Diagram...</span>
      </div>
    )
  }
);

export function ArchitectureDiagramDynamic({ flow }: { flow: ArchitectureFlow }) {
  return <ArchitectureDiagram flow={flow} />;
}
