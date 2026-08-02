type EducationItem = {
  id: number;
  title: string;
  degree: string;
  duration: string;
  score?: string;
  location: string;
};

const educationData: EducationItem[] = [
  {
    id: 1,
    title: "Master in Computer Application",
    degree: "JECRC University",
    duration: "2024-2026",
    score: "Percentage: 90%",
    location: "Jaipur-Rajasthan, India",
  },
  {
    id: 2,
    title: "Bachelors of Computer Application",
    degree: "Balaji PG college (Shekhawati University)",
    duration: "2021 - 2024",
    score: "Percentage: 74%",
    location: "Sikar-Rajasthan, India",
  },
  {
    id: 3,
    title: "Senior Secondary School - RBSE",
    degree: "Sofia Senior Secondary School",
    duration: "2019 - 2021",
    score: "Percentage: 76%",
    location: "Sikar-Rajasthan, India",
  },
  {
    id: 4,
    title: "Secondary School - RBSE",
    degree: "Vidhya Bharti Public School",
    duration: "2018-2019",
    location: "Sikar-Rajasthan, India",
  },
];

export default educationData;