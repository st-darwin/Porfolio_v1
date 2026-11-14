
import React from "react";
import { socialImgs } from "../Constants";
import {
  ArrowUpRight,
  ArrowUp,
  CircleDot,
  Code2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-800/60 bg-[#08090b] px-5 py-14 text-slate-300 sm:px-8 md:py-16">

      {/* Top ambient line */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-500/30 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 rounded-full bg-slate-400/[0.025] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">

          {/* Brand */}
          <div className="flex flex-col items-center gap-4 md:items-start">

            <a
              href="#home"
              aria-label="Back to homepage"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/70 text-slate-200 transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800">
                <Code2 size={18} />
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-[0.12em] text-white">
                  SOLOMON<span className="text-slate-500">_DARWIN</span>
                </h3>

                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-slate-600">
                  Thinking in systems.
                </p>
              </div>
            </a>

            <p className="max-w-xs text-center text-xs leading-6 text-slate-500 md:text-left">
              Building digital experiences with curiosity, creativity, and
              clean code.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-5">

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
              Find me around the web
            </span>

            <div className="flex flex-wrap justify-center gap-3">
              {socialImgs.map((img) => (
                <a
                  key={img.name}
                  href={img.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={img.name}
                  title={img.name}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800/80 bg-slate-950/80 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800"
                >
                  <img
                    src={img.imgPath}
                    alt=""
                    loading="lazy"
                    className="h-4 w-4 object-contain opacity-45 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="flex flex-col items-center gap-4 md:items-end">

            <a
              href="/"
              className="group inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-950/80 px-4 py-3 text-xs text-slate-400 transition-all duration-300 hover:border-slate-600 hover:bg-slate-900 hover:text-white"
            >
              Back to top

              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </a>

            <div className="flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-400 opacity-30" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-slate-400" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.15em] text-slate-500">
                Portfolio online
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-[10px] tracking-wide text-slate-600">
            © {currentYear}{" "}
            <span className="text-slate-400">Solomon</span>.
            All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-slate-600">
            <CircleDot size={11} className="text-slate-500" />
            Designed with intention
            <ArrowUpRight size={11} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
