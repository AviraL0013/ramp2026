import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Students – RAMP 2027" };

export default function StudentsPage() {
  return (
    <>
      <PageHero
        title="Students"
        breadcrumbs={[{ label: "Students", href: "/students" }]}
        subtitle="Student design competition, Young Professionals activities, and research innovation showcase at RAMP 2027."
      />

      <section className="section-py bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: "🏆",
                title: "Student Design Competition",
                desc: "Showcase your innovative hardware design in RF, Antenna, Microwave or Photonics. Compete for cash prizes and certificates from IEEE.",
                color: "#6c3bf5",
                bg: "#f3f0ff",
              },
              {
                icon: "🔬",
                title: "Student Research Showcase",
                desc: "Present your ongoing research through posters and short talks. Receive feedback from eminent researchers and industry experts.",
                color: "#00b4d8",
                bg: "#e0f8ff",
              },
              {
                icon: "🤝",
                title: "Mentor-Mentee Program",
                desc: "Connect with senior IEEE members and researchers. Get personalized guidance on your research career and academic journey.",
                color: "#f59e0b",
                bg: "#fef9e7",
              },
              {
                icon: "👥",
                title: "Young Professionals (YP) Activities",
                desc: "IEEE Young Professionals networking sessions, panel discussions, and workshops designed for early-career engineers.",
                color: "#10b981",
                bg: "#ecfdf5",
              },
              {
                icon: "📚",
                title: "Technical Workshops",
                desc: "Hands-on workshops on RF simulation tools, antenna design software, and photonics measurement systems.",
                color: "#8b5cf6",
                bg: "#faf5ff",
              },
              {
                icon: "🎓",
                title: "IEEE Student Branch Activities",
                desc: "Join student branch events, quiz competitions, and social networking activities during the conference.",
                color: "#ef4444",
                bg: "#fef2f2",
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

          <div className="bg-gradient-to-br from-[#6c3bf5] to-[#00b4d8] rounded-3xl p-8 text-white text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Participate</p>
            <h3 className="font-display font-extrabold text-2xl mb-3">Student Registration Benefits</h3>
            <p className="text-white/80 text-sm max-w-lg mx-auto mb-6">
              Student delegates enjoy discounted registration fees, access to all technical sessions,
              exclusive student networking events, and eligibility for the IEEE student paper awards.
            </p>
            <a
              href="/attend/registration"
              className="inline-flex items-center gap-2 bg-white text-[#6c3bf5] font-bold text-sm px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors"
            >
              View Student Registration Fees
            </a>
          </div>

          <ComingSoon title="Student Program Details Coming Soon" />
        </div>
      </section>
    </>
  );
}
