"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

type ResumeOption = {
  label: string;
  hint: string;
  href: string;
};

const targetedResumes: ResumeOption[] = [
  {
    label: "Analytics & BI",
    hint: "Dashboards, SQL, Tableau, healthcare, finance, and data warehousing.",
    href: "/resumes/data.pdf",
  },
  {
    label: "AI & Machine Learning",
    hint: "Python, machine learning, NLP, agents, cloud ML, and applied AI systems.",
    href: "/resumes/ai.pdf",
  },
  {
    label: "Product & Systems",
    hint: "Full-stack systems, backend architecture, app logic, workflows, and system design.",
    href: "/resumes/general.pdf",
  },
  {
    label: "Security & Risk",
    hint: "GRC, trust and safety, authentication, access control, privacy, and risk mitigation.",
    href: "/resumes/cyber.pdf",
  },
  {
    label: "Business Strategy",
    hint: "Market analysis, competitive strategy, platform trust, operations, and recommendations.",
    href: "/resumes/general.pdf",
  },
  {
    label: "Founder Projects",
    hint: "Startups, product vision, execution, leadership, and go-to-market thinking.",
    href: "/resumes/startup.pdf",
  },
  {
    label: "Emerging Tech / Defense Adjacent",
    hint: "AI systems, secure backend thinking, intelligence analysis, cloud pipelines, and risk frameworks.",
    href: "/resumes/defence.pdf",
  },
];

const masterResume: ResumeOption = {
  label: "Master Resume",
  hint: "Full project inventory across analytics, AI, product, strategy, cybersecurity, and emerging tech.",
  href: "/resumes/master.pdf",
};

function ResumeOptionCard({ option, featured = false }: { option: ResumeOption; featured?: boolean }) {
  return (
    <a
      href={option.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex min-h-28 items-start justify-between gap-4 rounded-2xl border p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-[#f5d76e]/35 hover:bg-[#d4af37]/10 hover:shadow-[0_0_48px_rgba(212,175,55,0.12)] ${
        featured ? "border-[#f5d76e]/25 bg-[#d4af37]/10" : "border-[#f5d76e]/12 bg-white/[0.035]"
      }`}
    >
      <span>
        <span className="block text-sm font-semibold text-white md:text-base">{option.label}</span>
        <span className="mt-2 block text-sm leading-6 text-slate-300">{option.hint}</span>
      </span>
      <ArrowUpRight className="mt-1 shrink-0 text-[#d4af37] opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100" size={18} />
    </a>
  );
}

export function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[1.75rem] border border-[#f5d76e]/18 bg-[#070707]/95 p-5 text-white shadow-2xl shadow-[#d4af37]/12 md:p-7"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume selector"
              className="absolute right-4 top-4 rounded-full border border-[#f5d76e]/15 bg-white/5 p-2 text-slate-300 transition hover:border-[#f5d76e]/35 hover:bg-[#d4af37]/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="pr-10">
              <h2 id="resume-modal-title" className="text-3xl font-semibold tracking-tight md:text-4xl">
                Choose a resume
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
                Select the version most relevant to what you want to see.
              </p>
            </div>

            <motion.div
              className="mt-6 grid gap-3 md:grid-cols-2"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            >
              {targetedResumes.map((option) => (
                <motion.div
                  key={option.label}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <ResumeOptionCard option={option} />
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-4 border-t border-white/10 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <ResumeOptionCard option={masterResume} featured />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
