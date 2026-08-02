"use client";

import { FiAward, FiDownload } from "react-icons/fi";
import certificateData from "../data/certificates";
import SectionHeader from "./SectionHeader";

const Certificates = () => {
  return (
    <section id="certificates" className="section-spacing">
      <div className="page-container">
        <SectionHeader
          kicker="Certificates"
          title="Professional Certifications and Verified Learning"
          subtitle="Certifications in JavaScript, React, Node.js, web development, and modern full stack learning that support Himanshu Agarwal's developer profile."
        />

        <div className="section-body grid gap-4 md:grid-cols-2">
          {certificateData.map((certificate) => (
            <a
              key={certificate.id}
              href={certificate.downloadUrl}
              download={certificate.fileName}
              className="group min-w-0 rounded-3xl border border-white/10 bg-white/4 p-5 transition hover:-translate-y-1 hover:border-ocean-primary/35 hover:bg-white/6 hover:shadow-2xl hover:shadow-ocean-primary/10 max-[360px]:p-3"
            >
              <div className="flex gap-4 max-[360px]:flex-col max-[360px]:gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-ocean-primary/12 text-ocean-primary max-[360px]:size-10">
                  <FiAward size={22} className="max-[360px]:size-4.5" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 max-[360px]:flex-col max-[360px]:items-start max-[360px]:gap-1">
                    <h3 className="text-lg font-black wrap-break-word text-white max-[360px]:text-base">{certificate.title}</h3>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-ocean-muted max-[360px]:px-2 max-[360px]:py-0.5 max-[360px]:text-[10px]">
                      {certificate.date}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-ocean-primary max-[360px]:text-xs">{certificate.issuer}</p>
                  <p className="mt-3 text-sm leading-6 wrap-break-word text-ocean-muted max-[360px]:mt-2 max-[360px]:text-xs max-[360px]:leading-5">{certificate.description}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 max-[360px]:mt-3 max-[360px]:flex-col max-[360px]:items-stretch max-[360px]:gap-2">
                    <p className="min-w-0 break-all text-xs font-semibold text-ocean-text max-[360px]:text-[10px]">{certificate.credential}</p>
                    <span className="inline-flex items-center justify-center gap-2 rounded-full bg-ocean-primary px-4 py-2 text-xs font-black text-ocean-bg transition group-hover:bg-white max-[360px]:px-3 max-[360px]:py-1.5 max-[360px]:text-[10px]">
                      <FiDownload className="max-[360px]:size-3" /> Download
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;