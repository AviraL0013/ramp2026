import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Call for Special Sessions" };

export default function SpecialSessionsPage() {
  return (
    <>
      <PageHero
        title="Call for Special Sessions"
        breadcrumbs={[{ label: "Authors", href: "/authors/call-for-papers" }, { label: "Call for Special Sessions", href: "/authors/call-for-special-sessions" }]}
        subtitle="Organise a special session on a focused topic at RAMP 2027."
      />
      <ComingSoon title="Call for Special Sessions" />
    </>
  );
}
