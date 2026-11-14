
import React, { useEffect, useState } from "react";
import { navLinks } from "../Constants";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Menu,
  MessageCircle,
  Send,
  Ghost,
  X,
} from "lucide-react";

// whatsapp number
const WHATSAPP_NUMBER = "2349114742360";

// resume
const RESUME_URL = "/resume.pdf";

// collab options 

const collaborationOptions = [
  {
    id: "project",
    title: "Build something",
    description: "I have a project or product idea.",
    message: "I'd like to discuss a project idea with you.",
  },
  {
    id: "freelance",
    title: "Work together",
    description: "I'm interested in your development services.",
    message: "I'd like to discuss a freelance opportunity with you.",
  },
  {
    id: "opportunity",
    title: "An opportunity",
    description: "Let's discuss a potential opportunity.",
    message: "I have an opportunity I'd like to discuss with you.",
  },
  {
    id: "connect",
    title: "Just connect",
    description: "Let's have a conversation.",
    message: "I'd like to connect and have a conversation with you.",
  },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [collabOpen, setCollabOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("project");

  const selectedCollaboration = collaborationOptions.find(
    (option) => option.id === selectedOption
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu with Escape and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setCollabOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = collabOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [collabOpen]);

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const openCollaborationModal = () => {
    setMenuOpen(false);
    setCollabOpen(true);
  };

  const handleWhatsApp = () => {
    if (!/^\d{8,15}$/.test(WHATSAPP_NUMBER)) {
      alert(
        "Please update WHATSAPP_NUMBER in NavBar.jsx with your WhatsApp number."
      );
      return;
    }

    const message = `Hi Solomon! ${selectedCollaboration.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed left-0 top-0 z-50 w-full px-4 transition-all duration-500 sm:px-6 lg:px-10 ${
          scrolled ? "pt-3" : "pt-5"
        }`}
      >
        <div
          className={`relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "border-white/[0.10] bg-[#0b0c0ee8] shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
              : "border-white/[0.07] bg-[#111214]/65 backdrop-blur-xl"
          }`}
        >
          {/* LEFT: BRAND */}
          <a
            href="#hero"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Go to homepage"
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10 bg-white/[0.06]">
              <img
                src="/images/portpic1.jpg"
                alt="Solomon"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white/90">
                Solomon<span className="text-white/30">_</span>
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/35">
                Developer
              </span>
            </div>
          </a>

          {/* CENTER: DESKTOP NAVIGATION */}
          <nav className="hidden ml-[6rem] flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-7 xl:gap-9">
              {navLinks.map(({ name, link }) => (
                <li key={name}>
                  <a
                    href={link}
                    className="group relative py-2 text-[13px] font-medium text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    {name}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/80 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT: DESKTOP ACTIONS */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.035] px-3.5 py-2.5 text-xs font-medium text-white/65 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              <ArrowDownToLine
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              View Resume
              <ExternalLink size={11} className="text-white/30" />
            </a>

            <button
              onClick={openCollaborationModal}
              className="group flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black transition-all duration-300 hover:bg-slate-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.10)] active:scale-[0.97]"
            >
              Wanna Collab?
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.04] text-white/80 transition-all duration-300 hover:bg-white/[0.09] lg:hidden"
          >
            <span className="relative flex h-4 w-4 items-center justify-center">
              <Menu
                size={20}
                className={`absolute transition-all duration-300 ${
                  menuOpen
                    ? "rotate-45 scale-50 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                size={20}
                className={`absolute transition-all duration-300 ${
                  menuOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-45 scale-50 opacity-0"
                }`}
              />
            </span>
          </button>

          {/* MOBILE DROPDOWN */}
          <div
            className={`absolute left-0 right-0 top-[calc(100%+10px)] origin-top overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d0e10]/[0.97] shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-300 lg:hidden ${
              menuOpen
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible -translate-y-2 scale-[0.98] opacity-0"
            }`}
          >
            <div className="p-4">
              <div className="mb-3 flex items-center justify-between px-2">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                  Navigation
                </span>
                <span className="text-[10px] text-white/25">
                  Explore portfolio
                </span>
              </div>

              <nav>
                <ul className="flex flex-col">
                  {navLinks.map(({ name, link }, index) => (
                    <li key={name}>
                      <a
                        href={link}
                        onClick={closeMobileMenu}
                        className="group flex items-center justify-between rounded-xl px-3 py-3.5 text-sm font-medium text-white/65 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-[10px] tabular-nums text-white/25">
                            0{index + 1}
                          </span>
                          {name}
                        </span>

                        <ArrowUpRight
                          size={15}
                          className="text-white/20 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="my-3 h-px bg-white/[0.07]" />

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.035] px-3 py-3 text-xs font-medium text-white/70 transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  <ArrowDownToLine size={14} />
                  Resume
                </a>

                <button
                  onClick={openCollaborationModal}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-3 text-xs font-semibold text-black transition-colors hover:bg-slate-200"
                >
                  <Ghost size={14} />
                  Wanna Collab?
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 px-2 pb-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] text-white/35">
                  Available for interesting projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* COLLABORATION MODAL */}
      {collabOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-8 backdrop-blur-md"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setCollabOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="collab-title"
            className="relative my-auto w-full max-w-[480px] overflow-hidden rounded-3xl border border-white/[0.11] bg-[#101113] shadow-[0_30px_100px_rgba(0,0,0,0.65)]"
          >
            {/* Modal ambient glow */}
            <div className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full bg-white/[0.07] blur-[90px]" />

            {/* Modal header */}
            <div className="relative border-b border-white/[0.07] p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setCollabOpen(false)}
                aria-label="Close collaboration modal"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-white/50 transition-all hover:bg-white/[0.09] hover:text-white"
              >
                <X size={17} />
              </button>

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.05]">
                <Code2 size={21} className="text-white/80" />
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                  Let's make it happen
                </span>
              </div>

              <h2
                id="collab-title"
                className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                Wanna collaborate?
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                Good ideas start with conversations. What's on your mind?
                Choose a topic and let's talk.
              </p>
            </div>

            {/* Collaboration options */}
            <div className="relative p-6 sm:p-8">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                I'M REACHING OUT ABOUT...
              </p>

              <div className="flex flex-col gap-2">
                {collaborationOptions.map((option) => {
                  const isSelected = selectedOption === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedOption(option.id)}
                      className={`group flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-white/25 bg-white/[0.075]"
                          : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.045]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                            isSelected
                              ? "bg-white text-black"
                              : "bg-white/[0.06] text-white/50"
                          }`}
                        >
                          {isSelected ? (
                            <Check size={16} />
                          ) : (
                            <MessageCircle size={16} />
                          )}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-white/90">
                            {option.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {option.description}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`h-4 w-4 rounded-full border transition-all ${
                          isSelected
                            ? "border-white bg-white shadow-[inset_0_0_0_4px_#101113]"
                            : "border-white/20"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* WhatsApp action */}
              <div className="mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/[0.09]">
                    <MessageCircle
                      size={17}
                      className="text-emerald-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white/80">
                      Straight to WhatsApp
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Your selected topic will be included in a pre-filled
                      message.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-slate-200 active:scale-[0.98]"
                >
                  <Send size={15} />
                  Let's talk on WhatsApp
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setCollabOpen(false)}
                className="mt-4 w-full py-2 text-xs font-medium text-white/35 transition-colors hover:text-white/70"
              >
                Maybe later
              </button>
            </div>

            {/* Bottom detail */}
            <div className="flex items-center justify-center gap-2 border-t border-white/[0.06] px-6 py-4">
              <Ghost size={12} className="text-white/30" />
              <span className="text-[10px] tracking-wide text-white/30">
                Ideas · Collaboration · Building
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
