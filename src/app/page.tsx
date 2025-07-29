"use client";

import Image from "next/image";
import React from "react";

const projects = [
  {
    name: "trexigo",
    status: "Completed",
    date: "July 2025",
    description:
      "A minimalistic and aesthetic landing page for a modern cab-booking service.",
    tech: ["Next.js", "Typescript", "TailwindCSS"],
    website: "https://trexigo-eta.vercel.app/",
    image: "https://ext.same-assets.com/4260988125/1218533964.png",
  },
  {
    name: "lumina",
    status: "Completed",
    date: "July 2025",
    description:
      "A wallet based portfolio tracker, employing a modern and explosive UI.",
    tech: ["Client Side Solana", "Next.js", "Typescript", "TailwindCSS"],
    website: "https://lumina-portfolio.vercel.app",
    source: "https://github.com/yashvikram30/Lumina",
    image: "https://ext.same-assets.com/4260988125/1664258942.png",
  },
];

const experience = [
  {
    title: "Blockchain Developer Intern",
    company: "Web3 Labs",
    date: "May 2024 - Aug 2024",
    location: "Remote",
    description:
      "Developed and audited smart contracts for DeFi protocols. Improved transaction UX for dApps by integrating gasless meta-transactions.",
    tech: ["Solidity", "Next.js", "Ethers.js", "TailwindCSS"],
  },
  {
    title: "Frontend Developer",
    company: "StartupX",
    date: "Jan 2024 - Apr 2024",
    location: "Bangalore, India",
    description:
      "Built reusable UI components and optimized performance for a SaaS dashboard. Collaborated with designers to deliver pixel-perfect interfaces.",
    tech: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Open Source Contributor",
    company: "Various Projects",
    date: "2023 - Present",
    location: "Remote",
    description:
      "Contributed to open source blockchain and web projects, focusing on accessibility and developer experience.",
    tech: ["Next.js", "Solidity", "GitHub"],
  },
];

const SOCIALS = [
  {
    href: "mailto:yashvikram8250@gmail.com",
    icon: "https://ext.same-assets.com/4260988125/2729621939.svg",
    label: "Email",
  },
  {
    href: "https://github.com/yashvikram30",
    icon: "https://ext.same-assets.com/4260988125/3060812016.svg",
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yashvikram30",
    icon: "https://ext.same-assets.com/4260988125/364427107.svg",
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/100xYash",
    icon: "https://ext.same-assets.com/4260988125/3758228814.svg",
    label: "Twitter",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] text-[#232428] font-sans flex flex-col items-center px-4">
      {/* Hero Section */}
      <section className="w-full max-w-5xl flex md:flex-row flex-col-reverse items-center justify-between gap-12 pt-16 pb-20">
        <div className="flex-1 flex flex-col gap-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#232428] mb-2">
            Yash Vikram
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-[#6d28d9] mb-2">
            Full Stack & Blockchain Developer
          </h2>
          <p className="text-lg text-[#64748b] max-w-xl mb-4">
            I build smart contracts that actually work and Next.js apps that
            users love. Currently obsessed with making blockchain interactions
            as smooth as ordering coffee.
          </p>
          <div className="flex gap-4 mt-2">
            {SOCIALS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-block p-2 rounded-full border border-[#c8cccf]/60 bg-white shadow hover:scale-110 hover:bg-[#ede9fe] transition-transform duration-200"
              >
                <Image src={s.icon} alt={s.label} width={28} height={28} />
              </a>
            ))}
          </div>
          <a
            href="mailto:yashvikram8250@gmail.com"
            className="mt-6 w-fit px-6 py-3 bg-[#6d28d9] text-white rounded-xl font-semibold shadow-lg hover:bg-[#e1c357] hover:text-[#232428] transition-colors text-lg"
          >
            Hire Me!
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center animate-fade-in-up">
          <div className="relative group">
            <Image
              src="https://ext.same-assets.com/4260988125/4129814464.jpeg"
              alt="yash profile"
              width={260}
              height={260}
              className="rounded-3xl border-4 border-[#e1c357] shadow-2xl object-cover"
            />
            <span className="absolute bottom-4 right-4 bg-[#6d28d9] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg opacity-90 group-hover:scale-105 transition-transform">
              India
            </span>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="w-full max-w-5xl mb-20">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-[#232428]">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl border border-[#c8cccf] shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col gap-3 animate-fade-in-up"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-xl object-contain bg-[#f8e3a3] shadow"
                />
                <div>
                  <div className="font-semibold text-xl text-[#232428]">
                    {p.name}
                  </div>
                  <div className="text-xs text-[#6d28d9] font-bold">
                    {p.status} • {p.date}
                  </div>
                </div>
              </div>
              <div className="mt-1 text-base text-[#64748b]">
                {p.description}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.tech.map((tech, i) => (
                  <span
                    key={tech + i}
                    className="text-xs bg-[#ede9fe] text-[#6d28d9] px-2 py-1 rounded-md font-mono shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-3">
                <a
                  href={p.website}
                  className="text-[#43be95] font-semibold hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
                {p.source && (
                  <a
                    href={p.source}
                    className="text-[#e1c357] font-semibold hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-8">
          <a
            href="/projects"
            className="text-[#6d28d9] font-bold underline underline-offset-4 text-base hover:text-[#232428] transition-colors"
          >
            View All Projects
          </a>
        </div>
      </section>
      {/* Experience Timeline */}
      <section id="experience" className="w-full max-w-5xl mb-20">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-[#232428]">
          Experience
        </h2>
        <div className="flex flex-col gap-10 relative border-l-4 border-[#e1c357]/60 pl-10">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative animate-fade-in-up">
              <span className="absolute -left-6 top-2 w-5 h-5 bg-[#e1c357] rounded-full border-4 border-white shadow-lg"></span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold text-lg text-[#232428] leading-snug">
                  {exp.title}
                </span>
                <span className="text-xs text-[#6d28d9] font-bold">
                  {exp.company}
                </span>
                <span className="text-xs text-[#e1c357]">{exp.date}</span>
                <span className="text-xs text-[#64748b]">{exp.location}</span>
              </div>
              <div className="text-base mt-2 mb-1 text-[#64748b]">
                {exp.description}
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {exp.tech.map((tech, i) => (
                  <span
                    key={tech + i}
                    className="text-xs bg-[#ede9fe] text-[#6d28d9] px-2 py-1 rounded-md font-mono shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full max-w-5xl py-8 text-center text-[#97999e] text-sm">
        © {new Date().getFullYear()} Yash Vikram. Built with Next.js &
        TailwindCSS.
      </footer>
      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </main>
  );
}
