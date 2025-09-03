import { Wifi, Cable, Tv } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ServicesGrid } from "./services-grid";
import { PageLayout } from "@/components/layout/PageLayout";

export const metadata = {
  title: "Internet Services in Yuma, AZ",
  description:
    "Explore Sun Valley Broadband services: Fiber Internet, Fixed Wireless, and Cable TV for homes and businesses in Yuma, Arizona.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services" }
  ];

  const jsonLdBreadcrumbs = {
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
        name: "Services",
        item: "https://sunvalleybroadband.com/services"
      }
    ]
  };

  return (
    <PageLayout breadcrumbs={breadcrumbs} jsonLdBreadcrumbs={jsonLdBreadcrumbs}>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Get a fast, affordable, and reliable connection to your online world with
        Sun Valley Broadband.
      </p>

      <ServicesGrid />
    </PageLayout>
  );
}