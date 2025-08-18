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
    quote: "Last year Sun Valley Broadband were installing fiber-optic in my area. Their service did improved. I became a customer. Is been over an year and I am very happy. No problem with buffing watching live shows and playing online video games. Call them to check if you have available service near your area. More options the better.",
    name: "Ramon G",
    title: "Google Review",
  },
  {
    quote: "This service is the absolute best!!!",
    name: "JoAnn",
    title: "Google Review",
  },
  {
    quote: "Very happy with the service and the price!",
    name: "Elaine V",
    title: "Google Review",
  },
  {
    quote: "I have been a customer for over 10 years. The service is great and the price is right. I highly recommend them to anyone in the area.",
    name: "John D",
    title: "Google Review",
  },
  {
    quote: "Me gusto mucho el servicio ya puedo ver mis películas completas antes no podía con otros servicios gracias",
    name: "Maria R",
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
            loading="lazy"
            decoding="async"
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


