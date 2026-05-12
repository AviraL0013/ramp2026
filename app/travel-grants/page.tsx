import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Travel Grants" };

export default function TravelGrantsPage() {
  return (
    <>
      <PageHero
        title="Travel Grants"
        breadcrumbs={[{ label: "Travel Grants", href: "/travel-grants" }]}
        subtitle="Financial support available for students and early-career researchers."
      />
      <ComingSoon title="Travel Grants" />
    </>
  );
}
