"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Ignite+ LMS",
    status: "Completed",
    date: "2025",
    description:
      "A comprehensive Learning Management System built with Next.js and modern web technologies. Features course management, user authentication with Better-Auth, payment integration with Razorpay, and a scalable architecture with Prisma, PostgreSQL, Redis, and AWS S3.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Better-Auth",
      "Razorpay",
      "Shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "AWS S3",
    ],
    website: "https://ignite-plus-lms.vercel.app/",
    source: "https://github.com/MaheshMoholkar/ignite-plus-lms",
    image: "/ignite-lms.png",
  },
  {
    name: "3D Portfolio",
    status: "Completed",
    date: "2025",
    description:
      "An immersive 3D portfolio website built with React, Vite, and Three.js. Features interactive 3D elements, smooth animations with Framer Motion, modern UI components from Aceternity UI and Magic UI, and a dynamic tech stack showcase.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Three.js",
      "React Three Fiber",
      "Drei",
      "Aceternity UI",
      "Magic UI",
    ],
    website: "https://mahesh-moholkar.vercel.app/",
    source: "https://github.com/MaheshMoholkar/mahesh.moholkar",
    image: "/3d-portfolio.png",
  },
  {
    name: "Dark Blockchain SaaS Website",
    status: "Completed",
    date: "2025",
    description:
      "A blockchain SaaS landing page built with Astro.js and modern web technologies. Also includes blogs section.",
    tech: ["React", "Astro.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    website: "https://blockforge-one.vercel.app/",
    source: "https://github.com/MaheshMoholkar/blockforge",
    image: "/blockforge.png",
  },
  {
    name: "SaaS Landing Page",
    status: "Completed",
    date: "2025",
    description:
      "A modern, responsive SaaS landing page built with React, Next.js, TailwindCSS & Framer Motion. Clean design with smooth animations and professional layout.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    website: "https://light-productivity-app.vercel.app/",
    source: "https://github.com/MaheshMoholkar/landing-page-one",
    image: "/light-productivity.png",
  },

  {
    name: "Dark Theme SaaS Landing Page",
    status: "Completed",
    date: "2025",
    description:
      "A sophisticated dark-themed SaaS landing page with modern UI/UX design. Clean dark interface with smooth animations and professional layout.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    website: "https://dark-productivity-app.vercel.app/",
    source: "https://github.com/MaheshMoholkar/landing-page-two",
    image: "/dark-productivity.png",
  },
  {
    name: "AI SEO Landing Page",
    status: "Completed",
    date: "2025",
    description:
      "An AI-powered SEO landing page with modern design and user testimonials. Clean interface with smooth animations and professional layout.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    website: "https://ai-seo-app-one.vercel.app/",
    source: "https://github.com/MaheshMoholkar/landing-page-three",
    image: "/ai-seo.png",
  },
  {
    name: "Cozy",
    status: "Completed",
    date: "2024",
    description:
      "A modern interior design landing page built with React, Vite, and TailwindCSS. Elegant design with smooth animations and responsive layout.",
    tech: ["React", "Vite", "TypeScript", "TailwindCSS", "Framer Motion"],
    website: "https://cozy-inky.vercel.app/",
    source: "https://github.com/MaheshMoholkar/cozy",
    image: "/cozy.png",
  },
];

