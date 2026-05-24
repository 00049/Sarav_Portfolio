"use client";

import { useState, useEffect } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { ServiceNode } from "./nodes/ServiceNode";
import { GroupLabelNode } from "./nodes/GroupLabelNode";
import { AnimatedDataEdge } from "./edges/AnimatedDataEdge";
import { initialNodes as naanzNodes, initialEdges as naanzEdges, phishSimNodes, phishSimEdges } from "@/lib/data/diagrams";

const nodeTypes = {
  service: ServiceNode,
  groupLabel: GroupLabelNode,
};

const edgeTypes = {
  animatedData: AnimatedDataEdge,
};

export default function ArchitectureDiagram({ projectId = "naanz" }: { projectId?: string }) {
  const initialNodes = projectId === "phishsim-pro" ? phishSimNodes : naanzNodes;
  const initialEdges = projectId === "phishsim-pro" ? phishSimEdges : naanzEdges;

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--background-card)",
        position: "relative",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.4}
        maxZoom={1.5}
        panOnDrag={true}
        zoomOnScroll={false}
        zoomOnPinch={true}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={1}
          color="rgba(255,255,255,0.05)"
        />
        <Controls
          showInteractive={false}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        />
      </ReactFlow>

      {/* Hint overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 11,
          fontFamily: "var(--font-geist-mono)",
          color: "var(--text-muted)",
          opacity: showHint ? 0.6 : 0,
          pointerEvents: "none",
          transition: "opacity 500ms ease",
        }}
      >
        Drag to explore · Pinch to zoom
      </div>
    </div>
  );
}
