import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "Do you have data caps?",
    a: "No. All plans are unlimited. We do not throttle." ,
  },
  {
    q: "Can I bring my own router?",
    a: "Yes, any standard non-cable router will work. However keep in mind we do not support bringing routers owned from other providers, or any Doxis cable routers. We also offer the option to rent a router from us for a monthly fee of $5 per month.",
  },
  {
    q: "How soon can I get installed?",
    a: "This will depend on the area you are in, if you are curious please reach out to our sales team and they can assist to lookup your address and provide an estimated time to install.",
  },
  {
    q: "Do you offer business plans?",
    a: "Yes, we work with many businesses all across Yuma County and Imperial. We can provide buisness features like Static IPv4 addresses and in some cases dedicated ethernet lines. For specific buisness needs, or larger scale projects reach out to us by phone or email.",
  },
  {
    q: "Was your Company named Beamspeed?",
    a: "Yes, we were first named Beamspeed, before being rebranded to Sun Valley Broadband as we have expanded our capabilities and services. We are still owned by the exact same people, there was never a change in ownership.",
  },
  {
    q: "Is there a contract?",
    a: "No, we do not have a contract. You can cancel at any time.",
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


