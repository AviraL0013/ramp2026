import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "RAMP 2025 Edition" };

export default function Edition2025Page() {
  return (
    <>
      <PageHero
        title="RAMP / MAPCON 2025 – Kochi Edition"
        breadcrumbs={[
          { label: "About", href: "/about/overview" },
          { label: "Past Editions", href: "#" },
          { label: "2025 Edition", href: "/about/past-editions/2025" },
        ]}
        subtitle="Highlights and proceedings from MAPCON 2025, Kochi, Kerala."
      />
      <ComingSoon title="2025 Edition Details" />
    </>
  );
}
