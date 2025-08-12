import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EligibilityCta } from "@/components/site/EligibilityCta";
import { ProductBanner } from "@/components/site/Banners";

export const metadata = { title: "Wireless Internet | Sun Valley Broadband" };

export default function WirelessPage() {
  const wirelessPlans = [
    { name: "Bronze", price: 45, download: 5, upload: 2, color: "border-amber-500" },
    { name: "Silver", price: 55, download: 10, upload: 3, color: "border-gray-300" },
    { name: "Gold", price: 75, download: 25, upload: 5, color: "border-yellow-400" },
    { name: "Titanium", price: 155, download: 30, upload: 5, color: "border-slate-400", businessOnly: true, description: "Ideal for small businesses and offices" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ProductBanner src="/web-images/wirelessTower.jpg" alt="Wireless tower" title="Wireless Internet" />
      <h1 className="text-3xl font-bold">Wireless Internet</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Flexible installation and reliable performance across your property.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {wirelessPlans.map((p) => (
          <Card key={p.name} className={`border-2 ${p.color}`}>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
              <CardDescription>
                ${""}{p.price}/mo • {p.download} down / {p.upload} up Mbps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400">
                {p.description && <li>{p.description}</li>}
                <li>{p.businessOnly ? "Business only" : "Residential & business"}</li>
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <EligibilityCta className="mt-12" />
    </div>
  );
}


