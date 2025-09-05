import { ContactForm } from "@/components/site/ContactForm";
import { PageLayout } from "@/components/layout/PageLayout";

export const metadata = {
  title: "Contact Sales | Sun Valley Broadband",
  description:
    "Request Sun Valley Broadband service in Yuma, AZ or ask a question. Our local sales team will get back to you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact" }
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
        name: "Contact",
        item: "https://sunvalleybroadband.com/contact"
      }
    ]
  };

  return (
    <PageLayout breadcrumbs={breadcrumbs} jsonLdBreadcrumbs={jsonLdBreadcrumbs} contentMaxWidth="3xl">
      <h1 className="page-title">Contact Sales</h1>
      <p className="mt-2 lead">
        Looking for service or have questions? Send us a message and our sales
        team will get back to you.
      </p>
      <div className="mt-6">
        <ContactForm pageKind="sales" />
      </div>
    </PageLayout>
  );
}


