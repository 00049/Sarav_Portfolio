"use client";

import { useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  Handle,
  Position,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { ArchitectureFlow } from "@/types";

type CustomNodeData = { label: string; subLabel?: string } & Record<string, unknown>;
type CustomNodeProps = NodeProps<Node<CustomNodeData>>;

// Custom Node Component to match Zinc/Dark theme and Geist Mono
function CustomNode({ data }: CustomNodeProps) {
  return (
    <div
      style={{
        background: "var(--background-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        padding: "16px",
        minWidth: 180,
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      <Handle type="target" position={Position.Left} style={{ background: "var(--accent-gold)", border: "none" }} />
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "var(--text-primary)",
          marginBottom: 4,
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        {data.label}
      </div>
      {data.subLabel && (
        <div
          style={{
            fontSize: 11,
            color: "var(--text-muted)",
            fontFamily: "var(--font-geist-mono)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {data.subLabel}
        </div>
      )}
      <Handle type="source" position={Position.Right} style={{ background: "var(--accent-gold)", border: "none" }} />
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

export function ArchitectureDiagram({ flow }: { flow: ArchitectureFlow }) {
  // Convert our generic edge type to reactflow edge type (applying styling)
  const edges = useMemo(
    () =>
      flow.edges.map((e) => ({
        ...e,
        type: "smoothstep",
        style: { stroke: "var(--border-hover)", strokeWidth: 2 },
        animated: e.animated,
        labelStyle: { fill: "var(--text-secondary)", fontSize: 11, fontFamily: "var(--font-geist-mono)" },
        labelBgStyle: { fill: "var(--background)", fillOpacity: 0.8 },
      })),
    [flow.edges]
  );

  return (
    <div style={{ marginBottom: 60 }}>
      {/* Visually hidden but DOM-present fallback for screen readers */}
      <details
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        <summary>Architecture Diagram Text Description</summary>
        {flow.fallbackText}
      </details>

      <div
        style={{
          height: 400,
          width: "100%",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          background: "var(--background-elevated)",
        }}
      >
        <ReactFlow
          nodes={flow.nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          preventScrolling={false}
          nodesDraggable={true}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnDrag={true}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="var(--border-hover)" gap={20} size={1} />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </div>
  );
}

export default ArchitectureDiagram;
