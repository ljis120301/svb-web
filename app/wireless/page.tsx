import { ModernServiceHero } from "@/components/site/ModernServiceHero";
import { ModernPlansSection } from "@/components/site/ModernPlansSection";
import { EquipmentShowcase } from "@/components/site/EquipmentShowcase";
import { ServiceFeatures } from "@/components/site/ServiceFeatures";
import { EligibilityCta } from "@/components/site/EligibilityCta";
import { ProductBanner } from "@/components/site/Banners";
import { PlansGrid } from "@/components/site/PlansGrid";
import { IconInfinity, IconHeadset, IconShieldCheck, IconRouter, IconBadgeCc } from "@tabler/icons-react";
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

      <div className="mt-8 text-center">
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Wireless Internet</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-700 transition-colors duration-300 dark:text-gray-200">Where fiber isn’t yet available, our wireless service delivers dependable internet with professional installation and local support.</p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-neutral-700/70" />
      </div>

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="mb-3 text-center sm:text-left">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-primary/80 px-3 py-1 text-xs font-medium text-white shadow-sm ">Equipment spotlight</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">An outdoor antenna receives signal from our network and an in‑home router shares it over Wi‑Fi.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 ring-1 ring-black/5 dark:border-neutral-800">
            <div className="flex gap-4">
              <div className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-neutral-100 ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800">
                <IconRouter className="h-8 w-8 text-neutral-600 dark:text-neutral-300" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">Directional antenna — focused signal</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">Mounted outside and aligned to our tower for steady speeds and reliable signal.</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-center gap-2"><IconBadgeCc className="h-4 w-4 text-green-600" /> Clean install, small footprint</li>
                  <li className="flex items-center gap-2"><IconShieldCheck className="h-4 w-4 text-green-600" /> Directional link for steady speeds</li>
                  <li className="flex items-center gap-2"><IconRouter className="h-4 w-4 text-green-600" /> Professionally aligned by our technicians</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 ring-1 ring-black/5 dark:border-neutral-800">
            <div className="flex gap-4">
              <div className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-neutral-100 ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800">
                <IconRouter className="h-8 w-8 text-neutral-600 dark:text-neutral-300" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">Wi‑Fi router — simple whole‑home Wi‑Fi</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">Inside, the router spreads that connection to your devices with dependable, easy‑to‑use Wi‑Fi.</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-center gap-2"><IconBadgeCc className="h-4 w-4 text-green-600" /> Quick setup, friendly app</li>
                  <li className="flex items-center gap-2"><IconShieldCheck className="h-4 w-4 text-green-600" /> Secure network standards</li>
                  <li className="flex items-center gap-2"><IconRouter className="h-4 w-4 text-green-600" /> Ethernet ports for TVs and PCs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="rounded-2xl border border-slate-200 bg-transparent p-4 shadow-sm ring-1 ring-black/5 dark:border-neutral-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-sm text-neutral-600 dark:text-neutral-300">
                  <th className="p-2 font-semibold">Compare plans</th>
                  {wirelessPlans.map((p) => (
                    <th key={p.name} className="p-2 font-semibold">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                <tr>
                  <td className="p-2 text-neutral-600 dark:text-neutral-400">Monthly price</td>
                  {wirelessPlans.map((p) => (
                    <td key={`price-${p.name}`} className="p-2 font-semibold">${""}{p.price.toFixed(2)}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 text-neutral-600 dark:text-neutral-400">Download</td>
                  {wirelessPlans.map((p) => (
                    <td key={`down-${p.name}`} className="p-2">{p.download} Mbps</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 text-neutral-600 dark:text-neutral-400">Upload</td>
                  {wirelessPlans.map((p) => (
                    <td key={`up-${p.name}`} className="p-2">{p.upload} Mbps</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 text-neutral-600 dark:text-neutral-400">Best for</td>
                  {wirelessPlans.map((p) => (
                    <td key={`fit-${p.name}`} className="p-2 text-neutral-700 dark:text-neutral-300">
                      {p.name === "Bronze" && "Email, browsing, light streaming"}
                      {p.name === "Silver" && "Casual streaming, smart home, light work"}
                      {p.name === "Gold" && "HD streaming, video calls, small households"}
                      {p.name === "Titanium" && "Work from home, multiple devices, small business"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-neutral-500">Speeds depend on signal quality and line‑of‑sight. Our team verifies your location during checkout.</p>
        </div>
      </section>

      <section className="mt-10">
        <div className="rounded-2xl border border-slate-200 bg-transparent p-4 shadow-lg ring-1 ring-black/5 dark:border-neutral-800">
          <div className="flex justify-center items-center">
            <PlansGrid
              plans={wirelessPlans}
              serviceLabel="Wireless Internet"
              showFacts
              gridClassName="mt-6 grid auto-rows-fr gap-6 sm:grid-cols-2 md:grid-cols-4 sm:gap-8"
            />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-transparent p-6 shadow-sm ring-1 ring-black/5 dark:border-neutral-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Included with every plan</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-neutral-700 dark:text-neutral-300 sm:grid-cols-2">
              <li className="flex items-center gap-2"><IconBadgeCc className="h-4 w-4 text-green-600" /> Transparent pricing</li>
              <li className="flex items-center gap-2"><IconInfinity className="h-4 w-4 text-green-600" /> No data caps</li>
              <li className="flex items-center gap-2"><IconHeadset className="h-4 w-4 text-green-600" /> Local support</li>
              <li className="flex items-center gap-2"><IconShieldCheck className="h-4 w-4 text-green-600" /> Professional installation</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-transparent p-6 shadow-sm ring-1 ring-black/5 dark:border-neutral-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">What to expect on install day</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2"><IconBadgeCc className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Site check for clear line‑of‑sight to our tower and best antenna placement.</span>
              </li>
              <li className="flex items-start gap-2"><IconBadgeCc className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Outdoor antenna mounted neatly; router set up inside with Wi‑Fi name and password.</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-neutral-500">Pricing is provided at order; equipment options are confirmed during scheduling.</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="rounded-2xl border border-slate-200 bg-transparent p-6 shadow-lg ring-1 ring-black/5 dark:border-neutral-800">
          <EligibilityCta className="mt-2" />
        </div>
      </section>
    </div>
  );
}