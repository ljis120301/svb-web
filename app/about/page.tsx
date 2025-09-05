import Link from "next/link";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Why Fiber with SVB — Sun Valley Broadband",
  description:
    "Fiber-first internet: faster uploads, lower latency, and reliability for Home, Business, and Municipal customers.",
  alternates: { canonical: "/about" },
};

export default function WhyFiberPage() {
  const cards = [
    {
      title: "Why fiber",
      subtitle: "Modern. Symmetric. Low latency.",
      description: "Fiber delivers consistent speeds up and down, resilient performance during peak hours, and the lowest latency for work, streaming, and gaming.",
    },
    {
      title: "Who we serve",
      subtitle: "Home • Business • Municipal",
      description: "Simple, clear plans for homes; scalable options for businesses; dependable connectivity for public sector deployments.",
    },
    {
      title: "Our network",
      subtitle: "Built for growth",
      description: "A fiber-first footprint with targeted legacy wireless only where needed. Designed for uptime and future expansion.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://sunvalleybroadband.com/" },
              { "@type": "ListItem", position: 2, name: "Why Fiber", item: "https://sunvalleybroadband.com/about" }
            ]
          })
        }}
      />

      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Why Fiber</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center">
        <Badge className="bg-primary text-primary-foreground">Fiber‑first</Badge>
        <h1 className="mt-3 page-title">Why Fiber with SVB</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-700 dark:text-neutral-300">
          Built for speed and reliability today, with headroom for tomorrow. Legacy options are available only where fiber is not yet present.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((c) => (
          <Card key={c.title} className="relative h-64 md:h-72 overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl md:text-3xl font-semibold">{c.title}</CardTitle>
              <CardDescription className="text-sm">{c.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="line-clamp-5 text-sm text-neutral-700 dark:text-neutral-300">
                {c.description}
              </p>
            </CardContent>
            <CardFooter className="absolute bottom-3 left-3 right-3 pt-0">
              <span className="text-xs text-neutral-500">SVB • Fiber Internet</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}


