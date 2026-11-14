
import React from 'react';
import { counterItems } from '../Constants';

const AnimatedCounter = () => {
  return (
    <section
      id="counter"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {counterItems.map((item, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 100}ms` }}
            className="
              group relative isolate overflow-hidden
              rounded-2xl
              border border-slate-800/80
              bg-gradient-to-br from-slate-950 via-black to-black
              p-7 md:p-8
              transition-all duration-500 ease-out
              hover:-translate-y-1
              hover:border-slate-600
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
              animate-[counterEnter_700ms_ease-out_both]
            "
          >
            {/* Subtle corner highlight */}
            <div
              className="
                pointer-events-none absolute -right-16 -top-16
                h-40 w-40 rounded-full
                bg-slate-700/10 blur-3xl
                opacity-0
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            {/* Top indicator */}
            <div className="relative mb-8 flex items-center justify-between">
              <span className="h-1.5 w-7 rounded-full bg-slate-700 transition-all duration-500 group-hover:w-11 group-hover:bg-slate-400" />

              <span className="text-[10px] font-medium tracking-[0.18em] text-slate-600">
                0{index + 1}
              </span>
            </div>

            {/* Number and suffix */}
            <div className="relative flex items-baseline gap-1">
              <h2 className="
                text-5xl md:text-6xl
                font-semibold
                tracking-[-0.06em]
                text-slate-100
                transition-all duration-500
                group-hover:text-white
              ">
                {item.value}
              </h2>

              <span className="
                text-2xl md:text-3xl
                font-medium
                tracking-tight
                text-slate-500
                transition-colors duration-500
                group-hover:text-slate-300
              ">
                {item.suffix}
              </span>
            </div>

            {/* Label */}
            <p className="
              relative mt-4
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-slate-500
              transition-colors duration-300
              group-hover:text-slate-300
            ">
              {item.label}
            </p>

            {/* Bottom border animation */}
            <div className="
              absolute bottom-0 left-0
              h-px w-full
              origin-left scale-x-0
              bg-gradient-to-r from-slate-400/70 via-slate-600/40 to-transparent
              transition-transform duration-700 ease-out
              group-hover:scale-x-100
            " />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes counterEnter {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[counterEnter_700ms_ease-out_both\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default AnimatedCounter;
