"use client";

import { memo } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Code2, PlayCircle, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { SkillPill } from "./SkillPill";
import { pathThemes, type PathName } from "@/data/paths";
import { EASE } from "./motionPresets";

function ProjectCardComponent({ project, selectedPath, index = 0 }: { project: Project; selectedPath: PathName; index?: number }) {
  const theme = pathThemes[selectedPath];
  const shouldReduceMotion = useReducedMotion();
  const appLinkReady = Boolean(project.appUrl && project.appUrl !== "#");

  // Hover tilt
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [5, -5]), { stiffness: 220, damping: 30 });
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-5, 5]), { stiffness: 220, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  const thumbnail = project.thumbnailUrl ? (
    <Image
      src={project.thumbnailUrl}
      alt={`${project.title} preview`}
      fill
      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      className="bg-white object-contain transition duration-500 group-hover:scale-[1.03]"
    />
  ) : (
    <div className="relative flex h-full items-end justify-between rounded-2xl bg-black/30 p-4">
      <span className="text-xs opacity-70">Demo thumbnail</span>
      <PlayCircle className="text-[var(--accent)] opacity-70 transition duration-300 group-hover:scale-110 group-hover:opacity-100" size={28} />
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.34, delay: index * 0.035, ease: EASE }}
      style={shouldReduceMotion ? {} : { rotateX, rotateY, perspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group [contain:content] rounded-[1.75rem] border ${theme.border} ${theme.card} p-5 shadow-lg shadow-black/25 transition-[border-color,box-shadow] duration-300 hover:border-[var(--accent-border)] hover:shadow-[0_12px_42px_var(--accent-glow)]`}
    >
      {/* Thumbnail */}
      <div className="relative mb-5 aspect-video overflow-hidden rounded-[1.25rem] border border-[color-mix(in_srgb,var(--accent)_14%,transparent)] bg-gradient-to-br from-[color-mix(in_srgb,var(--accent)_12%,transparent)] to-transparent">
        <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(115deg,transparent,color-mix(in_srgb,var(--accent-soft)_20%,transparent),transparent)] transition-transform duration-700 group-hover:translate-x-[120%]" />
        {project.thumbnailLinkUrl ? (
          <a href={project.thumbnailLinkUrl} target="_blank" rel="noreferrer" aria-label={`Watch ${project.title} video`} className="absolute inset-0 block">
            {thumbnail}
            <span className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-[var(--accent)] ring-1 ring-white/15 backdrop-blur transition duration-300 group-hover:scale-105 group-hover:bg-black/85">
              <PlayCircle size={24} />
            </span>
          </a>
        ) : (
          thumbnail
        )}
      </div>

      {/* Path tags */}
      <div className="mb-3 flex flex-wrap gap-2">
        {project.paths.map((path) => (
          <span key={path} className="rounded-full border border-[color-mix(in_srgb,var(--accent)_18%,transparent)] px-2.5 py-1 text-[11px] text-zinc-300 opacity-75 transition group-hover:border-[var(--accent-border)] group-hover:text-[var(--accent-soft)] group-hover:opacity-100">
            {path}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className={`mt-2 text-sm leading-6 ${theme.muted}`}>{project.summary}</p>

      {/* Result + decisions */}
      {(project.result || project.decisions?.length) && (
        <div className="mt-3 space-y-1.5 border-t border-white/5 pt-3">
          {project.result && (
            <p className="text-xs leading-5 text-zinc-500">
              <span className="font-medium text-[var(--accent-soft)]">↳ </span>
              {project.result}
            </p>
          )}
          {project.decisions?.slice(0, 3).map((d) => (
            <p key={d} className="flex items-start gap-1.5 text-xs leading-5 text-zinc-600">
              <span className="mt-px shrink-0 text-[var(--accent-soft)] opacity-40">—</span>
              {d}
            </p>
          ))}
        </div>
      )}

      {/* Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((item) => (
          <SkillPill key={item}>{item}</SkillPill>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
        {project.appUrl &&
          (appLinkReady ? (
            <a href={project.appUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-black transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[var(--accent-soft)]">
              View App <ArrowUpRight size={15} />
            </a>
          ) : (
            <button type="button" disabled className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_18%,transparent)] px-4 py-2 text-zinc-400 opacity-75">
              App Link Coming Soon <ArrowUpRight size={15} />
            </button>
          ))}
        {project.videoUrl && (
          <a href={project.videoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_18%,transparent)] px-4 py-2 transition-colors hover:border-[var(--accent-border)] hover:bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]">
            Demo <PlayCircle size={15} />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_18%,transparent)] px-4 py-2 transition-colors hover:border-[var(--accent-border)] hover:bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]">
            <Code2 size={15} />
          </a>
        )}
        {!project.hideCaseStudyLink && project.caseStudyUrl ? (
          <a href={project.caseStudyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-black transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[var(--accent-soft)]">
            Case Study <ArrowUpRight size={15} />
          </a>
        ) : !project.hideCaseStudyLink ? (
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-black transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[var(--accent-soft)]">
            Case Study <ArrowUpRight size={15} />
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}

export const ProjectCard = memo(ProjectCardComponent);
