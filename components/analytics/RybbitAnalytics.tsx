"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

declare global {
    interface Window {
        rybbit?: {
            pageview: () => void;
            event: (name: string, properties?: Record<string, unknown>) => void;
        };
    }
}

/**
 * Rybbit Analytics — loads the tracking script directly from the Rybbit server
 * (not proxied) so real visitor IPs are preserved, and explicitly tracks
 * route changes as a safety net for mobile browsers.
 */
export default function RybbitAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isFirstLoad = useRef(true);

    // Explicitly track SPA route changes as a mobile safety net
    useEffect(() => {
        // Skip the initial load — the script handles it automatically
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return;
        }
        // Give the script a moment to initialise on slow connections
        const timer = setTimeout(() => {
            window.rybbit?.pageview();
        }, 100);
        return () => clearTimeout(timer);
    }, [pathname, searchParams]);

    return (
        <Script
            src="https://tracking.whoisjason.me/api/script.js"
            data-site-id="6b0d26df0625"
            strategy="afterInteractive"
        />
    );
}
