import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ImportantDates from "@/components/ImportantDates";
import HighlightCards from "@/components/HighlightCards";
import VenueSection from "@/components/VenueSection";
import CounterBar from "@/components/CounterBar";

export const metadata: Metadata = {
  title: "RAMP 2027 – IEEE Conference on RF, Antenna, Microwave & Photonics",
  description:
    "RAMP 2027 is the IEEE international conference on RF, Antenna, Microwave and Photonics, held January 26–27, 2027 at IIM Nagpur, India.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
     
      <ImportantDates />
      <HighlightCards />
      <VenueSection />
    </>
  );
}
