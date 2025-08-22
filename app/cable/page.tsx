import { EligibilityCta } from "@/components/site/EligibilityCta";
import { ProductBanner } from "@/components/site/Banners";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Script from "next/script";
import { BadgeCheck, ShieldCheck, Router } from "lucide-react";

export const metadata = {
  title: "Cable Internet in Yuma, AZ (Select RV Parks)",
  description:
    "Cable internet options for select RV parks in Yuma, featuring reliable in‑park connectivity and a simple modem/router setup.",
  alternates: { canonical: "/cable" },
};

export default function CablePage() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-12">
      <Script id="cable-breadcrumb-jsonld" type="application/ld+json"
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
                name: "Cable",
                item: "https://sunvalleybroadband.com/cable"
              }
            ]
          })
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(50%_60%_at_50%_-20%,rgba(59,130,246,0.15),transparent)] dark:bg-[radial-gradient(50%_60%_at_50%_-20%,rgba(59,130,246,0.25),transparent)]" />

      <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
        <ProductBanner src="/personOnLabtop.webp" alt="Family using cable internet" title="Cable Internet for RV Parks" />
      </div>

      <div className="mt-8 text-center">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-accent/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur ">
          Available in select Yuma RV parks
        </span>
        <h1 className="mt-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-white dark:via-slate-200 dark:to-slate-50">
          Cable Internet
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-700 transition-colors duration-300 dark:text-gray-200 md:text-lg">
          We provide dependable cable internet service to a small number of partnered RV parks in Yuma. Install is quick, the
          setup is simple, and support is local. Below are the parks we service and the modem/router we provide.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-neutral-700/70" />
      </div>

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="rounded-2xl border border-slate-200 bg-transparent p-4 shadow-sm ring-1 ring-black/5 dark:border-neutral-800">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="p-2 font-semibold text-md text-lg underline">City</TableHead>
                  <TableHead className="p-2 font-semibold text-md text-lg underline">Parks we service</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Yuma, AZ</TableCell>
                  <TableCell className="font-bold">Sun Vista</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wellton, AZ</TableCell>
                  <TableCell className="font-bold">River's Edge</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Winterhaven, CA</TableCell>
                  <TableCell className="font-bold">Tier Drop</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="mt-3 text-xs text-neutral-500">Availability is limited to specific addresses within each park. We’ll verify service during scheduling.</p>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="mb-3 text-center sm:text-left">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-primary/80 px-3 py-1 text-xs font-medium text-white shadow-sm ">Equipment spotlight</span>
          <h2 className="mt-3 text-xl font-semibold tracking-tight">Netgear CG3000D v2 — all‑in‑one cable modem router</h2>
          <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">This is the small box we provide. It brings the internet into your RV and shares it over Wi‑Fi. We bring it, plug it in, and make sure it works before we leave.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 ring-1 ring-black/5 dark:border-neutral-800">
            <div className="flex gap-4">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800">
                <Image src="/netgear.webp" alt="Netgear CG3000D v2 cable modem router" fill sizes="96px" className="object-contain p-1 drop-shadow-lg" />
              </div>
              <div>
                <h3 className="text-base font-semibold">What it offers</h3>
                <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-center gap-2"><Router className="h-4 w-4 text-green-600" /> One simple box for internet and Wi‑Fi — no extra equipment to buy.</li>
                  <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-green-600" /> Great for email, browsing, watching shows, and video calls.</li>
                  <li className="flex items-center gap-2"><Router className="h-4 w-4 text-green-600" /> Four plug‑in ports if you prefer a cable to your TV or computer.</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600" /> Safe, password‑protected Wi‑Fi that we set up for you.</li>
                </ul>
                <p className="mt-2 text-xs text-neutral-500">Speed and coverage can vary by location and time of day. We’ll test it with you at install.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 ring-1 ring-black/5 dark:border-neutral-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">What to expect on install day</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Quick on‑site setup in your space with tidy cabling and Wi‑Fi name/password configured.</span>
              </li>
              <li className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Speed test and device check before we leave; tips for best coverage inside your RV.</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-neutral-500">If you prefer your own router, ask us about bridge mode options at install.</p>
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


