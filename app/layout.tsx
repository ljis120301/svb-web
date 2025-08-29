import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import { GA4Pageview } from "./ga-pageview";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { siteFont, brandFont } from "@/lib/fonts";
import { RootBannerSlot } from "@/components/site/RootBannerSlot";
// Removed PostHog provider/pageview

export const metadata: Metadata = {
  metadataBase: new URL("https://sunvalleybroadband.com"),
  title: {
    default: "Sun Valley Broadband | Internet Service Provider in Yuma, AZ",
    template: "%s | Sun Valley Broadband",
  },
  description:
    "Sun Valley Broadband in Yuma, AZ delivers fast, reliable fiber and fixed wireless internet with no data caps and responsive local support for homes and businesses.",
  keywords: [
    "Sun Valley Broadband",
    "Internet Service Provider",
    "ISP",
    "Yuma internet",
    "Yuma AZ internet",
    "fiber internet Yuma",
    "fixed wireless Yuma",
    "high speed internet Yuma",
  ],
  applicationName: "Sun Valley Broadband",
  authors: [{ name: "Sun Valley Broadband" }],
  creator: "Sun Valley Broadband",
  publisher: "Sun Valley Broadband",
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  openGraph: {
    type: "website",
    url: "https://sunvalleybroadband.com/",
    title: "Sun Valley Broadband | Internet Service Provider in Yuma, AZ",
    description:
      "Fast, affordable home and business internet in Yuma, AZ. Fiber and fixed wireless plans with local support.",
    siteName: "Sun Valley Broadband",
    images: [
      {
        url: "/web-images/logos/Transparent-Logo-4-1-2.webp",
        width: 1024,
        height: 379,
        alt: "Sun Valley Broadband logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun Valley Broadband | Internet Service Provider in Yuma, AZ",
    description:
      "Fast, affordable home and business internet in Yuma, AZ. Fiber and fixed wireless plans with local support.",
    images: ["/web-images/logos/Transparent-Logo-4-1-2.webp"],
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/apple-touch-icon.png", rel: "apple-touch-icon", sizes: "180x180" },
    ],
  },
  category: "technology",
  other: {
    "geo.region": "US-AZ",
    "geo.placename": "Yuma",
    "geo.position": "32.6927;-114.6277",
    ICBM: "32.6927, -114.6277",
    "contact:email": "support@sunvalleybroadband.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${siteFont.variable} ${brandFont.variable} antialiased`}>
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Sun Valley Broadband",
              url: "https://sunvalleybroadband.com/",
              image: "https://sunvalleybroadband.com/web-images/logos/Transparent-Logo-4-1-2.webp",
              logo: "https://sunvalleybroadband.com/web-images/logos/Transparent-Logo-4-1-2.webp",
              telephone: "+1-928-343-0300",
              email: "support@sunvalleybroadband.com",
              sameAs: [
                "https://www.facebook.com/SunValleyBroadband",
                "https://www.instagram.com/sun_valley_broadband/",
              ],
              hasMap: "https://www.google.com/maps/dir//2481+E+Palo+Verde+St,+Yuma,+AZ+85365",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2481 E Palo Verde St",
                addressLocality: "Yuma",
                addressRegion: "AZ",
                postalCode: "85365",
                addressCountry: "US"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.6927,
                longitude: -114.6277
              },
              areaServed: [
                { "@type": "City", name: "Yuma" },
                { "@type": "AdministrativeArea", name: "Yuma County" },
                { "@type": "AdministrativeArea", name: "Imperial County" }
              ],
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "16:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday","Sunday"], opens: "00:00", closes: "00:00" }
              ],
              contactPoint: [{
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "+1-928-343-0300",
                email: "support@sunvalleybroadband.com",
                areaServed: "US-AZ",
                availableLanguage: ["English"]
              }],
              
            }),
          }}
        />
        <Script id="website-jsonld" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sun Valley Broadband",
              url: "https://sunvalleybroadband.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://sunvalleybroadband.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              inLanguage: "en-US"
            })
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          id="ga4-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-LVPSHQM46D"
          strategy="afterInteractive"
        />
        <Script id="ga4-inline" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // Disable automatic page_view to prevent duplicates in SPA
            gtag('config', 'G-LVPSHQM46D', { send_page_view: false });
          `}
        </Script>
        <Suspense fallback={null}>
          <GA4Pageview />
        </Suspense>
        <RootBannerSlot />
        <Header />
        <main className="min-h-[calc(100vh-16rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
