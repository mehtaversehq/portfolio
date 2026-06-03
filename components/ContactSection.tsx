"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Code2, Link, Mail } from "lucide-react";
import { ChapterLabel } from "./ChapterLabel";

function XLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const cardClass =
  "rounded-3xl border border-[color-mix(in_srgb,var(--accent)_15%,transparent)] bg-[#101010]/78 p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_12px_42px_var(--accent-glow)]";

function ContactSectionComponent() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <ChapterLabel number="04" label="Contact" />
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Let&apos;s make the proof easy to inspect.</h2>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Reach me directly by email, or follow the build in public on X and explore my work through GitHub and LinkedIn.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <a href="mailto:official.yajatmehta@gmail.com" className={cardClass}>
            <Mail className="mb-4 text-[var(--accent)]" /> Email
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className={cardClass}>
            <span className="mb-4 block text-[var(--accent)]"><XLogo /></span> X
          </a>
          <a href="https://github.com/mehtaversehq" target="_blank" rel="noreferrer" className={cardClass}>
            <Code2 className="mb-4 text-[var(--accent)]" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/yajat-mehta/" target="_blank" rel="noreferrer" className={cardClass}>
            <Link className="mb-4 text-[var(--accent)]" /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export const ContactSection = memo(ContactSectionComponent);
