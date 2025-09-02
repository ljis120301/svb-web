"use client";

import { Wifi, Cable, Tv } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { buttonVariants } from "@/components/ui/button";

export function ServicesGrid() {
  const services = [
    {
      title: "Fiber Optic Internet",
      desc: "Blazing-fast speeds for streaming, gaming, and remote work.",
      icon: <Wifi className="h-4 w-4 text-primary" />,
      href: "/fiber",
      area: "md:[grid-area:1/1/2/5]"
    },
    {
      title: "Wireless Internet",
      desc: "Reliable, flexible connectivity without cable runs.",
      icon: <Cable className="h-4 w-4 text-primary" />,
      href: "/wireless",
      area: "md:[grid-area:1/5/2/9]"
    },
    {
      title: "Cable TV",
      desc: "HD channels and entertainment bundles.",
      icon: <Tv className="h-4 w-4 text-primary" />,
      href: "/cable",
      area: "md:[grid-area:1/9/2/13]"
    },
  ];

  return (
    <ul className="mt-8 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-1 lg:gap-4">
      {services.map((service) => (
        <ServiceGridItem
          key={service.title}
          area={service.area}
          icon={service.icon}
          title={service.title}
          description={service.desc}
          href={service.href}
        />
      ))}
    </ul>
  );
}

interface ServiceGridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const ServiceGridItem = ({ area, icon, title, description, href }: ServiceGridItemProps) => {
  return (
    <li className={`min-h-[20rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          variant="orange"
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-primary/20 bg-primary/5 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                {description}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <ul className="mb-4 list-inside list-disc text-sm text-neutral-600 dark:text-neutral-400">
              <li>Local support team</li>
              <li>Reliable uptime</li>
              <li>No data caps</li>
            </ul>
            <Link
              href={href}
              className={buttonVariants({ variant: "outline" })}
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};
