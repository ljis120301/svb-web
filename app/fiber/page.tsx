import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EligibilityCta } from "@/components/site/EligibilityCta";
import { ProductBanner } from "@/components/site/Banners";

export const metadata = { title: "Fiber Internet | Sun Valley Broadband" };

export default function FiberPage() {
  const fiberPlans = [
    { name: "Bronze", price: 30, download: 50, upload: 10, color: "border-amber-700" },
    { name: "Gold", price: 50, download: 100, upload: 20, color: "border-yellow-500" },
    { name: "Titanium", price: 100, download: 500, upload: 50, color: "border-slate-600" },
    { name: "FiberGig", price: 200, download: 1000, upload: 100, color: "border-purple-600" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ProductBanner src="/web-images/familySitting.jpeg" alt="Family streaming" title="Fiber Internet" />
      
      <h1 className="text-3xl font-bold">Fiber Internet</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Lightning-fast, low-latency fiber connectivity for homes and businesses.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {fiberPlans.map((p) => (
          <Card key={p.name} className={`border-2 ${p.color}`}>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
              <CardDescription>
                ${""}{p.price}/mo • {p.download} down / {p.upload} up Mbps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400">
                <li>Unlimited data</li>
                <li>No annual contracts</li>
                <li>24/7 support</li>
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <EligibilityCta className="mt-12" />
    </div>
  );
}


