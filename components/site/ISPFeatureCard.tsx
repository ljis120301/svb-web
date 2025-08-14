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
}: ISPFeatureCardProps) {
  return (
    <div className={cn("group", className)}>
      <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition will-change-transform group-hover:-translate-y-0.5 group-hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950">
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:ring-neutral-800">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                {badge ? (
                  <Badge variant="secondary" className="mb-1 inline-flex rounded-full px-2 py-0.5 text-[11px] tracking-wide">
                    {badge}
                  </Badge>
                ) : null}
                <h3 className="text-base font-semibold leading-snug tracking-tight text-neutral-900 dark:text-neutral-100">{title}</h3>
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
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {href ? (
            <div className="mt-6 flex justify-end">
              <Link href={href} className={cn(buttonVariants({ variant: "outline", size: "sm" }), "px-3")}> 
                {ctaLabel}
                <IconArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}



