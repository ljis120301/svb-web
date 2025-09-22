"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContainerTextFlipDemo } from "@/components/ui/container-text-flip-demo";

export default function Hero() {
	return (
    <section id="home" className="relative w-full h-[70vh] bg-gradient-to-r from-background/95 to-background flex items-center justify-center">
			<div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
			</div>
			<div className="container mx-auto px-4 z-10 text-center">
            <ContainerTextFlipDemo />
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto text-muted-foreground">
              Fiber‑first connectivity with quality service and local support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="text-lg px-8 cursor-pointer transition-colors bg-primary text-primary-foreground hover:bg-[var(--primary-hover)] hover:text-primary-foreground focus-visible:ring-1 focus-visible:ring-ring dark:bg-accent dark:text-accent-foreground dark:hover:bg-[var(--accent-hover)] dark:hover:text-accent-foreground"
                >
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="#projects">
                <Button
                  size="lg"
                  className="text-lg px-8 cursor-pointer transition-colors bg-accent text-accent-foreground hover:bg-[var(--accent-hover)] hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring dark:bg-primary dark:text-primary-foreground dark:hover:bg-[var(--primary-hover)] dark:hover:text-primary-foreground"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
			</div>
		</section>
	);
}


