"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { IconStarFilled } from "@tabler/icons-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "normal",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-xl border border-neutral-200 bg-white shadow-sm md:w-[450px] dark:border-neutral-700 dark:bg-neutral-900"
            key={`${item.name}-${idx}`}
          >
            <blockquote className="flex h-[260px] flex-col px-6 py-5 md:h-[280px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/icons8-google-30.svg"
                    alt="Google logo"
                    className="h-5 w-5 select-none"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  <span className="text-xs font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">
                    Google
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconStarFilled key={i} className="h-4 w-4 text-[#FABB05]" stroke={0} />
                    ))}
                  </div>
                  <span className="ml-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">5.0</span>
                </div>
              </div>

              <div className="mt-3 flex-1 overflow-hidden">
                <p className="text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-100">
                  {item.quote}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                    {(item.name || "").slice(0, 1).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
                      {item.name}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">{item.title}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                  <img src="/icons8-google-16.svg" alt="Google" className="h-4 w-4" width={16} height={16} />
                  <span>Review on Google</span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
