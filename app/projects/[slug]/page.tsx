import Link from "next/link";
import { notFound } from "next/navigation";
import { Code2, PlayCircle, ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { ThemeBackground } from "@/components/ThemeBackground";
import { SkillPill } from "@/components/SkillPill";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const appLinkReady = Boolean(project.appUrl && project.appUrl !== "#");

  return (
    <ThemeBackground selectedPath={project.paths[0]}>
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-32">
        <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold opacity-75 transition hover:opacity-100">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.paths.map((path) => (
            <span key={path} className="rounded-full border border-current/15 px-3 py-1 text-xs opacity-80">{path}</span>
          ))}
        </div>

        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 opacity-75">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.appUrl &&
            (appLinkReady ? (
              <a href={project.appUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"><ArrowUpRight size={16} /> View App</a>
            ) : (
              <button type="button" disabled className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-current/15 px-5 py-3 text-sm font-semibold opacity-70"><ArrowUpRight size={16} /> App Link Coming Soon</button>
            ))}
          {project.videoUrl && <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"><PlayCircle size={16} /> Demo video</a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-current/15 px-5 py-3 text-sm font-semibold"><Code2 size={16} />GitHub</a>}
        </div>

        <section className="mt-12 rounded-[2rem] border border-current/15 bg-current/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="mt-3 leading-7 opacity-75">This case study should explain the real-world problem, why it mattered, and what decision or workflow was broken before the project existed.</p>
        </section>

        <section className="mt-6 rounded-[2rem] border border-current/15 bg-current/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">What I built</h2>
          <p className="mt-3 leading-7 opacity-75">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => <SkillPill key={item}>{item}</SkillPill>)}
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-current/15 bg-current/5 p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Key decisions</h2>
            <ul className="mt-4 space-y-3 opacity-75">
              {project.decisions.map((decision) => <li key={decision}>• {decision}</li>)}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-current/15 bg-current/5 p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Result</h2>
            <p className="mt-4 leading-7 opacity-75">{project.result}</p>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-current/15 bg-current/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Architecture / workflow</h2>
          <div className="mt-5 rounded-2xl border border-current/15 bg-black/20 p-5 font-mono text-sm leading-7 opacity-85">
            User / Dataset → Processing Layer → Analysis / Model / Backend Logic → Output → Decision
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-current/15 bg-current/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">What I learned</h2>
          <p className="mt-3 leading-7 opacity-75">Replace this section with a sharper personal reflection: trade-offs, mistakes, constraints, and what you would improve in version 2.</p>
        </section>
      </main>
    </ThemeBackground>
  );
}
