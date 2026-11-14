
import React from "react";
import { techStackImgs } from "../Constants";
import {
  Code2,
  ArrowDown,
  Layers3,
} from "lucide-react";

const TechStack = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-black px-5 py-24 md:py-36"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-400/[0.035] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Custom Header */}
        <div className="tech-heading mx-auto max-w-3xl text-center">

          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-slate-800/80 bg-slate-950/80 px-4 py-2">
            <Code2 size={13} className="text-slate-400" />

            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-slate-400">
              Tools of the Trade
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
            My technical
            <br />
            <span className="tech-gradient-text">
              arsenal.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            The technologies, tools, and frameworks I use to transform ideas
            into functional, scalable, and meaningful digital experiences.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
            <Layers3 size={13} />
            My Development Stack
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">

          {techStackImgs.map((icon, index) => (
            <div
              key={icon.name}
              onMouseMove={handleMouseMove}
              className="tech-item group relative min-h-[145px] overflow-hidden rounded-2xl border border-slate-800/70 bg-[#0b0c0e] transition-all duration-500 hover:-translate-y-1 hover:border-slate-600/80 hover:bg-[#101215]"
              style={{ animationDelay: `${index * 70}ms` }}
            >

              {/* Cursor Spotlight */}
              <div className="tech-spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Subtle top highlight */}
              <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Card Content */}
              <div className="relative z-10 flex h-full min-h-[145px] flex-col items-center justify-center gap-5 p-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-900/50 p-3 transition-all duration-500 group-hover:border-slate-600 group-hover:bg-slate-800/70 group-hover:scale-105">
                  <img
                    src={icon.imgPath}
                    alt={icon.title || icon.name}
                    loading="lazy"
                    className="h-full w-full object-contain opacity-65 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>

                <div className="flex w-full items-center justify-between gap-2">
                  <p className="text-center text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:text-white sm:text-sm">
                    {icon.name}
                  </p>

                  <ArrowDown
                    size={13}
                    className="shrink-0 -rotate-45 text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-300"
                  />
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Always learning. Always improving.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .tech-heading {
          animation: techHeaderReveal 0.9s ease both;
        }

        .tech-gradient-text {
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

        .tech-item {
          opacity: 0;
          animation: techCardReveal 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
        }

        .tech-spotlight {
          background: radial-gradient(
            280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(203, 213, 225, 0.075),
            transparent 75%
          );
        }

        @keyframes techHeaderReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes techCardReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-heading,
          .tech-item {
            opacity: 1;
            animation: none;
          }

          .tech-item,
          .tech-item * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
