"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export function ContainerTextFlipDemo() {
  const words = [" blazing fast", "reliable", "high-speed", "optimized", "affordable", "localy owned", "modern"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 max-w-2xl text-center text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100",
      )}
      layout
    >
      <div className="inline-block">
        <span className="inline-flex items-baseline align-baseline whitespace-nowrap gap-2">
          <ContainerTextFlip words={words} className="pt-0 pb-1 leading-none md:leading-none" />
          <span>internet</span>
        </span>{" "}
        for the Yuma area and Imperial Valley
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}


