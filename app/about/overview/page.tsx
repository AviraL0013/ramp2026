import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "About RAMP 2027 – MAPCON Overview" };

const tracks = [
  {
    id: "TR:01",
    title: "RF & Microwave Circuits and Systems",
    color: "#6c3bf5",
    bg: "#f3f0ff",
    border: "#e0d9ff",
    topics: [
      "Microwave passive and active circuits",
      "RF integrated circuits and MMICs",
      "Oscillators, amplifiers, mixers, and filters",
      "Radar and microwave sensing systems",
      "Microwave devices and subsystems",
    ],
  },
  {
    id: "TR:02",
    title: "Antenna Systems & Propagation",
    color: "#00b4d8",
    bg: "#e0f8ff",
    border: "#b3ecff",
    topics: [
      "Smart and reconfigurable antennas",
      "MIMO and massive MIMO systems",
      "Millimeter-wave and THz antennas",
      "Metamaterials and metasurfaces",
      "Computational electromagnetics and propagation",
    ],
  },
  {
    id: "TR:03",
    title: "Photonics and THz Technologies",
    color: "#f59e0b",
    bg: "#fef9e7",
    border: "#fde68a",
    topics: [
      "Optical and photonic communication systems",
      "Integrated and silicon photonics",
      "THz devices and communication systems",
      "Microwave photonics",
      "Free-space optical communication",
    ],
  },
  {
    id: "TR:04",
    title: "RF & Microwave Technologies for 5G/6G and Beyond",
    color: "#10b981",
    bg: "#ecfdf5",
    border: "#a7f3d0",
    topics: [
      "Beyond-5G and 6G wireless systems",
      "mmWave and THz communication technologies",
      "Intelligent reflecting surfaces",
      "AI/ML-enabled communication systems",
      "High-speed and ultra-reliable wireless networks",
    ],
  },
  {
    id: "TR:05",
    title: "RF Energy Harvesting and Wireless Power Transfer",
    color: "#ef4444",
    bg: "#fef2f2",
    border: "#fecaca",
    topics: [
      "RF energy harvesting circuits",
      "Wireless charging technologies",
      "Rectennas and power management systems",
      "IoT-enabled low-power devices",
      "Sustainable wireless technologies",
    ],
  },
  {
    id: "TR:06",
    title: "Electromagnetics for Biomedical and Health Applications",
    color: "#8b5cf6",
    bg: "#faf5ff",
    border: "#ddd6fe",
    topics: [
      "Biomedical imaging and diagnostics",
      "Microwave and RF sensing for healthcare",
      "Wearable and implantable medical devices",
      "Electromagnetic compatibility and safety",
      "Smart healthcare communication systems",
    ],
  },
  {
    id: "TR:07",
    title: "Microwave & Photonics Measurement Techniques",
    color: "#3b82f6",
    bg: "#eff6ff",
    border: "#bfdbfe",
    topics: [
      "RF and microwave characterization",
      "Photonic measurement and testing techniques",
      "High-frequency instrumentation systems",
      "Spectrum and network analysis",
      "Calibration and measurement methodologies",
    ],
  },
  {
    id: "TR:08",
    title: "Emerging Technologies and Applications",
    color: "#f97316",
    bg: "#fff7ed",
    border: "#fed7aa",
    topics: [
      "AI-driven RF and microwave systems",
      "Autonomous and intelligent communication systems",
      "IoT and cyber-physical systems",
      "Space, satellite, and defense technologies",
      "Advanced sensing and imaging applications",
    ],
  },
  {
    id: "TR:09",
    title: "Quantum Technologies (Communication, Sensing, Material)",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    border: "#bae6fd",
    topics: [
      "Quantum communication systems",
      "Quantum key distribution and security",
      "Quantum sensing and metrology",
      "Quantum photonics and quantum materials",
      "Quantum-enabled communication networks",
    ],
  },
];

