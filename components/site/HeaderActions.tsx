"use client";
import Link from "next/link";
import { IconMail, IconPhone } from "@tabler/icons-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme/ThemeToggle";

export type HeaderButtonStyle =
  | "simple"
  | "inset-shadow" // in what part of me saying you can not use blue did you feel the need to make a blue button?
  | "bottom-edge"
  | "accent-glow"
  | "split-tone"
  | "gradient-bg"
  | "layered-border"
  | "dot-accent"
  | "textured"
  | "subtle-outline"
  | "refined-pill";

type ButtonProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  external?: boolean;
  styleKey: HeaderButtonStyle;
};

function ButtonByStyle({ children, styleKey, asChild = false }: { children: React.ReactNode; styleKey: HeaderButtonStyle; asChild?: boolean }) {
  const focusRing = "outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2";

  switch (styleKey) {
    case "simple":
      return (
        <Button asChild={asChild} variant="outline" size="sm" className={cn("border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:border-orange-300 shadow-sm hover:shadow-md transition-all duration-200", focusRing)}>
          {children}
        </Button>
      );
    case "inset-shadow":
       return (
        <Button asChild={asChild} size="sm" className={cn("bg-gradient-to-b from-slate-50 to-white text-slate-900 border border-slate-200 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)] hover:from-white hover:to-slate-50 transition-all duration-300", focusRing)}>
           {children}
        </Button>
      );
    case "bottom-edge":
       return (
         <Button asChild={asChild} size="sm" className={cn("bg-white text-slate-900 border border-slate-200 border-b-4 border-b-orange-400 hover:border-b-orange-500 hover:bg-slate-50 hover:translate-y-[-1px] shadow-sm transition-all duration-200", focusRing)}>
           {children}
         </Button>
       );
    case "accent-glow":
      return (
        <Button asChild={asChild} size="sm" className={cn("bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-[0_4px_20px_rgba(255,138,31,0.25)] hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300", focusRing)}>
          {children}
        </Button>
      );
    case "split-tone":
       return (
        <Button asChild={asChild} size="sm" className={cn("text-slate-900 bg-gradient-to-r from-white via-slate-50 to-orange-50/40 border border-slate-200 hover:from-orange-50/20 hover:via-white hover:to-white hover:border-orange-200 shadow-sm transition-all duration-300", focusRing)}>
          {children}
        </Button>
       );
    case "gradient-bg":
      return (
        <Button asChild={asChild} size="sm" className={cn("text-slate-900 border border-orange-200/50 bg-gradient-to-br from-white via-orange-50/30 to-slate-50 hover:from-orange-50/50 hover:via-white hover:to-orange-50/20 shadow-sm hover:shadow-md transition-all duration-300", focusRing)}>
          {children}
        </Button>
      );
    case "layered-border":
       return (
         <Button asChild={asChild} size="sm" className={cn("relative text-slate-900 bg-white border-2 border-slate-200 hover:border-orange-300 shadow-[0_0_0_3px_rgba(255,138,31,0.1)] hover:shadow-[0_0_0_3px_rgba(255,138,31,0.2)] hover:bg-slate-50 transition-all duration-200", focusRing)}>
           {children}
         </Button>
       );
    case "dot-accent":
      return (
        <Button asChild={asChild} size="sm" className={cn("bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-orange-200 shadow-sm transition-all duration-200 group", focusRing)}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-400 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-200"></div>
            {children}
          </div>
        </Button>
      );
    case "textured":
      return (
        <Button asChild={asChild} size="sm" className={cn("text-slate-900 border border-slate-300 bg-slate-50 hover:bg-white hover:border-orange-200 shadow-sm transition-all duration-200", focusRing)} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")` }}>
          {children}
        </Button>
      );
    case "subtle-outline":
       return (
         <Button asChild={asChild} size="sm" className={cn("bg-slate-50/50 text-slate-900 ring-1 ring-inset ring-slate-300 hover:ring-orange-300 hover:bg-white shadow-sm transition-all duration-200", focusRing)}>
           {children}
         </Button>
       );
    case "refined-pill":
      return (
        <Button asChild={asChild} size="sm" className={cn("rounded-full bg-gradient-to-r from-slate-100 to-orange-50/60 text-slate-900 border border-orange-200/50 hover:from-orange-50/40 hover:to-white hover:border-orange-300 shadow-sm hover:shadow-md transition-all duration-200", focusRing)}>
          {children}
        </Button>
      );
    default:
      return (
        <Button asChild={asChild} variant="outline" size="sm" className={cn("border-neutral-300 bg-neutral-100 text-neutral-800 cursor-pointer hover:-translate-y-0.5 transition-transform duration-150 ease-out", focusRing)}>
          {children}
        </Button>
      );
  }
}

function HeaderLinkButton({ href, label, icon, external, styleKey }: ButtonProps) {
  const content = (
    <span className="flex items-center gap-1">
      {icon}
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{label}</span>
    </span>
  );

  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <ButtonByStyle styleKey={styleKey} asChild>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
        >
          {content}
        </a>
      </ButtonByStyle>
    );
  }

  return (
    <ButtonByStyle styleKey={styleKey} asChild>
      <Link href={href} aria-label={label}>
        {content}
      </Link>
    </ButtonByStyle>
  );
}

export function HeaderActions({ style }: { style: HeaderButtonStyle }) {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <HeaderLinkButton
        href="tel:+19283430300"
        label="(928) 343-0300"
        icon={<IconPhone className="w-4 h-4" />}
        external
        styleKey={style}
      />
      <HeaderLinkButton
        href="https://webmail.beamspeed.net/"
        label="Email"
        icon={<IconMail className="w-4 h-4" />}
        external
        styleKey={style}
      />
      <HeaderLinkButton
        href="/contact"
        label="Get started"
        styleKey={style}
      />
      <HeaderLinkButton
        href="https://billing.beamspeed.net/"
        label="Pay Bill"
        external
        styleKey={style}
      />
    </div>
  );
}


