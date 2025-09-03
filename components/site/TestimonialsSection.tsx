"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Y. Rocha",
    role: "Residential customer",
    content: "Been a customer for years now. The service has been upgraded. And the best part it's affordable. Great customer service.",
    rating: 5,
  },
  {
    name: "R. Nicolette", 
    role: "Residential customer",
    content: "Service is very fast and very rarely goes down. When it does they are sometimes working on it before I even know it's down.",
    rating: 5,
  },
  {
    name: "Ramon G.",
    role: "Customer",
    content: "Last year Sun Valley Broadband were installing fiber-optic in my area. Their service did improved. I became a customer. Is been over an year and I am very happy.",
    rating: 5,
  },
];

export function TestimonialsSection() {
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
              Customer reviews
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Trusted by the community
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              See what our neighbors are saying about their experience
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="mt-4">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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