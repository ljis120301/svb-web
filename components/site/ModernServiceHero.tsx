"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ModernServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  heroImage: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
}

export function ModernServiceHero({
  title,
  subtitle,
  description,
  badge,
  heroImage,
  stats,
}: ModernServiceHeroProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-6 px-4 py-2">
                {badge}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                {subtitle}
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Learn more
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="min-w-0">
                  <div className="text-xl sm:text-2xl font-bold text-primary break-words">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={heroImage}
                alt={`${title} hero image`}
                width={600}
                height={400}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}