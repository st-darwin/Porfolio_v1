
import React, { useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'LectCore',
    category: 'Education Management System',
    image: '/images/lectcore.png',
    description:
      'A school learning management system designed to simplify academic activities and improve collaboration between students, lecturers, and administrators.',
    overview:
      'LectCore provides a centralized platform for managing learning materials, assignments, academic resources, and other institutional activities. It brings the major academic workflows together in one organized environment.',
    roles: ['Student', 'Lecturer', 'Administrator'],
    features: [
      {
        title: 'Slide Management',
        description:
          'Lecturers can organize and share lecture slides and learning resources with their students.',
      },
      {
        title: 'Assignment Management',
        description:
          'A dedicated assignment workflow for managing academic tasks and student submissions.',
      },
      {
        title: 'Course Materials',
        description:
          'Students can access course-related materials and academic resources in one place.',
      },
      {
        title: 'Role-Based Dashboards',
        description:
          'Separate experiences for students, lecturers, and administrators, with tools relevant to each role.',
      },
    ],
  },
  {
    id: 2,
    name: 'NexaCV',
    category: 'AI-Powered Resume Platform',
    image: '/images/nexacv.png',
    description:
      'An AI-powered resume platform that helps users build professional resumes and analyze existing CVs for more tailored job applications.',
    overview:
      'NexaCV uses AI to simplify the resume-building process. Users can create resumes, upload existing CVs for analysis, and receive useful feedback to improve their applications for specific roles.',
    roles: ['Job Seekers', 'Resume Creators'],
    features: [
      {
        title: 'AI Resume Builder',
        description:
          'Generate structured professional resumes with AI-assisted content creation.',
      },
      {
        title: 'Resume Analysis',
        description:
          'Analyze an existing CV and receive feedback on areas that could be improved.',
      },
      {
        title: 'Tailored CV Feedback',
        description:
          'Get suggestions that help align resume content with a particular job role or opportunity.',
      },
      {
        title: 'Professional Presentation',
        description:
          'Create cleaner, more organized resumes that communicate skills and experience effectively.',
      },
    ],
  },
  {
    id: 3,
    name: 'Nexa Travel',
    category: 'AI Travel & Booking Platform',
    image: '/images/nexatravel.png',
    description:
      'An AI-powered travel platform that helps users generate trip plans, explore travel options, and manage bookings.',
    overview:
      'Nexa Travel combines AI-assisted trip planning with travel booking workflows. Users can generate personalized itineraries and proceed with flight bookings or regular trip bookings through the platform.',
    roles: ['Traveler', 'Administrator'],
    features: [
      {
        title: 'AI Trip Generation',
        description:
          'Generate travel itineraries based on destinations, trip duration, budget, and travel preferences.',
      },
      {
        title: 'Flight Booking',
        description:
          'Connect generated travel plans with flight-booking workflows.',
      },
      {
        title: 'Regular Trip Booking',
        description:
          'Support standard travel booking workflows beyond AI-generated itineraries.',
      },
      {
        title: 'Admin Dashboard',
        description:
          'An administrative environment for managing platform activities and travel operations.',
      },
    ],
  },
  {
    id: 4,
    name: 'Kinchris Automotive',
    category: 'Automotive E-Commerce',
    image: '/images/kinchris.png',
    description:
      'An automotive e-commerce and business management platform that connects customers with products while helping the business owner manage daily operations.',
    overview:
      'Kinchris Automotive provides two connected experiences: a customer-facing online store and a business management dashboard. Customers can browse products, manage their carts, and pay online, while the business owner manages inventory, payments, and orders.',
    roles: ['Customer', 'Business Owner'],
    features: [
      {
        title: 'Product Storefront',
        description:
          'Customers can explore available automotive products and view product information.',
      },
      {
        title: 'Shopping Cart',
        description:
          'A cart experience that allows customers to organize products before checkout.',
      },
      {
        title: 'Online Payments',
        description:
          'Integrated Paystack payment processing for online customer transactions.',
      },
      {
        title: 'Inventory Management',
        description:
          'The business owner can manage product stock and monitor inventory.',
      },
      {
        title: 'Order Management',
        description:
          'A dedicated business dashboard for managing customer orders and payments.',
      },
    ],
  },
];

const ShowcaseSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Close modal with Escape and prevent background scrolling.
  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-black px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-slate-500" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500">
                Selected Work
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Projects that
              <span className="text-slate-500"> make an impact.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 md:text-base">
              A collection of digital products and applications built to solve
              real problems through thoughtful design and development.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>04 Featured Projects</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <article
              key={project.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="
                group relative overflow-hidden
                rounded-2xl border border-slate-800/80
                bg-slate-950/50
                transition-all duration-500 ease-out
                hover:-translate-y-1
                hover:border-slate-600
                animate-[projectEnter_700ms_ease-out_both]
              "
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">

                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.opacity = '0';
                  }}
                  className="
                    h-full w-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.04]
                  "
                />

                {/* Image Overlay */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t from-black/80 via-black/10 to-transparent
                  opacity-80 transition-opacity duration-500
                  group-hover:opacity-100
                " />

                {/* Project Number */}
                <span className="
                  absolute left-5 top-5
                  rounded-md border border-white/10
                  bg-black/50 px-3 py-1.5
                  text-[10px] font-medium tracking-widest
                  text-slate-300 backdrop-blur-md
                ">
                  PROJECT 0{project.id}
                </span>

                {/* Image Bottom Category */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300/80">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-7">

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-white md:text-2xl">
                      {project.name}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  <span className="
                    flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-full border border-slate-800
                    text-slate-500
                    transition-all duration-300
                    group-hover:border-slate-600
                    group-hover:text-slate-200
                  ">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path
                        d="M7 17 17 7M7 7h10v10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                {/* Card Footer */}
                <div className="mt-7 flex items-center justify-between border-t border-slate-800/80 pt-5">

                  <span className="text-[11px] font-medium tracking-wide text-slate-500">
                    View project details
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="
                      inline-flex items-center gap-2
                      rounded-full border border-slate-700
                      px-4 py-2.5
                      text-xs font-medium text-slate-200
                      transition-all duration-300
                      hover:border-slate-400
                      hover:bg-slate-100
                      hover:text-black
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-slate-400
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-black
                    "
                  >
                    More Info

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M5 12h14m-6-6 6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/80 p-4
            backdrop-blur-md
            animate-[modalFadeIn_250ms_ease-out_both]
          "
          onClick={() => setActiveProject(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="
              relative flex max-h-[90vh] w-full max-w-2xl
              flex-col overflow-hidden
              rounded-2xl border border-slate-700/70
              bg-[#080b10]
              shadow-[0_30px_100px_rgba(0,0,0,0.65)]
              animate-[modalSlideUp_350ms_cubic-bezier(0.16,1,0.3,1)_both]
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800/80 px-6 py-5 md:px-8">

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                  Project Overview
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full border border-slate-800
                  text-slate-400
                  transition-all duration-300
                  hover:rotate-90 hover:border-slate-500
                  hover:bg-slate-800 hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-slate-400
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path
                    d="m18 6-12 12M6 6l12 12"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto overscroll-contain">

              {/* Project Image */}
              <div className="relative aspect-[16/8] overflow-hidden bg-slate-900">
                <img
                  src={activeProject.image}
                  alt={`${activeProject.name} preview`}
                  onError={(event) => {
                    event.currentTarget.style.opacity = '0';
                  }}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080b10] via-black/10 to-transparent" />

                <span className="
                  absolute bottom-5 left-6
                  text-[10px] font-medium uppercase
                  tracking-[0.2em] text-slate-300
                ">
                  {activeProject.category}
                </span>
              </div>

              <div className="px-6 pb-8 pt-2 md:px-8 md:pb-10">

                {/* Project Title */}
                <div className="mb-7">
                  <span className="text-xs font-medium text-slate-600">
                    0{activeProject.id} / 04
                  </span>

                  <h3
                    id="project-modal-title"
                    className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl"
                  >
                    {activeProject.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {activeProject.overview}
                  </p>
                </div>

                {/* Platform Roles */}
                <div className="mb-8">
                  <h4 className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                    Platform Access
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {activeProject.roles.map((role) => (
                      <span
                        key={role}
                        className="
                          rounded-lg border border-slate-800
                          bg-slate-900/60
                          px-3 py-2
                          text-xs font-medium text-slate-300
                        "
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                      Key Features
                    </h4>

                    <span className="text-[10px] text-slate-600">
                      {activeProject.features.length} Features
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {activeProject.features.map((feature, index) => (
                      <div
                        key={feature.title}
                        className="
                          rounded-xl border border-slate-800/80
                          bg-slate-950/70 p-4
                          transition-colors duration-300
                          hover:border-slate-700
                        "
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <span className="
                            flex h-6 w-6 items-center justify-center
                            rounded-md bg-slate-800/80
                            text-[10px] font-medium text-slate-400
                          ">
                            0{index + 1}
                          </span>

                          <h5 className="text-sm font-medium text-slate-200">
                            {feature.title}
                          </h5>
                        </div>

                        <p className="text-xs leading-6 text-slate-500">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-slate-800/80 pt-5">
                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-600">
                    Featured Project
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="
                      rounded-full bg-slate-100
                      px-5 py-2.5
                      text-xs font-medium text-black
                      transition-all duration-300
                      hover:bg-white hover:shadow-lg
                      focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-slate-400
                    "
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes projectEnter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ShowcaseSection;
