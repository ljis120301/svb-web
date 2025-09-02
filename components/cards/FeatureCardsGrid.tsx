import { ISPFeatureCard } from "@/components/site/ISPFeatureCard";
import { IconBolt, IconShieldLock, IconHeadset } from "@tabler/icons-react";

export function FeatureCardsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      <ISPFeatureCard
        className="h-full"
        title="Fiber‑first performance"
        subtitle="Fast uploads and low latency"
        description="Symmetric speeds and consistent performance designed for work, streaming, and gaming."
        Icon={IconBolt}
        highlights={["Low latency", "Fast uploads", "Consistent speeds"]}
        href="/fiber"
        ctaLabel="See fiber"
      />
      <ISPFeatureCard
        className="h-full"
        title="Privacy focused"
        subtitle="We respect your privacy"
        description="Clear, transparent practices and secure networking defaults."
        Icon={IconShieldLock}
        highlights={["No throttling", "No caps", "Secure defaults"]}
        href="/support"
        ctaLabel="Learn more"
      />
      <ISPFeatureCard
        className="h-full"
        title="Local support"
        subtitle="Friendly technicians"
        description="Talk to people who live and work here. We’re available when you need help."
        Icon={IconHeadset}
        highlights={["Router setup", "Device swaps", "Troubleshooting"]}
        href="/support"
        ctaLabel="Visit support"
      />
    </div>
  );
}


