"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Code2, Link, Mail } from "lucide-react";

function ContactSectionComponent() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm font-medium text-[var(--accent-soft)]">Contact</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Let&apos;s make the proof easy to inspect.</h2>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Reach me directly by email, or explore my work and professional profile through GitHub and LinkedIn.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a href="mailto:official.yajatmehta@gmail.com" className="rounded-3xl border border-[color-mix(in_srgb,var(--accent)_15%,transparent)] bg-[#101010]/78 p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_12px_42px_var(--accent-glow)]">
            <Mail className="mb-4 text-[var(--accent)]" /> Email
          </a>
          <a href="https://github.com/mehtaversehq" target="_blank" rel="noreferrer" className="rounded-3xl border border-[color-mix(in_srgb,var(--accent)_15%,transparent)] bg-[#101010]/78 p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_12px_42px_var(--accent-glow)]">
            <Code2 className="mb-4 text-[var(--accent)]" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/yajat-mehta/" target="_blank" rel="noreferrer" className="rounded-3xl border border-[color-mix(in_srgb,var(--accent)_15%,transparent)] bg-[#101010]/78 p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_12px_42px_var(--accent-glow)]">
            <Link className="mb-4 text-[var(--accent)]" /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export const ContactSection = memo(ContactSectionComponent);
