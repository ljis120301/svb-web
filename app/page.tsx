import NetworkHero from "@/components/site/NetworkHero";
import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sun Valley Broadband — Fiber Internet in Yuma, AZ",
  description:
    "Fiber‑first internet with fast uploads, low latency, and local support. Legacy wireless available only where fiber isn’t yet.",
  alternates: { canonical: "/" },
};

const AppleCardsList = dynamic(
  () => import("@/components/cards/AppleCardsList").then((m) => m.AppleCardsList),
  { loading: () => null }
);
const ServicesGrid = dynamic(
  () => import("@/app/services/services-grid").then((m) => m.ServicesGrid),
  { loading: () => null }
);
const HomeTestimonials = dynamic(
  () => import("@/components/site/TestimonialsSection").then((m) => m.TestimonialsSection),
  { loading: () => null }
);
const GoogleReviewsMarquee = dynamic(
  () => import("@/components/site/GoogleReviewsMarquee"),
  { loading: () => null }
);
const FAQ = dynamic(
  () => import("@/components/site/FAQ").then((m) => m.FAQ),
  { loading: () => null }
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you have data caps?",
                "acceptedAnswer": { "@type": "Answer", "text": "No, our plans have no data caps." }
              },
              {
                "@type": "Question",
                "name": "Do you provide service in Yuma, AZ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, Sun Valley Broadband proudly serves Yuma, AZ and nearby areas." }
              },
              {
                "@type": "Question",
                "name": "How do I contact support?",
                "acceptedAnswer": { "@type": "Answer", "text": "Email support@sunvalleybroadband.com or call +1-928-343-0300." }
              }
            ]
          })
        }}
      />
      
      <NetworkHero />
      <section className="mx-auto mt-12 max-w-full p-4">
        <div className="pr-8 pl-8 "> 
          <AppleCardsList />
          </div>
       
        <Separator />
        <div className="mx-auto max-w-7xl px-4">
          <ServicesGrid />
        </div>
      </section>
      <section
        className="mx-auto mt-16 max-w-6xl px-4"
        style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
      >
        <HomeTestimonials />
      </section>
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}>
        <GoogleReviewsMarquee />
      </div>
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "1200px" }}>
        <FAQ />
      </div>
    </div>
  );
}