const experience = [
  {
    title: "Full Stack Developer",
    company: "Vision",
    date: "Jan 2025 - Aug 2025",
    duration: "8 months",
    location: "Kuwait (Remote)",
    description:
      "Building a comprehensive inventory management system for a Kuwait-based startup. Developing full-stack solutions with modern web technologies to streamline business operations and improve efficiency.",
    tech: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "BitBucket",
      "AWS",
    ],
    link: "#",
    logo: "/vision.png",
  },
  {
    title: "Junior Software Engineer",
    company: "DPU Unitech Foundation",
    date: "Aug 2024 - Aug 2025",
    duration: "1 year",
    location: "Pune, India",
    description:
      "Promoted to Junior Software Engineer. Continuing development of Campus ERP Web App and other internal tools. Optimized API performance and implemented caching strategies. Leading development initiatives and mentoring new team members.",
    tech: ["React", "TypeScript", ".NET", "Redis", "Leadership"],
    link: "https://dypdpu.edu.in",
    logo: "/dpu.png",
  },
  {
    title: "Software Engineer Intern",
    company: "DPU Unitech Foundation",
    date: "Aug 2023 - Aug 2024",
    duration: "1 year",
    location: "Pune, India",
    description:
      "Developed and maintained Campus ERP Web App using React and .NET, serving 2000+ students and faculty across university and colleges. Built chatbot using React, LLAMA, and Golang. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    tech: ["React", "TypeScript", ".NET", "Golang", "LLAMA"],
    link: "https://dypdpu.edu.in",
    logo: "/dpu.png",
  },
  {
    title: "Fellowship",
    company: "Cloud Native Computing Foundation(CNCF)",
    date: "Aug 2023 - Sep 2023",
    duration: "2 months",
    location: "Remote",
    description:
      "Participated in the Zero To Merge Incubation program. Zero to Merge Incubator Program helps communicating with CNCF staff to identify existing problems, collaborate on open GitHub issues, and create Pull Requests(PRs) for approval.",
    tech: ["GitHub", "Open Source", "CNCF"],
    link: "https://www.credly.com/badges/c439e57f-40af-461d-af6f-561de418046f",
    logo: "/cncf.jpeg",
  },
];

