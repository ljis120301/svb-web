import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import BroadbandFactsLabel from "@/components/site/FCCbroadbandLabels";
import { EligibilityCta } from "@/components/site/EligibilityCta";
import { ProductBanner } from "@/components/site/Banners";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Wireless Internet | Sun Valley Broadband" };

export default function WirelessPage() {
  const wirelessPlans = [
    { name: "Bronze", price: 45, download: 10, upload: 3, color: "border-amber-500", planId: "wireless-bronze" },
    { name: "Silver", price: 55, download: 15, upload: 5, color: "border-gray-300", planId: "wireless-silver" },
    { name: "Gold", price: 75, download: 20, upload: 5, color: "border-yellow-400", planId: "wireless-gold" },
    { name: "Titanium", price: 155, download: 25, upload: 5, color: "border-slate-400", businessOnly: true, description: "Ideal for small businesses and offices", planId: "wireless-titanium" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ProductBanner src="/web-images/wirelessTower.jpg" alt="Wireless tower" title="Wireless Internet" />
      <h1 className="text-3xl font-bold">Wireless Internet</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Flexible installation and reliable performance across your property.
      </p>

      <div className="mt-8 grid auto-rows-fr gap-6 sm:grid-cols-2 md:grid-cols-4">
        {wirelessPlans.map((p) => (
          <Dialog key={p.name}>
            <DialogTrigger asChild>
              <Card className={`group relative h-full border-2 ${p.color} cursor-pointer overflow-hidden bg-white transition hover:-translate-y-1 hover:shadow-md dark:bg-neutral-950`}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800" />
                <CardHeader className="pb-0">
                  <CardTitle className="text-xl tracking-tight">{p.name}</CardTitle>
                  <CardDescription className="mt-1 text-[13px]">Fixed Wireless Internet</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-col items-center">
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-extrabold leading-none">${""}{p.price}</span>
                      <span className="pb-1 text-sm text-neutral-500">/mo</span>
                    </div>
                    <div className="mt-4 flex w-full items-center justify-center gap-2">
                      <div className="rounded-md bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:ring-neutral-800">
                        {p.download} Mbps down
                      </div>
                      <div className="rounded-md bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:ring-neutral-800">
                        {p.upload} Mbps up
                      </div>
                    </div>
                    {p.description ? (
                      <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
                        {p.description}
                      </p>
                    ) : null}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto border-t pt-4">
                  <div className="flex w-full items-center justify-between">
                    <Badge className="font-bold">{p.businessOnly ? "Business only" : "Residential & business"}</Badge>
                    <span className="text-xs text-neutral-500 transition group-hover:translate-x-0.5">View FCC facts</span>
                  </div>
                </CardFooter>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>FCC Broadband Facts — {p.name}</DialogTitle>
              </DialogHeader>
              <div className="max-h-[70vh] overflow-auto flex items-start justify-center">
                <BroadbandFactsLabel planId={p.planId} />
              </div>
              <div className="flex justify-end">
                <DialogClose>Close</DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <EligibilityCta className="mt-12" />
    </div>
  );
}


