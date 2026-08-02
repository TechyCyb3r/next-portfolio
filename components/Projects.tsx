"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import projectData from "../data/projects";
import SectionHeader from "./SectionHeader";

type Project = (typeof projectData)[number];

const normalizeUrl = (url: string) => (url.startsWith("http") ? url : `https://${url}`);

const Projects = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateViewportState = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobileView(event.matches);
      if (!event.matches) {
        setFlippedCard(null);
      }
    };

    updateViewportState(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateViewportState);
      return () => mediaQuery.removeEventListener("change", updateViewportState);
    }

    mediaQuery.addListener(updateViewportState);
    return () => mediaQuery.removeListener(updateViewportState);
  }, []);

  const handleCardTap = (projectName: string, event: MouseEvent<HTMLElement>) => {
    if (!isMobileView) {
      return;
    }

    if (event.target instanceof Element && event.target.closest("a")) {
      return;
    }

    setFlippedCard((current) => (current === projectName ? null : projectName));
  };

  return (
    <section id="projects" className="section-spacing section-shell overflow-x-clip">
      <div className="page-container relative z-10">
        <SectionHeader
          kicker="Projects"
          title="Featured React, Next.js and Full Stack Projects"
          subtitle="A portfolio of practical React, MERN, and full stack builds with live demos, GitHub repositories, and production-style user interfaces."
        />

        <div className="section-body grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectData.map((project: Project, index: number) => (
            <article
              key={project.name}
              onClick={(event) => handleCardTap(project.name, event)}
              className={`project-flip-card group h-104 rounded-3xl ${
                isMobileView && flippedCard === project.name ? "is-flipped" : ""
              } ${index === 0 ? "md:col-span-2 xl:col-span-1" : ""}`}
            >
              <div className="project-flip-inner relative h-full rounded-3xl">
                <div className="project-face project-face-front absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-ocean-card shadow-2xl shadow-black/25">
                  <img
                    src={project.image}
                    alt={`${project.name} project screenshot by Himanshu Agarwal, full stack developer portfolio project`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ocean-bg via-ocean-bg/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <span className="rounded-full border border-white/10 bg-ocean-bg/70 px-3 py-1 text-xs font-black text-ocean-primary backdrop-blur-xl">
                          Project 0{index + 1}
                        </span>
                        <h3 className="mt-3 text-2xl font-black text-white">{project.name}</h3>
                      </div>
                    </div>
                    <p className="mobile-flip-hint mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-ocean-primary md:hidden">
                      Click me to hover
                    </p>
                    <p className="mt-4 hidden text-xs font-bold uppercase tracking-[0.18em] text-white/65 md:block">
                      Hover to explore
                    </p>
                  </div>
                </div>

                <div className="project-face project-face-back absolute inset-0 rounded-3xl border border-ocean-primary/35 bg-ocean-card p-4 shadow-2xl shadow-ocean-primary/10 sm:p-5">
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-2 sm:gap-4">
                      <span className="grid size-12 place-items-center rounded-2xl bg-ocean-primary text-lg font-black text-ocean-bg shadow-[0_0_24px_rgba(124,102,227,0.24)]">
                        0{index + 1}
                      </span>
                      <p className="rounded-full border border-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-ocean-primary sm:px-3 sm:text-xs sm:tracking-[0.16em]">
                        Case Study
                      </p>
                    </div>

                    <h3 className="mt-4 text-xl font-black leading-tight wrap-break-word text-white sm:mt-5 sm:text-2xl">{project.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-ocean-muted">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-ocean-primary/20 bg-ocean-primary/10 px-2.5 py-1 text-[11px] font-bold text-ocean-text sm:px-3 sm:text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-2 pt-4 sm:gap-3 sm:pt-5">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-w-0 items-center justify-center gap-1 rounded-full border border-white/10 bg-white/6 px-2 py-2.5 text-xs font-black text-white transition hover:border-ocean-primary/40 hover:bg-white/10 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
                      >
                        <FiGithub /> GitHub
                      </a>
                      <a
                        href={normalizeUrl(project.live)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-w-0 items-center justify-center gap-1 rounded-full bg-ocean-primary px-2 py-2.5 text-xs font-black text-ocean-bg shadow-[0_0_24px_rgba(124,102,227,0.22)] transition hover:bg-white sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
                      >
                        View <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;