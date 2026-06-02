"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ResumeModal } from "./ResumeModal";

type NavLink =
  | { id: string; label: string; isResume?: false }
  | { label: string; isResume: true };

const links: NavLink[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { label: "Resume", isResume: true },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = ["hero", "projects", "skills", "about", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (!section) {
      window.location.href = `/#${id}`;
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#f5d76e]/10 bg-black/55 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 text-white md:flex-row md:items-center md:justify-between md:py-4">
          <Link href="/" className="text-sm font-semibold tracking-wide transition hover:text-[#f5d76e]">
            Yajat Mehta
          </Link>
          <div className="flex max-w-full items-center gap-5 overflow-x-auto pb-1 text-sm text-slate-300 md:gap-6 md:overflow-visible md:pb-0">
            {links.map((link) =>
              link.isResume ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => setResumeModalOpen(true)}
                  className="group relative transition hover:text-[#f5d76e]"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#d4af37] transition-[width] duration-300 group-hover:w-full" />
                </button>
              ) : (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  aria-current={activeSection === link.id ? "page" : undefined}
                  className={`group relative transition hover:text-[#f5d76e] ${
                    activeSection === link.id ? "text-[#f5d76e]" : ""
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#d4af37] transition-[width] duration-300 ${
                      activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ),
            )}
          </div>
        </nav>
      </header>
      <ResumeModal open={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}
