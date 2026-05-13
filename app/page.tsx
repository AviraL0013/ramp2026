import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CounterBar from "@/components/CounterBar";
import WelcomeSection from "@/components/WelcomeSection";
import SpeakersSection from "@/components/SpeakersSection";
import ImportantDates from "@/components/ImportantDates";
import CallForPapersSection from "@/components/CallForPapersSection";
import HighlightCards from "@/components/HighlightCards";
import SponsorsSection from "@/components/SponsorsSection";
import VenueSection from "@/components/VenueSection";

export const metadata: Metadata = {
  title: "RAMP 2027 – IEEE Conference on RF, Antenna, Microwave & Photonics",
  description:
    "RAMP 2027 is the IEEE international conference on RF, Antenna, Microwave and Photonics, held January 26–27, 2027 at ABV-IIITM Gwalior, India.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CounterBar />
      <WelcomeSection />
      <ImportantDates />
      <CallForPapersSection />
      <HighlightCards />
      <SponsorsSection />
      <VenueSection />
    </>
  );
}
