import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "IEEE Advisory Council" };

export default function IEEEAdvisoryPage() {
  return (
    <>
      <PageHero
        title="IEEE Advisory Council"
        breadcrumbs={[{ label: "About", href: "/about/overview" }, { label: "IEEE Advisory Council", href: "/about/ieee-advisory-council" }]}
      />
      <ComingSoon title="IEEE Advisory Council" />
    </>
  );
}
