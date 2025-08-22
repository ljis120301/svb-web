'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function GA4Pageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasMountedRef = useRef(false);

  useEffect(() => {
    // Ensure gtag is available
    const gtag = (window as any).gtag as undefined | ((...args: any[]) => void);
    if (!gtag) return;

    // For SPA navigations send an explicit page_view with canonical fields
    const query = searchParams?.toString();
    const page_path = query ? `${pathname}?${query}` : pathname;
    const page_location = typeof window !== 'undefined' ? window.location.href : undefined;
    const page_title = typeof document !== 'undefined' ? document.title : undefined;
    try {
      // Initial mount: GA auto page_view disabled; send our own
      if (!hasMountedRef.current) {
        gtag('event', 'page_view', {
          page_path,
          page_location,
          page_title,
        });
        hasMountedRef.current = true;
        return;
      }

      // Subsequent route changes
      gtag('event', 'page_view', {
        page_path,
        page_location,
        page_title,
      });
    } catch {}
  }, [pathname, searchParams]);

  return null;
}


