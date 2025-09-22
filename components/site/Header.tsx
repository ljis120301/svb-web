"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/site/BrandLogo";
import { MobileNav } from "./MobileNav";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { IconMail, IconPhone } from "@tabler/icons-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/fiber", label: "Fiber" },
  { href: "/wireless", label: "Legacy Wireless" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6 mx-auto">
        <div className="flex items-center gap-3 pl-2">
          <Link href="/" className="flex items-center">
            <BrandLogo />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/fiber"
            className={cn(
              "transition-colors underline decoration-transparent hover:decoration-accent/80 dark:hover:decoration-accent decoration-2 underline-offset-4",
              pathname === "/fiber" && "text-foreground"
            )}
          >
            Fiber
          </Link>
          <Link
            href="/wireless"
            className={cn(
              "transition-colors underline decoration-transparent hover:decoration-accent/80 dark:hover:decoration-accent decoration-2 underline-offset-4",
              pathname === "/wireless" && "text-foreground"
            )}
          >
            Legacy Wireless
          </Link>
          <Link
            href="/support"
            className={cn(
              "transition-colors underline decoration-transparent hover:decoration-accent/80 dark:hover:decoration-accent decoration-2 underline-offset-4",
              pathname?.startsWith("/support") && "text-foreground"
            )}
          >
            Support
          </Link>
          <Link
            href="/contact"
            className={cn(
              "transition-colors underline decoration-transparent hover:decoration-accent/80 dark:hover:decoration-accent decoration-2 underline-offset-4",
              pathname === "/contact" && "text-foreground"
            )}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:text-foreground dark:text-white dark:hover:text-white hover:bg-accent/20 dark:hover:bg-accent/30"
            >
              <a href="tel:+19283430300" aria-label="Call (928) 343-0300">
                <IconPhone className="w-4 h-4 mr-1" /> (928) 343-0300
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:text-foreground dark:text-white dark:hover:text-white hover:bg-accent/20 dark:hover:bg-accent/30"
            >
              <a href="https://webmail.beamspeed.net/" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <IconMail className="w-4 h-4 mr-1" /> Email
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              asChild
              className="hover:text-foreground dark:text-white dark:hover:text-white hover:bg-accent/20 dark:hover:bg-accent/30"
            >
              <Link href="/contact" aria-label="Get started">Get started</Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:text-foreground dark:text-white dark:hover:text-white hover:bg-accent/20 dark:hover:bg-accent/30"
            >
              <a href="https://billing.beamspeed.net/" target="_blank" rel="noopener noreferrer" aria-label="Pay Bill">Pay Bill</a>
            </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}


