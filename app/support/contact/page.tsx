import { ContactForm } from "@/components/site/ContactForm";
import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Contact Support | Sun Valley Broadband",
  description: "Get help fast from our local support team in Yuma, AZ.",
  alternates: { canonical: "/support/contact" },
};

export default function SupportContactPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Support", href: "/support" },
    { label: "Contact" }
  ];

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sunvalleybroadband.com/" },
      { "@type": "ListItem", position: 2, name: "Support", item: "https://sunvalleybroadband.com/support" },
      { "@type": "ListItem", position: 3, name: "Contact", item: "https://sunvalleybroadband.com/support/contact" }
    ]
  };

  return (
    <PageLayout breadcrumbs={breadcrumbs} jsonLdBreadcrumbs={jsonLdBreadcrumbs} contentMaxWidth="3xl">
      <h1 className="text-3xl font-bold">Contact Support</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Tell us what’s going on and our support team will reach out.</p>
      <div className="mt-6">
        <ContactForm pageKind="support" />
      </div>
    </PageLayout>
  );
}


