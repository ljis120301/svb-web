"use client";

import Image from "next/image";

export function BrandLogo() {
  return (
    <>
      <div className="relative h-[48px] w-[48px]">
        <Image
          src="/web-images/logos/Transparent-LogoNOTEXT.webp"
          alt="Sun Valley Broadband logo"
          fill
          sizes="36px"
          priority={false}
          className="object-contain"
        />
      </div>
      <div className="relative h-[500px] w-[300px]  -ml-6 -mt-[-8px]">
        <Image
          src="/cropped-Transparent-Logo-4-2048x682.webp"
          alt="Sun Valley Broadband wordmark"
          fill
          priority={false}
          sizes="2048px"
          className="object-contain"
        />
      </div>
    </>
  );
}


