import { EligibilityCta } from "@/components/site/EligibilityCta";
import { ProductBanner } from "@/components/site/Banners";
import { PlansGrid } from "@/components/site/PlansGrid";
import { IconInfinity, IconHeadset, IconShieldCheck, IconBadgeCheck, IconRouter } from "@tabler/icons-react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export const metadata = {
  title: "Legacy Wireless — Available where fiber isn’t yet",
  description:
    "Legacy fixed wireless is offered only where fiber has not yet arrived. Check fiber availability first.",
  alternates: { canonical: "/wireless" },
};

export default function WirelessPage() {
  const wirelessPlans = [
    { name: "Bronze", price: 39.95, download: 10, upload: 3, color: "border-amber-500", planId: "wireless-bronze", description: "Basic connectivity where fiber isn’t available" },
    { name: "Silver", price: 49.95, download: 15, upload: 3, color: "border-gray-300", planId: "wireless-silver", description: "Everyday use for small households" },
    { name: "Gold", price: 69.95, download: 25, upload: 5, color: "border-yellow-400", planId: "wireless-gold", description: "Better performance for streaming and work" },
  ];

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-12">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Legacy Wireless</BreadcrumbPage>
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
      <Script id="wireless-pricing-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Legacy Wireless Internet",
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
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(50%_60%_at_50%_-20%,rgba(59,130,246,0.15),transparent)] dark:bg-[radial-gradient(50%_60%_at_50%_-20%,rgba(59,130,246,0.25),transparent)]" />

      <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
        <ProductBanner src="/lightbeam3.webp" alt="Wireless tower" title="Legacy Wireless (fiber recommended)" />
      </div>

      <div className="mt-8 text-center">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-accent/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur ">Legacy option</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight">Legacy Wireless</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-700 transition-colors duration-300 dark:text-gray-200">We recommend fiber whenever possible. Where fiber isn’t yet available, legacy wireless provides a stop‑gap option.</p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-neutral-700/70" />
      </div>

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="mb-3 text-center sm:text-left">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-primary/80 px-3 py-1 text-xs font-medium text-white shadow-sm ">Equipment spotlight</span>
          <h2 className="mt-3 text-xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">An outdoor antenna receives signal from our network, then an in‑home router shares it over Wi‑Fi.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 ring-1 ring-black/5 dark:border-neutral-800">
            <div className="flex gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800">
                <Image src="/web-images/lightbeamNOBACKGROUND.webp" alt="Antenna" fill sizes="80px" className="object-cover object-center drop-shadow-lg" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Directional antenna — focused signal</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">Mounted outside, the LiteBeam points to our tower to bring internet to your home with strong range and stability.</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-center gap-2"><IconBadgeCheck className="h-4 w-4 text-green-600" /> Clean install, small footprint</li>
                  <li className="flex items-center gap-2"><IconShieldCheck className="h-4 w-4 text-green-600" /> Directional link for steady speeds</li>
                  <li className="flex items-center gap-2"><IconRouter className="h-4 w-4 text-green-600" /> Professionally aligned by our technicians</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 ring-1 ring-black/5 dark:border-neutral-800">
            <div className="flex gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800">
                <Image src="/tpLinkRouter.webp" alt="Wi‑Fi router" fill sizes="80px" className="object-cover object-center drop-shadow-card drop-shadow-lg" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Wi‑Fi router — simple whole‑home Wi‑Fi</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">Inside, the router spreads that connection to all your devices with dependable, easy‑to‑use Wi‑Fi.</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-center gap-2"><IconBadgeCheck className="h-4 w-4 text-green-600" /> Quick setup, friendly app</li>
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
                <tr className="text-left text-[13px] text-neutral-600 dark:text-neutral-300">
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
        <div className="rounded-2xl border border-slate-200 bg-transparent p-6 shadow-sm ring-1 ring-black/5 dark:border-neutral-800">
          <h3 className="text-sm font-semibold">Prefer fiber?</h3>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">Fiber offers lower latency, higher uploads, and better reliability. Check your address for fiber first.</p>
          <div className="mt-4">
            <EligibilityCta className="mt-2" />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-transparent p-6 shadow-sm ring-1 ring-black/5 dark:border-neutral-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Included with every plan</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-neutral-700 dark:text-neutral-300 sm:grid-cols-2">
              <li className="flex items-center gap-2"><IconBadgeCheck className="h-4 w-4 text-green-600" /> Transparent pricing</li>
              <li className="flex items-center gap-2"><IconInfinity className="h-4 w-4 text-green-600" /> No data caps</li>
              <li className="flex items-center gap-2"><IconHeadset className="h-4 w-4 text-green-600" /> Local support</li>
              <li className="flex items-center gap-2"><IconShieldCheck className="h-4 w-4 text-green-600" /> Professional installation</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-transparent p-6 shadow-sm ring-1 ring-black/5 dark:border-neutral-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">What to expect on install day</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Site check for clear line‑of‑sight to our tower and best antenna placement.</span>
              </li>
              <li className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Outdoor LiteBeam mounted neatly; TP‑Link router set up inside with Wi‑Fi name and password.</span>
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


