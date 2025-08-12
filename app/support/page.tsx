import { ContactForm } from "@/components/site/ContactForm";

export const metadata = {
  title: "Technical Support | Sun Valley Broadband",
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Technical Support</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Having issues? Tell us what’s going on and our support team will reach
        out.
      </p>
      <div className="mt-6">
        <ContactForm pageKind="support" />
      </div>
    </div>
  );
}


