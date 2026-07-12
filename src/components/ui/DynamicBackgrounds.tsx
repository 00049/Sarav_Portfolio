"use client";

import dynamic from "next/dynamic";

const NoiseOverlay = dynamic(() => import("@/components/ui/NoiseOverlay").then(mod => mod.NoiseOverlay), { ssr: false });
const LiveBackground = dynamic(() => import("@/components/ui/LiveBackground").then(mod => mod.LiveBackground), { ssr: false });

export function DynamicBackgrounds() {
  return (
    <>
      <NoiseOverlay />
      <LiveBackground />
    </>
  );
}
