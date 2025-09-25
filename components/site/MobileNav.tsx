"use client";

import React, { useState } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IconMenu2, IconX, IconPhone, IconMail } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrandLogo } from "@/components/site/BrandLogo";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden z-10"
          aria-label="Toggle menu"
        >
          <IconMenu2 className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pl-4 pr-0 w-[300px] sm:w-[350px] max-w-[80vw]">
        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Main navigation links and call-to-action buttons.
        </SheetDescription>
        <div className="flex items-center pr-4 overflow-hidden">
          <MobileLink
            href="/"
            className="flex items-center max-w-full"
            onOpenChange={setOpen}
          >
            <BrandLogo />
          </MobileLink>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 overflow-x-hidden">
          <div className="flex flex-col space-y-2 pr-4 max-w-full">
            <MobileLink href="/" onOpenChange={setOpen} pathname={pathname}>Home</MobileLink>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="services" className="border-b-0">
                <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                  Services
                </AccordionTrigger>
                <AccordionContent className="pb-1">
                  <div className="flex flex-col space-y-2 pl-4">
                    <MobileLink href="/fiber" onOpenChange={setOpen} pathname={pathname}>Fiber</MobileLink>
                    <MobileLink href="/wireless" onOpenChange={setOpen} pathname={pathname}>Legacy Wireless</MobileLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <MobileLink href="/about" onOpenChange={setOpen} pathname={pathname}>Why Fiber</MobileLink>
            <MobileLink href="/support" onOpenChange={setOpen} pathname={pathname}>Support</MobileLink>
            <MobileLink href="/contact" onOpenChange={setOpen} pathname={pathname}>Contact</MobileLink>
          </div>
          <div className="border-t pt-6 mt-6 space-y-3 pr-4 max-w-full overflow-hidden">
            <div className="grid grid-cols-2 gap-3 max-w-full">
              <Button asChild size="lg" className="w-full min-w-0">
                <a href="tel:+19283430300" className="flex items-center justify-center gap-2 truncate">
                  <IconPhone className="w-4 h-4 shrink-0" />
                  <span className="truncate">Call</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full min-w-0">
                <a
                  href="https://webmail.beamspeed.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 truncate"
                >
                  <IconMail className="w-4 h-4 shrink-0" />
                  <span className="truncate">Email</span>
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-full">
              <Button asChild size="lg" variant="default" className="w-full min-w-0">
                <Link href="/contact" className="truncate">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full min-w-0">
                <a
                  href="https://billing.beamspeed.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate"
                >
                  Pay Bill
                </a>
              </Button>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  pathname: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  pathname,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(
        "block py-3 text-base font-medium rounded-lg transition-colors",
        pathname === href ? "text-primary font-semibold" : "text-muted-foreground hover:bg-muted",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
