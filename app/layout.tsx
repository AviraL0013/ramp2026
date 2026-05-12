import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "RAMP 2027 – IEEE Conference on RF, Antenna, Microwave & Photonics",
    template: "%s | RAMP 2027",
  },
  description:
    "RAMP 2027 is the IEEE international conference on RF, Antenna, Microwave and Photonics, held January 26–27, 2027 at ABV-IIITM Gwalior, India.",
  keywords: [
    "RAMP 2027",
    "IEEE conference",
    "RF conference",
    "antenna microwave photonics",
    "IIM Nagpur",
    "electromagnetics conference",
  ],
  openGraph: {
    title: "RAMP 2027 – IEEE Conference on RF, Antenna, Microwave & Photonics",
    description:
      "Join researchers, engineers and industry leaders at ABV-IIITM Gwalior for RAMP 2027, January 26–27.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
