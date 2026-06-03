"use client";

import { useCallback, useState } from "react";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { IntroNameRitual } from "@/components/IntroNameRitual";
import { PathSelector } from "@/components/PathSelector";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { ThemeBackground } from "@/components/ThemeBackground";
import type { PathName } from "@/data/paths";

export default function HomePage() {
  const [selectedPath, setSelectedPath] = useState<PathName>("All");
  const [heroReady, setHeroReady] = useState(false);

  const handleIntroComplete = useCallback(() => setHeroReady(true), []);

  const openResumeModal = useCallback(() => {
    window.dispatchEvent(new Event("open-resume-modal"));
  }, []);

  return (
    <>
      <IntroNameRitual onComplete={handleIntroComplete} />
      <ThemeBackground selectedPath={selectedPath}>
        <section id="hero">
          <Hero selectedPath={selectedPath} onResumeClick={openResumeModal} animate={heroReady} />
        </section>
        <AboutSection />
        <section id="projects" className="scroll-mt-24">
          <PathSelector selectedPath={selectedPath} onSelect={setSelectedPath} />
          <ProjectGrid selectedPath={selectedPath} />
        </section>
        <SkillsSection />
        <ContactSection />
      </ThemeBackground>
    </>
  );
}
