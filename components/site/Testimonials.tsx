import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const quotes = [
  {
    name: "Maria R.",
    role: "Home user",
    text: "Switched last year and it's been rock solid. 4K streams never buffer.",
  },
  {
    name: "Jorge T.",
    role: "Small business owner",
    text: "Install was fast and support is local. We stayed online during our busiest season.",
  },
  {
    name: "Kyla P.",
    role: "Gamer",
    text: "Latency is consistently low. Competitive matches feel snappy now.",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-4">
      <div className="mb-8 text-center">
        <Badge className="mb-3">What customers say</Badge>
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">Trusted by neighbors and businesses</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {quotes.map((q) => (
          <Card key={q.name} className="border-neutral-200/70 dark:border-neutral-800">
            <CardContent className="p-6">
              <p className="text-neutral-800 dark:text-neutral-200">“{q.text}”</p>
              <div className="mt-4 text-sm text-neutral-500">{q.name} • {q.role}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;


