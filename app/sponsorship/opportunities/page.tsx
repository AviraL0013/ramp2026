import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Sponsorship Opportunities" };

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        title="Sponsorship & Exhibition Opportunities"
        breadcrumbs={[{ label: "Sponsorship & Exhibition", href: "/sponsorship/opportunities" }, { label: "Opportunities", href: "/sponsorship/opportunities" }]}
        subtitle="Partner with RAMP 2027 to reach 1500+ engineers, researchers and decision-makers."
      />
      <ComingSoon title="Sponsorship Opportunities" />
    </>
  );
}
