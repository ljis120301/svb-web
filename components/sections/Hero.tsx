"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContainerTextFlipDemo } from "@/components/ui/container-text-flip-demo";

export default function Hero() {
    return (
	<section id="home" className="relative w-full h-[70svh] min-h-[500px] bg-gradient-to-r from-background/95 to-background flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
			</div>
			<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center overflow-x-hidden">
            <div className="max-w-4xl mx-auto">
              <ContainerTextFlipDemo />
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground px-4 break-words">
              Fiber‑first connectivity with quality service and local support
            </p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto sm:max-w-none overflow-x-hidden">
					<Button
							asChild
							size="lg"
						className="w-full sm:w-auto min-w-0 whitespace-nowrap text-base sm:text-lg px-6 sm:px-8 h-12 cursor-pointer transition-colors bg-primary text-primary-foreground hover:bg-[var(--primary-hover)] hover:text-primary-foreground focus-visible:ring-1 focus-visible:ring-ring dark:bg-accent dark:text-accent-foreground dark:hover:bg-[var(--accent-hover)] dark:hover:text-accent-foreground"
						>
							<Link href="#contact">Get a Free Quote</Link>
						</Button>
					<Button
							asChild
							size="lg"
						className="w-full sm:w-auto min-w-0 whitespace-nowrap text-base sm:text-lg px-6 sm:px-8 h-12 cursor-pointer transition-colors bg-accent text-accent-foreground hover:bg-[var(--accent-hover)] hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring dark:bg-primary dark:text-primary-foreground dark:hover:bg-[var(--primary-hover)] dark:hover:text-primary-foreground"
						>
							<Link href="#projects">View Our Work</Link>
						</Button>
					</div>
			</div>
		</section>
	);
}


