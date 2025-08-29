import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export const metadata = {
  title: "About Sun Valley Broadband in Yuma, AZ",
  description:
    "Learn about Sun Valley Broadband, a local ISP in Yuma, Arizona providing fiber and fixed wireless internet with friendly, local support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const timelineData = [
    {
      title: "Founded and Early Days",
      content:
        "First began providing radio communication equipment to Farmers who needed to stay in real time communication before cell phones were widely introduced. Then, Gila Electronics began providing Dial Up Internet throughout the late 90’s into the early 2000’s to the Yuma area.",
    },
    {
      title: "From Dial Up to Wireless",
      content:
        "We began offering LTE based service as well as Antenna based service through Micrtotik SXT. We moved on from LTE and began being among the first in Yuma County to begin providing 5Ghz Wireless home internet services. We utilized Ubiquiti’s excellent line of Wireless products to deploy a Point to Multi Point WISP all throughout Yuma County. This was a major leap forward in our abilities to provide stable high speed internet to the masses",
    },
    {
      title: "Fiber and Beyond",
      content:
        "From there, we still felt the rising need to push our speeds even faster, we saw the rising trend of fiber optic and began working with the City to coordinate permits to run fiber into areas no other company would touch. We worked to run incredibly high speed fiber lines into the Counties and Imperial in places no other ISP can provide service to. ",
    },
    {
      title: "What's Next?",
      content:
        "We are moving on today expanding our fiber optic infastucture forward at an an immense pace, we have partnered with the FCC to be among the first to utilize the 60Ghz spectrum for our wireless infastructure. We have also looked into new systems currently in beta test from Tarana, a promising company able to provide even higher bandwidth. Tarana offers a more stable connection compared to Ubiquiti wirelsss. Eventually we hope to see mass deployment as our beta test as thus far been a tremendous sucesss. ",
    },
  ];
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://sunvalleybroadband.com/"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://sunvalleybroadband.com/about"
              }
            ]
          })
        }}
      />
      <Breadcrumb className="mx-auto max-w-6xl px-4 mb-4 mt-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <Timeline
        data={timelineData as any}
        title="Our Journey"
        description="A brief look at our milestones and growth over the years."
      />
    </>
  );
}


