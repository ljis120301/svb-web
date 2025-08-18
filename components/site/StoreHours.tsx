import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function StoreHours() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-4">
      <div className="mb-6 text-center">
        <Badge className="mb-3">Visit us</Badge>
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">Store hours</h2>
      </div>
      <Card className="overflow-hidden">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Image
              src="/web-images/logos/svbLogo.svg"
              alt="Sun Valley Broadband logo"
              width={28}
              height={28}
              sizes="28px"
            />
            <CardTitle className="text-xl">Sun Valley Broadband Office</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
            <div className="divide-y divide-neutral-200 text-sm dark:divide-neutral-800">
              <div className="grid grid-cols-2 px-4 py-3">
                <span className="text-neutral-500">Monday</span>
                <span className="text-right font-medium">8:00am – 4:00pm</span>
              </div>
              <div className="grid grid-cols-2 px-4 py-3">
                <span className="text-neutral-500">Tuesday</span>
                <span className="text-right font-medium">8:00am – 4:00pm</span>
              </div>
              <div className="grid grid-cols-2 px-4 py-3">
                <span className="text-neutral-500">Wednesday</span>
                <span className="text-right font-medium">8:00am – 4:00pm</span>
              </div>
              <div className="grid grid-cols-2 px-4 py-3">
                <span className="text-neutral-500">Thursday</span>
                <span className="text-right font-medium">8:00am – 4:00pm</span>
              </div>
              <div className="grid grid-cols-2 px-4 py-3">
                <span className="text-neutral-500">Friday</span>
                <span className="text-right font-medium">8:00am – 4:00pm</span>
              </div>
              <div className="grid grid-cols-2 bg-neutral-50 px-4 py-3 dark:bg-neutral-900">
                <span className="text-neutral-500">Saturday</span>
                <span className="text-right font-medium">Closed</span>
              </div>
              <div className="grid grid-cols-2 bg-neutral-50 px-4 py-3 dark:bg-neutral-900">
                <span className="text-neutral-500">Sunday</span>
                <span className="text-right font-medium">Closed</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default StoreHours;


