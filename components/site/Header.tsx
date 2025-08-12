"use client";

import Image from "next/image";
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

const navItems = [
  { href: "/", label: "Home" },
  { href: "/fiber", label: "Fiber" },
  { href: "/wireless", label: "Wireless" },
  { href: "/cable", label: "Cable" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/web-images/logos/svbLogo.svg"
            alt="Sun Valley Broadband logo"
            width={60}
            height={60}
            priority
          />
          <span className="font-semibold text-primary">Sun Valley Broadband</span>
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
                    <Link href="/wireless" className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground">Wireless</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/cable" className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground">Cable</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className={cn("rounded-md px-3 py-2", pathname === "/about" && "font-semibold text-primary")}>About</Link>
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
          <Link href="/contact" className={buttonVariants({ variant: "default" })}>
            Get started
          </Link>
          <Link
            href="https://billing.beamspeed.net/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            Pay Bill
          </Link>
        </div>
      </div>
    </header>
  );
}


