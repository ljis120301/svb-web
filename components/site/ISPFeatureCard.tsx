import Link from "next/link";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";

type IconProps = {
  className?: string;
  size?: number | string;
};

export type ISPFeatureCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  Icon: ComponentType<IconProps>;
  highlights?: string[];
  href?: string;
  ctaLabel?: string;
  badge?: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

export function ISPFeatureCard({
  title,
  subtitle,
  description,
  Icon,
  highlights = [],
  href,
  ctaLabel = "Learn more",
  badge,
  className,
  target,
  rel,
}: ISPFeatureCardProps) {
  return (
    <div className={cn("group h-full", className)}>
      <div className="relative rounded-2xl p-[1px] h-full bg-gradient-to-b from-neutral-200/80 to-neutral-100/30 dark:from-neutral-800/60 dark:to-neutral-900/20">

        <div className="relative overflow-hidden rounded-2xl h-full border border-white/60 bg-white/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-lg dark:border-white/10 dark:bg-neutral-950/60">

          <div className="p-6 h-full flex flex-col">

          <div className="flex items-start justify-between gap-4">

            <div className="flex items-start gap-3">

              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100/80 text-accent ring-1 ring-accent/5  border-accent/5 border-8">
              
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                {badge ? (
                  <Badge variant="secondary" className="mb-1 inline-flex rounded-full px-2 py-0.5 text-[11px] tracking-wide">
                    {badge}
                  </Badge>
                ) : null}
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-neutral-900 dark:text-neutral-100">{title}</h3>
                {subtitle ? <p className="text-sm text-neutral-600 dark:text-neutral-400">{subtitle}</p> : null}
              </div>
            </div>
          </div>

          {description ? (
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300">{description}</p>
          ) : null}

          {highlights.length ? (
            <ul className="mt-4 space-y-2">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-neutral-800 dark:text-neutral-200">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 border border-blue-500 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {href ? (
            <div className="mt-auto pt-6 flex justify-end">
              <Link href={href} target={target} rel={rel} className={cn(buttonVariants({ variant: "outline", size: "sm" }), "px-3 group")}> 
                {ctaLabel}
                <IconArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}



