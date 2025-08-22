import { EligibilityCta } from "@/components/site/EligibilityCta";
import { ProductBanner } from "@/components/site/Banners";
import { PlansGrid } from "@/components/site/PlansGrid";
import { Gauge, Infinity, Headphones, ShieldCheck, BadgeCheck, Router } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

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

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-12">
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
      <Script id="fiber-pricing-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Fiber Internet",
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
            areaServed: [{ "@type": "City", name: "Yuma" }],
            offers: [
              { "@type": "Offer", name: "Bronze", priceCurrency: "USD", price: 29.99, category: "Residential", description: "50/10 Mbps" },
              { "@type": "Offer", name: "Gold", priceCurrency: "USD", price: 49.99, category: "Residential", description: "100/40 Mbps" },
              { "@type": "Offer", name: "Titanium", priceCurrency: "USD", price: 99.99, category: "Residential", description: "500/50 Mbps" }
            ]
          })
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(50%_60%_at_50%_-20%,rgba(59,130,246,0.15),transparent)] dark:bg-[radial-gradient(50%_60%_at_50%_-20%,rgba(59,130,246,0.25),transparent)]" />

      <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
      <ProductBanner src="/tv.webp" alt="Family streaming" title="Fiber Internet you can trust" />
      </div>

      <div className="mt-8 text-center">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-accent/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur ">
          Now serving Yuma, Imperial, and Wellton
        </span>
        <h1 className="mt-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-white dark:via-slate-200 dark:to-slate-50">
          Fiber Internet
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-700 transition-colors duration-300 dark:text-gray-200 md:text-lg">
          At <span className="font-semibold">Sun Valley Broadband</span>, we’re bringing
          <span className="font-semibold"> next-generation fiber optic internet</span> right here to Yuma, Arizona.
  Say goodbye to buffering, slow uploads, and unreliable connections — our fiber service delivers 
          <span className="font-semibold"> lightning-fast speeds</span> with dependable performance, so you can stream in 4K, game without lag,
  and work from home seamlessly. Whether you’re looking for our affordable <span className="font-semibold">Bronze</span> plan, 
          the balanced performance of <span className="font-semibold">Gold</span>, or the
          ultra-powerful <span className="text-slate-700 dark:text-slate-300 font-semibold">Titanium</span> tier, you’ll enjoy
          <span className="font-semibold"> local support</span> from people who live and work in your community. Experience the difference of true fiber — because Yuma deserves internet built for the future.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-neutral-700/70" />
      </div>

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="mb-3 text-center sm:text-left">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-primary/80 px-3 py-1 text-xs font-medium text-white shadow-sm ">Equipment spotlight</span>
          <h2 className="mt-3 text-xl font-semibold tracking-tight">Pick how you want Wi‑Fi at home</h2>
          <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">Choose a simple modem to use with your own router, or go all‑in‑one with fast Wi‑Fi 6 built in.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 ring-1 ring-black/5 dark:border-neutral-800">
            <div className="flex gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800">
                <Image src="/UF-LOCO.webp" alt="Ubiquiti UFiber Loco modem" fill sizes="80px" className="object-contain p-1 drop-shadow-lg" />
              </div>
              <div>
                <h3 className="text-base font-semibold">UFiber Loco — keep your own Wi‑Fi</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">A small fiber modem that lets your favorite router or mesh system do the Wi‑Fi.</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-green-600" /> Plugs into your existing router</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600" /> Reliable fiber connection, tiny footprint</li>
                  <li className="flex items-center gap-2"><Router className="h-4 w-4 text-green-600" /> Ideal if you already own a good Wi‑Fi setup</li>
                </ul>
                <p className="mt-2 text-xs text-neutral-500">Modem‑only. Pair with any router you prefer.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 ring-1 ring-black/5 dark:border-neutral-800">
            <div className="flex gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800">
                <Image src="/UFiberwifi6.webp" alt="Ubiquiti UFiber Wi‑Fi 6 all‑in‑one" fill sizes="80px" className="object-contain p-1 drop-shadow-lg" />
              </div>
              <div>
                <h3 className="text-base font-semibold">UFiber Wi‑Fi 6 — one box for everything</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">Fiber modem + fast Wi‑Fi 6 router + 4‑port switch. Fewer cables, cleaner setup, strong whole‑home coverage.</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-green-600" /> Wi‑Fi 6 for modern devices</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600" /> Simple setup, fewer boxes to manage</li>
                  <li className="flex items-center gap-2"><Router className="h-4 w-4 text-green-600" /> 4 Gigabit ports for TVs, consoles, and work PCs</li>
                </ul>
                <p className="mt-2 text-xs text-neutral-500">All‑in‑one. Great if you want the easiest choice.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-neutral-500">Select UFiber Loco (modem‑only) or UFiber Wi‑Fi 6 (modem + router + switch). We’ll help you pick the best fit during checkout. No specific prices shown here.</p>
      </section>

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="rounded-2xl border border-slate-200 bg-transparent p-4 shadow-sm ring-1 ring-black/5 dark:border-neutral-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-[13px] text-neutral-600 dark:text-neutral-300">
                  <th className="p-2 font-semibold">Compare plans</th>
                  {fiberPlans.map((p) => (
                    <th key={p.name} className="p-2 font-semibold">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                <tr>
                  <td className="p-2 text-neutral-600 dark:text-neutral-400">Monthly price</td>
                  {fiberPlans.map((p) => (
                    <td key={`price-${p.name}`} className="p-2 font-semibold">${""}{p.price.toFixed(2)}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 text-neutral-600 dark:text-neutral-400">Download</td>
                  {fiberPlans.map((p) => (
                    <td key={`down-${p.name}`} className="p-2">{p.download} Mbps</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 text-neutral-600 dark:text-neutral-400">Upload</td>
                  {fiberPlans.map((p) => (
                    <td key={`up-${p.name}`} className="p-2">{p.upload} Mbps</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 text-neutral-600 dark:text-neutral-400">Best for</td>
                  {fiberPlans.map((p) => (
                    <td key={`fit-${p.name}`} className="p-2 text-neutral-700 dark:text-neutral-300">
                      {p.name === "Bronze" && "Email, browsing, light streaming"}
                      {p.name === "Gold" && "HD streaming, video calls, families"}
                      {p.name === "Titanium" && "4K streaming, gaming, power users"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-neutral-500">Speeds are typical wired performance. Actual speeds may vary by network conditions.</p>
        </div>
      </section>

      <section className="mt-10">
        <div className="rounded-2xl border border-slate-200 bg-transparent p-4 shadow-lg ring-1 ring-black/5 dark:border-neutral-800">
          <div className="flex justify-center items-center">
            <PlansGrid
              plans={fiberPlans}
              serviceLabel="Fiber Opticalins Internet"
              showFacts
              gridClassName="mt-6 grid auto-rows-fr gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-8"
              descriptionMinHeightPx={56}
            />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-transparent p-6 shadow-sm ring-1 ring-black/5 dark:border-neutral-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Included with every plan</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-neutral-700 dark:text-neutral-300 sm:grid-cols-2">
              <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-green-600" /> Transparent pricing</li>
              <li className="flex items-center gap-2"><Infinity className="h-4 w-4 text-green-600" /> No data caps</li>
              <li className="flex items-center gap-2"><Headphones className="h-4 w-4 text-green-600" /> Local support</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600" /> Secure, reliable network</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-transparent p-6 shadow-sm ring-1 ring-black/5 dark:border-neutral-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Which should I choose?</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-green-600" />
                <span><strong>UFiber Loco</strong>: best if you already own a router or mesh and want a small, reliable fiber modem.</span>
              </li>
              <li className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-green-600" />
                <span><strong>UFiber Wi‑Fi 6</strong>: best if you want one device that handles fiber, fast Wi‑Fi, and multiple wired devices.</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-neutral-500">We’ll recommend the right option during signup; pricing is provided at order.</p>
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


