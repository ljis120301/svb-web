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
        "relative mb-6 mx-auto max-w-4xl text-center text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100",
      )}
      layout
    >
      <div className="inline-block align-baseline ">
        <span className="block">Serving the Yuma area</span>
        <span className="block pr-6">and Imperial Valley</span>
        <span className="block whitespace-nowrap">
          <span className="inline-flex items-baseline ">with internet that's</span>
          <ContainerTextFlip
            words={words}
            className="ml-2 leading-none align-baseline"
            textClassName="leading-none"
          />
        </span>
      </div>
    </motion.h1>
  );
}


