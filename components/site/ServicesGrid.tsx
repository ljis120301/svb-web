"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Wifi, Zap, Radio } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Fiber Internet",
    description: "Lightning-fast fiber optic internet with speeds up to 500 Mbps",
    features: ["Up to 500 Mbps", "Ultra-low latency", "Future-proof technology"],
    href: "/fiber",
    badge: "Most Popular",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Wifi,
    title: "Wireless Internet",
    description: "Reliable fixed wireless internet reaching where fiber can't",
    features: ["Up to 30 Mbps", "Wide coverage area", "Quick installation"],
    href: "/wireless",
    badge: "Best Coverage",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Radio,
    title: "Cable Internet",
    description: "Cable internet service for select RV parks in Yuma",
    features: ["RV park service", "Simple setup", "All-in-one modem"],
    href: "/cable",
    badge: "RV Parks",
    gradient: "from-orange-500/10 to-red-500/10",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Choose your connection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground"
          >
            From blazing-fast fiber to reliable wireless, we have the right solution for your needs
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative h-full overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="mt-6 w-full group/btn" variant="outline">
                    <Link href={service.href}>
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}