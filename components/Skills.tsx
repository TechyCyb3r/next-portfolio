"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import skillsData from "../data/skills";
import SectionHeader from "./SectionHeader";

type SkillCategory = (typeof skillsData)[number];

const Skills = () => {
  const [activeTitle, setActiveTitle] = useState(skillsData[1]?.title || skillsData[0].title);

  const activeCategory = useMemo<SkillCategory>(
    () => skillsData.find((category) => category.title === activeTitle) || skillsData[0],
    [activeTitle],
  );

  return (
    <section id="skills" className="section-spacing section-shell">
      <div className="page-container">
        <SectionHeader
          kicker="Skills"
          title="React, Next.js, MERN and Full Stack Development Skills"
          subtitle="A focused technical stack covering frontend development, backend development, JavaScript, TypeScript, Tailwind CSS, Node.js, MongoDB, and modern React workflows."
        />

        <div className="section-body">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
            {skillsData.map((category) => {
              const isActive = activeCategory.title === category.title;
              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => setActiveTitle(category.title)}
                  className={`group flex min-h-22 min-w-0 flex-col items-center justify-center gap-2 rounded-2xl border px-2 py-3 text-center transition sm:min-h-24 sm:gap-3 sm:px-3 sm:py-4 ${
                    isActive
                      ? "border-ocean-primary bg-ocean-primary/15 text-white shadow-[0_0_32px_rgba(124,102,227,0.18)]"
                      : "border-white/10 bg-white/5 text-ocean-muted hover:border-ocean-primary/40 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <img src={category.icon} alt="" className="size-6 object-contain sm:size-7" />
                  <span className="max-w-full text-[11px] leading-tight font-bold break-words sm:text-sm">{category.title}</span>
                </button>
              );
            })}
          </div>

          <div className="mx-auto mt-8 max-w-5xl rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 sm:p-6">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ocean-primary">Selected</p>
                <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">{activeCategory.title}</h3>
              </div>
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-ocean-muted">
                {activeCategory.skills.length} skills
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.24 }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
              >
                {activeCategory.skills.map((item) => (
                  <div
                    key={item.skill}
                    className="group flex min-h-22 min-w-0 items-center gap-2 rounded-2xl border border-white/10 bg-ocean-card/70 p-2.5 transition hover:-translate-y-1 hover:border-ocean-primary/35 hover:bg-ocean-card sm:min-h-24 sm:gap-3 sm:p-4"
                  >
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-2xl sm:size-12"
                      style={{ backgroundColor: `${item.color}22` }}
                    >
                      <img src={item.icon} alt="" className="size-6 object-contain sm:size-7" />
                    </span>
                    <span className="min-w-0 text-xs leading-snug font-bold break-words text-white sm:text-sm">{item.skill}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;