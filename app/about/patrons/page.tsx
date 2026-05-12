import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Patrons" };

export default function PatronsPage() {
  return (
    <>
      <PageHero
        title="Patrons"
        breadcrumbs={[{ label: "About", href: "/about/overview" }, { label: "Patrons", href: "/about/patrons" }]}
        subtitle="Distinguished patrons supporting RAMP 2027."
      />
      <ComingSoon title="Patrons" />
    </>
  );
}
