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
  descriptionMinHeightPx?: number;
};

export function PlansGrid({ plans, serviceLabel, showFacts = true, gridClassName, descriptionMinHeightPx }: PlansGridProps) {
  const hasAnyDescription = plans.some((p) => Boolean(p.description));
  return (
    <div className={gridClassName ?? "mt-8 grid auto-rows-fr gap-6 sm:grid-cols-2 md:grid-cols-4"}>
      {plans.map((plan) => {
        const CardInner = (
          <Card className={`group relative h-full border-2 ${plan.color} cursor-pointer overflow-hidden bg-white transition hover:-translate-y-1 hover:shadow-md dark:bg-neutral-950 pb-14`}>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800" />
            <div className="absolute top-2 right-2 z-10">
              <Badge
                variant="default"
                className={`${plan.businessOnly ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'} border-transparent whitespace-nowrap shrink-0 text-[10px] font-medium px-1.5 py-0 rounded-sm`}
              >
                {plan.businessOnly ? "Business only" : "Residential & business"}
              </Badge>
            </div>
            <CardHeader className="pb-0 pr-24">
              <div className="min-h-[64px]">
                <CardTitle className="text-xl tracking-tight">{plan.name}</CardTitle>
                <CardDescription className="mt-1 text-[13px] truncate">{serviceLabel}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-col items-center">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold leading-none">${""}{plan.price}</span>
                  <span className="pb-1 text-sm text-neutral-500">/mo</span>
                </div>
                <div className="mt-4 flex w-full items-center justify-center gap-2">
                  <Badge
                    variant="outline"
                    className="px-2 py-0.5 text-xs font-medium rounded-sm whitespace-nowrap shrink-0 border-neutral-300 text-neutral-700 bg-transparent dark:border-neutral-700 dark:text-neutral-300"
                  >
                    {plan.download} Mbps down
                  </Badge>
                  <Badge
                    variant="outline"
                    className="px-2 py-0.5 text-xs font-medium rounded-sm whitespace-nowrap shrink-0 border-neutral-300 text-neutral-700 bg-transparent dark:border-neutral-700 dark:text-neutral-300"
                  >
                    {plan.upload} Mbps up
                  </Badge>
                </div>
                {plan.description ? (
                  <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
                    {plan.description}
                  </p>
                ) : (
                  descriptionMinHeightPx !== undefined
                    ? (descriptionMinHeightPx > 0 ? <div className="mt-4" style={{ height: descriptionMinHeightPx }} /> : null)
                    : (hasAnyDescription ? <div className="mt-4 h-5" /> : null)
                )}
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


