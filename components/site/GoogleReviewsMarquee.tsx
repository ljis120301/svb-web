"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

type ReviewItem = {
  quote: string;
  name: string;
  title: string;
};

const googleReviews: ReviewItem[] = [
  {
    quote:
      "Been a customer for years now. The service has been upgraded. And the best part it’s affordable. Great customer service.",
    name: "Y. Rocha",
    title: "Google Review",
  },
  {
    quote:
      "Service is very fast and very rarely goes down. When it does they are sometimes working on it before I even know it’s down.",
    name: "R. Nicolette",
    title: "Google Review",
  },
  {
    quote: "Your testimonial will appear here.",
    name: "Add your quote",
    title: "Google Review",
  },
  {
    quote: "Your testimonial will appear here.",
    name: "Add your quote",
    title: "Google Review",
  },
];

export function GoogleReviewsMarquee() {
  return (
    <section className="mt-12 w-full">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-4 flex items-center justify-center gap-3">
          <img
            src="/icons8-google-80.svg"
            alt="Google logo"
            width={28}
            height={28}
            className="h-7 w-7 select-none"
          />
          <h2 className="text-center text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Google reviews
          </h2>
        </div>
      </div>
      <div className="h-[22rem] w-full items-center justify-center overflow-hidden">
        <InfiniteMovingCards
          items={googleReviews}
          direction="right"
          speed="slow"
          className="w-full max-w-none"
        />
      </div>
    </section>
  );
}

export default GoogleReviewsMarquee;


