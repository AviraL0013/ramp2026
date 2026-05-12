"use client";

const dates = [
  { label: "Abstract Submission Opens", month: "SEP", day: "01", date: "Sep 1, 2026", state: "normal" },
  { label: "Special Session Proposals", month: "OCT", day: "15", date: "Oct 15, 2026", state: "normal" },
  { label: "Full Paper Submission Deadline", month: "OCT", day: "31", date: "Oct 31, 2026", state: "upcoming" },
  { label: "Notification of Acceptance", month: "NOV", day: "30", date: "Nov 30, 2026", state: "normal" },
  { label: "Camera-Ready Submission", month: "DEC", day: "20", date: "Dec 20, 2026", state: "normal" },
  { label: "Early-Bird Registration", month: "DEC", day: "15", date: "Dec 15, 2026", state: "normal" },
  { label: "Conference Dates", month: "JAN", day: "26", date: "Jan 26–27, 2027", state: "conference" },
];

export default function ImportantDates() {
  return (
    <section className="section-py bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label bg-amber-50 text-amber-600 border border-amber-100 mx-auto w-fit">
            Mark Your Calendar
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2">
            Important <span className="gradient-text">Dates</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm">All deadlines at 23:59 AoE · Dates subject to change</p>
        </div>

        {/* Timeline - horizontal scroll */}
        <div className="overflow-x-auto pb-4">
          <div className="relative min-w-[860px] lg:min-w-0">

            {/* Connecting line */}
            <div className="absolute top-[52px] left-[52px] right-[52px] h-0.5 bg-gradient-to-r from-[#6c3bf5] via-[#00b4d8] to-[#f59e0b] opacity-20 z-0" />

            <div className="grid grid-cols-7 gap-3 relative z-10">
              {dates.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  {/* Circle */}
                  <div
                    className={`w-[52px] h-[52px] rounded-full flex flex-col items-center justify-center border-2 shrink-0 transition-all duration-300 ${
                      item.state === "upcoming"
                        ? "border-[#6c3bf5] bg-[#6c3bf5] text-white timeline-dot-active shadow-lg shadow-purple-200"
                        : item.state === "conference"
                        ? "border-[#f59e0b] bg-[#f59e0b] text-white shadow-lg shadow-amber-200"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                  >
                    <span className="text-[8px] font-extrabold uppercase leading-tight tracking-wide">
                      {item.month}
                    </span>
                    <span className="text-base font-extrabold leading-tight font-display">
                      {item.day}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full rounded-xl px-2.5 py-3 border text-center transition-all duration-200 ${
                      item.state === "upcoming"
                        ? "border-purple-300 bg-purple-50 shadow-sm"
                        : item.state === "conference"
                        ? "border-amber-300 bg-amber-50 shadow-sm"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <p className={`text-[11px] font-semibold leading-snug ${
                      item.state === "upcoming" ? "text-purple-800"
                      : item.state === "conference" ? "text-amber-800"
                      : "text-slate-600"
                    }`}>
                      {item.label}
                    </p>
                    <p className={`text-[10px] mt-1 font-medium ${
                      item.state === "upcoming" ? "text-purple-500"
                      : item.state === "conference" ? "text-amber-600"
                      : "text-slate-400"
                    }`}>
                      {item.date}
                    </p>
                    {item.state === "upcoming" && (
                      <span className="inline-block mt-1.5 text-[9px] font-bold bg-purple-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Upcoming
                      </span>
                    )}
                    {item.state === "conference" && (
                      <span className="inline-block mt-1.5 text-[9px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Conference
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
