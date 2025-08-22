import AceternityHero from "@/components/site/AceternityHero";
import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import { StickyBanner } from "@/components/ui/sticky-banner";

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
