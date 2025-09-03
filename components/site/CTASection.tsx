"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent p-8 sm:p-16"
        >
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
          <div className="relative text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Ready to get connected?
            </h2>
            <p className="mt-4 text-sm md:text-base opacity-90">
              Join hundreds of satisfied customers across Yuma and Imperial Valley
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Check availability
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                <Link href="tel:+19283430300">
                  <Phone className="mr-2 h-4 w-4" />
                  (928) 343-0300
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}