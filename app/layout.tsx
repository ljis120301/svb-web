import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";
import ThemeColorMeta from "@/components/theme/ThemeColorMeta";
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
    // Brand and Business
    "Sun Valley Broadband",
    "Sun Valley Broadband Yuma",
    "SVB Internet",
    "Internet Service Provider",
    "ISP",
    "internet provider",
    "internet company",
    "broadband provider",
    "wifi provider",
    "wi-fi provider",
    
    // General Internet Services
    "internet service",
    "internet plans",
    "internet packages",
    "home internet",
    "business internet",
    "residential internet",
    "commercial internet",
    "high speed internet",
    "fast internet",
    "reliable internet",
    "unlimited internet",
    "no data caps",
    "fiber internet",
    "fiber optic internet",
    "wireless internet",
    "fixed wireless",
    "broadband internet",
    "cable internet",
    
    // Local Geographic Terms
    "Yuma internet",
    "Yuma AZ internet",
    "Arizona internet",
    "California internet",
    "Roll AZ internet",
    "Wellton AZ internet", 
    "Tacna AZ internet",
    "Holtville CA internet",
    "Brawley CA internet",
    "Westmorland CA internet",
    "El Centro CA internet",
    "Imperial County internet",
    "Yuma County internet",
    "rural internet Arizona",
    "rural internet California",
    "desert internet",
    "southwestern internet",
    
    // Common Misspellings & Variations
    "internet providor",
    "internet provider",
    "intrenet provider",
    "enternt provider",
    "wifi",
    "wi fi",
    "wi-fi",
    "broadbnd",
    "brodband",
    "braodband",
    "fiber optic",
    "fibre internet",
    "hiigh speed internet",
    "high-speed internet",
    
    // Older Demographics & Simple Terms
    "internet for seniors",
    "simple internet",
    "easy internet setup",
    "local internet company",
    "family internet",
    "home wifi",
    "computer internet",
    "phone internet",
    "tablet internet",
    "streaming internet",
    "email internet",
    "basic internet",
    "affordable internet",
    "cheap internet",
    "budget internet",
    "low cost internet",
    
    // Service & Support Keywords
    "local internet support",
    "internet installation",
    "internet setup",
    "internet repair",
    "internet help",
    "internet customer service",
    "friendly internet service",
    "reliable internet company",
    "trusted internet provider",
    "family owned internet",
    "local owned internet",
    
    // Common Search Phrases
    "internet near me",
    "internet in my area",
    "best internet provider",
    "fastest internet",
    "cheapest internet",
    "internet deals",
    "internet specials",
    "internet promotion",
    "new customer internet",
    "switch internet providers",
    "cancel cable internet",
    "better internet service",
    
    // Technology Terms (Simple)
    "DSL alternative",
    "cable alternative",
    "satellite internet alternative",
    "faster than DSL",
    "better than satellite",
    "rural broadband",
    "country internet",
    "farm internet",
    "remote internet",
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
  facebook: {
    appId: "SunValleyBroadband",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVB_Yuma",
    creator: "@SVB_Yuma",
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
    "geo.region": "US-AZ;US-CA",
    "geo.placename": "Yuma;Roll;Wellton;Tacna;Holtville;Brawley;Westmorland;El Centro",
    "geo.position": "32.6927;-114.6277",
    ICBM: "32.6927, -114.6277",
    "contact:email": "support@sunvalleybroadband.com",
    "social:facebook": "https://www.facebook.com/SunValleyBroadband",
    "social:instagram": "https://www.instagram.com/sun_valley_broadband/",
    "social:twitter": "https://twitter.com/SVB_Yuma",
    "business:contact_data:facebook": "https://www.facebook.com/SunValleyBroadband",
    "business:contact_data:twitter": "@SVB_Yuma",
    "service:areas": "Yuma County AZ, Imperial County CA",
    "coverage:cities": "Yuma,Roll,Wellton,Tacna,Holtville,Brawley,Westmorland,El Centro",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover", // For iPhone X+ notch handling
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${siteFont.variable} ${brandFont.variable} antialiased`} style={{
        textSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        MozTextSizeAdjust: '100%',
        WebkitTapHighlightColor: 'transparent', // Remove iOS tap highlights
        WebkitTouchCallout: 'none', // Disable iOS callout menu
        touchAction: 'manipulation', // Improve touch responsiveness
      } as React.CSSProperties}>
        <ThemeProvider>
        <ThemeColorMeta />
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Sun Valley Broadband",
              alternateName: "SVB",
              url: "https://sunvalleybroadband.com/",
              image: "https://sunvalleybroadband.com/web-images/logos/Transparent-Logo-4-1-2.webp",
              logo: "https://sunvalleybroadband.com/web-images/logos/Transparent-Logo-4-1-2.webp",
              telephone: "+1-928-343-0300",
              email: "support@sunvalleybroadband.com",
              sameAs: [
                "https://www.facebook.com/SunValleyBroadband",
                "https://www.instagram.com/sun_valley_broadband/",
                "https://twitter.com/SVB_Yuma",
              ],
              subjectOf: [
                {
                  "@type": "WebPage",
                  url: "https://www.facebook.com/SunValleyBroadband",
                  name: "Sun Valley Broadband on Facebook"
                },
                {
                  "@type": "WebPage", 
                  url: "https://www.instagram.com/sun_valley_broadband/",
                  name: "Sun Valley Broadband on Instagram"
                },
                {
                  "@type": "WebPage",
                  url: "https://twitter.com/SVB_Yuma", 
                  name: "Sun Valley Broadband on Twitter"
                }
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
                { "@type": "City", name: "Yuma", addressRegion: "AZ" },
                { "@type": "City", name: "Roll", addressRegion: "AZ" },
                { "@type": "City", name: "Wellton", addressRegion: "AZ" },
                { "@type": "City", name: "Tacna", addressRegion: "AZ" },
                { "@type": "City", name: "Holtville", addressRegion: "CA" },
                { "@type": "City", name: "Brawley", addressRegion: "CA" },
                { "@type": "City", name: "Westmorland", addressRegion: "CA" },
                { "@type": "City", name: "El Centro", addressRegion: "CA" },
                { "@type": "AdministrativeArea", name: "Yuma County", addressRegion: "AZ" },
                { "@type": "AdministrativeArea", name: "Imperial County", addressRegion: "CA" }
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
                areaServed: ["US-AZ", "US-CA"],
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
        <Script id="organization-jsonld" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sun Valley Broadband",
              url: "https://sunvalleybroadband.com/",
              logo: "https://sunvalleybroadband.com/web-images/logos/Transparent-Logo-4-1-2.webp",
              sameAs: [
                "https://www.facebook.com/SunValleyBroadband",
                "https://www.instagram.com/sun_valley_broadband/", 
                "https://twitter.com/SVB_Yuma"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-928-343-0300",
                contactType: "customer service",
                areaServed: ["US-AZ", "US-CA"],
                availableLanguage: ["English"]
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "2481 E Palo Verde St",
                addressLocality: "Yuma",
                addressRegion: "AZ",
                postalCode: "85365",
                addressCountry: "US"
              }
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
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
