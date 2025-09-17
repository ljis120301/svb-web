"use client";

import { useEffect, useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowPanel({
  children,
  className,
  glowVariant = "orange",
  borderWidth = 2,
}: {
  children: React.ReactNode;
  className?: string;
  glowVariant?: "default" | "white" | "blue" | "orange";
  borderWidth?: number;
}) {
  const [enableGlow, setEnableGlow] = useState(false);

  useEffect(() => {
    // Enable glow on medium+ screens only to keep mobile clean/subtle
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(min-width: 768px)");
      const update = () => setEnableGlow(mq.matches);
      update();
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }
  }, []);

  return (
    <div className={cn("relative overflow-visible rounded-2xl border bg-background", className)}>
      <GlowingEffect
        glow={false}
        blur={0}
        proximity={64}
        inactiveZone={0.01}
        variant={glowVariant}
        borderWidth={borderWidth}
        disabled={!enableGlow}
        className=""
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

export default GlowPanel;


