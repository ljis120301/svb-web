"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconMail } from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";
import { BrandLogo } from "@/components/site/BrandLogo";


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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-0">
          <BrandLogo />
        </Link>

        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[220px] p-2">
                  <NavigationMenuLink asChild>
                    <Link href="/fiber" className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground">Fiber</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/wireless" className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground">Legacy Wireless</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className={cn("rounded-md px-3 py-2", pathname === "/about" && "font-semibold text-primary")}>Why Fiber</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/support" className={cn("rounded-md px-3 py-2", pathname === "/support" && "font-semibold text-primary")}>Support</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={cn("rounded-md px-3 py-2", pathname === "/contact" && "font-semibold text-primary")}>Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+19283430300"
            aria-label="Call (928) 343-0300"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            <IconPhone className="w-4 h-4" />
            <span className="hidden sm:inline">(928) 343-0300</span>
          </a>
          <Link
            href="https://webmail.beamspeed.net/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            <IconMail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "default", size: "sm" })}>
            Get started
          </Link>
          <Link
            href="https://billing.beamspeed.net/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Pay Bill
          </Link>
        </div>
      </div>
    </header>
  );
}


