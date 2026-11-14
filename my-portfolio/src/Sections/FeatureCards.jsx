import React from 'react';
import {
  Code2,
  Layers3,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  ArrowDownRight,
} from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      title: 'Frontend Development',
      desc: 'Building responsive, interactive, and visually polished interfaces with modern frontend technologies.',
      icon: Code2,
    },
    {
      title: 'Full-Stack Development',
      desc: 'Creating complete web applications with seamless frontend and backend integration.',
      icon: Layers3,
    },
    {
      title: 'Creative Problem Solving',
      desc: 'Turning complex ideas into practical digital solutions through thoughtful engineering.',
      icon: Lightbulb,
    },
    {
      title: 'Performance & Optimization',
      desc: 'Building fast, efficient, and scalable applications with a focus on user experience.',
      icon: Rocket,
    },
    {
      title: 'Clean Architecture',
      desc: 'Writing organized, maintainable code with reusable components and structured workflows.',
      icon: ShieldCheck,
    },
    {
      title: 'AI Integration',
      desc: 'Incorporating AI-powered features into applications to create smarter digital experiences.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="w-full padding-x-lg py-20 md:py-28">
      {/* Section Header */}
      <div className="feature-section-header">
        <div className="feature-section-eyebrow">
          <span className="feature-section-eyebrow-dot" />
          What I Bring To The Table
        </div>

        <h2 className="feature-section-title">
          More Than Just
          <span className="feature-section-title-accent">
            Writing Code.
          </span>
        </h2>

        <p className="feature-section-description">
          I combine engineering, creativity, and problem-solving to build
          meaningful digital experiences that work beautifully and solve
          real problems.
        </p>

        <div className="feature-section-label">
          <span>My expertise</span>
          <ArrowDownRight size={14} strokeWidth={1.7} />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, desc, icon: Icon }, index) => (
          <div
            key={title}
            style={{ animationDelay: `${index * 100}ms` }}
            className="
              group relative isolate overflow-hidden
              rounded-2xl
              border border-slate-800/80
              bg-gradient-to-br from-slate-950/80 to-black
              p-7 md:p-8
              transition-all duration-500 ease-out
              hover:-translate-y-1
              hover:border-slate-600
              animate-[featureEnter_700ms_ease-out_both]
            "
          >
            {/* Background Highlight */}
            <div
              className="
                pointer-events-none absolute -right-16 -top-16
                h-40 w-40 rounded-full
                bg-slate-500/[0.04] blur-3xl
                opacity-0
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            {/* Icon */}
            <div
              className="
                relative flex h-12 w-12 items-center justify-center
                rounded-xl
                border border-slate-800
                bg-slate-900/70
                text-slate-400
                transition-all duration-500
                group-hover:border-slate-600
                group-hover:bg-slate-800
                group-hover:text-slate-100
                group-hover:scale-105
              "
            >
              <Icon
                size={21}
                strokeWidth={1.6}
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="relative mt-7">
              <h3
                className="
                  text-base md:text-lg
                  font-semibold
                  tracking-tight
                  text-slate-200
                  transition-colors duration-300
                  group-hover:text-white
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-500
                  transition-colors duration-300
                  group-hover:text-slate-400
                "
              >
                {desc}
              </p>
            </div>

            {/* Bottom Accent */}
            <div
              className="
                absolute bottom-0 left-7 right-7
                h-px
                origin-left scale-x-0
                bg-gradient-to-r from-slate-500/60 to-transparent
                transition-transform duration-500 ease-out
                group-hover:scale-x-100
              "
            />
          </div>
        ))}
      </div>

      {/* Card Entrance Animation */}
      <style>{`
        @keyframes featureEnter {
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
          *,
          *::before,
          *::after {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureCards;