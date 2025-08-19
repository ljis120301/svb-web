import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function HomeTestimonials() {
  return (
    <AnimatedTestimonials
      autoplay
      testimonials={[
        {
          name: "Y. Rocha",
          designation: "Residential customer",
          quote:
            "Been a customer for years now. The service has been upgraded. And the best part it’s affordable. Great customer service.",
          src: "/stylish-happy-african-american-male-wears-casual-clothes-points-camera-with-fore-fingers.jpg",
        },
        {
          name: "R. Nicolette",
          designation: "Residential customer",
          quote:
            "Service is very fast and very rarely goes down. When it does they are sometimes working on it before I even know it’s down.",
          src: "/people/happygorl.jpg",
        },
        {
          name: "James G.",
          designation: "Customer",
          quote: "I love the service, it's fast and reliable.",
          src: "/people/happyboi.jpg",
        },
        {
          name: "Margaret M.",
          designation: "Customer",
          quote: "Blazing fast service, the whole family is happy.",
          src: "/people/happygorl2.jpg",
        },
      ]}
    />
  );
}


