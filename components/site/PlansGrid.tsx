import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import BroadbandFactsLabel from "@/components/site/FCCbroadbandLabels";
import { Badge } from "@/components/ui/badge";

type Plan = {
  name: string;
  price: number;
  download: number;
  upload: number;
  color: string;
  businessOnly?: boolean;
  description?: string;
  planId?: string;
};

type PlansGridProps = {
  plans: Plan[];
  serviceLabel: string;
  showFacts?: boolean;
  gridClassName?: string;
};

export function PlansGrid({ plans, serviceLabel, showFacts = true, gridClassName }: PlansGridProps) {
  return (
    <div className={gridClassName ?? "mt-8 grid auto-rows-fr gap-6 sm:grid-cols-2 md:grid-cols-4"}>
      {plans.map((plan) => {
        const getBadgeClassesFromBorder = (borderClass: string): string => {
          if (borderClass.includes('amber')) {
            // Bronze — subtle warm metallic
            return 'rounded-md bg-gradient-to-r from-[#e3b072] to-[#cd7f32] px-3 py-1 text-xs font-semibold text-neutral-900 ring-1 ring-amber-300 dark:from-[#5a3c1e] dark:to-[#7a532b] dark:text-amber-100 dark:ring-amber-700 whitespace-nowrap';
          }
          if (borderClass.includes('yellow')) {
            // Gold — refined metallic gold, no animations
            return 'rounded-md bg-gradient-to-r from-[#e6c766] to-[#d4af37] px-3 py-1 text-xs font-semibold text-neutral-900 ring-1 ring-yellow-400 dark:from-[#8b6f26] dark:to-[#6e581e] dark:text-yellow-100 dark:ring-yellow-700 whitespace-nowrap';
          }
          if (borderClass.includes('slate')) {
            // Titanium — cool metallic slate
            return 'rounded-md bg-gradient-to-r from-[#8a8f98] to-[#6b7280] px-3 py-1 text-xs font-semibold text-white ring-1 ring-slate-400 dark:from-[#4b5563] dark:to-[#374151] dark:text-slate-100 dark:ring-slate-700 whitespace-nowrap';
          }
          if (borderClass.includes('gray')) {
            // Silver — light metallic gray
            return 'rounded-md bg-gradient-to-r from-[#e5e7eb] to-[#d1d5db] px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-gray-300 dark:from-[#4b5563] dark:to-[#6b7280] dark:text-gray-100 dark:ring-gray-700 whitespace-nowrap';
          }
          // Default neutral
          return 'rounded-md bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200 dark:bg-neutral-900/30 dark:text-neutral-300 dark:ring-neutral-800 whitespace-nowrap';
        };

        const speedBadgeClass = getBadgeClassesFromBorder(plan.color);
        const CardInner = (
          <Card className={`group relative h-full border-2 ${plan.color} cursor-pointer overflow-hidden bg-white transition hover:-translate-y-1 hover:shadow-md dark:bg-neutral-950 pb-14`}>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800" />
            <div className="absolute top-2 right-2 z-10">
              <Badge variant="outline" className="text-[10px] font-medium px-1.5 py-0 rounded-sm whitespace-nowrap shrink-0 border-neutral-300 text-neutral-600 bg-accent/90">{plan.businessOnly ? "Business only" : "Residential & business"}</Badge>
            </div>
            <CardHeader className="pb-0 pr-24">
              <CardTitle className="text-xl tracking-tight">{plan.name}</CardTitle>
              <CardDescription className="mt-1 text-[13px]">{serviceLabel}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-col items-center">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold leading-none">${""}{plan.price}</span>
                  <span className="pb-1 text-sm text-neutral-500">/mo</span>
                </div>
                <div className="mt-4 flex w-full items-center justify-center gap-2">
                  <div className={speedBadgeClass}>
                    {plan.download} Mbps down
                  </div>
                  <div className={speedBadgeClass}>
                    {plan.upload} Mbps up
                  </div>
                </div>
                {plan.description ? (
                  <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
                    {plan.description}
                  </p>
                ) : null}
              </div>
            </CardContent>
            {showFacts && plan.planId ? (
              <span className="absolute bottom-3 right-3 text-xs text-neutral-500 whitespace-nowrap shrink-0">View FCC facts</span>
            ) : null}
          </Card>
        );

        if (showFacts && plan.planId) {
          return (
            <Dialog key={plan.name}>
              <DialogTrigger asChild>
                {CardInner}
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>FCC Broadband Facts — {plan.name}</DialogTitle>
                </DialogHeader>
                <div className="max-h-[70vh] overflow-auto flex items-start justify-center">
                  <BroadbandFactsLabel
                    planId={plan.planId}
                    planFromPage={{
                      name: plan.name,
                      price: plan.price,
                      download: plan.download,
                      upload: plan.upload,
                      planId: plan.planId,
                    }}
                    serviceLabel={serviceLabel}
                  />
                </div>
                <div className="flex justify-end">
                  <DialogClose>Close</DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          );
        }

        return (
          <div key={plan.name}>
            {CardInner}
          </div>
        );
      })}
    </div>
  );
}


