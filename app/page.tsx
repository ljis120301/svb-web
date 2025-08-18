import AceternityHero from "@/components/site/AceternityHero";
import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Internet Service Provider in Yuma, AZ",
  description:
    "Sun Valley Broadband provides fast, reliable fiber and fixed wireless internet in Yuma, Arizona with local support and no data caps.",
  alternates: { canonical: "/" },
};

const AppleCardsList = dynamic(
  () => import("@/components/cards/AppleCardsList").then((m) => m.AppleCardsList),
  { loading: () => null }
);
const FeatureCardsGrid = dynamic(
  () => import("@/components/cards/FeatureCardsGrid").then((m) => m.FeatureCardsGrid),
  { loading: () => null }
);
const HomeTestimonials = dynamic(
  () => import("@/components/cards/HomeTestimonials").then((m) => m.HomeTestimonials),
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
    <div>
      <Script id="org-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Sun Valley Broadband",
            url: "https://sunvalleybroadband.com/",
            image: "https://sunvalleybroadband.com/web-images/logos/Transparent-Logo-4-1-2.png",
            telephone: "+1-928-343-0300",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2481 E Palo Verde St",
              addressLocality: "Yuma",
              addressRegion: "AZ",
              postalCode: "85365",
              addressCountry: "US"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.6927,
              longitude: -114.6277
            },
            areaServed: [
              { "@type": "City", name: "Yuma" },
              { "@type": "AdministrativeArea", name: "Yuma County" },
              { "@type": "AdministrativeArea", name: "Imperial County" }
            ],
            sameAs: [
            ],
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "16:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday","Sunday"], opens: "00:00", closes: "00:00" }
            ],
            makesOffer: [
              { "@type": "Offer", name: "Fiber Internet" },
              { "@type": "Offer", name: "Fixed Wireless Internet" },
              { "@type": "Offer", name: "Cable TV" }
            ]
          })
        }}
      />
      <AceternityHero />
      <section className="mx-auto mt-12 max-w-6xl px-4">
        <AppleCardsList />
        <Separator />
        <FeatureCardsGrid />
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
