import { ModernServiceHero } from "@/components/site/ModernServiceHero";
import { ModernPlansSection } from "@/components/site/ModernPlansSection";
import { EquipmentShowcase } from "@/components/site/EquipmentShowcase";
import { ServiceFeatures } from "@/components/site/ServiceFeatures";
import { EligibilityCta } from "@/components/site/EligibilityCta";
import Link from "next/link";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export const metadata = {
  title: "Fiber Internet in Yuma, AZ",
  description:
    "Blazing-fast fiber internet from Sun Valley Broadband in Yuma, AZ. Low latency, local support, and no data caps.",
  alternates: { canonical: "/fiber" },
};

export default function FiberPage() {
  const fiberPlans = [
    { name: "Bronze", price: 29.99, download: 50, upload: 10, color: "border-amber-700", planId: "fiber-bronze" },
    { name: "Gold", price: 49.99, download: 100, upload: 40, color: "border-yellow-500", planId: "fiber-gold" },
    { name: "Titanium", price: 99.99, download: 500, upload: 50, color: "border-slate-600", planId: "fiber-titanium" },
  ];

  const equipmentOptions = [
    {
      name: "UFiber Loco",
      description: "Compact fiber modem for use with your existing router",
      image: "/UF-LOCO.webp",
      features: ["Modem only", "Use your own router", "Small footprint", "Reliable connection"],
      bestFor: "Users with existing Wi-Fi setup",
    },
    {
      name: "UFiber Wi-Fi 6",
      description: "All-in-one fiber modem with built-in Wi-Fi 6 router",
      image: "/UFiberwifi6.webp",
      features: ["Modem + Router", "Wi-Fi 6 technology", "4 Gigabit ports", "Easy setup"],
      bestFor: "Complete solution in one device",
    },
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumb className="mx-auto max-w-7xl px-4 mb-4 mt-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Fiber</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://sunvalleybroadband.com/"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Fiber",
                item: "https://sunvalleybroadband.com/fiber"
              }
            ]
          })
        }}
      />

      <ModernServiceHero
        title="Fiber Internet"
        subtitle="Lightning-fast speeds for the modern world"
        description="Experience the future of internet with our fiber optic network. Perfect for streaming 4K content, gaming, video calls, and everything your connected home demands."
        badge="Now serving Yuma, Imperial, and Wellton"
        heroImage="/tv.webp"
        stats={[
          { label: "Download speeds", value: "Up to 500 Mbps" },
          { label: "Upload speeds", value: "Up to 50 Mbps" },
          { label: "Latency", value: "Ultra-low" },
        ]}
      />

      <ModernPlansSection
        plans={fiberPlans}
        serviceType="Fiber Internet"
        title="Choose your speed"
        description="All plans include unlimited data, local support, and transparent pricing"
      />

      <EquipmentShowcase
        title="Professional equipment included"
        description="Choose the setup that works best for your home"
        equipment={equipmentOptions}
      />

      <ServiceFeatures
        features={[
          {
            title: "Future-proof technology",
            description: "Fiber optic cables deliver consistent speeds that won't slow down over time",
          },
          {
            title: "Symmetrical uploads",
            description: "Fast upload speeds for video calls, cloud backups, and content creation",
          },
          {
            title: "Low latency gaming",
            description: "Minimal delay for competitive gaming and real-time applications",
          },
          {
            title: "Multiple device support",
            description: "Bandwidth to spare for smart homes with dozens of connected devices",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <EligibilityCta />
        </div>
      </div>
    </div>
  );
}