"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import type { PathName } from "@/data/paths";
import { ProjectCard } from "./ProjectCard";
import { ChapterLabel } from "./ChapterLabel";

export function ProjectGrid({ selectedPath, featuredOnly = false }: { selectedPath: PathName; featuredOnly?: boolean }) {
  const visibleProjects = useMemo(
    () =>
      projects.filter((project) => {
        const pathMatch = selectedPath === "All" || project.paths.includes(selectedPath as never);
        const featuredMatch = !featuredOnly || project.featured;
        return pathMatch && featuredMatch;
      }),
    [featuredOnly, selectedPath],
  );

  return (
    <section className="mx-auto max-w-7xl px-5 py-14">
      <motion.div
        key={`heading-${selectedPath}`}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
      >
        <div>
          <ChapterLabel number="02" label="Proof" />
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">Latest Projects</h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-70" />
        </div>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence initial={false}>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} selectedPath={selectedPath} index={Math.min(index, 5)} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
