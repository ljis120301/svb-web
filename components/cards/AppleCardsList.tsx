import { AppleCarousel, AppleCard } from "@/components/site/AppleCardsCarousel";

export function AppleCardsList() {
  return (
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
            src: "/web-images/lightbeam.png",
            title: "Reliable wireless with Ubiquiti",
            category: "Coverage",
            content: (
              <p className="text-neutral-700 dark:text-neutral-300">
                We deploy Ubiquiti Lightbeam to provide reliable wireless coverage. Our technitians are trained to install and configure the equipment. As well as it provides exellent performance.
              </p>
            ),
          }}
        />, 
        <AppleCard
        key="6"
        index={5}
        card={{
          src: "/web-images/buisness.jpg",
          title: "Business ready",
          category: "Business",
          content: (
            <p className="text-neutral-700 dark:text-neutral-300">
              We work with businesses all over the Yuma area, we can deliver dedicated ethernet to your business.
              <br />
              <br />
              <a>
                We have been working with businesses in the area for over 25 years, trusted by hundreds of businesses, this is service you can trust.
              </a>
            </p>
          ),
        }}
      />,
        <AppleCard
          key="3"
          index={2}
          card={{
            src: "/web-images/image-10.jpg",
            title: "Local team, global connectivity",
            category: "Support",
            content: (
              <p className="text-neutral-700 dark:text-neutral-300">
                Our in office support team works weekends, holidays, and after hours to ensure you have the best experience. You can always reach up by Phone, Email, or our Support Portal.
                <br />
                <a>Reach us by Phone at</a> <a href="tel:5202962222" className="text-blue-500 hover:text-blue-600"> (928) 343-0300</a>
                <br />
                <br />
                We also offer fiber-optic service for those who need the fastest speeds.
              </p>
            ),
          }}
        />, 
        <AppleCard
          key="4"
          index={3}
          card={{
            src: "/privacy.webp",
            title: "Your Privacy is Our Priority",
            category: "Privacy Focused",
            content: (
              <p className="text-neutral-700 dark:text-neutral-300">
                <a>
                  The greatest benifit of shopping local when it comes to your internet is we do not sell or log your data. We do not work with advertisers to sell out your internet usage data. 
                </a>
                <br />
                <br />
                <a className='text-4xl '>Zero-Log Policy</a>
                <br />
                <a>
                  We have a Zero-Log policy. We do not log any data. We do not sell or share your data. We do not work with advertisers to sell out your internet usage data.
                </a>
              </p>
            ),
          }}
        />, 
        <AppleCard
          key="5"
          index={4}
          card={{
            src: "/web-images/fiber.jpeg",
            title: "High Speed Fiber-Optic",
            category: "Speed",
            content: (
              <p className="text-neutral-700 dark:text-neutral-300">
                Up to 500 Mbps download speeds with our Fiber-Optic service.
              </p>
            ),
          }}
        />, 
      ]}
    />
  );
}


