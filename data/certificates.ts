type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credential: string;
  description: string;
  downloadUrl: string;
  fileName: string;
};

const certificateData: Certificate[] = [
  {
    id: 1,
    title: "MERN Stack Development",
    issuer: "Technoglobe",
    date: "May 2026",
    credential: "Credential ID:  RAJ/JPR/CPC/671",
    description: "Learned full-stack web development using MongoDB, Express.js, React, and Node.js, including building RESTful APIs and deploying applications.",
    downloadUrl: "/download/certificates/mern-stack-development.pdf",
    fileName: "mern-stack-development.pdf",
  },
  {
    id: 2,
    title: "JavaScript",
    issuer: "IBM",
    date: "December 2025",
    credential: "Credential ID: a43402e249dd4d4a9378fb70424f4e89",
    description: "Learned modern JavaScript, ES6+ features, and asynchronous programming for web development.",
    downloadUrl: "/download/certificates/javaScript.pdf",
    fileName: "javaScript.pdf",
  },
  {
    id: 3,
    title: "Nodejs",
    issuer: "IBM",
    date: "December 2024",
    credential: "Credential ID: b710151a2c274bca920fcd769236225a",
    description: "Learned Node.js fundamentals, Express.js, and database integration for backend development.",
    downloadUrl: "/download/certificates/nodejs.pdf",
    fileName: "nodejs.pdf",
  },
  {
    id: 4,
    title: "Web Development",
    issuer: "IBM",
    date: "2024",
    credential: "Credential ID: 6359a81e5c554dd5bdcba5badef5dfa0",
    description: "Learned web development fundamentals, including HTML, CSS, JavaScript, and responsive design principles.",
    downloadUrl: "/download/certificates/web-development.pdf",
    fileName: "web-development.pdf",
  },
  {
    id: 5,
    title: "React and Redux",
    issuer: "KnowledgeGate",
    date: "November 2025",
    credential: "Credential ID: CERT-1764168772877-C5007DDB",
    description: "Learned React fundamentals, component-based architecture, state management with Redux, and building interactive web applications.",
    downloadUrl: "/download/certificates/react.pdf",
    fileName: "react.pdf",
  },
  {
    id: 6,
    title: "Programming using AI",
    issuer: "LinkedIn",
    date: "2024",
    credential: "Credential ID: 8f4f4d402e72bcd243b27a9f64a8dc35ce9241195b4fa91f5dd7ecf3bafb7e03",
    description: "Learned how to leverage AI technologies and tools for programming tasks, including natural language processing and machine learning.",
    downloadUrl: "/download/certificates/programming-using-ai.pdf",
    fileName: "programming-using-ai.pdf",
  },
];

export default certificateData;