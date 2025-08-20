"use client";
import React, { SVGProps, useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false,
  storageKey = "svb-sticky-banner-dismissed",
  dismissible = true,
}: {
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
  storageKey?: string;
  dismissible?: boolean;
}) => {
  const [dismissed, setDismissed] = useState(false);
  const [open, setOpen] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    try {
      const stored = typeof window !== "undefined" ? window.localStorage.getItem(storageKey) : null;
      if (stored === "1") {
        setDismissed(true);
        setOpen(false);
      }
    } catch {}
  }, [storageKey]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (dismissed) return;
    if (hideOnScroll && latest > 40) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  });

  // If dismissed or currently closed (e.g., due to scroll), don't render at all.
  if (dismissed || !open) return null;

  return (
    <motion.div
      className={cn(
        "sticky inset-x-0 top-0 z-[60] flex min-h-14 w-full items-center justify-center bg-transparent px-4 py-1",
        className,
      )}
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}

      {dismissible && (
        <motion.button
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          aria-label="Dismiss banner"
          className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
          onClick={() => {
            setDismissed(true);
            setOpen(false);
            try {
              if (typeof window !== "undefined") {
                window.localStorage.setItem(storageKey, "1");
              }
            } catch {}
          }}
        >
          <CloseIcon className="h-5 w-5 text-white" />
        </motion.button>
      )}
    </motion.div>
  );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
