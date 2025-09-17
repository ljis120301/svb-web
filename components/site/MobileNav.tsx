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
          className="lg:hidden z-10"
          aria-label="Toggle menu"
        >
          <IconMenu2 className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pl-4 pr-0">
        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Main navigation links and call-to-action buttons.
        </SheetDescription>
        <div className="flex justify-between items-center pr-4">
            <MobileLink
              href="/"
              className="flex items-center"
              onOpenChange={setOpen}
            >
              <BrandLogo />
            </MobileLink>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                <IconX className="h-5 w-5" />
                <span className="sr-only">Close Menu</span>
            </Button>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-2 pr-4">
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
          <div className="border-t pt-6 mt-6 space-y-3 pr-4">
            <div className="grid grid-cols-2 gap-3">
              <Button asChild size="lg" className="w-full">
                <a href="tel:+19283430300" className="flex items-center justify-center gap-2">
                  <IconPhone className="w-4 h-4" />
                  Call
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <a
                  href="https://webmail.beamspeed.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <IconMail className="w-4 h-4" />
                  Email
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button asChild size="lg" variant="default" className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <a
                  href="https://billing.beamspeed.net/"
                  target="_blank"
                  rel="noopener noreferrer"
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
