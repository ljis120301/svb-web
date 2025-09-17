import { ModernServiceHero } from "@/components/site/ModernServiceHero";
import { ModernPlansSection } from "@/components/site/ModernPlansSection";
import { EquipmentShowcase } from "@/components/site/EquipmentShowcase";
import { Card, CardContent } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { EligibilityCta } from "@/components/site/EligibilityCta";
import { ProductBanner } from "@/components/site/Banners";
import Script from "next/script";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Wireless Internet in Yuma, Wellton, Brawley, Winterhaven, and Holtville",
  description:
    "Fast, dependable wireless internet where fiber is not yet available. Professional install and local support.",
  alternates: { canonical: "/wireless" },
};

export default function WirelessPage() {
  const wirelessPlans = [
    { name: "Bronze", price: 39.95, download: 10, upload: 3, color: "border-amber-500", planId: "wireless-bronze", description: "Basic connectivity where fiber isn’t available" },
    { name: "Silver", price: 49.95, download: 15, upload: 3, color: "border-gray-300", planId: "wireless-silver", description: "Everyday use for small households" },
    { name: "Gold", price: 69.95, download: 25, upload: 5, color: "border-yellow-400", planId: "wireless-gold", description: "Better performance for streaming and work" },
    { name: "Titanium", price: 89.95, download: 30, upload: 5, color: "border-slate-400", businessOnly: true, planId: "wireless-titanium", description: "Small business and work from home" },
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://sunvalleybroadband.com/" },
              { "@type": "ListItem", position: 2, name: "Wireless", item: "https://sunvalleybroadband.com/wireless" }
            ]
          })
        }}
      />

      <Script id="wireless-pricing-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Wireless Internet",
            provider: {
              "@type": "LocalBusiness",
              name: "Sun Valley Broadband",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2481 E Palo Verde St",
                addressLocality: "Yuma",
                addressRegion: "AZ",
                postalCode: "85365",
                addressCountry: "US"
              },
              telephone: "+1-928-343-0300",
              url: "https://sunvalleybroadband.com/"
            },
            areaServed: [
              { "@type": "City", name: "Yuma" },
              { "@type": "City", name: "Wellton" },
              { "@type": "City", name: "Brawley" },
              { "@type": "City", name: "Winterhaven" },
              { "@type": "City", name: "Holtville" }
            ],
            offers: [
              { "@type": "Offer", name: "Bronze", priceCurrency: "USD", price: 39.95, category: "Residential", description: "10/3 Mbps" },
              { "@type": "Offer", name: "Silver", priceCurrency: "USD", price: 49.95, category: "Residential", description: "15/3 Mbps" },
              { "@type": "Offer", name: "Gold", priceCurrency: "USD", price: 69.95, category: "Residential", description: "25/5 Mbps" },
              { "@type": "Offer", name: "Titanium", priceCurrency: "USD", price: 89.95, category: "Business", description: "30/5 Mbps" }
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

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-stretch gap-4 sm:grid-cols-2">
            {[
              {
                title: "Wide coverage area",
                description:
                  "Serving areas where traditional cable and fiber infrastructure isn't available",
              },
              {
                title: "Professional installation",
                description:
                  "Our technicians handle antenna alignment and optimization for best performance",
              },
              {
                title: "Line-of-sight technology",
                description:
                  "Direct wireless connection to our towers for stable, consistent speeds",
              },
              {
                title: "Weather resistant",
                description:
                  "Equipment designed to withstand Arizona's extreme weather conditions",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="relative h-full rounded-2xl md:rounded-3xl min-h-[12rem] overflow-visible pb-1"
              >
                <GlowingEffect
                  blur={0}
                  borderWidth={3}
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  variant="orange"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl md:text-3xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground md:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <EligibilityCta />
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-4xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-neutral-700/70" />
      </div>
    </div>
  );
}