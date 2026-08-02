"use client";

import { Box } from "@mui/material";
import { FiMapPin } from "react-icons/fi";
import educationData from "../data/education";
import SectionHeader from "./SectionHeader";

const Education = () => {
  return (
    <section id="education" className="section-shell section-spacing relative isolate">
      <div className="page-container">
        <SectionHeader
          kicker="Education"
          title="Education Background of Himanshu Agarwal"
          subtitle="Academic timeline from school to MCA specialization, supporting a full stack developer profile with a strong computer science foundation."
        />

        <Box component="div" className="section-body mx-auto max-w-4xl">
          <div className="relative grid gap-7 before:absolute before:left-2.5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-ocean-primary/25 sm:before:left-1/2">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className={`relative grid gap-4 pl-11 sm:grid-cols-2 sm:gap-x-14 sm:pl-0 ${
                  index % 2 === 0 ? "sm:[&>*:last-child]:col-start-2" : "sm:[&>*:last-child]:col-start-1"
                }`}
              >
                <span className="timeline-dot absolute left-0 top-6 z-10 size-5 rounded-full border-4 border-ocean-bg bg-ocean-primary shadow-[0_0_26px_rgba(124,102,227,0.45)] sm:left-1/2 sm:-translate-x-1/2" />
                <div className={index % 2 === 0 ? "hidden sm:block" : "hidden sm:block sm:col-start-2"} />
                <article className="min-w-0 rounded-3xl border border-white/10 bg-white/4 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-ocean-primary/35 sm:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-ocean-primary">{item.duration}</p>
                      <h3 className="mt-1 text-lg font-black wrap-break-word text-white sm:text-xl">{item.title}</h3>
                      <p className="mt-1 text-sm font-semibold wrap-break-word text-ocean-text">{item.degree}</p>
                    </div>
                    {item.score && (
                      <span className="rounded-full border border-ocean-primary/25 bg-ocean-primary/10 px-3 py-1 text-xs font-bold text-ocean-primary">
                        {item.score}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 flex items-center gap-2 text-sm wrap-break-word text-ocean-muted">
                    <FiMapPin className="shrink-0" /> {item.location}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </section>
  );
};

export default Education;