export default function OverviewPage() {
  return (
    <>
      <PageHero
        title="RAMP 2027 – Conference Overview"
        breadcrumbs={[
          { label: "About", href: "/about/overview" },
          { label: "MAPCON Overview", href: "/about/overview" },
        ]}
        subtitle="IEEE International Conference on RF, Antenna, Microwave and Photonics — ABV-IIITM Gwalior, January 26–27, 2027."
      />

      {/* ── About the Conference ── */}
      <section className="section-py bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-4xl">
            <div className="section-label bg-purple-50 text-[#6c3bf5] border border-purple-100 mb-6">
              About the Conference
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-8 leading-tight">
              IEEE International Conference on{" "}
              <span className="gradient-text">RF, Antenna, Microwave &amp; Photonics</span>
            </h2>
            <div className="space-y-5 text-slate-600 leading-relaxed text-base">
              <p>
                The IEEE International Conference on RF, Antenna, Microwave and Photonics (RAMP 2027)
                aims to provide a premier international platform for researchers, academicians, scientists,
                industry professionals, innovators, and students to present and discuss the latest
                advancements in RF, Microwave, Antenna, Electromagnetics, Photonics, THz, and Quantum Technologies.
              </p>
              <p>
                RAMP 2027 will bring together experts from academia, research laboratories, startups,
                and industries to exchange innovative ideas, showcase emerging technologies, and foster
                interdisciplinary collaborations in advanced communication and sensing systems. The
                conference will feature keynote talks, invited lectures, tutorials, technical paper
                presentations, industry sessions, and networking opportunities focused on future
                communication and intelligent technology ecosystems.
              </p>
              <p>
                The conference will particularly emphasize cutting-edge developments related to{" "}
                <strong className="text-slate-800">5G/6G and beyond</strong>, intelligent wireless
                systems, integrated photonics, THz communication, quantum communication and sensing,
                biomedical electromagnetics, RF energy harvesting, wireless power transfer, and
                AI-enabled RF and photonic technologies.
              </p>
              <p>
                Researchers and practitioners from across the globe are invited to submit original
                research contributions, innovative applications, industrial case studies, and
                experimental demonstrations in the emerging domains of RF, Microwave, Antenna, and
                Photonics technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conference Tracks ── */}
      <section className="section-py bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="section-label bg-cyan-50 text-[#00b4d8] border border-cyan-100 mx-auto w-fit mb-2">
              Tentative Conference Tracks
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
              9 Technical <span className="gradient-text">Tracks</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto">
              Covering the full spectrum of RF, Microwave, Antenna, Photonics, and emerging technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="bg-white rounded-2xl border p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                style={{ borderColor: track.border }}
              >
                {/* Track ID badge */}
                <div
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold mb-4"
                  style={{ background: track.bg, color: track.color, border: `1.5px solid ${track.border}` }}
                >
                  {track.id}
                </div>

                <h3 className="font-bold text-slate-800 text-sm leading-snug mb-4">{track.title}</h3>

                <ul className="space-y-2">
                  {track.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-1"
                        style={{ background: track.color }}
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ABV-IIITM Gwalior ── */}
      <section className="section-py bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="section-label bg-amber-50 text-amber-600 border border-amber-100 mb-6">
                Host Institution
              </div>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 mb-6 leading-tight">
                About <span className="gradient-text">ABV-IIITM Gwalior</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  Established in 1997, ABV-IIITM Gwalior is an{" "}
                  <strong className="text-slate-800">Institute of National Importance</strong> dedicated
                  to excellence in Information Technology, Management, Electronics, Communication
                  Engineering, and interdisciplinary research. The institute was founded with the vision
                  of developing highly skilled techno-managers and researchers capable of contributing to
                  emerging technological domains and national innovation initiatives.
                </p>
                <p>
                  Located amidst the scenic surroundings of the historic{" "}
                  <strong className="text-amber-600">Gwalior Fort</strong>, the institute campus spans
                  over 160 acres and provides a vibrant academic and research environment equipped with
                  modern laboratories, smart classrooms, high-performance computing facilities, advanced
                  communication and photonics research infrastructure, incubation support, and
                  innovation-driven centers.
                </p>
                <p>
                  ABV-IIITM Gwalior has established itself as a prominent center for cutting-edge
                  research in RF and Microwave Engineering, Antenna Design, Optical and Photonic
                  Communication, THz Technologies, Signal Processing, Artificial Intelligence, Quantum
                  Technologies, and Next-Generation Communication Systems.
                </p>
                <p>
                  The institute offers undergraduate, postgraduate, and doctoral programs with a strong
                  emphasis on interdisciplinary learning, innovation, entrepreneurship, and research-led
                  education.
                </p>
              </div>
            </div>

            {/* Key facts */}
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Key Facts</p>
              {[
                { icon: "🏛️", label: "Established", value: "1997" },
                { icon: "📐", label: "Campus Area", value: "160+ Acres" },
                { icon: "🏆", label: "Status", value: "Institute of National Importance" },
                { icon: "📍", label: "Location", value: "Gwalior, Madhya Pradesh, India" },
                { icon: "🎓", label: "Programs", value: "UG · PG · PhD" },
                { icon: "🔬", label: "Research Focus", value: "RF, Photonics, AI, Quantum Tech" },
              ].map((fact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-slate-200 shadow-sm hover:border-purple-200 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-2xl shrink-0">{fact.icon}</span>
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{fact.label}</p>
                    <p className="text-sm font-bold text-slate-800 text-right">{fact.value}</p>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-br from-[#6c3bf5] to-[#00b4d8] rounded-2xl p-6 text-white mt-2">
                <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">Conference Venue</p>
                <p className="font-extrabold text-xl font-display">ABV-IIITM Gwalior</p>
                <p className="text-purple-100 text-sm mt-1">Madhya Pradesh, India</p>
                <p className="text-white/70 text-xs mt-2">January 26–27, 2027</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
