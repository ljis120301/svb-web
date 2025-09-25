import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
const Hero = dynamic(() => import("@/components/sections/Hero"), { loading: () => null });
const Services = dynamic(() => import("@/components/sections/Services"), { loading: () => null });
const Projects = dynamic(() => import("@/components/sections/Projects"), { loading: () => null });
const AboutUs = dynamic(() => import("@/components/sections/AboutUs"), { loading: () => null });
const ContactUs = dynamic(() => import("@/components/sections/ContactUs"), { loading: () => null });

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
const GoogleReviewsMarquee = dynamic(() => import("@/components/site/GoogleReviewsMarquee"), { loading: () => null });
const FAQ = dynamic(() => import("@/components/site/FAQ").then((m) => m.FAQ), { loading: () => null });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
      <Hero />

      {/* Google Reviews - moved from bottom to after Hero */}
      <div className="w-full" style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}>
        <GoogleReviewsMarquee />
      </div>

      {/* Services */}
      <Services />

      {/* Get a Quote (Contact Us) */}
      <ContactUs />

      {/* FAQ */}
      <div className="w-full" style={{ contentVisibility: "auto", containIntrinsicSize: "1200px" }}>
        <FAQ />
      </div>

      {/* Apple Cards */}
      <section className="w-full mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppleCardsList />
        </div>
      </section>

      {/* Recent Work (Projects) */}
      <Projects />

      {/* About Us */}
      <AboutUs />
    </div>
  );
}