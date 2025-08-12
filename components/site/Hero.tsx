import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import heroImage from "/public/web-images/wirelessTower.jpg";

// Aceternity-style hero with gradient highlight
export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[80vh] max-w-none flex-col items-center justify-center overflow-hidden text-center">
      <Image
        src={heroImage}
        alt="Sun Valley Broadband hero"
        placeholder="blur"
        fill
        priority
        className="object-cover blur-[1px]"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4">
        <h1 className="sr-only">Sun Valley Broadband — Connecting You To The World</h1>
        <div className="mx-auto max-w-xl rounded-2xl bg-black/30 p-6 sm:p-8 backdrop-blur-md ring-1 ring-white/10 shadow-xl">
          <div className="mx-auto mb-4 flex w-full items-center justify-center">
            <Image
              src="/web-images/logos/svbLogo.svg"
              alt="Sun Valley Broadband"
              width={420}
              height={420}
              priority
              className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            />
          </div>
          <Badge className="mx-auto">Yuma’s trusted local provider</Badge>
          <p className="mt-3 mx-auto max-w-md text-pretty text-sm text-neutral-100/90 sm:text-base">
            Fast fiber and reliable wireless for homes and businesses.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className={`${buttonVariants({ variant: "default" })} px-6 py-3 text-base sm:text-lg`}
            >
              Get started
            </Link>
            <Link
              href="https://billing.beamspeed.net/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ variant: "outline" })} px-6 py-3 text-base sm:text-lg`}
            >
              Pay Bill
            </Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06),transparent_60%)]" />
    </section>
  );
}


