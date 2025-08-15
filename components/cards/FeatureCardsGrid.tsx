import { ISPFeatureCard } from "@/components/site/ISPFeatureCard";
import { IconServer, IconMail, IconHeadset, IconShieldLock } from "@tabler/icons-react";

export function FeatureCardsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      <ISPFeatureCard
        className="h-full"
        title="Privacy Focused"
        subtitle="We don't track you, we don't log your data."
        description="We don't sell your data, we don't share your data with anyone." 
        Icon={IconShieldLock}
        highlights={["No logs", "No tracking", "No data collection", "No data sharing"]}
        href="/services"
        ctaLabel="Explore options"
      />
      <ISPFeatureCard
        className="h-full"
        title="Business Email"
        subtitle="Professional email on your domain"
        description="Setup and migration to modern, secure email platforms with ongoing support."
        Icon={IconMail}
        highlights={["Spam protection", "IMAP/POP3", "Mobile + desktop"]}
        href="/services"
        ctaLabel="Set up email"
      />
      <ISPFeatureCard
        className="h-full"
        title="Walk‑In Tech Support"
        subtitle="Friendly local technicians"
        description="Bring your device or network issues — we’ll help in person, right away."
        Icon={IconHeadset}
        highlights={["Router Setup", "Device Swaps", "Network troubleshooting"]}
        href="/support"
        ctaLabel="Visit support"
      />
    </div>
  );
}


