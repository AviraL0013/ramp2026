import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Visa Information" };

export default function VisaPage() {
  return (
    <>
      <PageHero
        title="Visa Information"
        breadcrumbs={[{ label: "Attend", href: "/attend/registration" }, { label: "Visa Information", href: "/attend/visa" }]}
        subtitle="Information for international attendees on obtaining an Indian visa."
      />
      <ComingSoon title="Visa Information" />
    </>
  );
}