const education = [
  {
    degree: "Master's in Computer Application",
    institution: "Dr. D. Y. Patil Institute of Management and Research",
    date: "2022 - 2024",
    location: "Pune India",
    details: "Graduated with 8 CGPA",
  },
  {
    degree: "Bachelor's In Computer Science",
    institution: "B.P .H.E Society's Ahmednagar College",
    date: "2020 - 2022",
    location: "Ahmadnagar, India",
    details: "Graduated with 8.56 CGPA",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "TailwindCSS",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Java",
  "Spring Boot",
  "Golang",
  ".NET",
  "SQL",
  "Redis",
  "Docker",
  "AWS",
  "Git & GitHub",
];

const certificates = [
  {
    title: "Introduction to Web Development",
    issuedBy: "EDX",
    from: "IBM",
    link: "https://courses.edx.org/certificates/8c6839bc8e4240a2a59b3ec2cedb0180",
  },
  {
    title: "Introduction to Linux",
    issuedBy: "EDX",
    from: "IBM",
    link: "https://courses.edx.org/certificates/e5034ac1683444a885d05c8bfe051a3f",
  },
  {
    title: "Meta Back-End Developer",
    issuedBy: "Coursera",
    from: "Meta",
    link: "https://www.coursera.org/account/accomplishments/specialization/ZHWRF7MG4VDG",
  },
  {
    title: "Introduction to Cloud Computing",
    issuedBy: "EDX",
    from: "IBM",
    link: "https://courses.edx.org/certificates/1dfc8f25fa8f4a0b82a788ad76307c21",
  },
  {
    title: "Rust Programming",
    issuedBy: "Coursera",
    from: "Meta",
    link: "https://www.coursera.org/account/accomplishments/specialization/KLANCTJBOT8F",
  },
];

const SOCIALS = [
  {
    href: "mailto:mahesh.moholkar.dev@gmail.com",
    label: "Email",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/maheshmoholkar",
    label: "GitHub",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/mahesh1822",
    label: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/maheshstwt",
    label: "X",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10 pt-20">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-20 text-center md:text-left">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold font-serif text-gray-900"
            >
              MAHESH MOHOLKAR
            </motion.h1>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-semibold text-gray-600"
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm md:text-base text-gray-500 leading-7 max-w-xl"
            >
              Passionate Full Stack Developer with expertise in React, Next.js,
              Node.js, and cloud technologies. Building modern and scalable web
              applications.
            </motion.p>
            <div className="flex gap-4 mt-4">
              {SOCIALS.map((s, index) => (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="inline-block p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-900"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="mailto:mahesh.moholkar.dev@gmail.com"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6 w-fit px-8 py-4 bg-black text-white font-bold uppercase shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-[7px_7px_0px_0px_#6c6c6c] transition-all duration-300"
            >
              Hire Me!
            </motion.a>
          </div>
          {/* Image section */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative group"
            >
              <Image
                src="/profile.png"
                alt="mahesh profile"
                width={400}
                height={400}
                priority
                className="w-[80%] md:w-[400px] object-cover border-[1px] border-black/30 shadow-[7px_7px_0px_0px_#6c6c6c] group-hover:shadow-[10px_10px_0px_0px_#6c6c6c] transition-all duration-300"
              />
              <span className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 text-sm font-bold shadow-[3px_3px_0px_0px_#6c6c6c]">
                Pune, India
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="space-y-2 text-center max-w-[400px] lg:max-w-[500px] mx-auto mb-8 md:mb-12">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold font-serif"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            Building innovative solutions and contributing to cutting-edge
            projects
          </motion.p>
        </div>
        <div className="relative max-w-4xl lg:max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                {exp.link !== "#" ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow relative">
                      <div className="absolute top-4 right-4">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium border border-gray-200">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-8 h-8 rounded-full"
                          width={32}
                          height={32}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <div>
                          <h3 className="font-bold text-lg md:text-xl text-gray-900">
                            {exp.title}
                          </h3>
                          <span className="text-sm text-gray-600 font-semibold">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-sm text-gray-500 font-medium">
                          {exp.date}
                        </span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-400">
                          {exp.location}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span
                            key={tech + i}
                            className="text-xs bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-lg font-medium border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow relative">
                    <div className="absolute top-4 right-4">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium border border-gray-200">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-8 h-8 rounded-full"
                        width={32}
                        height={32}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div>
                        <h3 className="font-bold text-lg md:text-xl text-gray-900">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-gray-600 font-semibold">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-sm text-gray-500 font-medium">
                        {exp.date}
                      </span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-400">
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={tech + i}
                          className="text-xs bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-lg font-medium border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="space-y-2 text-center max-w-[400px] lg:max-w-[500px] mx-auto mb-8 md:mb-12">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold font-serif"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            Academic excellence and continuous learning journey
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl lg:max-w-6xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-base md:text-lg text-gray-600 font-semibold mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  {edu.date} • {edu.location}
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="space-y-2 text-center max-w-[400px] lg:max-w-[500px] mx-auto mb-8 md:mb-12">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold font-serif"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            Innovative solutions and cutting-edge applications
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl lg:max-w-6xl mx-auto">
          {displayedProjects.map((p, index) => (
            <motion.a
              key={p.name}
              href={p.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Preview Area */}
              <div className="w-full h-48 md:h-64 overflow-hidden rounded-t-lg">
                <Image
                  src={p.image}
                  alt={`${p.name} preview`}
                  className="w-full h-full object-cover object-top"
                  width={1200}
                  height={800}
                />
              </div>

              {/* Project Content */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg md:text-xl font-bold font-serif text-gray-900">
                      {p.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {p.status} • {p.date}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((tech, i) => (
                    <span
                      key={tech + i}
                      className="text-xs bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-lg font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors border border-gray-200 hover:border-gray-300 px-3 py-2 rounded-lg hover:shadow-sm">
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(p.source, "_blank", "noopener,noreferrer");
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors border border-gray-200 hover:border-gray-300 px-3 py-2 rounded-lg hover:shadow-sm"
                  >
                    Source Code
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Load More Button */}
        {!showAllProjects && projects.length > 4 && (
          <motion.div
            className="flex justify-center mt-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => setShowAllProjects(true)}
              className="px-8 py-3 bg-black text-white font-bold uppercase shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-[7px_7px_0px_0px_#6c6c6c] transition-all duration-300"
            >
              Load More Projects
            </button>
          </motion.div>
        )}
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="space-y-2 text-center max-w-[400px] lg:max-w-[500px] mx-auto mb-8 md:mb-12">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold font-serif"
          >
            Skills
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            Technical expertise and development tools
          </motion.p>
        </div>
        <motion.div
          className="flex flex-wrap gap-3 md:gap-4 justify-center max-w-4xl lg:max-w-6xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm bg-white text-gray-900 px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow font-medium"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="space-y-2 text-center max-w-[400px] lg:max-w-[500px] mx-auto mb-8 md:mb-12">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold font-serif"
          >
            Certificates
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            Professional certifications and achievements
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl lg:max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="text-lg md:text-xl font-bold font-serif text-gray-900">
                    {cert.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {cert.issuedBy} • {cert.from}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-gray-500 text-sm border-t border-black/30">
        © {new Date().getFullYear()} Mahesh Moholkar
      </footer>
    </main>
  );
}
