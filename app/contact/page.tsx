import { ContactForm } from "@/components/site/ContactForm";

export const metadata = {
  title: "Contact Sales | Sun Valley Broadband",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
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


