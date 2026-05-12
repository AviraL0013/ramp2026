import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import VenueSection from "@/components/VenueSection";

export const metadata: Metadata = { title: "Venue – ABV-IIITM Gwalior" };

export default function VenuePage() {
  return (
    <>
      <PageHero
        title="Conference Venue"
        breadcrumbs={[
          { label: "Attend", href: "/attend/registration" },
          { label: "Venue", href: "/attend/venue" },
        ]}
        subtitle="ABV-IIITM Gwalior – the venue for RAMP 2027, January 26–27, 2027."
      />
      <VenueSection />
    </>
  );
}
