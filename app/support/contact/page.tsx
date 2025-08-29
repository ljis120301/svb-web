import { ContactForm } from "@/components/site/ContactForm";
import Link from "next/link";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Support | Sun Valley Broadband",
  description: "Get help fast from our local support team in Yuma, AZ.",
  alternates: { canonical: "/support/contact" },
};

export default function SupportContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://sunvalleybroadband.com/" },
              { "@type": "ListItem", position: 2, name: "Support", item: "https://sunvalleybroadband.com/support" },
              { "@type": "ListItem", position: 3, name: "Contact", item: "https://sunvalleybroadband.com/support/contact" }
            ]
          })
        }}
      />
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/support">Support</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold">Contact Support</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Tell us what’s going on and our support team will reach out.</p>
      <div className="mt-6">
        <ContactForm pageKind="support" />
      </div>
    </div>
  );
}


