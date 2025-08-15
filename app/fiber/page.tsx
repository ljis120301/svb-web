import { EligibilityCta } from "@/components/site/EligibilityCta";
import { ProductBanner } from "@/components/site/Banners";
import { PlansGrid } from "@/components/site/PlansGrid";

export const metadata = { title: "Fiber Internet | Sun Valley Broadband" };

export default function FiberPage() {
  const fiberPlans = [
    { name: "Bronze", price: 30, download: 50, upload: 10, color: "border-amber-700", planId: "fiber-bronze" },
    { name: "Gold", price: 50, download: 100, upload: 20, color: "border-yellow-500", planId: "fiber-gold" },
    { name: "Titanium", price: 100, download: 500, upload: 50, color: "border-slate-600", planId: "fiber-titanium", businessOnly: true, description: "Ideal for small businesses and offices" },
    { name: "FiberGig", price: 200, download: 1000, upload: 100, color: "border-purple-600", planId: "fiber-gig" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ProductBanner src="/web-images/familySitting.jpeg" alt="Family streaming" title="Fiber Internet" />
      
      <h1 className="text-3xl font-bold">Fiber Internet</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Lightning-fast, low-latency fiber connectivity for homes and businesses.
      </p>

      <PlansGrid plans={fiberPlans} serviceLabel="Fiber Internet" showFacts gridClassName="mt-8 grid auto-rows-fr gap-6 sm:grid-cols-2 md:grid-cols-4" />

      <EligibilityCta className="mt-12" />
    </div>
  );
}


