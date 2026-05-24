import { MetricCard } from "@/components/ui/MetricCard";
import type { Metric } from "@/types";

interface CaseStudyMetricsProps {
  metrics: Metric[];
}

export function CaseStudyMetrics({ metrics }: CaseStudyMetricsProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <section style={{ padding: "0 24px", maxWidth: 900, margin: "0 auto", marginBottom: 80 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
        {metrics.map((metric, i) => (
          <MetricCard
            key={i}
            label={metric.label}
            value={metric.value}
            unit={metric.unit}
            detail={metric.detail}
            size="lg"
          />
        ))}
      </div>
    </section>
  );
}
