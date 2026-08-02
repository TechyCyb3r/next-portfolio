"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const stats = [
  { label: "Projects", value: "07+" },
  { label: "Focus", value: "MERN" },
  { label: "Degree", value: "MCA" },
];

const Hero = () => {
  const [hideScrollIndicator, setHideScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideScrollIndicator(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="hero-grid-texture section-spacing relative min-h-screen overflow-x-clip pt-24 sm:pt-28">
      <div className="page-container relative z-10 grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="min-w-0">
          <span className="mb-5 inline-flex max-w-full rounded-full border border-ocean-primary/25 bg-ocean-primary/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ocean-primary sm:px-4 sm:text-xs sm:tracking-[0.22em]">
            Full Stack Developer | React & Next.js Engineer
          </span>

          <h1 className="max-w-4xl text-[2.65rem] font-black leading-[1.02] text-white sm:text-6xl">
            Hi, I am <span className="gradient-text">Himanshu Agarwal</span>
          </h1>

          <p className="mt-5 min-h-16 text-lg font-semibold text-ocean-text sm:min-h-9 sm:text-2xl">
            I build{" "}
            <span className="inline text-ocean-primary">
              <Typewriter
                words={["modern web apps.", "responsive interfaces.", "clean user experiences.", "full stack projects."]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={72}
                deleteSpeed={42}
                delaySpeed={1400}
              />
            </span>
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-ocean-muted">
            Himanshu Agarwal is a MERN stack and full stack developer specializing in React.js, Next.js, Node.js, Express.js,
            MongoDB, JavaScript, TypeScript, and Tailwind CSS. I build responsive, scalable,
            and high-performance web applications with clean code, modern UI, strong performance, and a strong focus on SEO-friendly user experiences.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Node.js", "MongoDB", "JavaScript", "Tailwind CSS"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs font-bold text-ocean-text">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-ocean-primary px-5 py-3 text-sm font-bold text-ocean-bg shadow-[0_0_32px_rgba(124,102,227,0.26)] transition hover:-translate-y-1 hover:bg-white sm:px-6"
            >
              View Work <FiArrowUpRight />
            </a>
            <a
              href="/download/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-ocean-primary/40 hover:bg-ocean-primary/10 sm:px-6"
            >
              Resume <FiDownload />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-2 sm:gap-3">
            {[
              { icon: FiGithub, href: "https://github.com/TechyCyb3r", label: "GitHub" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/himanshuagarwal04/", label: "LinkedIn" },
              { icon: FiMail, href: "mailto:himanshuagarwalskr@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ocean-muted transition hover:-translate-y-1 hover:border-ocean-primary/40 hover:text-ocean-primary sm:size-11"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-xl min-w-0 items-center gap-5 py-6 sm:grid-cols-[7rem_1fr] sm:py-8">
          <div className="relative z-30 order-2 grid grid-cols-3 gap-3 sm:order-1 sm:grid-cols-1">
            {stats.map((item) => (
              <div key={item.label} className="metric-panel text-center sm:text-left">
                <strong className="block text-lg text-white">{item.value}</strong>
                <span className="text-xs text-ocean-muted">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="relative order-1 sm:order-2">
            <div className="absolute inset-8 rounded-full bg-ocean-primary/18 blur-3xl" />
            <div className="absolute inset-12 rounded-full border border-ocean-primary/15" />

            <div className="relative mx-auto aspect-square w-full max-w-[20rem] rounded-full border border-ocean-primary/25 bg-gradient-to-b from-white/10 to-white/[0.03] p-3 shadow-2xl shadow-ocean-primary/10 sm:max-w-[24rem] sm:p-4">
              <div className="h-full overflow-hidden rounded-full border border-white/10 bg-ocean-card">
                <img src="/himanshu.png" alt="Himanshu Agarwal full stack developer and Next.js portfolio profile photo" className="h-full w-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#skills"
        aria-hidden={hideScrollIndicator}
        className={`scroll-down-indicator absolute bottom-30 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-ocean-muted transition hover:text-ocean-primary md:flex ${hideScrollIndicator ? "pointer-events-none opacity-0 translate-y-3" : "opacity-100"}`}
      >
        <span className="scroll-mouse" />
        <span className="flex items-center gap-1 text-[0.65rem] font-black uppercase tracking-[0.22em]">
          Scroll <FiArrowDown size={12} />
        </span>
      </a>
    </section>
  );
};

export default Hero;