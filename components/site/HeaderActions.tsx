"use client";
import Link from "next/link";
import { IconMail, IconPhone } from "@tabler/icons-react";
import React from "react";
import { Button } from "@/components/ui/button";

export type HeaderButtonStyle =
  | "outline"
  | "simple"
  | "sketch"
  | "invert"
  | "gradient"
  | "favourite"
  | "borderMagic"
  | "litBorders"
  | "topGradient"
  | "brutal"
  | "backdropBlur"
  | "figma"
  | "figmaOutline"
  | "nextBlue";

type ButtonProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  external?: boolean;
  styleKey: HeaderButtonStyle;
};

function ButtonByStyle({ children, styleKey, asChild = false }: { children: React.ReactNode; styleKey: HeaderButtonStyle; asChild?: boolean }) {
  switch (styleKey) {
    case "sketch":
      return (
        <Button asChild={asChild} variant="outline" size="sm" className="border-black bg-white text-black cursor-pointer hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
          {children}
        </Button>
      );
    case "simple":
      return (
        <Button asChild={asChild} variant="outline" size="sm" className="border-neutral-300 bg-neutral-100 text-neutral-700 cursor-pointer hover:-translate-y-0.5 transition duration-150 ease-out transform-gpu will-change-transform">
          {children}
        </Button>
      );
    case "invert":
      return (
        <Button asChild={asChild} size="sm" className="bg-teal-500 text-white font-medium cursor-pointer transition duration-150 ease-out hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
          {children}
        </Button>
      );
    case "gradient":
      return (
        <Button asChild={asChild} size="sm" className="rounded-full bg-[var(--svb-orange)] hover:bg-[var(--svb-orange)] text-black focus-visible:ring-2 focus-visible:ring-[var(--svb-orange)] cursor-pointer transform-gpu will-change-transform transition duration-150 ease-out hover:opacity-95 hover:-translate-y-0.5">
          {children}
        </Button>
      );
    case "favourite":
      return (
        <Button asChild={asChild} size="sm" className="bg-black text-white rounded-md font-semibold cursor-pointer hover:bg-black/80 hover:shadow-md transition duration-150 ease-out">
          {children}
        </Button>
      );
    case "borderMagic":
      return asChild ? (
        <span className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none cursor-pointer">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 text-sm font-medium text-white">
            {children}
          </span>
        </span>
      ) : (
        <button className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none cursor-pointer">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 text-sm font-medium text-white">
            {children}
          </span>
        </button>
      );
    case "litBorders":
      return asChild ? (
        <span className="p-[3px] relative rounded-md cursor-pointer">
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md" />
          <span className="px-3 py-1.5 bg-black rounded-[6px] relative text-white text-sm hover:bg-transparent transition">
            {children}
          </span>
        </span>
      ) : (
        <button className="p-[3px] relative rounded-md cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md" />
          <div className="px-3 py-1.5 bg-black rounded-[6px] relative text-white text-sm hover:bg-transparent transition">
            {children}
          </div>
        </button>
      );
    case "topGradient":
      return (
        <Button asChild={asChild} size="sm" className="rounded-full relative bg-slate-700 text-white border border-slate-600 cursor-pointer transition duration-150 ease-out transform-gpu will-change-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10">
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
          <span className="relative z-10">{children}</span>
        </Button>
      );
    case "brutal":
      return (
        <Button asChild={asChild} size="sm" className="border-2 border-black uppercase bg-white text-black text-xs tracking-wide shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0)] cursor-pointer hover:-translate-y-0.5 transition duration-150 ease-out transform-gpu will-change-transform">
          {children}
        </Button>
      );
    case "backdropBlur":
      return (
        <Button asChild={asChild} variant="outline" size="sm" className="text-black backdrop-blur-sm border-black bg-white/20 cursor-pointer transition duration-150 ease-out">
          {children}
        </Button>
      );
    case "figma":
      return (
        <Button asChild={asChild} size="sm" className="bg-black text-white rounded-md font-semibold cursor-pointer transform-gpu will-change-transform transition duration-150 ease-out hover:-translate-y-0.5">
          {children}
        </Button>
      );
    case "figmaOutline":
      return (
        <Button asChild={asChild} variant="outline" size="sm" className="shadow-[0_0_0_2px_#000_inset] border border-black text-black rounded-md font-semibold cursor-pointer transform-gpu will-change-transform transition duration-150 ease-out hover:-translate-y-0.5">
          {children}
        </Button>
      );
    case "nextBlue":
      return (
        <Button asChild={asChild} size="sm" className="bg-[#0070f3] text-white rounded-md font-medium cursor-pointer shadow-md hover:shadow-lg hover:bg-[rgba(0,118,255,0.9)] transition duration-150 ease-out transform-gpu will-change-transform">
          {children}
        </Button>
      );
    case "outline":
    default:
      return (
        <Button asChild={asChild} variant="outline" size="sm" className="border-neutral-600 text-black bg-white hover:bg-gray-100 cursor-pointer transition duration-150 ease-out">
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


