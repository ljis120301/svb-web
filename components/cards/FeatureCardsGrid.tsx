import { ISPFeatureCard } from "@/components/site/ISPFeatureCard";
import { IconWifi, IconBuildingSkyscraper, IconShieldLock, IconHeadset, IconAntennaBars5, IconRouter } from "@tabler/icons-react";

export function FeatureCardsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ISPFeatureCard
        title="Fiber Plus"
        subtitle="Symmetrical speeds for modern homes"
        description="Stream, game, work, and create on a rock‑solid fiber network engineered for low latency."
        Icon={IconWifi}
        highlights={["Up to 1 Gbps", "Sub‑10 ms latency", "Unlimited data"]}
        badge="Best value"
        href="/fiber"
        ctaLabel="Explore fiber"
      />
      <ISPFeatureCard
        title="Wireless Pro"
        subtitle="High‑performance fixed wireless"
        description="Fast, reliable connectivity beyond fiber zones using carrier‑grade radios."
        Icon={IconAntennaBars5}
        highlights={["Up to 300 Mbps", "Professional install", "Great for rural"]}
        badge="Popular"
        href="/wireless"
        ctaLabel="Check availability"
      />
      <ISPFeatureCard
        title="Managed Mesh Wi‑Fi"
        subtitle="Whole‑home coverage, zero dead zones"
        description="Enterprise‑grade Wi‑Fi 6/6E with seamless roaming and remote optimization."
        Icon={IconRouter}
        highlights={["Wi‑Fi 6/6E", "Parental controls", "Remote monitoring"]}
        href="/services"
        ctaLabel="Add managed Wi‑Fi"
      />
      <ISPFeatureCard
        title="Business Internet"
        subtitle="Dedicated performance for teams"
        description="Scalable connectivity with priority routing and uptime SLAs for modern businesses."
        Icon={IconBuildingSkyscraper}
        highlights={["Static IP options", "Priority support", "SLA available"]}
        href="/services"
        ctaLabel="Explore business"
      />
      <ISPFeatureCard
        title="Secure Network"
        subtitle="Protection that works in the background"
        description="Network‑level security with malware blocking, safe browsing, and family filters."
        Icon={IconShieldLock}
        highlights={["WPA3 ready", "Threat blocking", "Content filters"]}
        href="/support"
        ctaLabel="Explore security"
      />
      <ISPFeatureCard
        title="Local Care"
        subtitle="Real people, real fast"
        description="Talk to someone who lives here. Phone, chat, or in‑person support, 7 days a week."
        Icon={IconHeadset}
        highlights={["Same‑day dispatch", "On‑site techs", "Knowledgeable staff"]}
        href="/support"
        ctaLabel="Contact support"
      />
    </div>
  );
}


