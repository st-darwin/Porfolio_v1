
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setStatus({
        type: "success",
        message: "Your message has been sent successfully. Thanks for reaching out!",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputStyles =
    "w-full rounded-xl border border-white/[0.08] bg-[#101113] px-4 py-3.5 text-sm text-white/90 outline-none placeholder:text-white/25 transition-all duration-300 focus:border-white/25 focus:bg-[#141518]";

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-24 md:px-10 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium tracking-wide text-white/50">
              OPEN TO OPPORTUNITIES
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let's start a conversation.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
            Have a project in mind, a question, or just want to connect?
            I'd be happy to hear from you.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">

          {/* Contact information and SVG */}
          <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0c0d0f] p-7 sm:p-9 lg:col-span-5">
            <div className="relative z-10">
              <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                <MessageCircle size={19} className="text-white/70" />
              </div>

              <h3 className="max-w-xs text-2xl font-semibold leading-snug text-white">
                Have something interesting in mind?
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                I'm always interested in meaningful projects, creative ideas,
                and opportunities to build something useful.
              </p>
            </div>

            {/* Custom inline SVG illustration */}
            <div className="pointer-events-none absolute inset-x-0 bottom-16 flex items-center justify-center opacity-90">
              <svg
                viewBox="0 0 420 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[390px]"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="contact-card"
                    x1="100"
                    y1="70"
                    x2="320"
                    y2="230"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#30343B" />
                    <stop offset="1" stopColor="#111317" />
                  </linearGradient>

                  <linearGradient
                    id="contact-line"
                    x1="120"
                    y1="100"
                    x2="300"
                    y2="210"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFFFFF" stopOpacity=".55" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity=".08" />
                  </linearGradient>

                  <filter
                    id="contact-shadow"
                    x="40"
                    y="20"
                    width="340"
                    height="260"
                    filterUnits="userSpaceOnUse"
                  >
                    <feGaussianBlur stdDeviation="18" />
                  </filter>
                </defs>

                {/* Ambient glow */}
                <ellipse
                  cx="210"
                  cy="160"
                  rx="120"
                  ry="65"
                  fill="#A1A1AA"
                  opacity=".09"
                  filter="url(#contact-shadow)"
                />

                {/* Background orbit */}
                <circle
                  cx="210"
                  cy="145"
                  r="112"
                  stroke="white"
                  strokeOpacity=".08"
                  strokeDasharray="3 8"
                />

                <circle
                  cx="210"
                  cy="145"
                  r="88"
                  stroke="white"
                  strokeOpacity=".05"
                />

                {/* Floating elements */}
                <circle cx="92" cy="90" r="4" fill="#A1A1AA" />
                <circle cx="324" cy="190" r="3" fill="#71717A" />
                <circle cx="300" cy="62" r="5" fill="#52525B" />

                <path
                  d="M88 157L108 157"
                  stroke="white"
                  strokeOpacity=".25"
                  strokeLinecap="round"
                />
                <path
                  d="M312 110L332 110"
                  stroke="white"
                  strokeOpacity=".25"
                  strokeLinecap="round"
                />

                {/* Main message card */}
                <rect
                  x="104"
                  y="70"
                  width="212"
                  height="145"
                  rx="17"
                  fill="url(#contact-card)"
                  stroke="white"
                  strokeOpacity=".16"
                />

                <rect
                  x="105"
                  y="71"
                  width="210"
                  height="143"
                  rx="16"
                  stroke="url(#contact-line)"
                  strokeOpacity=".5"
                />

                {/* Card top icon */}
                <rect
                  x="125"
                  y="91"
                  width="35"
                  height="35"
                  rx="10"
                  fill="white"
                  fillOpacity=".07"
                  stroke="white"
                  strokeOpacity=".1"
                />

                <path
                  d="M135 102H150V114H135V102Z"
                  stroke="#E4E4E7"
                  strokeOpacity=".8"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />

                <path
                  d="M135 103L142.5 109L150 103"
                  stroke="#E4E4E7"
                  strokeOpacity=".8"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Text lines */}
                <rect
                  x="125"
                  y="145"
                  width="112"
                  height="5"
                  rx="2.5"
                  fill="white"
                  fillOpacity=".55"
                />
                <rect
                  x="125"
                  y="158"
                  width="160"
                  height="4"
                  rx="2"
                  fill="white"
                  fillOpacity=".18"
                />
                <rect
                  x="125"
                  y="169"
                  width="132"
                  height="4"
                  rx="2"
                  fill="white"
                  fillOpacity=".18"
                />

                {/* Send button */}
                <rect
                  x="265"
                  y="185"
                  width="31"
                  height="18"
                  rx="6"
                  fill="white"
                  fillOpacity=".1"
                />
                <path
                  d="M276 194H286M282 190L286 194L282 198"
                  stroke="white"
                  strokeOpacity=".8"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Floating sparkle */}
                <path
                  d="M326 65V79M319 72H333"
                  stroke="#D4D4D8"
                  strokeOpacity=".7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                <path
                  d="M80 208V218M75 213H85"
                  stroke="#A1A1AA"
                  strokeOpacity=".6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Bottom note */}
            <div className="relative z-10 mt-64 flex items-center gap-3 border-t border-white/[0.07] pt-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.05]">
                <Mail size={15} className="text-white/60" />
              </div>

              <div>
                <p className="text-xs font-medium text-white/70">
                  Prefer email?
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Send me a message using the form.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#0c0d0f] p-6 sm:p-9 lg:col-span-7">
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-2 text-white/50">
                <Sparkles size={15} />
                <span className="text-xs font-medium tracking-wide">
                  GET IN TOUCH
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Send me a message
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Fill in the details below and I'll get back to you.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2.5 block text-sm font-medium text-slate-300"
                >
                  Your name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className={inputStyles}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2.5 block text-sm font-medium text-slate-300"
                >
                  Email address
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className={inputStyles}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2.5 block text-sm font-medium text-slate-300"
                >
                  Your message
                </label>

                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Tell me a little about what you have in mind..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputStyles} min-h-[140px] resize-y`}
                />
              </div>

              {/* Status message */}
              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-300"
                      : "border-red-400/15 bg-red-400/[0.06] text-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white px-5 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>{loading ? "Sending message..." : "Send message"}</span>

                {loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                ) : (
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                )}
              </button>

              <p className="text-center text-xs text-slate-600">
                Your information will only be used to respond to your message.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-600">
          <span className="h-px w-8 bg-white/10" />
          <span>Looking forward to connecting</span>
          <span className="h-px w-8 bg-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
