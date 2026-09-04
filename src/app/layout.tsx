import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToTop from "@/components/layout/ScrollToTop";
import JsonLd from "@/components/seo/JsonLd";
import { rotaryConfig } from "@/config/rotary-year";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(rotaryConfig.siteUrl),
  title: {
    default: `${rotaryConfig.clubName} – Rotary District ${rotaryConfig.districtNumber}`,
    template: `%s | ${rotaryConfig.shortClubName}`,
  },
  description: `${rotaryConfig.clubName} (Rotary District ${rotaryConfig.districtNumber}) is a premier service organization in Bengaluru dedicated to community health, education, and youth development under the RY ${rotaryConfig.activeRotaryYear} Presidential Message "${rotaryConfig.presidentialMessage}".`,
  keywords: [
    "Rotary",
    "Rotary Bangalore",
    "Rotary Bangalore JP Nagar",
    "Rotary District 3191",
    "JP Nagar Rotary Club",
    "Create Lasting Impact",
    "Community Service Bangalore",
    "Rotary Club Bengaluru",
    "Charity Bangalore",
    "Join Rotary Bangalore",
    "Happy School Project",
    "Rotaract Bangalore",
  ],
  authors: [{ name: rotaryConfig.clubName, url: rotaryConfig.siteUrl }],
  creator: rotaryConfig.clubName,
  publisher: rotaryConfig.clubName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: rotaryConfig.siteUrl,
    siteName: rotaryConfig.clubName,
    title: `${rotaryConfig.clubName} – Rotary District ${rotaryConfig.districtNumber}`,
    description: `Empowering communities through impactful healthcare, education, and leadership initiatives in Bengaluru under the RY ${rotaryConfig.activeRotaryYear} Presidential Message: "${rotaryConfig.presidentialMessage}".`,
    images: [
      {
        url: "/images/slide/Rotary%20JP%20Nagar%20Logo.webp",
        width: 1200,
        height: 630,
        alt: `${rotaryConfig.clubName} - RY ${rotaryConfig.activeRotaryYear}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${rotaryConfig.clubName} – Rotary District ${rotaryConfig.districtNumber}`,
    description: `Community service, healthcare projects, and youth leadership in Bengaluru. Rotary Year ${rotaryConfig.activeRotaryYear}.`,
    images: ["/images/slide/Rotary%20JP%20Nagar%20Logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/icons/Rotary Mark of Excellence.webp",
    apple: "/images/icons/Rotary Mark of Excellence.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        <meta name="geo.position" content={`${rotaryConfig.contact.geo.latitude};${rotaryConfig.contact.geo.longitude}`} />
        <meta name="ICBM" content={`${rotaryConfig.contact.geo.latitude}, ${rotaryConfig.contact.geo.longitude}`} />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-gray-900 antialiased selection:bg-rotary-gold/30 selection:text-gray-900">
        <JsonLd />
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileBottomNav />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
