"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export function ContainerTextFlipDemo() {
  const words = ["blazing fast", "reliable", "high-speed", "optimized", "affordable", "locally owned", "modern"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 mx-auto max-w-4xl text-center text-3xl leading-tight font-bold tracking-tight text-zinc-700 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-zinc-100",
      )}
      layout
    >
      <div className="inline-block align-baseline">
        <span className="block">Serving the Yuma area</span>
        <span className="block">and Imperial Valley</span>
        <span className="block whitespace-nowrap">
          with internet that's
          <ContainerTextFlip
            words={words}
            className="ml-2 leading-none align-baseline inline-block"
            textClassName="leading-none"
          />
        </span>
      </div>
    </motion.h1>
  );
}


