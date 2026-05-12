import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="section-py bg-white"><div className="max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-24 xl:px-32 2xl:px-40 space-y-8">
      

        <div className="section-label bg-purple-50 text-[#6c3bf5] border border-purple-100 inline-block">
          About the Conference
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.08] max-w-6xl">
          IEEE International Conference on{" "}
          <span className="gradient-text">
            RF, Antenna, Microwave &amp; Photonics
          </span>
        </h2>

        <p className="text-slate-600 leading-[1.95] text-lg lg:text-[1.22rem] max-w-6xl">
          RAMP 2027 aims to provide a premier international platform for researchers,
          academicians, scientists, industry professionals, innovators, and students
          to present and discuss the latest advancements in{" "}
          <strong className="text-slate-800">
            RF, Microwave, Antenna, Electromagnetics, Photonics,
            THz, and Quantum Technologies
          </strong>.
        </p>

        <p className="text-slate-600 leading-[1.95] text-lg lg:text-[1.22rem] max-w-6xl">
          The conference will bring together experts from academia,
          research laboratories, startups, and industries to exchange
          innovative ideas, showcase emerging technologies, and foster
          interdisciplinary collaborations in advanced communication
          and sensing systems.
        </p>

        <p className="text-slate-600 leading-[1.95] text-lg lg:text-[1.22rem] max-w-6xl">
          RAMP 2027 particularly emphasises cutting-edge developments in{" "}
          <span className="font-semibold text-[#6c3bf5]">
            5G/6G and beyond
          </span>,
          intelligent wireless systems, integrated photonics,
          THz communication, quantum communication &amp; sensing,
          biomedical electromagnetics, RF energy harvesting,
          and AI-enabled RF and photonic technologies.
        </p>

        {/* Venue tag */}
        <div className="flex items-center gap-5 px-6 py-5 bg-purple-50 rounded-2xl border border-purple-100 w-fit mt-4">

          <div className="w-12 h-12 rounded-xl bg-[#6c3bf5] flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <div>
            <p className="font-bold text-slate-800 text-base">
              ABV-IIITM Gwalior, Madhya Pradesh, India
            </p>

            <p className="text-[#6c3bf5] text-sm font-semibold mt-1">
              January 26–27, 2027
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <div className="w-14 h-0.5 rounded-full bg-gradient-to-r from-[#6c3bf5] to-[#00b4d8]" />

          <span className="text-slate-400 text-sm font-medium">
            Hosted by ABV-IIITM Gwalior
          </span>
        </div>

      </div>
    </section>
  );
}