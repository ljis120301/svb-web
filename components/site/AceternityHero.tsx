"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "/public/ethernetCables.webp";

export default function AceternityHero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[60vh] md:min-h-[58vh]">
      <Image
        src={heroImage}
        alt="Sun Valley Broadband hero"
        placeholder="blur"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-28">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-white md:text-4xl lg:text-6xl">
          {"Fast, local internet for the Yuma area and Imperial Valley"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.06, ease: "easeInOut" }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-base font-normal text-neutral-100/90 sm:text-lg md:text-xl"
        >
          From Brawley to Dateland, we deliver connection where no other provider can.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-6"
        >
          <Link
            href="/contact"
            className={`${buttonVariants({ variant: "default" })} w-60 px-6 py-3 text-base transform scale-[1.05]`}
          >
            Check availability
          </Link>
          <Link
            href="https://billing.beamspeed.net/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({ variant: "outline" })} w-60 px-6 py-3 text-base transform scale-[1.05]`}
          >
            Pay Bill
          </Link>
        </motion.div>
        {/* Removed the bottom preview image section from the demo */}
      </div>
    </section>
  );
}


