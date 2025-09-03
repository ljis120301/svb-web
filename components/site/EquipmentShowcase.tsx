"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Check } from "lucide-react";

interface Equipment {
  name: string;
  description: string;
  image: string;
  features: string[];
  bestFor: string;
}

interface EquipmentShowcaseProps {
  title: string;
  description: string;
  equipment: Equipment[];
}

export function EquipmentShowcase({
  title,
  description,
  equipment,
}: EquipmentShowcaseProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              Equipment included
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {equipment.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full overflow-hidden border-0 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {item.bestFor}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        {feature}
                      </div>
                    ))}
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