import { EligibilityCta } from "@/components/site/EligibilityCta";
import { ProductBanner } from "@/components/site/Banners";
import { PlansGrid } from "@/components/site/PlansGrid";

export const metadata = { title: "Wireless Internet | Sun Valley Broadband" };

export default function WirelessPage() {
  const wirelessPlans = [
    { name: "Bronze", price: 39.95, download: 10, upload: 3, color: "border-amber-500", planId: "wireless-bronze" },
    { name: "Silver", price: 49.95, download: 15, upload: 3, color: "border-gray-300", planId: "wireless-silver" },
    { name: "Gold", price: 69.95, download: 25, upload: 5, color: "border-yellow-400", planId: "wireless-gold" },
    { name: "Titanium", price: 89.95, download: 30, upload: 5, color: "border-slate-400", businessOnly: true, description: "Ideal for small businesses and offices", planId: "wireless-titanium" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ProductBanner src="/web-images/wirelessTower.jpg" alt="Wireless tower" title="Wireless Internet" />
      <h1 className="text-3xl font-bold">Wireless Internet</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Flexible installation and reliable performance across your property.
      </p>

      <PlansGrid plans={wirelessPlans} serviceLabel="Fixed Wireless Internet" showFacts gridClassName="mt-8 grid auto-rows-fr gap-6 sm:grid-cols-2 md:grid-cols-4" />

      <EligibilityCta className="mt-12" />
    </div>
  );
}


