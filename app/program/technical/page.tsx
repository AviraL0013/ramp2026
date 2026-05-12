import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Technical Programs" };

export default function TechnicalPage() {
  return (
    <>
      <PageHero
        title="Technical Programs"
        breadcrumbs={[{ label: "Program", href: "/program/technical" }, { label: "Technical Programs", href: "/program/technical" }]}
        subtitle="Explore the full technical program schedule for RAMP 2027."
      />
      <ComingSoon title="Technical Programs" />
    </>
  );
}
