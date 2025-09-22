"use client";

import Image from "next/image";

export function BrandLogo() {
  return (
    <>
      <div className="relative size-12">
        <Image
          src="/web-images/logos/Transparent-LogoNOTEXT.webp"
          alt="Sun Valley Broadband logo"
          fill
          sizes="36px"
          priority={false}
          className="object-contain"
        />
      </div>
      <div className="relative h-24 w-72 -ml-6 mt-2">
        <Image
          src="/cropped-Transparent-Logo-4-2048x682.webp"
          alt="Sun Valley Broadband wordmark"
          fill
          priority={false}
          sizes="2048px"
          className="object-contain dark:invert"
        />
      </div>
    </>
  );
}


