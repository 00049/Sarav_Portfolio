import { ImageResponse } from "next/og";
import { projects } from "@/lib/data/projects";
import { caseStudiesData } from "@/lib/data/casestudies";

export const runtime = "edge";

export const alt = "Case Study Preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  const project = projects.find((p) => p.id === slug);
  const caseStudy = caseStudiesData.find((cs) => cs.projectId === slug);

  if (!project || !caseStudy) {
    return new Response("Not found", { status: 404 });
  }

  const primaryMetric = project.metrics[0];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          backgroundColor: "#0A0A0F", // Zinc-950 base
          color: "#ffffff",
          padding: 80,
          backgroundImage: "radial-gradient(circle at 100% 100%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              color: "#D4AF37", // accent-gold
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 900,
              color: "#FAFAFA",
            }}
          >
            {caseStudy.title}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#A1A1AA", // zinc-400
              marginTop: 24,
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            {caseStudy.subtitle}
          </div>
        </div>

        {primaryMetric && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgba(242, 217, 160, 0.05)",
              border: "2px solid rgba(242, 217, 160, 0.15)",
              padding: "24px 40px",
              borderRadius: 16,
              marginTop: 40,
            }}
          >
            <div style={{ fontSize: 56, fontWeight: 800, color: "#D4AF37", marginBottom: 8 }}>
              {primaryMetric.value}
            </div>
            <div style={{ fontSize: 24, color: "#A1A1AA", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {primaryMetric.label}
            </div>
          </div>
        )}
      </div>
    ),
    {
      ...size,
    }
  );
}
