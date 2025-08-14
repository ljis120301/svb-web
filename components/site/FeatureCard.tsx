import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ComponentType } from "react";
import { Badge } from "@/components/ui/badge";
import { IconArrowRight } from "@tabler/icons-react";

type IconProps = {
  className?: string;
  size?: number | string;
};

export type FeatureCardProps = {
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
  badge?: string;
  badgeClassName?: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
};

export function FeatureCard({ title, description, Icon, badge, badgeClassName, href, ctaLabel = "Learn more", className }: FeatureCardProps) {
  return (
    <div className={cn("group", className)}>
      <Card
        className={cn(
          "relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm will-change-transform transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md",
          "dark:border-neutral-800 dark:bg-neutral-950",
        )}
      >
        <CardHeader className="pb-4">
          {badge ? (
            <Badge variant="secondary" className={cn("w-fit mb-3 rounded-full px-2 py-0.5 text-[11px] tracking-wide", badgeClassName)}>
              {badge}
            </Badge>
          ) : null}
          <div className="flex items-start gap-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:ring-neutral-800">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base leading-snug tracking-tight">{title}</CardTitle>
              <CardDescription className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        {href ? (
          <CardFooter className="pt-0">
            <Link href={href} className={cn(buttonVariants({ variant: "outline", size: "sm" }), "px-3")}> 
              {ctaLabel}
              <IconArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        ) : null}
      </Card>
    </div>
  );
}


