"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SkillPill } from "./SkillPill";
import { ChapterLabel } from "./ChapterLabel";

const skillCategories = [
  { title: "Analytics & BI", skills: ["Data Analysis", "Analytical Skills", "Tableau", "Power BI", "Advanced Excel", "PivotTables", "Dashboarding", "Data Visualization", "Data Mining", "Data Governance", "Healthcare Analytics", "Bias Analysis", "Location Analysis"] },
  { title: "Programming & Querying", skills: ["Python", "SQL", "JavaScript", "TypeScript", "HTML", "CSS", "Swift"] },
  { title: "AI & Machine Learning", skills: ["Machine Learning", "Scikit-learn", "TensorFlow", "PyTorch", "NLP", "RAG", "Text Classification", "Word2Vec", "Random Forest", "Logistic Regression", "GridSearchCV", "Recommender Systems", "Feature Engineering"] },
  { title: "Cloud & Big Data", skills: ["Google Cloud Platform", "Google Cloud Storage", "PySpark", "Spark ML", "AWS Machine Learning Foundations", "Cloud ML Pipelines"] },
  { title: "Backend & Product Systems", skills: ["FastAPI", "Flask", "Supabase", "PostgreSQL", "Redis", "REST APIs", "Google OAuth", "Docker", "Postman", "React Native", "Expo"] },
  { title: "Systems, Modeling & Data Warehousing", skills: ["SDLC", "Requirements Analysis", "Use Cases", "DFDs", "ERDs", "Schema Design", "Dimensional Modeling", "Star Schema", "Snowflake Schema", "Data Warehousing"] },
  { title: "Security, Risk & Governance", skills: ["Authentication Architecture", "OAuth 2.0", "Token Management", "Role-Based Access Control", "Session Control", "Data Privacy", "FERPA-aware Documentation", "COBIT", "ISO 27001", "NIST CSF", "BCP/DRP", "Risk Mitigation Planning", "Compliance Frameworks"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Google Colab", "Figma", "Xcode", "Postman", "Docker"] },
];

const certifications = [
  {
    title: "AWS Academy Graduate - Machine Learning for Natural Language Processing - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    credentialId: "875c20a5-ffff-4d25-9375-8045a183a24b",
    focus: ["Machine Learning", "Natural Language Processing", "Text Classification", "AWS ML concepts"],
    credentialUrl: "https://www.credly.com/badges/875c20a5-ffff-4d25-9375-8045a183a24b/public_url",
  },
  {
    title: "Data Analytics - Tableau",
    issuer: "The Global Career Accelerator",
    issued: "May 2024",
    focus: ["Tableau", "Data Visualization", "Dashboarding", "Business Intelligence"],
    credentialUrl: "https://www.credential.net/63b6a260-8590-4938-a20b-901cf8481f1d#acc.1qKCtUOp",
  },
  {
    title: "AWS Academy Graduate - Machine Learning Foundations - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    issued: "Mar 2026",
    credentialId: "9d24e506-e688-4639-ae45-bcf3694d378e",
    focus: ["Machine Learning Foundations", "Model Training", "ML Concepts", "Applied AI"],
    credentialUrl: "https://www.credly.com/earner/earned/badge/9d24e506-e688-4639-ae45-bcf3694d378e",
  },
  {
    title: "Data Analytics - Excel",
    issuer: "The Global Career Accelerator",
    issued: "Mar 2024",
    credentialId: "97313781",
    focus: ["Excel", "Data Analysis", "Analytical Skills", "PivotTables", "Reporting"],
    credentialUrl: "https://www.credential.net/98afaea9-49f5-44b8-9759-22d0ab49f84b#acc.eXJ4r90G",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.46, ease: easeOut } },
};


function SkillsSectionComponent() {
  return (
    <section id="skills" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.58, ease: easeOut }}
        className="max-w-4xl"
      >
        <ChapterLabel number="03" label="Skills" />
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Skills & Certifications</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
          Tools, technologies, and credentials behind my work across data, AI, product systems, and security-aware design.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {skillCategories.map((category) => (
          <motion.article
            key={category.title}
            variants={card}
            className="rounded-[1.5rem] border border-[color-mix(in_srgb,var(--accent)_15%,transparent)] bg-[#101010]/78 p-5 shadow-lg shadow-black/25 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_12px_42px_var(--accent-glow)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-soft)]">{category.title}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillPill key={skill}>{skill}</SkillPill>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <ChapterLabel number="03.1" label="Credentials" />
          <h3 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">Certifications</h3>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            Credentials supporting my work in machine learning, NLP, Tableau, Excel, and applied data analytics.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 grid gap-5 md:grid-cols-2"
        >
          {certifications.map((certification) => (
            <motion.article
              key={certification.title}
              variants={card}
                className="rounded-[1.5rem] border border-[color-mix(in_srgb,var(--accent)_15%,transparent)] bg-[#101010]/78 p-5 shadow-lg shadow-black/25 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_12px_42px_var(--accent-glow)]"
            >
              <h4 className="text-xl font-semibold tracking-tight">{certification.title}</h4>
              <p className="mt-3 text-sm text-zinc-400">Issuer: {certification.issuer}</p>
              {certification.issued && <p className="mt-1 text-sm text-zinc-400">Issued: {certification.issued}</p>}
              {certification.credentialId && (
                <p className="mt-3 break-all rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-zinc-500">
                  Credential ID: {certification.credentialId}
                </p>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {certification.focus.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-4 py-2 text-sm font-semibold text-[var(--accent-soft)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--accent)_16%,transparent)] hover:shadow-[0_0_42px_var(--accent-glow)]"
              >
                View Credential <ArrowUpRight size={15} />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export const SkillsSection = memo(SkillsSectionComponent);
