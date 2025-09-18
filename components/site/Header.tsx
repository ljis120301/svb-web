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
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { HeaderActions } from "@/components/site/HeaderActions";
import type { HeaderButtonStyle } from "@/components/site/HeaderActions";
import { MobileNav } from "./MobileNav";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/fiber", label: "Fiber" },
  { href: "/wireless", label: "Legacy Wireless" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  // Change this to switch header action button styles globally
  const HEADER_BUTTON_STYLE: HeaderButtonStyle = "backdropBlur";
  // simple 
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-0 z-10">
          <BrandLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium hover:underline">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-56 p-2">
                  <NavigationMenuLink asChild>
                    <Link href="/fiber" className="block rounded-md px-3 py-2 hover:text-accent-foreground hover:underline">
                      Fiber
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/wireless" className="block rounded-md px-3 py-2 hover:text-accent-foreground hover:underline">
                      Legacy Wireless
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/about" 
                    className={cn(
                      "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:underline",
                      pathname === "/about" && "font-semibold text-primary"
                    )}
                  >
                    Why Fiber
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/support" 
                    className={cn(
                      "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:underline",
                      pathname === "/support" && "font-semibold text-primary"
                    )}
                  >
                    Support
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/contact" 
                    className={cn(
                      "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:underline",
                      pathname === "/contact" && "font-semibold text-primary"
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex">
          <HeaderActions style={HEADER_BUTTON_STYLE} />
        </div>

        {/* Mobile Menu Button */}
        <MobileNav />
      </div>
    </header>
  );
}


