import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Organizing Committee" };

export default function OrgCommitteePage() {
  return (
    <>
      <PageHero
        title="Organizing Committee"
        breadcrumbs={[{ label: "About", href: "/about/overview" }, { label: "Organizing Committee", href: "/about/organizing-committee" }]}
        subtitle="Meet the dedicated team organizing RAMP 2027."
      />
      <ComingSoon title="Organizing Committee" />
    </>
  );
}
