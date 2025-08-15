import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import { siteFont, brandFont } from "@/lib/fonts";



export const metadata: Metadata = {
  title: "Sun Valley Broadband",
  description:
    "Sun Valley Broadband is a full service provider of reliable and efficient data communication solutions for residential and business customers.",
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
