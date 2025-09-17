import { AppleCarousel, AppleCard } from "@/components/site/AppleCardsCarousel";
import Image from "next/image";

export function AppleCardsList() {
  return (
    <AppleCarousel
      items={[
        <AppleCard
          key="1"
          index={0}
          card={{
            src: "/web-images/familySitting.webp",
            title: "Fiber built for 4K & gaming",
            category: "Fiber‑first",
            content: (
              <p className="text-neutral-700 dark:text-neutral-300">
                <a>Low latency and high bandwidth for 4K streaming and gaming.</a>
                <br />
                <br />
                <a className="">With modern platforms using more bandwidth than ever, fiber keeps everything smooth.</a>
                <a className="flex justify-center pt-6">
                  <Image src="/speedtest.svg" alt="Speedtest" width={500} height={500} className="rounded-lg" style={{ height: "auto" }} />
                </a>
              </p>
            ),
          }}
        />, 
        
        <AppleCard
        key="6"
        index={5}
        card={{
          src: "/web-images/buisness.webp",
          title: "Business ready on fiber",
          category: "Business",
          content: (
<p className="text-neutral-700 dark:text-neutral-300">
  <a>
    Businesses depend on reliable internet to stay competitive. We deliver fast, dependable fiber connectivity with responsive local support.
  </a>
  <br />
  <br />
  <a>
    Fiber infrastructure is critical for long‑term growth, enabling cloud apps, voice, and backup with ease.
  </a>
  <br />
  <br />
  <a>
    From local shops to larger organizations, we provide consistent performance and the right options for static IP and more.
  </a>
  <br />
  <br />
  <Image
    src="/web-images/buisness.webp"
    alt="Doing Business in Yuma"
    width={500}
    height={500}
    className="rounded-lg"
    style={{ height: "auto" }}
  />
  <br />
  <br />
  <a>
    Reliable internet is at the core of how modern businesses operate — and that’s exactly what we deliver.
  </a>
  <br />
  <a>
    Our mission: be the trusted fiber partner for businesses of every size.
  </a>
</p>


          ),
        }}
      />,
        <AppleCard
          key="3"
          index={2}
          card={{
            src: "/web-images/image-10.webp",
            title: "Local team on your side",
            category: "Support",
            content: (
<p className="text-neutral-700 dark:text-neutral-300">
  <a className="block text-xl font-semibold mb-2">
    Your Local Tech Support Team — Always Here to Help
  </a>
  <a>
    Our in-office support team is the backbone of our customer service operations, providing fast, friendly, and professional assistance when you need it most. Consisting of three highly trained local technicians, our team is dedicated to troubleshooting Wi-Fi and internet issues for homes and businesses throughout Yuma County. Whether you are experiencing slow speeds, intermittent connectivity, or need help configuring your equipment, our experts are ready to assist.
  </a>
  <br />
  <br />
  <a className="block text-lg font-medium mb-1">
    Dedicated Support, Even After Hours
  </a>
  <a>
    We understand that internet issues don’t always happen during standard business hours. That’s why our support team works weekends, holidays, and after hours to ensure that you have the best possible experience. By providing extended availability, we can quickly respond to your concerns and help you get back online without unnecessary delays.
  </a>
  <br />
  <br />
  <a className="block text-lg font-medium mb-1">
    Multiple Ways to Reach Us
  </a>
  <a>
    You can always contact our team by phone, email, or through our secure Support Portal. Each method connects you directly to a knowledgeable technician who will work with you to identify and resolve your issue as efficiently as possible.
  </a>
  <br />
  <a>
    Reach us by Phone at
  </a>
  <a
    href="tel:9283430300"
    className="text-blue-500 hover:text-blue-600"
  >
    {" "}
    (928) 343-0300
  </a>
  <br />
  <br />
  <a className="block text-lg font-medium mb-1">
    More Than Just Troubleshooting
  </a>
  <a>
    While our primary focus is on resolving connectivity issues, we also provide guidance on optimizing your home or business network, improving Wi‑Fi coverage, and ensuring that your devices are set up for maximum performance. For customers who need the fastest available speeds, we are proud to offer fiber‑optic service — bringing unmatched reliability and performance to your connection.
  </a>
  <br />
  <br />
  <a className="block text-lg font-medium mb-1">
    A Local Team You Can Trust
  </a>
  <a>
    Being locally based means we understand the unique needs of Yuma residents and businesses. We are not an outsourced call center—when you reach out for help, you are speaking directly to people who live and work in your community. Our goal is simple: to provide you with the same level of service and care that we would give to our own friends and neighbors.
  </a>
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
  <a className="block text-xl font-semibold mb-2">
    Our Commitment to Your Privacy
  </a>
  <a>
    We believe that privacy is a fundamental right for every internet user. As a locally owned provider, we have built our network and our policies around protecting your data, respecting your freedom, and ensuring that your online activities remain secure and confidential. From the moment your connection leaves your home or business, your traffic is encrypted and protected from prying eyes.
  </a>
  <br />
  <br />
  <a className="block text-lg font-medium mb-1">
    Secure Communication, Always
  </a>
  <a>
    All services are delivered over HTTPS whenever possible, providing end‑to‑end encryption for your traffic. We do not log your browsing history or track what you access.
  </a>
  <br />
  <br />
  <a className="block text-lg font-medium mb-1">
    Encouraging Privacy Tools and Self-Hosting
  </a>
  <a>
    We support privacy‑focused tools and self‑hosting. Need a static IP? We can help.
  </a>
  <br />
  <br />
  <a className="block text-lg font-medium mb-1">
    Support for P2P File Sharing
  </a>
  <a>
    Our network supports legitimate peer‑to‑peer distribution like Linux ISOs and open‑source software.
  </a>
  <br />
  <br />
  <a className="block text-lg font-medium mb-1">
    Freedom to Access and Share Information
  </a>
  <a>
    We believe in an open internet and the ability of our customers to access Free and Open Source Software (FOSS), participate in online communities, and share information without censorship or unnecessary restrictions. By choosing us as your provider, you are working with a company that values your independence, supports your right to communicate freely, and actively enables your ability to use the internet as you see fit.
  </a>
  <br />
  <br />
  <a className="block text-lg font-medium mb-1">
    A Network Built on Trust
  </a>
  <a>
    Our privacy-first philosophy is not an afterthought—it has been a guiding principle in how we design, operate, and maintain our network. We see ourselves not just as an internet service provider, but as a partner in your ability to use the internet safely, securely, and without unnecessary oversight. When you connect through us, you can be confident that your privacy is protected every step of the way.
  </a>
</p>

            ),
          }}
        />, 
        <AppleCard
          key="5"
          index={4}
          card={{
            src: "/web-images/fiber-splice.webp",
            title: "Why fiber beats legacy",
            category: "Why Fiber",
            content: (
<p className="text-neutral-700 dark:text-neutral-300">
  <a>
    Fiber delivers symmetric speeds, low latency, and long‑term reliability that legacy tech can’t match. Great for remote work, creative uploads, and gaming.
  </a>
  <br />
  <br />
  <a>
    If fiber isn’t yet on your street, check availability — we’re expanding quickly.
  </a>
</p>

            ),
          }}
        />
        
        
      ]}
    />
  );
}


