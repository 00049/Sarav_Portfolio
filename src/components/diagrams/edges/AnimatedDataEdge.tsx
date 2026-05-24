import { EdgeProps, getBezierPath, EdgeLabelRenderer } from "@xyflow/react";
import { useEffect, useRef } from "react";

export function AnimatedDataEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  // Determine duration based on speed
  let duration = "2s";
  if (data?.speed === "slow") duration = "3s";
  if (data?.speed === "fast") duration = "1.2s";

  const didInject = useRef(false);

  useEffect(() => {
    if (!didInject.current && typeof document !== "undefined") {
      const styleId = "animated-data-edge-style";
      if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.innerHTML = `
          @keyframes flowDot {
            0% { offset-distance: 0%; opacity: 0; }
            5% { opacity: 1; }
            95% { opacity: 1; }
            100% { offset-distance: 100%; opacity: 0; }
          }
        `;
        document.head.appendChild(style);
      }
      didInject.current = true;
    }
  }, []);

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        fill="none"
        stroke="var(--border-hover)"
        strokeWidth={1.5}
      />

      <circle
        r={3}
        fill="var(--accent-gold)"
        style={{
          offsetPath: `path('${edgePath}')`,
          animation: `flowDot ${duration} linear infinite`,
        }}
      />

      {data?.label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              background: "var(--background-card)",
              border: "1px solid var(--border)",
              fontSize: 9,
              fontFamily: "var(--font-geist-mono)",
              color: "var(--text-muted)",
              padding: "2px 6px",
              borderRadius: 4,
              pointerEvents: "all",
            }}
            className="nodrag nopan"
          >
            {String(data.label)}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}
