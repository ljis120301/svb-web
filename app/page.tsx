import dynamic from "next/dynamic";
import AceternityHeroSkeleton from "@/components/skeletons/AceternityHeroSkeleton";
import AppleCardsListSkeleton from "@/components/skeletons/AppleCardsListSkeleton";
import FeatureCardsGridSkeleton from "@/components/skeletons/FeatureCardsGridSkeleton";
import HomeTestimonialsSkeleton from "@/components/skeletons/HomeTestimonialsSkeleton";
import GoogleReviewsMarqueeSkeleton from "@/components/skeletons/GoogleReviewsMarqueeSkeleton";
import FAQSkeleton from "@/components/skeletons/FAQSkeleton";
const AceternityHero = dynamic(() => import("@/components/site/AceternityHero"), {
  loading: () => <AceternityHeroSkeleton />,
});
const GoogleReviewsMarquee = dynamic(
  () => import("@/components/site/GoogleReviewsMarquee"),
  { loading: () => <GoogleReviewsMarqueeSkeleton /> }
);
const FAQ = dynamic(() => import("@/components/site/FAQ"), {
  loading: () => <FAQSkeleton />,
});
import { Separator } from "@/components/ui/separator";
const AppleCardsList = dynamic(
  () =>
    import("@/components/cards/AppleCardsList").then((m) => ({
      default: m.AppleCardsList,
    })),
  { loading: () => <AppleCardsListSkeleton /> }
);
const FeatureCardsGrid = dynamic(
  () =>
    import("@/components/cards/FeatureCardsGrid").then((m) => ({
      default: m.FeatureCardsGrid,
    })),
  { loading: () => <FeatureCardsGridSkeleton /> }
);
const HomeTestimonials = dynamic(
  () =>
    import("@/components/cards/HomeTestimonials").then((m) => ({
      default: m.HomeTestimonials,
    })),
  { loading: () => <HomeTestimonialsSkeleton /> }
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
      <section className="mx-auto mt-16 max-w-6xl px-4">
        <HomeTestimonials />
      </section>
      <GoogleReviewsMarquee />
      <FAQ />
    </div>
  );
}
