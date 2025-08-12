import AceternityHero from "@/components/site/AceternityHero";
import { FeatureCard } from "@/components/site/FeatureCard";
import { AppleCarousel, AppleCard } from "@/components/site/AppleCardsCarousel";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { FAQ } from "@/components/site/FAQ";
import GoogleReviewsMarquee from "@/components/site/GoogleReviewsMarquee";
import { StoreHours } from "@/components/site/StoreHours";
import { Separator } from "@/components/ui/separator";
import { IconHeadset, IconActivityHeartbeat, IconInfinity } from "@tabler/icons-react";

export default function Home() {
  return (
    <div>
      <AceternityHero />

      <GoogleReviewsMarquee />

      <section className="mx-auto mt-12 max-w-6xl px-4">
        <AppleCarousel
          items={[
            <AppleCard
              key="1"
              index={0}
              card={{
                src: "/web-images/familySitting.jpeg",
                title: "Stream without buffering",
                category: "Experience",
                content: (
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Ultra-low latency and high bandwidth for 4K streaming and gaming.
                  </p>
                ),
              }}
            />,
            <AppleCard
              key="2"
              index={1}
              card={{
                src: "/web-images/wirelessTower.jpg",
                title: "Reliable wireless coverage",
                category: "Coverage",
                content: (
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Flexible installs and great performance across your property.
                  </p>
                ),
              }}
            />,
            <AppleCard
              key="3"
              index={2}
              card={{
                src: "/web-images/worldConnectedLowRes.jpg",
                title: "Local team, global connectivity",
                category: "Support",
                content: (
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Proactive monitoring and fast local support when you need it.
                  </p>
                ),
              }}
            />,
            <AppleCard
              key="4"
              index={3}
              card={{
                src: "/web-images/devices-connecting.jpg",
                title: "Whole-home connectivity",
                category: "Wi‑Fi",
                content: (
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Seamless Wi‑Fi for all your devices, everywhere at home.
                  </p>
                ),
              }}
            />,
            <AppleCard
              key="5"
              index={4}
              card={{
                src: "/web-images/fiber-connectors.jpg",
                title: "Fiber performance",
                category: "Speed",
                content: (
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Multi‑gig fiber options for the fastest uploads and downloads.
                  </p>
                ),
              }}
            />,
            <AppleCard
              key="6"
              index={5}
              card={{
                src: "/web-images/image-10.jpg",
                title: "Business ready",
                category: "Business",
                content: (
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Reliable connectivity and SLAs to keep your business online.
                  </p>
                ),
              }}
            />,
          ]}
        />
        <Separator />
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Local Support"
            description="Fast help from technicians in your area."
            Icon={IconHeadset}
            badge="Human-first"
            href="/support"
            ctaLabel="Get help"
          />
          <FeatureCard
            title="Reliable Uptime"
            description="Proactive maintenance, minimal downtime."
            Icon={IconActivityHeartbeat}
            badge="Monitored"
            href="/support"
            ctaLabel="Status"
          />
          <FeatureCard
            title="No Data Caps"
            description="Stream, game, and work without limits."
            Icon={IconInfinity}
            badge="Unlimited"
            href="/services"
            ctaLabel="See plans"
          />
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-4">
        <AnimatedTestimonials
          autoplay
          testimonials={[
            {
              name: "Y. Rocha",
              designation: "Residential customer",
              quote:
                "Been a customer for years now. The service has been upgraded. And the best part it’s affordable. Great customer service.",
              src: "/web-images/familySitting.jpeg",
            },
            {
              name: "R. Nicolette",
              designation: "Residential customer",
              quote:
                "Service is very fast and very rarely goes down. When it does they are sometimes working on it before I even know it’s down.",
              src: "/web-images/devices-connecting.jpg",
            },
            {
              name: "Add your quote",
              designation: "Customer",
              quote: "Your testimonial will appear here.",
              src: "/web-images/worldConnectedLowRes.jpg",
            },
            {
              name: "Add your quote",
              designation: "Customer",
              quote: "Your testimonial will appear here.",
              src: "/web-images/wirelessTower.jpg",
            },
          ]}
        />
      </section>
      <StoreHours />
      <FAQ />
    </div>
  );
}
