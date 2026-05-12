import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "International Advisory Committee" };

export default function IACPage() {
  return (
    <>
      <PageHero
        title="International Advisory Committee"
        breadcrumbs={[{ label: "About", href: "/about/overview" }, { label: "IAC", href: "/about/iac" }]}
        subtitle="Global experts guiding the scientific direction of RAMP 2027."
      />
      <ComingSoon title="International Advisory Committee" />
    </>
  );
}
