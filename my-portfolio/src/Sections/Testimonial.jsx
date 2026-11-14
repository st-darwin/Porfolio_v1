
import React from "react";
import { testimonials } from "../Constants";
import {
  Quote,
  MessageSquareQuote,
  ArrowUpRight,
} from "lucide-react";

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-black px-5 py-24 md:py-36"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-slate-500/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-slate-400/[0.025] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Custom Header */}
        <div className="testimonial-heading mx-auto max-w-3xl text-center">

          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-slate-800/80 bg-slate-950/80 px-4 py-2">
            <MessageSquareQuote
              size={13}
              className="text-slate-400"
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-slate-400">
              Words & Perspectives
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
            A little feedback,
            <br />
            <span className="testimonial-gradient-text">
              a lot of motivation.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Good work speaks through the experiences it creates.
            Here's what people have shared about working with me.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
            <span className="h-px w-8 bg-slate-700" />
            Kind words
            <span className="h-px w-8 bg-slate-700" />
          </div>
        </div>

        {/* Pinterest-style Masonry Grid */}
        <div className="testimonial-masonry mt-16">

          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name || index}
              className="testimonial-card group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-slate-800/70 bg-[#0b0c0e] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-slate-600/80 hover:bg-[#101215] sm:mb-5 sm:p-7"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >

              {/* Subtle hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-slate-300/[0.025] blur-3xl transition-all duration-700 group-hover:bg-slate-300/[0.065]" />

              <div className="relative z-10">

                {/* Card Top */}
                <div className="flex items-center justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70 text-slate-300 transition-all duration-300 group-hover:border-slate-600 group-hover:bg-slate-800">
                    <Quote size={17} strokeWidth={1.6} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-300"
                  />
                </div>

                {/* Testimonial Content */}
                {testimonial.review && (
                  <p className="mt-7 text-sm leading-8 text-slate-300/80 sm:text-[15px]">
                    "{testimonial.review}"
                  </p>
                )}

                {/* Profile */}
                <div className="mt-8 flex items-center gap-3 border-t border-slate-800/80 pt-5">

                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-slate-700/80 bg-slate-900">
                    {testimonial.imgPath ? (
                      <img
                        src={testimonial.imgPath}
                        alt={testimonial.name || "Testimonial author"}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm font-medium text-slate-400">
                        {testimonial.name?.charAt(0)?.toUpperCase() || "?"}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold text-slate-200">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 truncate text-xs text-slate-500">
                      {testimonial.mentions}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-16 flex flex-col items-center text-center">

          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400">
            <MessageSquareQuote size={16} />
          </div>

          <h3 className="text-sm font-medium text-slate-300">
            Every collaboration leaves something meaningful.
          </h3>

          <p className="mt-2 text-xs text-slate-500">
            Grateful for every connection and opportunity.
          </p>
        </div>
      </div>

      {/* Component Styles */}
      <style>{`
        .testimonial-heading {
          animation: testimonialHeaderReveal 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        .testimonial-gradient-text {
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

        /* Masonry Layout */
        .testimonial-masonry {
          columns: 1;
          column-gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .testimonial-masonry {
            columns: 2;
          }
        }

        @media (min-width: 1024px) {
          .testimonial-masonry {
            columns: 3;
          }
        }

        .testimonial-card {
          opacity: 0;
          animation: testimonialCardReveal 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
        }

        @keyframes testimonialHeaderReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes testimonialCardReveal {
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
          .testimonial-heading,
          .testimonial-card {
            opacity: 1;
            animation: none;
          }

          .testimonial-card,
          .testimonial-card * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
