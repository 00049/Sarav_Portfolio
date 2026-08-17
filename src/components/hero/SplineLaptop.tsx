"use client";

import { useState, useEffect, Component, ReactNode } from "react";
import Spline from "@splinetool/react-spline";
import { Loader2 } from "lucide-react";

class SplineErrorBoundary extends Component<{children: ReactNode, onError: () => void}, {hasError: boolean}> {
  constructor(props: {children: ReactNode, onError: () => void}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Spline failed to load:", error, errorInfo);
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

interface SplineLaptopProps {
  onLoad?: () => void;
  reducedMotion?: boolean;
}

export function SplineLaptop({ onLoad, reducedMotion }: SplineLaptopProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fallback: If Spline onLoad doesn't fire after 4 seconds, show it anyway
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(fallbackTimer);
  }, []);

  function handleLoad() {
    setIsLoading(false);
    
    // If reduced motion is enabled, we could potentially fast-forward or pause the Spline scene,
    // though Spline's API for this varies by scene setup. We'll simply let it load and 
    // trigger the callback.
    
    if (onLoad) {
      onLoad();
    }
  }

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Loading State - Subdued and minimal to match aesthetic */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted animate-pulse z-0">
          <Loader2 className="w-8 h-8 animate-spin mb-4 opacity-50" />
          <span className="text-xs tracking-widest uppercase font-mono">Initializing Canvas</span>
        </div>
      )}

      {/* 
        The Spline component fills its parent container.
        We don't use fixed pixel dimensions here.
      */}
      <div className={`w-full h-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <SplineErrorBoundary onError={() => setIsLoading(false)}>
          {!reducedMotion && (
            <Spline
              scene="https://prod.spline.design/QFyhM4G905JnGTKl/scene.splinecode"
              onLoad={handleLoad}
            />
          )}
          
          {/* Fallback for reduced motion users: we can still render it but it's preferred to show a static version or let it play its load animation but no scroll jank. For now we will just load it unless we had a static image, or we can just load it and the HTML reveal will be instant. Actually, let's load it for reduced motion too, just instantly reveal HTML. */}
          {reducedMotion && (
            <Spline
              scene="https://prod.spline.design/QFyhM4G905JnGTKl/scene.splinecode"
              onLoad={handleLoad}
            />
          )}
        </SplineErrorBoundary>
      </div>
    </div>
  );
}
