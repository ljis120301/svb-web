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
          name: "Jason G.",
          designation: "Customer",
          quote: "I think this shit is awesome",
          src: "/web-images/worldConnectedLowRes.jpg",
        },
        {
          name: "Eddie Ochoa",
          designation: "Customer",
          quote: "I fucking hate this shit 🤬",
          src: "/web-images/wirelessTower.jpg",
        },
      ]}
    />
  );
}


