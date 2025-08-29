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
            title: "Stream without buffering",
            category: "Experience",
            content: (
              <p className="text-neutral-700 dark:text-neutral-300">
                <a>Ultra-low latency and high bandwidth for 4K streaming and gaming.</a>
                <br />
                <br />
                <a className="">With modern Streaming Platform taking up more bandwidth than ever, we provide a perfect streaming experience.</a>
                <a className="flex justify-center pt-6">
                  <Image src="/speedtest.svg" alt="Speedtest" width={500} height={500} className="rounded-lg" style={{ height: "auto" }} />
                </a>
              </p>
            ),
          }}
        />, 
        <AppleCard
          key="2"
          index={1}
          card={{
            src: "/lightbeam.webp",
            title: "Reliable wireless with Ubiquiti",
            category: "Coverage",
            content: (
<p className="text-neutral-700 dark:text-neutral-300">
  <a>
    At our company, we deploy the Ubiquiti LightBeam as a key component of our wireless internet infrastructure. This highly engineered device is specifically designed to provide stable, high-performance connectivity over long distances, making it ideal for delivering broadband service to rural and suburban areas where wired infrastructure is limited or unavailable. The LightBeam’s focused beam technology ensures that bandwidth is delivered efficiently, reducing signal loss and maintaining consistent speeds for end-users. Whether serving a single home or an entire business complex, this equipment allows us to meet customer demands for reliability and speed.
  </a>
  <br />
  <br />
  <a>
    Our technicians undergo rigorous training to install, align, and configure Ubiquiti LightBeam devices with precision. Every installation begins with a detailed site survey, during which our team assesses the environment, identifies potential sources of interference, and determines the optimal mounting and alignment angles. We take into account factors such as line-of-sight, antenna height, and terrain conditions to ensure maximum performance. The installation process doesn’t end when the hardware is mounted—our technicians run multiple diagnostic tests to confirm that the link is stable, latency is minimal, and throughput meets or exceeds expectations.
  </a>
  <br />
  <br />
  <a>
    The Ubiquiti LightBeam excels in challenging operating environments, thanks to its high-gain antenna design and advanced noise filtering capabilities. In regions where wireless signals are often disrupted by competing transmissions or physical obstructions, the LightBeam’s narrow beamwidth and adaptive modulation technology ensure a strong, clear connection. This makes it a trusted solution for delivering internet to both densely populated urban zones and remote rural communities. Many of our customers experience faster, more reliable connections with the LightBeam compared to older or less specialized wireless equipment.
  </a>
  <br />
  <br />
  <Image
    src="/lightbeam.webp"
    alt="LightBeam"
    width={500}
    height={500}
    className="rounded-lg"
    style={{ height: "auto" }}
  />
  <br />
  <br />
  <a>
    Beyond the LightBeam, our network leverages the full range of Ubiquiti’s ISP-grade products. These include high-capacity point-to-point backhaul radios, fiber-fed distribution points, and customer premises equipment, all working together to create a robust, scalable infrastructure. In the Yuma area, this technology powers everything from residential internet connections to enterprise-grade links for government, education, and healthcare facilities. Because Ubiquiti products are known for their durability, low maintenance requirements, and industry-leading performance, they allow us to maintain a high standard of service while keeping operational costs efficient.
  </a>
  <br />
  <a>
    Our commitment to using Ubiquiti technology is not just about speed—it’s about building a network that can grow with the community’s needs. As internet demand continues to rise, both in terms of speed and reliability, we are confident that our Ubiquiti-powered infrastructure will be able to adapt. By combining cutting-edge hardware with our team’s technical expertise, we can offer a service that is both dependable and future-ready. This dedication to quality and performance is why we have become a trusted provider for households, businesses, and organizations across the region.
  </a>
  <br />
  <a>
    In short, the Ubiquiti LightBeam is more than just a piece of equipment—it is a crucial part of how we deliver on our promise to provide fast, reliable, and accessible internet to every corner of our service area. Through careful planning, expert installation, and the use of industry-leading technology, we ensure that every customer can count on a strong connection whenever they need it.
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
          title: "Business ready",
          category: "Business",
          content: (
<p className="text-neutral-700 dark:text-neutral-300">
  <a>
    Businesses in Yuma and across the county depend on reliable internet to stay competitive, serve customers, and grow. That’s where we come in. We work closely with hundreds of businesses—ranging from small local shops to major companies like Amazon—to deliver the connectivity they need to succeed. Our approach is simple: provide fast, dependable service and support that businesses can trust.
  </a>
  <br />
  <br />
  <a>
    One of the most important projects we are proud to lead is bringing fiber optic internet to the Cocopah Indian Tribe. Fiber infrastructure is critical for long-term economic development, and this work ensures that the community has access to modern, future-ready connectivity. Projects like this reflect our commitment to strengthening not just individual businesses, but the region as a whole.
  </a>
  <br />
  <br />
  <a>
    Small businesses are the backbone of Yuma’s economy, and we love working alongside them. From restaurants and retail shops to farms and local offices, we understand that every business needs internet that simply works—day in and day out. That same reliability also supports larger organizations that depend on us for high-capacity connections and consistent performance.
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
    Today, thousands of people and businesses across Yuma County rely on our network. Whether it’s processing transactions, managing logistics, or staying connected with customers, reliable internet is at the core of how modern businesses operate—and that’s exactly what we deliver.
  </a>
  <br />
  <a>
    Our mission is straightforward: to be the trusted internet partner for businesses of every size. By investing in projects like fiber for the Cocopah Tribe, supporting local entrepreneurs, and meeting the demands of major corporations, we’re helping build a stronger, more connected future for Yuma County—one business at a time.
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
            title: "Local team, global connectivity",
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
    While our primary focus is on resolving connectivity issues, we also provide guidance on optimizing your home or business network, improving Wi-Fi coverage, and ensuring that your devices are set up for maximum performance. For customers who need the fastest available speeds, we are proud to offer fiber-optic service in select areas—bringing unmatched reliability and performance to your connection.
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
    All of our services are delivered over HTTPS whenever possible, providing end-to-end encryption for your traffic. This means that the content you send and receive cannot be intercepted or read by third parties—including us. We do not log your browsing history or track what you access, ensuring that your online activity remains your business and your business alone.
  </a>
  <br />
  <br />
  <a className="block text-lg font-medium mb-1">
    Encouraging Privacy Tools and Self-Hosting
  </a>
  <a>
    We support and encourage the use of privacy-focused tools such as the Tor network for anonymous browsing and communication. We also welcome and empower our customers to self-host their own websites, applications, and services from their own connections. If you are interested in hosting content from your location, we can work with you to reserve a static IP address that meets your needs. Simply give us a call and our team will help you explore the options.
  </a>
  <br />
  <br />
  <a className="block text-lg font-medium mb-1">
    Support for P2P File Sharing
  </a>
  <a>
    We believe that peer-to-peer (P2P) file sharing plays an important role in the open internet ecosystem when used responsibly. Our network fully supports and encourages the use of P2P protocols for legitimate content distribution, such as seeding Linux ISOs and other open-source software. By sharing these resources, our customers help strengthen the free software community and ensure that important tools remain widely available. We are proud to provide a network where you can participate in P2P distribution without unnecessary restrictions.
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
 
      ]}
    />
  );
}


