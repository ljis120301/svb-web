"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { StickyBannerDemo } from "@/components/site/StickyOldBanner";

export function RootBannerSlot() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      const stored = typeof window !== "undefined" ? window.localStorage.getItem("svb-sticky-banner-dismissed") : null;
      if (stored === "1") setDismissed(true);
    } catch {}
  }, []);

  if (pathname !== "/" || dismissed) return null;
  return <StickyBannerDemo />;
}


