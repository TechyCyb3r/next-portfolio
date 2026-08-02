type SkillItem = {
  skill: string;
  icon: string;
  color: string;
};

type SkillCategory = {
  title: string;
  icon: string;
  skills: SkillItem[];
};

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    icon: "/assets/logos/coding.svg",
    skills: [
      { skill: "HTML", icon: "/assets/techno/html.png", color: "#e34c26" },
      { skill: "CSS", icon: "/assets/techno/css.png", color: "#264de4" },
      { skill: "JavaScript", icon: "/assets/techno/js.png", color: "#f0db4f" },
      { skill: "Java", icon: "/assets/logos/java.png", color: "#f89820" },
      { skill: "C++", icon: "/assets/logos/cpp.png", color: "#00599C" },
      { skill: "C", icon: "/assets/logos/c.png", color: "#A8B9CC" },
      { skill: "Python", icon: "/assets/logos/python.png", color: "#3776AB" },
      { skill: "TypeScript", icon: "/assets/logos/typescript.svg", color: "#3178C6" },
    ],
  },
  {
    title: "Frontend",
    icon: "/assets/logos/frontend.svg",
    skills: [
      { skill: "React JS", icon: "/assets/logos/react.svg", color: "#61DAFB" },
      { skill: "Vite JS", icon: "/assets/logos/vitejs.png", color: "#9461fd" },
      { skill: "CSS", icon: "/assets/techno/css.png", color: "#264de4" },
      { skill: "Tailwind CSS", icon: "/assets/techno/tcss.png", color: "#38BDF8" },
      { skill: "Bootstrap", icon: "/assets/techno/bootstrap.png", color: "#7952B3" },
      { skill: "HTML", icon: "/assets/techno/html.png", color: "#e34c26" },
      { skill: "JavaScript", icon: "/assets/techno/js.png", color: "#f0db4f" },
    ],
  },
  {
    title: "Backend",
    icon: "/assets/logos/backend.svg",
    skills: [
      { skill: "Node JS", icon: "/assets/logos/nodejs.png", color: "#68A063" },
      { skill: "MongoDB", icon: "/assets/logos/mongodb.svg", color: "#47A248" },
      { skill: "MySQL", icon: "/assets/logos/mysql.png", color: "#00758F" },
    ],
  },
  {
    title: "Tools & Others",
    icon: "/assets/logos/tools.svg",
    skills: [
      { skill: "VS Code", icon: "/assets/logos/vscode.png", color: "#007ACC" },
      { skill: "GitHub", icon: "/assets/logos/github.svg", color: "#9CA3AF" },
      { skill: "ChatGPT", icon: "/assets/logos/chatgpt.png", color: "#00A67E" },
      { skill: "Figma", icon: "/assets/logos/figma.png", color: "#F24E1E" },
      { skill: "Canva", icon: "/assets/logos/canva.svg", color: "#00C4CC" },
      { skill: "Vercel", icon: "/assets/logos/vercel.svg", color: "#8B5CF6" },
    ],
  },
];

export default skillsData;