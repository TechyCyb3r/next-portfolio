type Project = {
  name: string;
  description: string;
  tech: string[];
  githubLink: string;
  live: string;
  image: string;
};

const projectData: Project[] = [
  {
    name: "SecureFin",
    description:
      "A full-stack loan application system with a multi-step application flow, document uploads, and JWT authentication. Includes an admin dashboard for application management and status tracking.",
    tech: ["React", "Material UI", "Tailwind CSS", "Node.js", "JWT", "Multer", "Zod"],
    githubLink: "https://github.com/TechyCyb3r/securefin",
    live: "https://securefin.thehimanshu.tech",
    image: "/assets/project/securefin.png",
  },
  {
    name: "Live Stock Screener",
    description: "A professional real-time stock screener built with modern web technologies. Features interactive candlestick charts, technical indicators, advanced filtering, and live price updates for 5000+ stocks.",
    tech: ["React", "Tailwind CSS", "Zustand", "TanStack Virtual", "Faker", "TanStack Table", "Lightweight Charts"],
    githubLink: "https://github.com/TechyCyb3r/stock-screener",
    live: "https://stockscreener.thehimanshu.tech",
    image: "/assets/project/stockscreener.png",
  },
  {
    name: "iNoteX",
    description: "A responsive note-taking web app with clean note management, local storage persistence, and a focused writing experience.",
    tech: ["React", "LocalStorage", "Tailwind CSS", "Material UI"],
    githubLink: "https://github.com/TechyCyb3r/iNoteX",
    live: "inotex.thehimanshu.tech",
    image: "/assets/project/inotex.png",
  },
  {
    name: "NetFlix Clone",
    description: "A Netflix-inspired responsive landing experience with movie-style sections, polished layouts, and interactive UI details.",
    tech: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/TechyCyb3r/Netflix-Clone",
    live: "netflix.thehimanshu.tech",
    image: "/assets/project/netflix.png",
  },
  {
    name: "DocEditor",
    description: "A full stack document editor built for creating, editing, and managing documents with a modern React interface.",
    tech: ["NodeJS", "ExpressJS", "React", "Tailwind CSS"],
    githubLink: "https://github.com/TechyCyb3r/docEditor",
    live: "doc-editor-agarwal.vercel.app/",
    image: "/assets/project/docEditor.png",
  },
  {
    name: "News App",
    description: "A real-time news reader using News API integration, category-based browsing, and a clean Bootstrap-powered layout.",
    tech: ["React", "News API", "Modules CSS", "Bootstrap"],
    githubLink: "https://github.com/TechyCyb3r/newsApp",
    live: "newsapp.thehimanshu.tech",
    image: "/assets/project/newsapp.png",
  },
  {
    name: "TextUtils",
    description: "A text transformation utility with quick actions for formatting, analyzing, and cleaning written content.",
    tech: ["React", "CSS", "Bootstrap", "Module CSS"],
    githubLink: "https://github.com/TechyCyb3r/TextUtils",
    live: "textutils.thehimanshu.tech",
    image: "/assets/project/textutils.png",
  },
];

export default projectData;