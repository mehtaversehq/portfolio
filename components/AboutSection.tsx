"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { ChapterLabel } from "./ChapterLabel";

function AboutSectionComponent() {
  return (
    <section id="about" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <ChapterLabel number="01" label="About" />
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
          A builder shaped by range, curiosity, and motion.
        </h2>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          I am Yajat Mehta from Delhi, India, and a graduate of Arizona State University with two bachelor&apos;s degrees:
          Business Data Analytics and Artificial Intelligence in Business.
        </p>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          My work spans analytics, AI, machine learning, product systems, and startup building. I am building my own
          startups and projects, using this portfolio as a way to make that range easy to inspect.
        </p>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          I am active on X and interested in building and learning in public. Outside the technical work, I like anime,
          sports, gaming, language and culture, and building things from rough ideas into real systems.
        </p>
        <button
          type="button"
          onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          className="mt-8 inline-flex rounded-full border border-[var(--accent-border)] bg-[#101010]/70 px-5 py-3 text-sm font-semibold text-[var(--accent-soft)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] hover:shadow-[0_0_55px_var(--accent-glow)]"
        >
          View Skills & Certifications
        </button>
      </motion.div>
    </section>
  );
}

export const AboutSection = memo(AboutSectionComponent);
