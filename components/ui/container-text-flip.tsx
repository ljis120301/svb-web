"use client";

import React, { useState, useEffect, useId, useLayoutEffect } from "react";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const [maxWidth, setMaxWidth] = useState(100);
  const textRef = React.useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // @ts-ignore
      const textWidth = textRef.current.scrollWidth;
      setWidth(textWidth);
      setMaxWidth((prev) => Math.max(prev, textWidth));
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  // Measure all words once to reserve max width up-front and avoid layout shift
  useLayoutEffect(() => {
    if (typeof document === "undefined") return;
    const measurer = document.createElement("span");
    measurer.style.position = "absolute";
    measurer.style.visibility = "hidden";
    measurer.style.whiteSpace = "nowrap";
    measurer.style.pointerEvents = "none";
    // Mirror typography styles that affect width
    measurer.className = cn(
      "text-4xl font-bold md:text-7xl",
      textClassName,
    );
    document.body.appendChild(measurer);
    let localMax = 0;
    for (const w of words) {
      measurer.textContent = w;
      const wpx = measurer.scrollWidth;
      if (wpx > localMax) localMax = wpx;
    }
    document.body.removeChild(measurer);
    if (localMax > 0) setMaxWidth(localMax);
  }, [words, textClassName]);

  return (
    <span
      className={cn(
        "relative inline-flex items-baseline justify-start m-0 text-4xl font-bold text-black md:text-7xl dark:text-white whitespace-nowrap",
      )}
      style={{ width: maxWidth }}
    >
      <motion.span
        layout
        layoutId={`words-here-${id}`}
        animate={{ width }}
        transition={{ duration: animationDuration / 2000 }}
        className={cn(
          "relative inline-block rounded-lg align-baseline",
          "[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
          "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db]",
          "dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]",
          "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
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
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: index * 0.02,
                }}
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
