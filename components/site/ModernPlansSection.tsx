"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import BroadbandFactsLabel from "@/components/site/FCCbroadbandLabels";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Plan {
  name: string;
  price: number;
  download: number;
  upload: number;
  color: string;
  businessOnly?: boolean;
  description?: string;
  planId?: string;
}

interface ModernPlansSectionProps {
  plans: Plan[];
  serviceType: string;
  title: string;
  description: string;
}

export function ModernPlansSection({
  plans,
  serviceType,
  title,
  description,
}: ModernPlansSectionProps) {
  const getFeatures = (plan: Plan) => {
    const baseFeatures = [
      "No data caps",
      "Local support",
      "Professional installation",
      "Transparent pricing",
    ];

    if (plan.name === "Gold" || plan.name === "Titanium") {
      baseFeatures.push("Priority support");
    }

    if (plan.businessOnly) {
      baseFeatures.push("Business features");
    }

    return baseFeatures;
  };

  const getBestFor = (plan: Plan) => {
    switch (plan.name) {
      case "Bronze":
        return "Email, browsing, light streaming";
      case "Silver":
        return "Casual streaming, smart home";
      case "Gold":
        return "HD streaming, video calls, families";
      case "Titanium":
        return "4K streaming, gaming, power users";
      default:
        return "General use";
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`group relative h-full overflow-hidden border-2 ${plan.color} bg-background transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
                {plan.name === "Gold" && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <Badge className="rounded-b-md rounded-t-none border-t-0 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    {plan.businessOnly && (
                      <Badge variant="secondary" className="text-xs">
                        Business
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Download</span>
                      <span className="font-medium">{plan.download} Mbps</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Upload</span>
                      <span className="font-medium">{plan.upload} Mbps</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Best for: {getBestFor(plan)}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {getFeatures(plan).map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4">
                    <Button asChild className="w-full group">
                      <Link href="/contact">
                        Choose plan
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>

                    {plan.planId && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full">
                            View FCC facts
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
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
                              serviceLabel={serviceType}
                            />
                          </div>
                          <DialogClose asChild>
                            <Button variant="outline">Close</Button>
                          </DialogClose>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}