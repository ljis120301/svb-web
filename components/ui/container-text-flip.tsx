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

  const longestWordChars = React.useMemo(
    () => words.reduce((m, w) => Math.max(m, w.length), 0),
    [words]
  );
  const estimatedWidthEm = Math.max(1, Math.round(longestWordChars * 0.62 * 100) / 100);

  const updateWidthForWord = () => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + 2; // safety pad to avoid clipping
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
      const wpx = measurer.scrollWidth + 2; // safety pad
      if (wpx > localMax) localMax = wpx;
    }
    document.body.removeChild(measurer);
    if (localMax > 0) {
      setMaxWidth(localMax);
      onMaxWidthMeasured?.(localMax);
    }
  }, [words, textClassName, onMaxWidthMeasured]);

  return (
    <span
      className={cn(
        "relative inline-flex items-baseline justify-start m-0 font-bold text-foreground whitespace-nowrap font-inherit max-w-full",
      )}
      style={{
        width: maxWidth > 0 ? maxWidth : `${estimatedWidthEm}em`,
      }}
    >
      <motion.span
        layout
        layoutId={`words-here-${id}`}
        animate={{ width }}
        transition={{ duration: animationDuration / 2000 }}
        className={cn(
          "relative inline-block rounded-lg align-baseline will-change-[width] box-border",
          "bg-background/70 border border-border/50 shadow-sm dark:bg-background/30",
          className,
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
