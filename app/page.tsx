import { ModernHero } from "@/components/site/ModernHero";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { FeatureShowcase } from "@/components/site/FeatureShowcase";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { CTASection } from "@/components/site/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sun Valley Broadband — Internet in Yuma, AZ",
  description:
    "Sun Valley Broadband provides fast, reliable fiber and fixed wireless internet in Yuma, Arizona with local support and no data caps.",
  alternates: { canonical: "/" },
};

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
      
      <ModernHero />
      <ServicesGrid />
      <FeatureShowcase />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}