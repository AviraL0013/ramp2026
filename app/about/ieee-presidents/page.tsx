import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "IEEE Presidents – Sponsoring Societies" };

export default function IEEEPresidentsPage() {
  return (
    <>
      <PageHero
        title="IEEE Presidents (Sponsoring Societies)"
        breadcrumbs={[{ label: "About", href: "/about/overview" }, { label: "IEEE Presidents", href: "/about/ieee-presidents" }]}
      />
      <ComingSoon title="IEEE Presidents" />
    </>
  );
}
