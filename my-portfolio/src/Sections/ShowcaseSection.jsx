
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    name: "LectCore",
    category: "Education Platform",
    description:
      "A modern learning management platform that connects students, lecturers, and administrators in one organized digital environment.",
    image: "/images/lectcore.png",
    year: "2026",
    role: "Full-Stack Development",
    overview:
      "LectCore simplifies academic activities by bringing course materials, assignments, learning resources, and academic communication into one place.",
    features: [
      "Student, lecturer, and admin dashboards",
      "Course materials and lecture slides",
      "Assignment management",
      "Organized academic resources",
    ],
    stack: ["React", "TypeScript", "Appwrite", "Tailwind CSS"],
    layout: "large",
  },
  {
    id: "02",
    name: "NexaCV",
    category: "AI-Powered SaaS",
    description:
      "An AI-powered resume platform designed to help users build, analyze, and tailor professional resumes.",
    image: "/images/nexacv.png",
    year: "2026",
    role: "Full-Stack Development",
    overview:
      "NexaCV helps users improve their job applications through AI-powered resume analysis, feedback, and resume-building tools.",
    features: [
      "AI-powered resume analysis",
      "ATS score and feedback",
      "Resume building tools",
      "Job-specific resume tailoring",
    ],
    stack: ["React", "TypeScript", "Puter.js", "AI Integration"],
    layout: "small",
  },
  {
    id: "03",
    name: "Nexa Travel",
    category: "Travel Technology",
    description:
      "An intelligent travel platform that helps users plan trips and manage their travel experiences.",
    image: "/images/nexatravel.png",
    year: "2026",
    role: "Full-Stack Development",
    overview:
      "Nexa Travel combines AI-assisted itinerary generation with travel management features to make trip planning more organized and convenient.",
    features: [
      "AI-generated travel itineraries",
      "Trip planning and management",
      "Flight and travel booking features",
      "User and admin dashboards",
    ],
    stack: ["React", "TypeScript", "Appwrite", "AI Integration"],
    layout: "small",
  },
  {
    id: "04",
    name: "Kinchris Automotive",
    category: "Automotive Commerce",
    description:
      "An automotive e-commerce platform built to simplify product discovery, orders, and inventory management.",
    image: "/images/kinchris.png",
    year: "2026",
    role: "Full-Stack Development",
    overview:
      "Kinchris Automotive provides customers with a streamlined shopping experience while giving the business owner tools to manage products, inventory, payments, and orders.",
    features: [
      "Customer and owner dashboards",
      "Automotive product catalogue",
      "Shopping cart and order management",
      "Inventory and payment management",
      "Paystack payment integration",
    ],
    stack: ["React", "TypeScript", "Appwrite", "Paystack"],
    layout: "large",
  },
];

function ArrowUpRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="m18 6-12 12M6 6l12 12" />
    </svg>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`showcase-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const isLarge = project.layout === "large";

  return (
    <Reveal
      delay={index * 100}
      className={`project-card-wrap ${
        isLarge ? "project-card-large" : "project-card-small"
      }`}
    >
      <button
        type="button"
        className="project-card"
        onClick={() => onOpen(project)}
        aria-label={`View details for ${project.name}`}
      >
        <div className="project-image-wrap">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="project-image"
            loading="lazy"
          />

          <div className="project-image-overlay" />

          <div className="project-image-top">
            <span className="project-number">{project.id}</span>

            <span className="project-open-icon">
              <ArrowUpRight />
            </span>
          </div>

          <div className="project-image-bottom">
            <span className="project-category">{project.category}</span>
          </div>
        </div>

        <div className="project-card-content">
          <div className="project-card-heading">
            <div>
              <h3>{project.name}</h3>
              <span className="project-year">{project.year}</span>
            </div>

            <span className="project-card-arrow">
              <ArrowUpRight />
            </span>
          </div>

          <p>{project.description}</p>

          <div className="project-stack">
            {project.stack.slice(0, 3).map((item) => (
              <span key={item}>{item}</span>
            ))}

            {project.stack.length > 3 && (
              <span>+{project.stack.length - 3}</span>
            )}
          </div>
        </div>
      </button>
    </Reveal>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div

      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="project-modal-header">
          <span>PROJECT DETAILS</span>

          <button
            type="button"
            onClick={onClose}
            className="project-modal-close"
            aria-label="Close project details"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="project-modal-scroll">
          <div className="project-modal-image">
            <img
              src={project.image}
              alt={`${project.name} preview`}
            />
          </div>

          <div className="project-modal-body">
            <div className="project-modal-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>

            <h2 id="project-modal-title">{project.name}</h2>

            <p className="project-modal-description">
              {project.overview}
            </p>

            <div className="project-modal-section">
              <span className="project-modal-label">MY ROLE</span>
              <p>{project.role}</p>
            </div>

            <div className="project-modal-section">
              <span className="project-modal-label">KEY FEATURES</span>

              <div className="project-feature-grid">
                {project.features.map((feature, index) => (
                  <div className="project-feature" key={feature}>
                    <span className="feature-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-modal-section">
              <span className="project-modal-label">TECHNOLOGIES</span>

              <div className="project-modal-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="project-modal-footer">
          <span>ST-DARWIN / SELECTED WORK</span>

          <button type="button" onClick={onClose}>
            Close <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="showcase-section">
      <style>{`
        .showcase-section {
          --showcase-bg: #08090b;
          --showcase-card: #101114;
          --showcase-border: rgba(255, 255, 255, 0.09);
          --showcase-muted: #85868e;
          --showcase-text: #f4f4f5;
          position: relative;
          isolation: isolate;
          width: 100%;
          padding: 120px 0;
          overflow: hidden;
          color: var(--showcase-text);
          background: var(--showcase-bg);
          font-family: inherit;
        }

        .showcase-section *,
        .showcase-section *::before,
        .showcase-section *::after {
          box-sizing: border-box;
        }

        .showcase-section,
        .showcase-section .project-modal-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .showcase-section::-webkit-scrollbar,
        .showcase-section *::-webkit-scrollbar,
        .project-modal-scroll::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        .showcase-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .showcase-glow {
          position: absolute;
          z-index: -1;
          width: 520px;
          height: 520px;
          top: 8%;
          right: -280px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.09);
          filter: blur(120px);
          pointer-events: none;
        }

        .showcase-glow-two {
          position: absolute;
          z-index: -1;
          width: 400px;
          height: 400px;
          left: -250px;
          top: 55%;
          border-radius: 50%;
          background: rgba(56, 189, 248, 0.055);
          filter: blur(110px);
          pointer-events: none;
        }

        .showcase-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 35px;
          margin-bottom: 58px;
        }

        .showcase-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          color: #a1a1aa;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .showcase-eyebrow::before {
          content: "";
          width: 22px;
          height: 1px;
          background: #818cf8;
        }

        .showcase-heading h2 {
          max-width: 680px;
          margin: 0;
          font-size: clamp(36px, 5.5vw, 66px);
          line-height: 1.04;
          letter-spacing: -0.065em;
          font-weight: 600;
        }

        .showcase-heading h2 span {
          color: #777985;
        }

        .showcase-heading-description {
          max-width: 285px;
          margin: 0 0 5px;
          color: var(--showcase-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 34px 22px;
          align-items: start;
        }

        .project-card-wrap {
          min-width: 0;
        }

        .project-card-large {
          grid-column: span 7;
        }

        .project-card-small {
          grid-column: span 5;
        }

        .project-card {
          display: block;
          width: 100%;
          padding: 0;
          overflow: hidden;
          text-align: left;
          color: inherit;
          background: transparent;
          border: 0;
          cursor: pointer;
          font: inherit;
          -webkit-tap-highlight-color: transparent;
        }

        /* Project images */

        .project-image-wrap {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 1.55 / 1;
          overflow: hidden;
          isolation: isolate;
          padding: 0;
          border: 1px solid var(--showcase-border);
          border-radius: 15px;
          background: #08090b;
          transform: translateZ(0);
        }

        .project-card-small .project-image-wrap {
          aspect-ratio: 1.25 / 1;
        }

        .project-image {
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          max-height: none;
          object-fit: cover;
          object-position: center;
          padding: 0;
          margin: 0;
          opacity: 0.96;
          transform: scale(1);
          transition:
            transform 900ms cubic-bezier(0.2, 0.75, 0.25, 1),
            opacity 700ms ease;
        }

        .project-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.25) 0%,
            transparent 30%,
            transparent 55%,
            rgba(0, 0, 0, 0.48) 100%
          );
          pointer-events: none;
        }

        .project-image-top {
          position: absolute;
          top: 16px;
          left: 16px;
          right: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .project-number {
          display: grid;
          place-items: center;
          min-width: 34px;
          height: 30px;
          padding: 0 9px;
          color: white;
          background: rgba(10, 10, 12, 0.48);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 8px;
          backdrop-filter: blur(12px);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .project-open-icon {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          color: white;
          background: rgba(10, 10, 12, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          backdrop-filter: blur(12px);
          transition:
            color 350ms ease,
            background 350ms ease,
            transform 450ms cubic-bezier(0.2, 0.75, 0.25, 1);
        }

        .project-image-bottom {
          position: absolute;
          left: 17px;
          bottom: 17px;
        }

        .project-category {
          display: inline-flex;
          padding: 8px 11px;
          color: rgba(255, 255, 255, 0.92);
          background: rgba(12, 12, 15, 0.48);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 7px;
          backdrop-filter: blur(12px);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.04em;
        }

        .project-card-content {
          padding: 21px 2px 0;
        }

        .project-card-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .project-card-heading > div {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .project-card-heading h3 {
          margin: 0;
          color: #f4f4f5;
          font-size: clamp(19px, 2.1vw, 25px);
          font-weight: 600;
          letter-spacing: -0.045em;
          transition: color 300ms ease;
        }

        .project-year {
          color: #747580;
          font-size: 11px;
          font-weight: 500;
        }

        .project-card-arrow {
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          width: 34px;
          height: 34px;
          color: #9b9ca5;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 50%;
          transition:
            transform 400ms ease,
            color 300ms ease,
            border-color 300ms ease,
            background 300ms ease;
        }

        .project-card-content > p {
          max-width: 520px;
          margin: 10px 0 17px;
          color: #898a93;
          font-size: 12px;
          line-height: 1.9;
          font-weight: 400;
        }

        .project-stack,
        .project-modal-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .project-stack span,
        .project-modal-stack span {
          padding: 7px 10px;
          color: #a4a5ad;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.075);
          border-radius: 6px;
          font-size: 10px;
          font-weight: 500;
        }

        @media (hover: hover) {
          .project-card:hover .project-image {
            transform: scale(1.025);
            opacity: 1;
          }

          .project-card:hover .project-open-icon {
            color: #111216;
            background: #f4f4f5;
            transform: rotate(45deg);
          }

          .project-card:hover .project-card-heading h3 {
            color: #a5b4fc;
          }

          .project-card:hover .project-card-arrow {
            color: #fff;
            border-color: rgba(165, 180, 252, 0.45);
            background: rgba(129, 140, 248, 0.12);
            transform: translate(2px, -2px);
          }
        }

        .showcase-reveal {
          opacity: 0;
          transform: translate3d(0, 25px, 0);
          transition:
            opacity 850ms cubic-bezier(0.2, 0.65, 0.3, 1),
            transform 850ms cubic-bezier(0.2, 0.65, 0.3, 1);
          transition-delay: var(--reveal-delay, 0ms);
        }

        .showcase-reveal.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .showcase-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 65px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #777984;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .showcase-footer span:last-child {
          color: #a5a6ae;
        }

        /* Modal */

        .project-modal-backdrop {
          position: fixed;
          z-index: 9999;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(0, 0, 0, 0.76);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          animation: modalBackdropIn 300ms ease both;
        }

        .project-modal {
          display: flex;
          flex-direction: column;
          width: min(700px, 100%);
          max-height: min(850px, 90vh);
          overflow: hidden;
          color: #f4f4f5;
          background: #101114;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 17px;
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.55);
          animation: modalContentIn 450ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
        }

        .project-modal-header,
        .project-modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 0 0 auto;
          padding: 16px 21px;
        }

        .project-modal-header {
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .project-modal-header > span,
        .project-modal-footer > span {
          color: #858691;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.15em;
        }

        .project-modal-close {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          padding: 0;
          color: #a1a1aa;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          cursor: pointer;
          transition:
            color 250ms ease,
            background 250ms ease,
            transform 300ms ease;
        }

        .project-modal-close:hover {
          color: white;
          background: rgba(255, 255, 255, 0.12);
          transform: rotate(90deg);
        }

        .project-modal-scroll {
          min-height: 0;
          overflow-y: auto;
          overscroll-behavior: contain;
        }

        .project-modal-image {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 7;
          overflow: hidden;
          padding: 0;
          margin: 0;
          background: #08090b;
        }

        .project-modal-image img {
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          max-height: none;
          padding: 0;
          margin: 0;
          object-fit: cover;
          object-position: center;
        }

        .project-modal-body {
          padding: 27px;
        }

        .project-modal-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #999aa3;
          font-size: 10px;
          font-weight: 500;
        }

        .project-modal-meta span + span::before {
          content: "·";
          margin-right: 10px;
          color: #55565e;
        }

        .project-modal-body h2 {
          margin: 12px 0;
          color: #f4f4f5;
          font-size: clamp(27px, 5vw, 39px);
          line-height: 1.1;
          letter-spacing: -0.055em;
          font-weight: 600;
        }

        .project-modal-description {
          max-width: 580px;
          margin: 0;
          color: #999aa3;
          font-size: 12px;
          line-height: 1.9;
        }

        .project-modal-section {
          margin-top: 29px;
        }

        .project-modal-label {
          display: block;
          margin-bottom: 13px;
          color: #777984;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.15em;
        }

        .project-modal-section > p {
          margin: 0;
          color: #d0d0d5;
          font-size: 12px;
        }

        .project-feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
        }

        .project-feature {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          min-height: 54px;
          padding: 13px;
          color: #c7c7ce;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.065);
          border-radius: 8px;
          font-size: 11px;
          line-height: 1.6;
        }

        .feature-index {
          color: #818cf8;
          font-size: 9px;
          font-weight: 600;
        }

        .project-modal-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .project-modal-footer button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          color: #e4e4e7;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 7px;
          font: inherit;
          font-size: 10px;
          cursor: pointer;
          transition: background 250ms ease;
        }

        .project-modal-footer button:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        @keyframes modalBackdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalContentIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 760px) {
          .showcase-section {
            padding: 90px 0;
          }

          .showcase-container {
            width: min(100% - 36px, 600px);
          }

          .showcase-heading {
            display: block;
            margin-bottom: 38px;
          }

          .showcase-heading h2 {
            max-width: 520px;
            font-size: clamp(37px, 9vw, 54px);
          }

          .showcase-heading-description {
            max-width: 420px;
            margin-top: 18px;
          }

          .showcase-grid {
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 34px 16px;
          }

          .project-card-large,
          .project-card-small {
            grid-column: span 6;
          }

          .project-image-wrap,
          .project-card-small .project-image-wrap {
            aspect-ratio: 1.55 / 1;
          }

          .project-card-content {
            padding-top: 17px;
          }

          .showcase-footer {
            margin-top: 45px;
          }
        }

        @media (max-width: 480px) {
          .showcase-section {
            padding: 75px 0;
          }

          .showcase-container {
            width: calc(100% - 30px);
          }

          .showcase-eyebrow {
            margin-bottom: 17px;
            font-size: 9px;
          }

          .showcase-heading h2 {
            font-size: 39px;
          }

          .showcase-grid {
            gap: 29px;
          }

          .project-image-wrap,
          .project-card-small .project-image-wrap {
            aspect-ratio: 1.25 / 1;
            border-radius: 12px;
          }

          .project-image-top {
            top: 11px;
            left: 11px;
            right: 11px;
          }

          .project-image-bottom {
            left: 12px;
            bottom: 12px;
          }

          .project-card-content > p {
            font-size: 11px;
          }

          .project-card-heading h3 {
            font-size: 20px;
          }

          .showcase-footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 9px;
          }

          .project-modal-backdrop {
            align-items: flex-end;
            padding: 10px;
          }

          .project-modal {
            max-height: 92vh;
            border-radius: 14px;
          }

          .project-modal-body {
            padding: 21px 17px;
          }

          .project-modal-image {
            aspect-ratio: 16 / 9;
          }

          .project-feature-grid {
            grid-template-columns: 1fr;
          }

          .project-modal-header,
          .project-modal-footer {
            padding: 13px 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .showcase-section *,
          .showcase-section *::before,
          .showcase-section *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .showcase-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="showcase-glow" />
      <div className="showcase-glow-two" />

      <div className="showcase-container">
        <Reveal>
          <div className="showcase-heading">
            <div>
              <span className="showcase-eyebrow">SELECTED WORK / 2026</span>

              <h2>
                Things I've
                <br />
                <span>built with purpose.</span>
              </h2>
            </div>

            <p className="showcase-heading-description">
              A collection of digital experiences, products, and platforms
              focused on solving real problems through thoughtful design and
              development.
            </p>
          </div>
        </Reveal>

        <div className="showcase-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        <Reveal delay={250}>
          <div className="showcase-footer">
            <span>ST-DARWIN — Selected projects</span>
            <span>Designed & developed with intention.</span>
          </div>
        </Reveal>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
