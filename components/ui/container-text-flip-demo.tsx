"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export function ContainerTextFlipDemo() {
  const words = ["blazing fast", "reliable", "high-speed", "optimized", "affordable", "locally owned", "modern"];

  // Stable scale to ensure the third line fits on the narrowest devices without per-word shifts
  const containerRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const staticTextRef = useRef<HTMLSpanElement>(null);
  const [reservedFlipWidth, setReservedFlipWidth] = useState<number>(0);
  const [lineScale, setLineScale] = useState<number>(1);

  useLayoutEffect(() => {
    const recalc = () => {
      if (!containerRef.current || !lineRef.current || !staticTextRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const staticWidth = staticTextRef.current.scrollWidth;
      if (containerWidth > 0 && reservedFlipWidth > 0) {
        const required = staticWidth + reservedFlipWidth;
        const scale = Math.min(1, containerWidth / required);
        setLineScale(scale);
      }
    };

    recalc();

    const ro = new ResizeObserver(() => recalc());
    if (containerRef.current) ro.observe(containerRef.current);

    const onResize = () => recalc();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [reservedFlipWidth]);

  return (
    <motion.h1
      ref={containerRef}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 mx-auto max-w-4xl text-center font-bold tracking-tight text-zinc-700 [font-size:clamp(1.95rem,8vw,2.5rem)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.25] sm:leading-tight dark:text-zinc-100",
      )}
      layout
    >
      <div className="inline-block align-baseline">
        <span className="block">Serving the Yuma area</span>
        <span className="block">and Imperial Valley with</span>
        <span
          ref={lineRef}
          className="block whitespace-nowrap"
          style={{ transform: `scale(${lineScale})`, transformOrigin: "left center" }}
        >
          <span ref={staticTextRef}>internet that's</span>
          <ContainerTextFlip
            words={words}
            className="ml-2 leading-none align-baseline inline-block text-accent/80"
            textClassName="leading-none"
            onMaxWidthMeasured={(w) => setReservedFlipWidth(w)}
          />
        </span>
      </div>
    </motion.h1>
  );
}


