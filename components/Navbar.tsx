"use client";

import { useState } from "react";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";

const navItems = ["Home", "Skills", "Projects", "Education", "Certificates"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ocean-bg/82 backdrop-blur-2xl">
      <nav className="page-container flex h-16 items-center justify-between gap-3">
        <a href="#home" className="flex min-w-0 items-center gap-2 text-base font-black tracking-wide text-white sm:gap-3 sm:text-lg">
          <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-ocean-primary text-sm font-black text-ocean-bg shadow-[0_0_24px_rgba(124,102,227,0.28)] sm:size-9 sm:text-base">
            H
          </span>
          <span className="truncate">
            Himanshu<span className="text-ocean-primary">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ocean-muted transition hover:bg-white/5 hover:text-white"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-ocean-primary px-5 py-2 text-sm font-black text-ocean-bg shadow-[0_0_24px_rgba(124,102,227,0.28)] transition hover:-translate-y-1 hover:bg-white"
          >
            Hire Me <FiExternalLink size={14} />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-ocean-bg/95 px-4 py-4 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-ocean-muted hover:bg-white/5 hover:text-white"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-ocean-primary px-4 py-3 text-sm font-black text-ocean-bg shadow-[0_0_22px_rgba(124,102,227,0.24)]"
            >
              Hire Me <FiExternalLink size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;