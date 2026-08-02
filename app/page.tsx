import Background from "@/components/Background";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";
import { siteDescription, siteName, siteTitle, siteUrl, socialLinks } from "@/lib/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}#person`,
        name: siteName,
        url: siteUrl,
        jobTitle: [
          "Full Stack Developer",
          "React Developer",
          "Next.js Developer",
          "Frontend Developer",
          "Backend Developer",
          "Software Engineer",
        ],
        description: siteDescription,
        sameAs: socialLinks,
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Frontend Development",
          "Backend Development",
          "MERN Stack",
        ],
        image: `${siteUrl}/assets/hero.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        publisher: {
          "@id": `${siteUrl}#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}#profile-page`,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        isPartOf: {
          "@id": `${siteUrl}#website`,
        },
        about: {
          "@id": `${siteUrl}#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/assets/hero.png`,
        },
      },
    ],
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-clip text-ocean-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Background />
      <Navbar />
      <ScrollToTop />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="page-container flex flex-col items-center justify-between gap-3 text-center text-sm text-ocean-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Himanshu Agarwal. All rights reserved.</p>
          <p>Crafted with Next.js, React, Tailwind, and a lot of curiosity.</p>
        </div>
      </footer>
    </div>
  );
}