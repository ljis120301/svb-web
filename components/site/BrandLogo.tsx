"use client";

import Image from "next/image";

export function BrandLogo() {
  return (
    <>
      <div className="relative h-[48px] w-[48px]">
        <Image
          src="/web-images/logos/Transparent-LogoNOTEXT.png"
          alt="Sun Valley Broadband logo"
          fill
          sizes="36px"
          priority={false}
          className="object-contain"
        />
      </div>
      <div className="relative h-[80px] w-[250px]  -ml-6 -mt-[-10px]">
        <Image
          src="/cropped-Transparent-Logo-4-2048x682.png"
          alt="Sun Valley Broadband wordmark"
          fill
          priority={false}
          sizes="250px"
          className="object-contain"
        />
      </div>
    </>
  );
}


