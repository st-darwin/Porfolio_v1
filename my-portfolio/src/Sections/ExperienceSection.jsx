
import React from "react";
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  ArrowUpRight,
  Ghost,
  MapPin,
  CalendarDays,
  CircleDot,
  MoveDown,
} from "lucide-react";

const journeyItems = [
  {
    year: "2024 — PRESENT",
    title: "Computer Science",
    organization: "Mountain Top University",
    description:
      "Currently in my third year, building a stronger foundation in computer science while exploring how technology can solve real-world problems.",
    icon: GraduationCap,
    tags: ["Computer Science", "Problem Solving", "Academic Growth"],
    status: "Currently studying",
    current: true,
  },
  {
    year: "THE BUILDING PHASE",
    title: "Full-Stack Development",
    organization: "Learning by Building",
    description:
      "Turning ideas into functional digital products. Exploring frontend architecture, backend systems, databases, authentication, and everything in between.",
    icon: Code2,
    tags: ["React", "TypeScript", "Appwrite", "Tailwind CSS"],
    status: "Ongoing journey",
  },
  {
    year: "EXPLORING WHAT'S NEXT",
    title: "AI & Emerging Technologies",
    organization: "Beyond Traditional Development",
    description:
      "Exploring the intersection of software engineering and artificial intelligence, with a focus on building smarter applications and meaningful digital experiences.",
    icon: BrainCircuit,
    tags: ["AI Integration", "Automation", "Innovation"],
    status: "Exploring",
  },
];

const highlights = [
  { value: "03", label: "University Year" },
  { value: "∞", label: "Things to Learn" },
  { value: "01", label: "Mindset", note: "Keep building" },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-black py-24 text-slate-200 md:py-36"
    >
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-500/[0.045] blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-[45%] h-72 w-72 rounded-full bg-slate-400/[0.025] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-20">

        {/* Custom Header */}
        <div className="experience-heading mx-auto max-w-4xl text-center">

          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-slate-700/50 bg-slate-900/40 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-300 opacity-30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-slate-300" />
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-slate-400">
              My Journey · Education · Growth
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building the
            <br />
            <span className="experience-gradient-text">
              bigger picture.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A journey shaped by curiosity, continuous learning, and the
            ambition to turn ideas into meaningful digital experiences.
            Here's a little about where it all comes together.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-5 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
            <span className="flex items-center gap-2">
              <GraduationCap size={14} className="text-slate-300" />
              Computer Science Student
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <span className="flex items-center gap-2">
              <MapPin size={13} className="text-slate-300" />
              Lagos, Nigeria
            </span>
          </div>

          <div className="mx-auto mt-14 flex max-w-xs items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-700/60" />
            <MoveDown size={14} className="text-slate-500" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-700/60" />
          </div>
        </div>

        {/* Highlights */}
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 divide-x divide-slate-800/80 rounded-2xl border border-slate-800/70 bg-slate-950/70 py-6">
          {highlights.map((item) => (
            <div key={item.label} className="px-3 text-center">
              <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {item.value}
              </h3>

              <p className="mt-2 text-[10px] text-slate-500 md:text-xs">
                {item.label}
              </p>

              {item.note && (
                <span className="mt-1 block text-[9px] text-slate-400">
                  {item.note}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Heading */}
        <div className="mb-12 mt-24 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                The Timeline
              </span>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Growing with every step.
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CalendarDays size={13} />
            A work in progress
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">

          <div className="absolute bottom-8 left-[17px] top-8 w-px bg-gradient-to-b from-slate-400/60 via-slate-700/40 to-transparent sm:left-[23px]" />

          <div className="space-y-7">
            {journeyItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="journey-card group relative pl-12 sm:pl-16"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Marker */}
                  <div
                    className={`absolute left-[7px] top-7 z-10 flex h-6 w-6 items-center justify-center rounded-full border sm:left-[13px] ${
                      item.current
                        ? "border-slate-500 bg-slate-800"
                        : "border-slate-700 bg-black"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        item.current
                          ? "animate-pulse bg-slate-200"
                          : "bg-slate-600"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0c0d10] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-slate-600/80 hover:bg-[#101216] sm:p-7">

                    {/* Subtle Hover Glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-slate-300/[0.025] blur-3xl transition-all duration-700 group-hover:bg-slate-300/[0.06]" />

                    <div className="relative z-10">

                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="flex items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-slate-500">
                          <CalendarDays size={12} />
                          {item.year}
                        </span>

                        <span
                          className={`rounded-full border px-3 py-1 text-[9px] font-medium ${
                            item.current
                              ? "border-slate-600/70 bg-slate-800/50 text-slate-300"
                              : "border-slate-800 bg-slate-900/50 text-slate-500"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="mt-7 flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-800/40 text-slate-300 transition-all duration-500 group-hover:border-slate-500 group-hover:bg-slate-800">
                          <Icon size={21} strokeWidth={1.5} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-lg font-semibold tracking-tight text-slate-100 sm:text-xl">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-xs text-slate-400">
                            {item.organization}
                          </p>

                          <p className="mt-4 max-w-2xl text-xs leading-7 text-slate-400 sm:text-sm">
                            {item.description}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={18}
                          className="hidden shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-300 sm:block"
                        />
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-800/70 pt-5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-1.5 text-[10px] text-slate-400 transition-colors duration-300 hover:border-slate-600 hover:text-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Message */}
        <div className="mx-auto mt-20 flex max-w-3xl flex-col items-center text-center">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-300">
            <Ghost size={17} />
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
            Still writing the story.
          </h3>

          <p className="mt-3 max-w-lg text-xs leading-7 text-slate-400 sm:text-sm">
            The goal isn't to know everything. It's to stay curious, keep
            improving, and build something better than yesterday.
          </p>

          <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-500">
            <CircleDot size={12} className="text-slate-400" />
            Always in progress
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .experience-heading {
          animation: experienceHeaderReveal 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        .experience-gradient-text {
          background: linear-gradient(
            110deg,
            #ffffff 5%,
            #cbd5e1 50%,
            #64748b 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .journey-card {
          opacity: 0;
          animation: journeyReveal 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
        }

        @keyframes experienceHeaderReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes journeyReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-heading,
          .journey-card {
            opacity: 1;
            animation: none;
          }

          .journey-card *,
          .experience-heading * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
