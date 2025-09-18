import { ModernServiceHero } from "@/components/site/ModernServiceHero";
import { ModernPlansSection } from "@/components/site/ModernPlansSection";
import { ServiceFeatures } from "@/components/site/ServiceFeatures";
import { EligibilityCta } from "@/components/site/EligibilityCta";
import Link from "next/link";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { Timeline } from "@/components/ui/timeline";
import { Separator } from "@/components/ui/separator";
import GlowPanel from "@/components/site/GlowPanel";
import {
  Check, Shield, Zap, Users, Signal, UploadCloud, Gamepad2, Router, Search, Calendar, Wrench, Wifi, X, CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Fiber Internet in Yuma, AZ",
  description:
    "Blazing-fast fiber internet from Sun Valley Broadband in Yuma, AZ. Low latency, local support, and no data caps.",
  alternates: { canonical: "/fiber" },
};

export default function FiberPage() {
  const fiberPlans = [
    { name: "Bronze", price: 29.99, download: 50, upload: 10, color: "border-amber-700", planId: "fiber-bronze" },
    { name: "Gold", price: 49.99, download: 100, upload: 40, color: "border-yellow-500", planId: "fiber-gold" },
    { name: "Titanium", price: 99.99, download: 500, upload: 50, color: "border-slate-600", planId: "fiber-titanium" },
  ];

  // Equipment showcase removed to avoid product imagery and mentions

  return (
    <div className="min-h-screen">
      <StickyBanner hideOnScroll className="bg-accent text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2">
          <p className="text-xs sm:text-sm">Fiber is expanding in your area. Check availability today.</p>
          <Button size="sm" variant="secondary" asChild>
            <a href="#eligibility">Check eligibility</a>
          </Button>
        </div>
      </StickyBanner>
      <Breadcrumb className="mx-auto max-w-7xl px-4 mb-4 mt-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Fiber</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://sunvalleybroadband.com/"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Fiber",
                item: "https://sunvalleybroadband.com/fiber"
              }
            ]
          })
        }}
      />

      <ModernServiceHero
        title="Fiber Internet"
        subtitle="Lightning-fast speeds for the modern world"
        description="Experience the future of internet with our fiber optic network. Perfect for streaming 4K content, gaming, video calls, and everything your connected home demands."
        badge="Now serving Yuma, Imperial, and Wellton"
        heroImage="/web-images/familySitting.webp"
        stats={[
          { label: "Download speeds", value: "Up to 500 Mbps" },
          { label: "Upload speeds", value: "Up to 50 Mbps" },
          { label: "Latency", value: "Ultra-low" },
        ]}
      />

      <ModernPlansSection
        plans={fiberPlans}
        serviceType="Fiber Internet"
        title="Choose your speed"
        description="All plans include unlimited data, local support, and transparent pricing"
        centerThreeAtXl
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-3">The SVB Difference</Badge>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple, Fast, and Local</h2>
              <p className="mt-4 text-muted-foreground">
                From professional installation to our friendly local support, we're dedicated to providing a seamless,
                high-speed internet experience. We handle everything, so you can enjoy a reliable connection for
                streaming, gaming, and working from home.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-accent" />
                  <span className="font-medium">Professional Installation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-medium">Local Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="font-medium">No Contracts or Data Caps</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="font-medium">Transparent Pricing</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl">
              <img
                src="/web-images/fiber.webp"
                alt="Fiber optic technology"
                className="h-full max-h-[24rem] w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything You Need for a Modern Home</h2>
            <p className="mt-3 text-muted-foreground">Our fiber network is built to handle it all.</p>
          </div>
          <div className="mt-12 space-y-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <Signal className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-semibold">Future-Proof Tech</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Fiber optic cables deliver consistent, blazing-fast speeds that won't slow down over time, ensuring
                  your connection is ready for tomorrow's technology.
                </p>
              </div>
              <img
                src="/web-images/devices-connecting.webp"
                alt="Future-Proof Technology"
                className="h-64 w-full rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <img
                src="/personOnLabtop.webp"
                alt="Reliable Uploads"
                className="order-last h-64 w-full rounded-lg object-cover shadow-lg lg:order-first"
              />
              <div>
                <div className="flex items-center gap-3">
                  <UploadCloud className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-semibold">Reliable Uploads</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Enjoy fast, stable upload speeds perfect for smooth video calls, quick cloud backups, and seamless
                  content creation without interruptions.
                </p>
              </div>
            </div>
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <Gamepad2 className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-semibold">Low Latency Gaming</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Experience minimal delay and a competitive edge in your favorite online games with our ultra-low
                  latency fiber network.
                </p>
              </div>
              <img
                src="/web-images/globe-space.webp"
                alt="Low Latency Gaming"
                className="h-64 w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Get Connected in 4 Easy Steps</h2>
            <p className="mt-3 text-muted-foreground">We make switching to fiber internet simple and hassle-free.</p>
          </div>
          <div className="mx-auto mt-12 max-w-md">
            <div className="relative z-0">
              <div
                className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-border z-0"
                aria-hidden="true"
              />
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <Search className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">1. Call our Sales Team</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Confirm fiber availability at your location.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">2. Schedule Install</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Pick a convenient time for our technicians to visit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">3. Professional Setup</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Our team ensures a clean, tested, and optimal setup.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <Wifi className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">4. Go Online</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Enjoy your new, blazing-fast fiber internet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Fiber vs. The Alternatives</h2>
            <p className="mt-3 text-muted-foreground">See how our fiber service stacks up against cable and satellite.</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <Card className="hidden sm:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4 text-base">Feature</TableHead>
                    <TableHead className="bg-accent/10 text-base">Our Fiber</TableHead>
                    <TableHead className="text-base">Cable</TableHead>
                    <TableHead className="text-base">Satellite</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Download Speed</TableCell>
                    <TableCell className="bg-accent/10 font-medium text-accent">Up to 500 Mbps</TableCell>
                    <TableCell>Varies</TableCell>
                    <TableCell>Limited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Upload Speed</TableCell>
                    <TableCell className="bg-accent/10 font-medium text-accent">Fast, plan-dependent</TableCell>
                    <TableCell>Much slower</TableCell>
                    <TableCell>Limited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Latency</TableCell>
                    <TableCell className="bg-accent/10">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Low</span>
                      </div>
                    </TableCell>
                    <TableCell>Moderate</TableCell>
                    <TableCell>High</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Data Caps</TableCell>
                    <TableCell className="bg-accent/10">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>None</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <X className="h-5 w-5 text-destructive" />
                        <span>Common</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <X className="h-5 w-5 text-destructive" />
                        <span>Common</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Contract</TableCell>
                    <TableCell className="bg-accent/10">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>None</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <X className="h-5 w-5 text-destructive" />
                        <span>Often required</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <X className="h-5 w-5 text-destructive" />
                        <span>Often required</span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
            <div className="sm:hidden space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Download Speed</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Our Fiber</span>
                    <span className="text-accent font-medium">Up to 500 Mbps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Cable</span>
                    <span>Varies</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Satellite</span>
                    <span>Limited</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Upload Speed</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Our Fiber</span>
                    <span className="text-accent font-medium">Fast, plan-dependent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Cable</span>
                    <span>Much slower</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Satellite</span>
                    <span>Limited</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Latency</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Our Fiber</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-500" />Low</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Cable</span>
                    <span>Moderate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Satellite</span>
                    <span>High</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Data Caps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Our Fiber</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-500" />None</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Cable</span>
                    <span className="flex items-center gap-2"><X className="h-5 w-5 text-destructive" />Common</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Satellite</span>
                    <span className="flex items-center gap-2"><X className="h-5 w-5 text-destructive" />Common</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Contract</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Our Fiber</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-500" />None</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Cable</span>
                    <span className="flex items-center gap-2"><X className="h-5 w-5 text-destructive" />Often required</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Satellite</span>
                    <span className="flex items-center gap-2"><X className="h-5 w-5 text-destructive" />Often required</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 sm:py-24" id="eligibility">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready for an Upgrade?</h2>
          <p className="mt-3 text-muted-foreground">
            Check if our blazing-fast fiber internet is available at your address.
          </p>
          <div className="mt-8">
            <EligibilityCta />
          </div>
        </div>
      </section>
    </div>
  );
}