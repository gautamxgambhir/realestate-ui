import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Propiedad — Luxury Real Estate, Greater Noida West & Ghaziabad",
  description:
    "Discover exceptional residential and commercial properties in Greater Noida West and Ghaziabad. Propiedad — Where Vision Becomes Address.",
  keywords: [
    "luxury real estate Noida",
    "premium properties Greater Noida West",
    "Ghaziabad luxury homes",
    "HNI real estate India",
    "Propiedad",
  ],
  openGraph: {
    title: "Propiedad — Where Vision Becomes Address",
    description:
      "Luxury real estate advisory for HNIs, investors and NRIs in Greater Noida West & Ghaziabad.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#FAF9F6" />
      </head>
      <body>{children}</body>
    </html>
  );
}
