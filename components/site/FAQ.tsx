import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "Do you have data caps?",
    a: "No. All plans are unlimited. We do not throttle." ,
  },
  {
    q: "Can I bring my own router?",
    a: "Yes. We also offer managed Wi‑Fi with professional setup.",
  },
  {
    q: "How soon can I get installed?",
    a: "Most installs are completed within 3–5 business days after site survey.",
  },
  {
    q: "Do you offer business SLAs?",
    a: "Yes. Business plans include optional SLAs and static IPs.",
  },
];

export function FAQ() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-4">
      <div className="mb-8 text-center">
        <Badge className="mb-3">Good to know</Badge>
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((f) => (
          <Card key={f.q}>
            <CardHeader>
              <CardTitle className="text-lg">{f.q}</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-700 dark:text-neutral-300">{f.a}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default FAQ;


