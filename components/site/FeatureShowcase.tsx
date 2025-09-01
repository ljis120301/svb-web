"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Users, Infinity } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "No tracking, no data collection, no logs. Your privacy is our priority.",
  },
  {
    icon: Clock,
    title: "24/7 Reliability",
    description: "Network monitoring and local support team ready when you need us.",
  },
  {
    icon: Users,
    title: "Local Team",
    description: "Real people in Yuma who understand your community's needs.",
  },
  {
    icon: Infinity,
    title: "No Data Caps",
    description: "Unlimited data on all plans. Stream, game, and work without limits.",
  },
];

export function FeatureShowcase() {
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
            <Badge variant="outline" className="mb-4">
              Why choose us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for the community
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're not just another ISP. We're your neighbors, committed to bringing 
              world-class internet to Yuma and Imperial Valley.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border-0 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}