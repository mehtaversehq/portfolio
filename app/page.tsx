"use client";

import { useState } from "react";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { PathSelector } from "@/components/PathSelector";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ResumeModal } from "@/components/ResumeModal";
import { SkillsSection } from "@/components/SkillsSection";
import { ThemeBackground } from "@/components/ThemeBackground";
import type { PathName } from "@/data/paths";

export default function HomePage() {
  const [selectedPath, setSelectedPath] = useState<PathName>("All");
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <ThemeBackground selectedPath={selectedPath}>
      <section id="hero">
        <Hero selectedPath={selectedPath} onResumeClick={() => setResumeModalOpen(true)} />
      </section>
      <AboutSection />
      <section id="projects" className="scroll-mt-24">
        <PathSelector selectedPath={selectedPath} onSelect={setSelectedPath} />
        <ProjectGrid selectedPath={selectedPath} />
      </section>
      <SkillsSection />
      <ContactSection />
      <ResumeModal open={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </ThemeBackground>
  );
}
