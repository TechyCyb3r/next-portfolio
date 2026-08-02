"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 520);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Scroll to top"
      className={`scroll-top-button fixed bottom-6 right-5 z-50 grid size-12 place-items-center rounded-full border border-ocean-primary/35 bg-ocean-primary text-ocean-bg shadow-[0_0_28px_rgba(124,102,227,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-white ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <FiArrowUp size={20} />
    </a>
  );
};

export default ScrollToTop;