"use client";

import Image from "next/image";

export function BrandLogo() {
  return (
    <>
      <div className="flex items-end">
        {/* Icon logo */}
        <div className="relative flex-shrink-0" style={{ width: '3.5rem', height: '2.5rem' }}>
          <Image
            src="/web-images/logos/Transparent-LogoNOTEXT.webp"
            alt="Sun Valley Broadband logo"
            fill
            sizes="40px"
            priority={false}
            className="object-contain"
            style={{ display: 'block' }}
          />
        </div>
        {/* Wordmark, aligned to icon bottom */}
        <div
          className="hidden sm:flex items-end"
          style={{
            height: '2rem', // match icon height for alignment
            minWidth: 0,
          }}
        >
          <div
            className="relative "
            style={{
              width: '20rem', // ~136px, adjust as needed for visual balance
              height: '20rem', // slightly less than icon for optical alignment
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <Image
              src="/cropped-Transparent-Logo-4-2048x682.webp"
              alt="Sun Valley Broadband wordmark"
              fill
              priority={false}
              sizes="2048px"
              className="object-contain dark:invert "
              style={{
                objectPosition: 'left bottom',
                display: 'block',
                transform: 'translateY(38px)',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}


