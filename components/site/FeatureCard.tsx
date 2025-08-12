import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ComponentType } from "react";
import { Badge } from "@/components/ui/badge";

type IconProps = {
  className?: string;
  size?: number | string;
};

export type FeatureCardProps = {
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
  badge?: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
};

export function FeatureCard({ title, description, Icon, badge, href, ctaLabel = "Learn more", className }: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition hover:-translate-y-[2px] hover:shadow-md",
        "bg-white dark:bg-neutral-950",
        className,
      )}
    >
      <CardHeader className="pb-2">
        {badge ? (
          <Badge variant="secondary" className="w-fit mb-2">
            {badge}
          </Badge>
        ) : null}
        <div className="flex items-start gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:ring-neutral-800">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      {href ? (
        <CardFooter>
          <Link href={href} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "px-2")}> 
            {ctaLabel}
          </Link>
        </CardFooter>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
    </Card>
  );
}


