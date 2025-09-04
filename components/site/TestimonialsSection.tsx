"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    name: "Y. Rocha",
    designation: "Residential customer",
    quote:
      "Been a customer for years now. The service has been upgraded. And the best part it's affordable. Great customer service.",
    src: "/people/happyboi.webp",
  },
  {
    name: "R. Nicolette",
    designation: "Residential customer",
    quote:
      "Service is very fast and very rarely goes down. When it does they are sometimes working on it before I even know it's down.",
    src: "/people/happygorl.webp",
  },
  {
    name: "Ramon G.",
    designation: "Customer",
    quote:
      "Last year Sun Valley Broadband were installing fiber-optic in my area. Their service did improved. I became a customer. Is been over an year and I am very happy.",
    src: "/people/happygorl2.webp",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}