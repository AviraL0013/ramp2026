const highlights = [
  {
    icon: "🏛️",
    color: "#6c3bf5",
    bg: "#f3f0ff",
    border: "#e0d9ff",
    title: "Government Participation",
    desc: "Active participation from ministries of the Government of India.",
  },
  {
    icon: "🎤",
    color: "#00b4d8",
    bg: "#e0f8ff",
    border: "#b3ecff",
    title: "Keynote & Plenary Talks",
    desc: "World-renowned academics, industry leaders and research pioneers.",
  },
  {
    icon: "💡",
    color: "#f59e0b",
    bg: "#fef9e7",
    border: "#fde68a",
    title: "Expert Invited Talks",
    desc: "Globally reputed experts on cutting-edge RF and photonics topics.",
  },
  {
    icon: "📊",
    color: "#10b981",
    bg: "#ecfdf5",
    border: "#a7f3d0",
    title: "Technical Sessions",
    desc: "Focused sessions on emerging areas, panels, and workshops.",
  },
  {
    icon: "🏭",
    color: "#ef4444",
    bg: "#fef2f2",
    border: "#fecaca",
    title: "Industry Exhibitions",
    desc: "Showcasing key product launches and innovations in RF & microwave.",
  },
  {
    icon: "🗂️",
    color: "#3b82f6",
    bg: "#eff6ff",
    border: "#bfdbfe",
    title: "80+ Exhibition Booths",
    desc: "Industry booths featuring the latest in antenna and photonics technology.",
  },
  {
    icon: "📚",
    color: "#8b5cf6",
    bg: "#faf5ff",
    border: "#ddd6fe",
    title: "International Book Stalls",
    desc: "Esteemed publishers with live reading library corners.",
  },
];

export default function HighlightCards() {
  return (
    <section className="section-py bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="section-label bg-cyan-50 text-[#00b4d8] border border-cyan-100 mx-auto w-fit">
            Conference Highlights
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2">
            What Makes <span className="gradient-text">RAMP 2027</span> Special
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            A comprehensive 2-day event designed for researchers, engineers, and industry professionals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="highlight-card p-6 group cursor-default"
              style={{ borderColor: item.border }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: item.bg, border: `1.5px solid ${item.border}` }}
              >
                {item.icon}
              </div>

              <h3
                className="text-base font-bold text-slate-800 mb-2 group-hover:transition-colors duration-200"
                style={{ color: undefined }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>

              {/* Bottom accent */}
              <div
                className="mt-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
