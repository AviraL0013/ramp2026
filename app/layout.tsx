import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

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
    "ABV-IIITM Gwalior",
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
    <html lang="en" suppressHydrationWarning>
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
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main>{children}</main>
            <ScrollToTop />
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
