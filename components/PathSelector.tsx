"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { pathThemes, paths, type PathName } from "@/data/paths";

export function PathSelector({ selectedPath, onSelect }: { selectedPath: PathName; onSelect: (path: PathName) => void }) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[1.75rem] border border-[#f5d76e]/15 bg-[#101010]/70 px-5 py-6 text-center shadow-[0_0_70px_rgba(212,175,55,0.08)] backdrop-blur md:px-8 md:py-7"
      >
        <p className="mb-5 text-base font-semibold opacity-80 md:text-lg">Explore my work through different lenses.</p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {paths.map((path) => {
            const active = selectedPath === path;
            const filterTheme = pathThemes[path];
            return (
              <button
                key={path}
                onClick={() => onSelect(path)}
                style={{
                  "--filter-accent": filterTheme.accentColor,
                  "--filter-soft": filterTheme.accentSoft,
                  "--filter-glow": filterTheme.accentGlow,
                  "--filter-border": filterTheme.accentBorder,
                } as CSSProperties}
                className={`relative rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 md:px-6 md:text-base ${
                  active
                    ? "border-[var(--accent-border)] text-[var(--accent-soft)] shadow-[0_0_42px_var(--accent-glow)]"
                    : "border-[#f5d76e]/15 text-slate-300 hover:border-[var(--filter-border)] hover:text-[var(--filter-soft)]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="activePath"
                    className="absolute inset-0 rounded-full bg-[var(--accent)]/12"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{path}</span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
