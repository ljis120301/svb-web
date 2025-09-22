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
const HomeTestimonials = dynamic(() => import("@/components/site/TestimonialsSection").then((m) => m.TestimonialsSection), { loading: () => null });
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

      {/* Keep Apple cards feature section */}
      <section className="mx-auto mt-12 max-w-full px-4">
        <div className="mx-auto max-w-7xl">
          <AppleCardsList />
        </div>
      </section>

      {/* Services, Projects, About, Contact (gram-style) */}
      <Services />
      <Projects />
      <AboutUs />
      <ContactUs />

      {/* Social proof and FAQ */}
      <section className="mx-auto mt-16 max-w-6xl px-4" style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
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