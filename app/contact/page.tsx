import { ContactForm } from "@/components/site/ContactForm";

export const metadata = {
  title: "Contact Sales | Sun Valley Broadband",
  description:
    "Request Sun Valley Broadband service in Yuma, AZ or ask a question. Our local sales team will get back to you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
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
                name: "Contact",
                item: "https://sunvalleybroadband.com/contact"
              }
            ]
          })
        }}
      />
      <h1 className="text-3xl font-bold">Contact Sales</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Looking for service or have questions? Send us a message and our sales
        team will get back to you.
      </p>
      <div className="mt-6">
        <ContactForm pageKind="sales" />
      </div>
    </div>
  );
}


