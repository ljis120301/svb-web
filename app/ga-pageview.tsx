'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/analytics';

export function GA4Pageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasMountedRef = useRef(false);

  useEffect(() => {
    // For SPA navigations, send page_view events for route changes
    // The initial page load is handled automatically by GA4
    const query = searchParams?.toString();
    const page_path = query ? `${pathname}?${query}` : pathname;
    
    try {
      // Only send page_view for subsequent route changes (not initial load)
      if (hasMountedRef.current) {
        pageview(page_path);
      } else {
        hasMountedRef.current = true;
      }
    } catch (error) {
      console.warn('GA4 pageview tracking error:', error);
    }
  }, [pathname, searchParams]);

  return null;
}


