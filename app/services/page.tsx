import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Internet Services in Yuma, AZ",
  description:
    "Explore Sun Valley Broadband services: Fiber Internet, Fixed Wireless, and Cable TV for homes and businesses in Yuma, Arizona.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Fiber Optic Internet",
      desc: "Blazing-fast speeds for streaming, gaming, and remote work.",
    },
    {
      title: "Wireless Internet",
      desc: "Reliable, flexible connectivity without cable runs.",
    },
    { title: "Cable TV", desc: "HD channels and entertainment bundles." },
  ];

  // We keep this page as a hub to direct users to proper product pages without mixing pricing.

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Get a fast, affordable, and reliable connection to your online world with
        Sun Valley Broadband.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title}>
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
              <CardDescription>{s.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc text-sm text-neutral-600 dark:text-neutral-400">
                <li>Local support team</li>
                <li>Reliable uptime</li>
                <li>No data caps</li>
              </ul>
              <div className="mt-4">
                <Link
                  href={`/${s.title.toLowerCase().split(" ")[0]}`}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Learn more
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


