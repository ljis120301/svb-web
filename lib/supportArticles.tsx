import { ReactNode } from "react";

export type SupportArticle = {
  slug: string;
  title: string;
  excerpt: string;
  tags?: string[];
  updatedAt?: string; // ISO date string
  content: ReactNode;
};

export const supportArticles: SupportArticle[] = [
  {
    slug: "setup-wifi-router",
    title: "How to set up your Wi‑Fi router",
    excerpt:
      "Step‑by‑step guide to connect your and get up and running with your new internet service.",
    tags: ["wifi", "router", "setup"],
    updatedAt: "2025-01-01",
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h2>Before you begin</h2>
        <ul>
          <li>Have your modem or ONT powered on and connected to the internet.</li>
          <li>Keep your router, power adapter, and an Ethernet cable handy.</li>
        </ul>
        <h2>1) Connect hardware</h2>
        <ol>
          <li>Plug the router into power.</li>
          <li>
            Connect an Ethernet cable from your modem/ONT to the router port labeled
            WAN/Internet.
          </li>
        </ol>
        <h2>2) Join the temporary Wi‑Fi</h2>
        <p>
          On your phone or laptop, join the default network printed on the router label.
        </p>
        <h2>3) Run setup</h2>
        <p>
          Open a browser and visit the router app or admin page listed in the manual.
          Create a unique network name (SSID) and a strong password.
        </p>
        <h2>4) Place your router</h2>
        <p>
          Position the router centrally and elevated, away from obstructions and metal
          surfaces for best coverage.
        </p>
        <h2>Need help?</h2>
        <p>
          If you get stuck, contact support and we can walk you through it.
        </p>
      </div>
    ),
  },
  {
    slug: "troubleshoot-slow-internet",
    title: "Troubleshoot slow internet",
    excerpt:
      "Quick checks to find and fix common causes of slow speeds at home.",
    tags: ["troubleshooting", "speed"],
    updatedAt: "2025-01-01",
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h2>Common checks</h2>
        <ul>
          <li>Restart your router and modem/ONT (power off 30 seconds, then on).</li>
          <li>Run a wired speed test from a laptop to isolate Wi‑Fi issues.</li>
          <li>Move bandwidth‑heavy devices off 2.4GHz to 5GHz if available.</li>
          <li>Update router firmware using the vendor app.</li>
        </ul>
        <h2>Still slow?</h2>
        <p>
          Note time of day and affected devices, then contact our team—we can help
          diagnose further.
        </p>
      </div>
    ),
  },
];

export function getAllSupportArticles(): SupportArticle[] {
  return supportArticles;
}

export function getSupportArticleBySlug(slug: string): SupportArticle | undefined {
  return supportArticles.find((a) => a.slug === slug);
}


