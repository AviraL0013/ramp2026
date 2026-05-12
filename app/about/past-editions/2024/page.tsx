import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "RAMP 2024 Edition" };

export default function Edition2024Page() {
  return (
    <>
      <PageHero
        title="RAMP / MAPCON 2024 – Hyderabad Edition"
        breadcrumbs={[
          { label: "About", href: "/about/overview" },
          { label: "Past Editions", href: "#" },
          { label: "2024 Edition", href: "/about/past-editions/2024" },
        ]}
        subtitle="Highlights and proceedings from MAPCON 2024, Hyderabad."
      />
      <ComingSoon title="2024 Edition Details" />
    </>
  );
}
