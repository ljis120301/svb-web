import Link from "next/link";
import Image from "next/image";

const ADDRESS_QUERY = encodeURIComponent("2481 E Palo Verde St Yuma, AZ 85365");

export function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 md:h-[300px]">
              <iframe
                title="Sun Valley Broadband Location"
                src={`https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed`}
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Visit Us</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              2481 E Palo Verde St Yuma, AZ 85365
            </p>
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
            <div className="flex items-center gap-2">
              <Image
                src="/web-images/logos/svbLogo.svg"
                alt="Sun Valley Broadband logo"
                width={32}
                height={32}
                priority
              />
              <h3 className="text-lg font-semibold">Sun Valley Broadband</h3>
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


