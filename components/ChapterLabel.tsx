"use client";

import { motion } from "framer-motion";
import { EASE } from "./motionPresets";

export function ChapterLabel({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: EASE }}
      className="mb-4 flex items-center gap-3"
    >
      <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-600">{number}</span>
      <span className="h-px w-5 bg-[var(--accent)] opacity-35" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--accent-soft)]">{label}</span>
    </motion.div>
  );
}
