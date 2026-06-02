"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { pathThemes, type PathName } from "@/data/paths";
import { TypingIdentity } from "./TypingIdentity";

export function Hero({ selectedPath, onResumeClick }: { selectedPath: PathName; onResumeClick: () => void }) {
  const theme = pathThemes[selectedPath];
  const reveal = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative mx-auto grid min-h-[84vh] max-w-7xl items-center gap-10 px-5 pb-12 pt-28 md:grid-cols-[1.15fr_0.85fr]">
      <div className="pointer-events-none absolute top-12 left-0 hidden select-none text-[7rem] font-semibold leading-none tracking-[0.18em] text-[var(--accent)] opacity-[0.035] md:top-16 md:block md:text-[12rem]">
        YAJAT
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="relative"
      >
        <motion.div
          variants={reveal}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[#151515]/75 px-5 py-2.5 text-base font-semibold shadow-[0_0_46px_var(--accent-glow)] backdrop-blur md:text-xl"
        >
          <span className={theme.muted}>Hey, I&apos;m&nbsp;</span>
          <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.accent}`}>Yajat.</span>
        </motion.div>
        <motion.h1
          variants={reveal}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight md:text-6xl"
        >
          I build data, AI, and product systems from messy ideas to working proof.
        </motion.h1>
        <motion.div variants={reveal} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}>
          <TypingIdentity accentClassName={theme.accent} />
        </motion.div>
        <motion.p
          variants={reveal}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-6 max-w-2xl text-lg leading-8 ${theme.muted}`}
        >
          Business Data Analytics and Artificial Intelligence in Business graduate from Arizona State University, focused on analytics, machine learning, backend systems, product strategy, and security-aware design.
        </motion.p>
        <motion.div variants={reveal} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-8 flex flex-wrap gap-3">
          <Link href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black shadow-[0_0_60px_var(--accent-glow)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-soft)] hover:shadow-[0_0_70px_var(--accent-glow)]">
            Explore My Work <ArrowRight className="transition group-hover:translate-x-0.5" size={16} />
          </Link>
          <button type="button" onClick={onResumeClick} className="group inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_18%,transparent)] bg-[#101010]/40 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-border)] hover:bg-[#181818]/70 hover:shadow-[0_0_55px_var(--accent-glow)]">
            Download Resume <Download size={16} />
          </button>
          <Link href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_18%,transparent)] bg-[#101010]/40 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-border)] hover:bg-[#181818]/70 hover:shadow-[0_0_55px_var(--accent-glow)]">
            Contact Me <Mail size={16} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65 }} className="relative">
        <div className={`absolute -inset-4 rounded-[3rem] bg-gradient-to-br ${theme.accent} opacity-16 blur-2xl`} />
        <div className={`relative overflow-hidden rounded-[2rem] border ${theme.border} ${theme.card} p-4 shadow-2xl transition duration-500 hover:border-[var(--accent-border)] hover:shadow-[0_0_80px_var(--accent-glow)]`}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-current/10 bg-gradient-to-br from-white/25 to-white/5">
            <Image
              src="/images/yajat-mehta.jpeg"
              alt="Yajat Mehta"
              fill
              priority
              sizes="(min-width: 768px) 38vw, 90vw"
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
