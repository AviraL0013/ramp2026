import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Call for Papers" };

const tracks = [
  "TR:01 — RF & Microwave Circuits and Systems",
  "TR:02 — Antenna Systems & Propagation",
  "TR:03 — Photonics and THz Technologies",
  "TR:04 — RF & Microwave Technologies for 5G/6G and Beyond",
  "TR:05 — RF Energy Harvesting and Wireless Power Transfer",
  "TR:06 — Electromagnetics for Biomedical and Health Applications",
  "TR:07 — Microwave & Photonics Measurement Techniques",
  "TR:08 — Emerging Technologies and Applications",
  "TR:09 — Quantum Technologies (Communication, Sensing, Material)",
];

export default function CallForPapersPage() {
  return (
    <>
      <PageHero
        title="Call for Papers"
        breadcrumbs={[
          { label: "Authors", href: "/authors/call-for-papers" },
          { label: "Call for Papers", href: "/authors/call-for-papers" },
        ]}
        subtitle="Submit your original research to RAMP 2027 — IEEE International Conference on RF, Antenna, Microwave and Photonics."
      />

      <section className="section-py bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Invitation */}
              <div>
                <div className="section-label bg-purple-50 text-[#6c3bf5] border border-purple-100 mb-4">
                  Invitation to Authors
                </div>
                <h2 className="font-display font-extrabold text-3xl text-slate-900 mb-5 leading-tight">
                  Submit Your <span className="gradient-text">Original Research</span>
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                  <p>
                    Researchers and practitioners from across the globe are invited to submit original
                    research contributions, innovative applications, industrial case studies, and
                    experimental demonstrations in the emerging domains of RF, Microwave, Antenna, and
                    Photonics technologies.
                  </p>
                  <p>
                    All submitted papers will undergo a rigorous{" "}
                    <strong className="text-slate-800">double-blind peer review</strong> process.
                    Accepted and presented papers will be submitted for inclusion in the{" "}
                    <strong className="text-slate-800">IEEE Xplore Digital Library</strong>.
                  </p>
                </div>
              </div>

              {/* Conference Tracks */}
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-4">
                  Conference Tracks
                </h3>
                <div className="space-y-2">
                  {tracks.map((track, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white rounded-xl px-5 py-3.5 border border-slate-200 hover:border-purple-200 hover:shadow-sm transition-all duration-200"
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-extrabold"
                        style={{ background: "linear-gradient(135deg,#6c3bf5,#00b4d8)" }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-sm font-semibold text-slate-700">{track}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submission guidelines */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-4">Submission Guidelines</h3>
                <ul className="space-y-3">
                  {[
                    "Papers must be written in English and follow the IEEE conference paper format.",
                    "Standard papers: 4–6 pages (including references). Extra pages chargeable.",
                    "Submit via the EDAS/CMT portal (link to be announced).",
                    "All submissions must be original and not under review elsewhere.",
                    "Double-blind review — remove author information before submission.",
                    "At least one author of each accepted paper must register and present.",
                  ].map((g, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-[#6c3bf5] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: sidebar */}
            <div className="space-y-5">
              {/* Key dates */}
              <div className="bg-white rounded-2xl border border-purple-200 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-[#6c3bf5] to-[#00b4d8] px-5 py-4">
                  <h3 className="font-bold text-white text-sm uppercase tracking-wider">Key Dates</h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {[
                    { label: "Submission Opens", date: "Sep 1, 2026" },
                    { label: "Paper Submission Deadline", date: "Oct 31, 2026", hot: true },
                    { label: "Notification of Acceptance", date: "Nov 30, 2026" },
                    { label: "Camera-Ready Submission", date: "Dec 20, 2026" },
                    { label: "Conference Dates", date: "Jan 26–27, 2027", conf: true },
                  ].map((d, i) => (
                    <div key={i} className="px-5 py-3 flex items-center justify-between gap-4">
                      <p className={`text-xs font-semibold ${d.hot ? "text-[#6c3bf5]" : "text-slate-600"}`}>
                        {d.label}
                      </p>
                      <span
                        className={`text-xs font-bold whitespace-nowrap px-2 py-0.5 rounded-full ${
                          d.hot
                            ? "bg-purple-100 text-purple-700"
                            : d.conf
                            ? "bg-amber-100 text-amber-700"
                            : "text-slate-500"
                        }`}
                      >
                        {d.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="bg-gradient-to-br from-[#6c3bf5] to-[#4f1fd4] rounded-2xl p-6 text-white text-center">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Ready to Submit?</p>
                <p className="font-bold text-lg mb-4">Paper Submission Portal</p>
                <a
                  href="mailto:ramp2027papers@iiitm.ac.in"
                  className="inline-flex items-center gap-2 bg-white text-[#6c3bf5] font-bold text-sm px-5 py-3 rounded-xl hover:bg-purple-50 transition-colors"
                >
                  Submit via Email
                </a>
                <p className="text-purple-200 text-xs mt-3">Online portal link — coming soon</p>
              </div>

              {/* Contact */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Paper Queries</p>
                <p className="text-sm font-semibold text-slate-700 mb-1">Technical Programme Committee</p>
                <a href="mailto:ramp2027papers@iiitm.ac.in" className="text-[#6c3bf5] text-sm hover:underline">
                  ramp2027papers@iiitm.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
