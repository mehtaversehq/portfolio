"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { pathThemes, type PathName } from "@/data/paths";
import { TypingIdentity } from "./TypingIdentity";
import { EASE, fadeUp } from "./motionPresets";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `/#${id}`);
  } else {
    window.location.href = `/#${id}`;
  }
}

export function Hero({
  selectedPath,
  onResumeClick,
  animate = true,
}: {
  selectedPath: PathName;
  onResumeClick: () => void;
  animate?: boolean;
}) {
  const theme = pathThemes[selectedPath];
  const shouldReduceMotion = useReducedMotion();

  // Portrait tilt — desktop + no reduced-motion only
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [7, -7]), {
    stiffness: 200,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 200,
    damping: 28,
  });

  function handlePortraitMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handlePortraitLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <section className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-5 pb-20 pt-28 md:grid-cols-[1.15fr_0.85fr]">
      {/* Large watermark */}
      <div className="pointer-events-none absolute top-12 left-0 hidden select-none text-[7rem] font-semibold leading-none tracking-[0.18em] text-[var(--accent)] opacity-[0.035] md:top-16 md:block md:text-[12rem]">
        YAJAT
      </div>

      {/* Left: text content */}
      <motion.div
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        className="relative"
      >
        {/* Greeting pill */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.62, ease: EASE }}
          className="mb-6 inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[#151515]/75 px-5 py-2.5 text-base font-semibold shadow-[0_0_46px_var(--accent-glow)] backdrop-blur md:text-xl"
        >
          <span className={theme.muted}>Hey, I&apos;m&nbsp;</span>
          <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.accent}`}>Yajat.</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.68, ease: EASE }}
          className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight md:text-6xl"
        >
          I build data, AI, and product systems from messy ideas to working proof.
        </motion.h1>

        {/* Typing identity */}
        <motion.div variants={fadeUp} transition={{ duration: 0.58, ease: EASE }}>
          <TypingIdentity accentClassName={theme.accent} />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.58, ease: EASE }}
          className={`mt-6 max-w-2xl text-lg leading-8 ${theme.muted}`}
        >
          Business Data Analytics and Artificial Intelligence in Business graduate from Arizona State University,
          focused on analytics, machine learning, backend systems, product strategy, and security-aware design.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.58, ease: EASE }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black shadow-[0_0_60px_var(--accent-glow)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-soft)] hover:shadow-[0_0_70px_var(--accent-glow)]"
          >
            Explore My Work <ArrowRight className="transition group-hover:translate-x-0.5" size={16} />
          </button>
          <button
            type="button"
            onClick={onResumeClick}
            className="group inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_18%,transparent)] bg-[#101010]/40 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-border)] hover:bg-[#181818]/70 hover:shadow-[0_0_55px_var(--accent-glow)]"
          >
            Download Resume <Download size={16} />
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="group inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_18%,transparent)] bg-[#101010]/40 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-border)] hover:bg-[#181818]/70 hover:shadow-[0_0_55px_var(--accent-glow)]"
          >
            Contact Me <Mail size={16} />
          </button>
        </motion.div>

        {/* Filter hint */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-5 text-xs text-zinc-500"
        >
          Filter projects by what you&apos;re hiring for&nbsp;↓
        </motion.p>
      </motion.div>

      {/* Right: portrait with tilt */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.65, ease: EASE }}
        className="relative hidden md:block"
        style={{ perspective: 900 }}
        onMouseMove={handlePortraitMove}
        onMouseLeave={handlePortraitLeave}
      >
        <motion.div
          style={shouldReduceMotion ? {} : { rotateX, rotateY }}
          className="relative"
        >
          <div className={`absolute -inset-4 rounded-[3rem] bg-gradient-to-br ${theme.accent} opacity-16 blur-2xl`} />
          <div
            className={`relative overflow-hidden rounded-[2rem] border ${theme.border} ${theme.card} p-4 shadow-2xl transition duration-500 hover:border-[var(--accent-border)] hover:shadow-[0_0_80px_var(--accent-glow)]`}
          >
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
      </motion.div>

      {/* Portrait on mobile (no tilt) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.65, ease: EASE }}
        className="relative md:hidden"
      >
        <div className={`absolute -inset-4 rounded-[3rem] bg-gradient-to-br ${theme.accent} opacity-16 blur-2xl`} />
        <div
          className={`relative overflow-hidden rounded-[2rem] border ${theme.border} ${theme.card} p-4 shadow-2xl`}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-current/10 bg-gradient-to-br from-white/25 to-white/5">
            <Image
              src="/images/yajat-mehta.jpeg"
              alt="Yajat Mehta"
              fill
              priority
              sizes="90vw"
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-zinc-600">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-5 w-px bg-gradient-to-b from-zinc-600 to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}
