import Link from "next/link";
import { BrandLogo } from "@/components/site/BrandLogo";
import { IconPhone } from "@tabler/icons-react";

const ADDRESS_QUERY = encodeURIComponent("2481 E Palo Verde St Yuma, AZ 85365");
const BUSINESS_PHONE_DISPLAY = "(928) 343-0300";
const BUSINESS_PHONE_TEL = "+19283430300";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <div className="group block overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 md:h-[300px]">
              <div className="relative h-[220px] md:h-[300px] w-full bg-neutral-100 dark:bg-neutral-900">
                <iframe
                  title="Google Map - Sun Valley Broadband"
                  src={`https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-10 pointer-events-none" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Visit Us</h3>
            <a href="https://www.google.com/maps/dir//2481+E+Palo+Verde+St,+Yuma,+AZ+85365/@32.6764549,-114.6734482,31395m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x80d65f8d8a4a71b1:0x373b4a6388f17ed5!2m2!1d-114.5910293!2d32.6765512?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 hover:underline hover:underline-offset-2 hover:opacity-90">
              2481 E Palo Verde St <br /> Yuma, AZ 85365
            </a>
            
            <p className="mt-4 text-lg font-semibold">Call us at:</p>
           
            <a
              href={`tel:${BUSINESS_PHONE_TEL}`}
              className="mt-1 text-sm  text-neutral-600 dark:text-neutral-400 hover:underline hover:underline-offset-2 hover:opacity-90 "
              aria-label={`Call ${BUSINESS_PHONE_DISPLAY}`}>
               
                {BUSINESS_PHONE_DISPLAY}
            </a>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="w-full overflow-hidden rounded-md border border-neutral-200 text-xs dark:border-neutral-800 md:h-[300px]">
              <div className="bg-neutral-50 px-3 py-2 font-medium dark:bg-neutral-900">Hours</div>
              <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-neutral-500">Monday</span>
                  <span className="font-medium">8:00am – 4:00pm</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-neutral-500">Tuesday</span>
                  <span className="font-medium">8:00am – 4:00pm</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-neutral-500">Wednesday</span>
                  <span className="font-medium">8:00am – 4:00pm</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-neutral-500">Thursday</span>
                  <span className="font-medium">8:00am – 4:00pm</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-neutral-500">Friday</span>
                  <span className="font-medium">8:00am – 4:00pm</span>
                </div>
                <div className="flex items-center justify-between bg-neutral-50 px-3 py-2 dark:bg-neutral-900">
                  <span className="text-neutral-500">Saturday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="flex items-center justify-between bg-neutral-50 px-3 py-2 dark:bg-neutral-900">
                  <span className="text-neutral-500">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-0">
              <BrandLogo />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Affordable, reliable, and high-speed internet solutions.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
              <Link href="/support" className="hover:underline">
                Technical Support
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
            <p className="mt-6 text-xs text-neutral-500">
              © {new Date().getFullYear()} Sun Valley Broadband. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


