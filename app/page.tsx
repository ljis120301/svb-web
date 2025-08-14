import AceternityHero from "@/components/site/AceternityHero";
import { FAQ } from "@/components/site/FAQ";
import GoogleReviewsMarquee from "@/components/site/GoogleReviewsMarquee";
import { StoreHours } from "@/components/site/StoreHours";
import { Separator } from "@/components/ui/separator";
import { AppleCardsList } from "@/components/cards/AppleCardsList";
import { FeatureCardsGrid } from "@/components/cards/FeatureCardsGrid";
import { HomeTestimonials } from "@/components/cards/HomeTestimonials";

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
