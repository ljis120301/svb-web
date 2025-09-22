"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export function ContainerTextFlipDemo() {
  const words = ["blazing fast", "reliable", "high-speed", "optimized", "affordable", "locally owned", "modern"];

  // Pre-calculate the maximum width needed for any word to prevent layout shifts
  const containerRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const staticTextRef = useRef<HTMLSpanElement>(null);
  // Calculate initial width estimate based on the longest word  
  const initialWidth = React.useMemo(() => {
    const longestWord = words.reduce((longest, word) => 
      word.length > longest.length ? word : longest, "");
    // More accurate estimate: account for font size and character width
    // "locally owned" is ~13 chars, estimate ~20px per char at base size
    return Math.max(280, longestWord.length * 22);
  }, [words]);
  
  const [reservedFlipWidth, setReservedFlipWidth] = useState<number>(initialWidth);
  const [lineScale, setLineScale] = useState<number>(1);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const isTight = lineScale < 0.98;

  useLayoutEffect(() => {
    const recalc = () => {
      if (!containerRef.current || !lineRef.current || !staticTextRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const staticWidth = staticTextRef.current.scrollWidth;
      if (containerWidth > 0 && reservedFlipWidth > 0) {
        const required = staticWidth + reservedFlipWidth;
        const scale = Math.min(1, containerWidth / required);
        setLineScale(scale);
        setIsInitialized(true);
      }
    };

    // Pre-calculate the maximum width to avoid layout shifts
    if (!isInitialized && reservedFlipWidth === initialWidth) {
      setIsInitialized(true);
    }

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
  }, [reservedFlipWidth, isInitialized, words]);

  return (
    <motion.h1
      ref={containerRef}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.2
      }}
      className={cn(
        "relative mb-4 sm:mb-6 mx-auto w-full max-w-full text-center font-bold tracking-tight text-foreground text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight dark:text-foreground [text-wrap:balance] overflow-hidden",
      )}
      style={{
        opacity: isInitialized ? 1 : 0.9
      }}
    >
      <div className="inline-block align-baseline w-full max-w-full px-2 sm:px-4">
        <div className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Serving the Yuma area</div>
        <div className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl">and <span className="whitespace-nowrap">Imperial Valley</span></div>
        <span ref={lineRef} className="block w-full max-w-full overflow-hidden text-center">
          <span
            className={cn("inline-block align-baseline", isTight ? "whitespace-normal break-words" : "whitespace-nowrap")}
            style={{ transform: isTight ? undefined : `scale(${lineScale})`, transformOrigin: "center center" }}
          >
            <span ref={staticTextRef}>with internet that's </span>
            <ContainerTextFlip
              words={words}
              className="leading-none align-baseline inline-block text-foreground dark:text-foreground"
              textClassName="leading-tight"
              onMaxWidthMeasured={(w) => setReservedFlipWidth(w)}
            />
          </span>
        </span>
      </div>
    </motion.h1>
  );
}


