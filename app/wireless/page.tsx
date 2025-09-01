import { ModernServiceHero } from "@/components/site/ModernServiceHero";
import { ModernPlansSection } from "@/components/site/ModernPlansSection";
import { EquipmentShowcase } from "@/components/site/EquipmentShowcase";
import { ServiceFeatures } from "@/components/site/ServiceFeatures";
import { EligibilityCta } from "@/components/site/EligibilityCta";
import Link from "next/link";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export const metadata = {
  title: "Fixed Wireless Internet in Yuma, Wellton, Brawley, Winterhaven, and Holtville",
  description:
    "Fast, dependable fixed wireless internet across Yuma, AZ from Sun Valley Broadband. Professional install and local support.",
  alternates: { canonical: "/wireless" },
};

export default function WirelessPage() {
  const wirelessPlans = [
    { name: "Bronze", price: 39.95, download: 10, upload: 3, color: "border-amber-500", planId: "wireless-bronze" },
    { name: "Silver", price: 49.95, download: 15, upload: 3, color: "border-gray-300", planId: "wireless-silver" },
    { name: "Gold", price: 69.95, download: 25, upload: 5, color: "border-yellow-400", planId: "wireless-gold" },
    { name: "Titanium", price: 89.95, download: 30, upload: 5, color: "border-slate-400", businessOnly: true, description: "Ideal for small businesses and offices", planId: "wireless-titanium" },
  ];

  const equipmentOptions = [
    {
      name: "Ubiquiti LiteBeam",
      description: "Professional outdoor antenna for reliable wireless connection",
      image: "/web-images/lightbeamNOBACKGROUND.webp",
      features: ["Directional antenna", "Weather resistant", "Professional alignment", "Long-range capability"],
      bestFor: "Outdoor signal reception",
    },
    {
      name: "TP-Link Router",
      description: "Indoor Wi-Fi router for whole-home coverage",
      image: "/tpLinkRouter.webp",
      features: ["Whole-home Wi-Fi", "Multiple devices", "Ethernet ports", "Easy management"],
      bestFor: "Indoor connectivity and Wi-Fi",
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
            <BreadcrumbPage>Wireless</BreadcrumbPage>
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
                name: "Wireless",
                item: "https://sunvalleybroadband.com/wireless"
              }
            ]
          })
        }}
      />

      <ModernServiceHero
        title="Wireless Internet"
        subtitle="Reliable connectivity where fiber can't reach"
        description="Our fixed wireless network brings high-speed internet to rural and hard-to-reach areas using professional-grade equipment and expert installation."
        badge="Available across Yuma, Wellton, Brawley, Winterhaven, and Holtville"
        heroImage="/lightbeam3.webp"
        stats={[
          { label: "Download speeds", value: "Up to 30 Mbps" },
          { label: "Coverage area", value: "5 cities" },
          { label: "Installation", value: "Professional" },
        ]}
      />

      <ModernPlansSection
        plans={wirelessPlans}
        serviceType="Fixed Wireless Internet"
        title="Find your perfect plan"
        description="From basic browsing to business needs, we have a plan that fits"
      />

      <EquipmentShowcase
        title="Professional wireless equipment"
        description="Industry-leading hardware for reliable, long-range connectivity"
        equipment={equipmentOptions}
      />

      <ServiceFeatures
        features={[
          {
            title: "Wide coverage area",
            description: "Serving areas where traditional cable and fiber infrastructure isn't available",
          },
          {
            title: "Professional installation",
            description: "Our technicians handle antenna alignment and optimization for best performance",
          },
          {
            title: "Line-of-sight technology",
            description: "Direct wireless connection to our towers for stable, consistent speeds",
          },
          {
            title: "Weather resistant",
            description: "Equipment designed to withstand Arizona's extreme weather conditions",
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