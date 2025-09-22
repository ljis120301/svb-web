"use client";

import React, { useState, useEffect, useId, useLayoutEffect } from "react";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
  onMaxWidthMeasured?: (widthPx: number) => void;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
  onMaxWidthMeasured,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const textRef = React.useRef<HTMLSpanElement>(null);
  const [fontsReadyTick, setFontsReadyTick] = useState(0);

  const longestWordChars = React.useMemo(
    () => words.reduce((m, w) => Math.max(m, w.length), 0),
    [words]
  );
  const estimatedWidthEm = Math.max(1, Math.round(longestWordChars * 0.62 * 100) / 100);

  const updateWidthForWord = () => {
    if (textRef.current) {
      const textWidth = Math.ceil(textRef.current.scrollWidth) + 6; // extra pad to avoid platform rounding/clipping
      setWidth(textWidth);
      setMaxWidth((prev) => Math.max(prev, textWidth));
    }
  };

  useEffect(() => {
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [words, interval]);

  useLayoutEffect(() => {
    if (typeof document === "undefined") return;
    const measurer = document.createElement("span");
    measurer.style.position = "absolute";
    measurer.style.visibility = "hidden";
    measurer.style.whiteSpace = "nowrap";
    measurer.style.pointerEvents = "none";

    const sourceEl = textRef.current;
    if (sourceEl && typeof window !== "undefined") {
      const cs = window.getComputedStyle(sourceEl);
      measurer.style.fontSize = cs.fontSize;
      measurer.style.fontFamily = cs.fontFamily;
      measurer.style.fontWeight = cs.fontWeight as string;
      measurer.style.letterSpacing = cs.letterSpacing;
      measurer.style.fontFeatureSettings = cs.fontFeatureSettings;
      measurer.style.fontVariationSettings = cs.fontVariationSettings;
    }

    measurer.className = cn("font-bold font-inherit", textClassName);
    document.body.appendChild(measurer);
    let localMax = 0;
    for (const w of words) {
      measurer.textContent = w;
      const wpx = Math.ceil(measurer.scrollWidth) + 6; // extra pad for cross-device consistency
      if (wpx > localMax) localMax = wpx;
    }
    document.body.removeChild(measurer);
    if (localMax > 0) {
      setMaxWidth(localMax);
      onMaxWidthMeasured?.(localMax);
    }
  }, [words, textClassName, onMaxWidthMeasured, fontsReadyTick]);

  // Re-measure once web fonts are loaded to avoid FOUT width mismatch across devices
  useEffect(() => {
    if (typeof document === "undefined") return;
    const anyDoc: any = document as any;
    const fontsObj = anyDoc.fonts;
    if (fontsObj && typeof fontsObj.ready?.then === "function") {
      fontsObj.ready.then(() => setFontsReadyTick((v: number) => v + 1));
    }
  }, [words, textClassName]);

  return (
    <span
      className={cn(
        "relative inline-block items-baseline m-0 font-bold text-foreground whitespace-nowrap font-inherit overflow-visible text-left",
        className
      )}
      style={
        maxWidth > 0
          ? { width: `${maxWidth}px` }
          : { width: `${estimatedWidthEm}em` }
      }
    >
      <motion.span
        layout
        layoutId={`words-here-${id}`}
        className={cn(
          "relative inline-block align-baseline text-left"
        )}
        key={words[currentWordIndex]}
      >
        <motion.span
          transition={{
            duration: animationDuration / 1000,
            ease: "easeInOut",
          }}
          className={cn("inline-block whitespace-nowrap", textClassName)}
          ref={textRef}
          layoutId={`word-div-${words[currentWordIndex]}-${id}`}
        >
          <motion.span className="inline-block whitespace-nowrap">
            {words[currentWordIndex].split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: index * 0.02 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </motion.span>
      </motion.span>
    </span>
  );
}
