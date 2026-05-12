import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Invited Speakers" };

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        title="Invited Speakers"
        breadcrumbs={[{ label: "Program", href: "/program/technical" }, { label: "Invited Speakers", href: "/program/speakers" }]}
        subtitle="World-class keynote and invited speakers at RAMP 2027."
      />
      <ComingSoon title="Invited Speakers" />
    </>
  );
}
