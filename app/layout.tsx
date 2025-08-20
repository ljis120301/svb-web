import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { siteFont, brandFont } from "@/lib/fonts";


export const metadata: Metadata = {
  metadataBase: new URL("https://sunvalleybroadband.com"),
  title: {
    default: "Sun Valley Broadband | Internet Service Provider in Yuma, AZ",
    template: "%s | Sun Valley Broadband",
  },
  description:
    "Sun Valley Broadband is a local Internet Service Provider in Yuma, Arizona offering fast, reliable fiber and fixed wireless internet with no data caps and friendly local support.",
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
    icon: "/favicon.ico",
  },
  category: "technology",
  other: {
    "geo.region": "US-AZ",
    "geo.placename": "Yuma",
    "geo.position": "32.6927;-114.6277",
    ICBM: "32.6927, -114.6277",
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
        <Header />
        <main className="min-h-[calc(100vh-16rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
