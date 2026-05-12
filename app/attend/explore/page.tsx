import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Explore Gwalior" };

export default function ExplorePage() {
  return (
    <>
      <PageHero
        title="Explore Gwalior"
        breadcrumbs={[
          { label: "Attend", href: "/attend/registration" },
          { label: "Explore the City", href: "/attend/explore" },
        ]}
        subtitle="Discover Gwalior — the City of Music, home to the majestic Gwalior Fort and rich cultural heritage of Madhya Pradesh."
      />

      {/* Quick highlights */}
      <section className="section-py bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: "🏰",
                title: "Gwalior Fort",
                desc: "One of India's most impregnable fortresses, spanning over 3 km on a rocky outcrop. A UNESCO-listed heritage site.",
                color: "#6c3bf5",
                bg: "#f3f0ff",
              },
              {
                icon: "🎵",
                title: "City of Music",
                desc: "Birthplace of Tansen, the legendary court musician of Emperor Akbar. Gwalior is India's first UNESCO Creative City of Music.",
                color: "#f59e0b",
                bg: "#fef9e7",
              },
              {
                icon: "🕌",
                title: "Jai Vilas Palace",
                desc: "A magnificent 19th-century palace-museum housing one of India's finest royal collections and the famous silver toy train.",
                color: "#00b4d8",
                bg: "#e0f8ff",
              },
              {
                icon: "🦁",
                title: "Shivpuri National Park",
                desc: "Just 2 hours from Gwalior — a wildlife sanctuary home to leopards, deer, crocodiles and diverse bird species.",
                color: "#10b981",
                bg: "#ecfdf5",
              },
              {
                icon: "🛕",
                title: "Sas-Bahu Temple",
                desc: "10th-century intricately carved temples perched atop the Gwalior Fort plateau — an architectural marvel.",
                color: "#ef4444",
                bg: "#fef2f2",
              },
              {
                icon: "🍜",
                title: "Local Cuisine",
                desc: "Savour authentic Gwalior delicacies — Bedai, Jalebi, Poha-Jalebi, and traditional Madhya Pradesh thali.",
                color: "#8b5cf6",
                bg: "#faf5ff",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border p-6 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                style={{ borderColor: `${item.color}30` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: item.bg }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Travel info */}
          <div className="bg-gradient-to-br from-[#6c3bf5] to-[#00b4d8] rounded-3xl p-8 text-white">
            <h3 className="font-display font-extrabold text-2xl mb-6">Getting to Gwalior</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "✈️",
                  label: "By Air",
                  info: "Rajmata Vijayaraje Scindia Airport, Gwalior — connected to Delhi, Mumbai, Hyderabad and other major cities.",
                },
                {
                  icon: "🚆",
                  label: "By Train",
                  info: "Gwalior Junction is a major station on the Delhi–Chennai mainline. Shatabdi, Rajdhani and many express trains stop here.",
                },
                {
                  icon: "🚗",
                  label: "By Road",
                  info: "~320 km from New Delhi via NH-44 (Agra–Gwalior highway). Well-connected by national and state highways.",
                },
              ].map((t, i) => (
                <div key={i} className="bg-white/15 rounded-2xl p-5">
                  <span className="text-3xl">{t.icon}</span>
                  <p className="font-bold text-base mt-3 mb-2">{t.label}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{t.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ComingSoon title="More City Guide Coming Soon" />
    </>
  );
}
