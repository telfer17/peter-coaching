import type { Metadata } from "next";
import { Anton, Barlow_Condensed, Hanken_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/BookingProvider";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

// Brand fonts via next/font (self-hosted). Wired to the token font variables in globals.css.
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const barlow = Barlow_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Peter Weatherson Momentum Coaching",
    template: "%s | Peter Weatherson Momentum Coaching",
  },
  description:
    "Peter Weatherson Momentum Coaching — 1-to-1 and small-group football coaching for players of all ages and abilities, led by ex-professional Peter Weatherson, over 20 years in the game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${barlow.variable} ${hanken.variable} ${geistMono.variable}`}
    >
      <body>
        <BookingProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </BookingProvider>
      </body>
    </html>
  );
}
