"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-white grid-bg-light"
      style={{ minHeight: "92vh", display: "flex", alignItems: "center" }}
    >
      {/* Background blobs */}
      <div
        className="float-orb absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(108,59,245,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        className="float-orb-slow absolute bottom-0 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,216,0.07) 0%, transparent 70%)",
        }}
      />

      <div
        className="float-orb absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            width: `${5 + (i % 3) * 4}px`,
            height: `${5 + (i % 3) * 4}px`,
            top: `${8 + ((i * 9) % 80)}%`,
            left: `${5 + ((i * 9) % 90)}%`,
            background:
              i % 3 === 0
                ? "rgba(108,59,245,0.25)"
                : i % 3 === 1
                ? "rgba(0,180,216,0.2)"
                : "rgba(245,158,11,0.2)",
            animationDuration: `${6 + (i % 4) * 2}s`,
            animationDelay: `${(i * 0.6) % 4}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-10 max-w-[680px]">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#6c3bf5] animate-pulse" />

              <span className="text-xs font-bold text-[#6c3bf5] uppercase tracking-widest">
                IEEE MTT-S &amp; AP-S Sponsored
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1
                className="font-display font-extrabold leading-[0.95] text-slate-900"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                <span className="gradient-text">
                  RAMP 2027
                </span>
              </h1>

              <p
                className="font-display font-bold text-slate-700 mt-5 leading-snug"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
              >
                Conference on{" "}
                <span style={{ color: "#6c3bf5" }}>RF</span>,{" "}
                <span style={{ color: "#f59e0b" }}>Antenna</span>,{" "}
                <span style={{ color: "#00b4d8" }}>Microwave</span> and{" "}
                <span className="gradient-text-warm">Photonics</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-500 text-[1.25rem] leading-relaxed max-w-2xl">
              Uniting the world's brightest minds in electromagnetics,
              wireless systems, RF engineering, microwave innovation,
              and photonic technologies for two transformative days.
            </p>

            {/* Date + Venue */}
            <div className="flex flex-wrap gap-4">
              
              {/* Date */}
              <div className="flex items-center gap-3 px-5 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <svg
                  className="w-5 h-5 text-[#6c3bf5] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>

                <div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    Date
                  </p>

                  <p className="text-sm font-bold text-slate-800">
                    January 26–27, 2027
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-center gap-3 px-5 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <svg
                  className="w-5 h-5 text-[#f59e0b] shrink-0"
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

                <div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    Venue
                  </p>

                  <p className="text-sm font-bold text-slate-800">
                    ABV-IIITM Gwalior, India
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 pt-2">

              <Link
                href="/attend/registration"
                className="btn-accent !text-base !px-9 !py-4"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>

                Register Now
              </Link>

              <Link
                href="/authors/call-for-papers"
                className="btn-outline !text-base !px-9 !py-4"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>

                Submit Paper
              </Link>
            </div>

            {/* Organised By */}
            <p className="text-sm text-slate-400 font-medium">
              Organised by ABV-IIITM Gwalior · IEEE
            </p>
          </div>

          {/* Right Hero Visual */}
          

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
          Scroll
        </span>

        <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#6c3bf5] scroll-dot" />
        </div>
      </div>
    </section>
  );
}