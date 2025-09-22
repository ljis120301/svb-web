"use client";

import Image from "next/image";

export function BrandLogo() {
  return (
    <>
      <div className="relative size-10 sm:size-12">
        <Image
          src="/web-images/logos/Transparent-LogoNOTEXT.webp"
          alt="Sun Valley Broadband logo"
          fill
          sizes="48px"
          priority={false}
          className="object-contain"
        />
      </div>
      <div className="relative hidden sm:block h-10 w-44 md:h-14 md:w-56 lg:h-20 lg:w-72 ml-2">
        <Image
          src="/cropped-Transparent-Logo-4-2048x682.webp"
          alt="Sun Valley Broadband wordmark"
          fill
          priority={false}
          sizes="(max-width: 640px) 0px, (max-width: 1024px) 224px, 288px"
          className="object-contain dark:invert"
        />
      </div>
    </>
  );
}


