import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Rotary Bangalore JP Nagar - Rotary District 3191",
    template: "%s | Rotary Bangalore JP Nagar",
  },
  description:
    "Rotary Bangalore JP Nagar is a leading rotary club in Bangalore, part of Rotary District 3191, committed to community service, professional development, and impactful projects.",
  keywords: [
    "Rotary",
    "Rotary India",
    "Rotary Bangalore",
    "Rotary District 3191",
    "JP Nagar Rotary Club",
    "Community Service",
    "Charity",
    "Nonprofit",
  ],
  authors: [{ name: "Rotary Bangalore JP Nagar" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rotaryjpnagar.org",
    siteName: "Rotary Bangalore JP Nagar",
    title: "Rotary Bangalore JP Nagar - Rotary District 3191",
    description:
      "Rotary Bangalore JP Nagar, a part of Rotary District 3191, is committed to community service, impactful projects, and professional development in Bangalore.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotary Bangalore JP Nagar - Rotary District 3191",
    description:
      "Rotary Bangalore JP Nagar is dedicated to community service and professional development as part of Rotary District 3191.",
  },
  robots: { index: true, follow: true },
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        <meta name="geo.position" content="12.911562;77.585278" />
        <meta name="ICBM" content="12.911562, 77.585278" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
