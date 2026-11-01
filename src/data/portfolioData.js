// ============================================================
// PORTFOLIO DATA — UMADEVI
// Verified real personal details and project data
// ============================================================

export const personalInfo = {
  name: "Umadevi",
  title: "Student Frontend Developer",
  tagline: "Building clean, responsive, and user-centric web applications.",
  shortBio:
    "B.Tech CSE (AIML) student at Amity University passionate about modern frontend technologies, continuous learning, and developing real-world solutions.",
  location: "Bangalore, Karnataka",
  educationShort: "AMITY UNIVERSITY, BTech - CSE AIML",
  email: "amuived31@gmail.com",
  phone: "8792211600",
  phoneFormatted: "+91 8792211600",
  github: "https://github.com/amuived31-lang",
  linkedin: "https://www.linkedin.com/in/uma-devi-12a28a3a2/",
};

export const aboutData = {
  bio: [
    "I'm Umadevi, a B.Tech student at Amity University with a passion for technology and continuous learning.",
    "I enjoy building my technical and problem-solving skills through academic projects and hands-on experience. My goal is to start my career in a dynamic organization where I can contribute, learn, and grow as a professional."
  ],
  education: {
    institution: "Amity University",
    degree: "BTech - CSE AIML",
    fullDegree: "Bachelor of Technology in Computer Science & Engineering (AI & ML)",
    location: "Bangalore, Karnataka",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Core curriculum in Data Structures, Algorithms & Web Technologies",
      "Hands-on academic projects and software engineering practices"
    ]
  },
  certifications: [
    {
      id: "hackathon",
      title: "AUB Smart India Hackathon 2025",
      issuer: "Amity University & SIH",
      category: "Hackathon",
      badge: "Team: Tech Titans_6",
      date: "September 24–25, 2025",
      description: "Successfully participated in the AUB Smart India Hackathon 2025 as a valuable member of team Tech Titans_6, solving real-world challenges with innovative software solutions and teamwork.",
      imageKey: "hackathon"
    },
    {
      id: "aws",
      title: "AWS Student Community Day Bengaluru 2026",
      issuer: "AWS Cloud Club",
      category: "Cloud & AI",
      badge: "AWS Bengaluru",
      date: "2026",
      description: "Participated in AWS Student Community Day focused on cloud infrastructure, AI agent development, and hands-on architectural sessions with AWS experts.",
      imageKey: "aws"
    },
    {
      id: "gemini",
      title: "Gemini Certified Educator",
      issuer: "Google for Education",
      category: "Artificial Intelligence",
      badge: "Google Certified",
      date: "Aug 2026 – Aug 2029",
      description: "Awarded by Google for Education for demonstrating knowledge, skills, and competencies in utilizing Google generative AI tools.",
      imageKey: "gemini"
    },
    {
      id: "deloitte",
      title: "Deloitte - Data Analytics Job Simulation",
      issuer: "Deloitte / Forage",
      category: "Data & Analytics",
      badge: "Verified Completion",
      date: "August 28, 2026",
      description: "Completed practical job simulation tasks in Data Analysis and Forensic Technology, extracting actionable insights and data-driven recommendations.",
      imageKey: "deloitte"
    }
  ]
};

export const skills = [
  {
    name: "HTML",
    icon: "html5",
    color: "#E44D26",
    level: 90,
    description: "Semantic elements, modern web structure & accessible markup"
  },
  {
    name: "Java",
    icon: "java",
    color: "#EA2D2E",
    level: 80,
    description: "Object-oriented programming, data structures & core application logic"
  },
  {
    name: "CSS",
    icon: "css3",
    color: "#264DE4",
    level: 85,
    description: "Responsive layouts, Flexbox, CSS Grid & modern UI styling"
  },
  {
    name: "Python",
    icon: "python",
    color: "#3776AB",
    level: 82,
    description: "Algorithmic problem-solving, clean code, automation & data handling"
  },
  {
    name: "React",
    icon: "react",
    color: "#61DAFB",
    level: 80,
    description: "Component-driven user interfaces, hooks, state management & SPAs"
  },
  {
    name: "Git",
    icon: "git",
    color: "#F05032",
    level: 85,
    description: "Version control, branching workflows & GitHub project collaboration"
  }
];

export const weatherProject = {
  id: "weather-app",
  title: "Weather App",
  subtitle: "Real-Time Weather Tracking & Forecasting Application",
  status: "Completed",
  featured: true,
  technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
  demoUrl: "https://weattherapp.vercel.app",
  githubUrl: "https://github.com/amuived31-lang/weattherapp",
  summary:
    "A responsive web application that fetches real-time atmospheric data from a live Weather API. Users can search for any global city to immediately view temperature, weather condition icons, humidity levels, wind speed, and upcoming forecasts.",
  problemSolved:
    "Provides quick, reliable, and accessible real-time weather information with clear visuals and seamless error handling across mobile and desktop devices.",
  capabilities: [
    {
      num: "01",
      title: "Current Temperature",
      desc: "Accurately displays the real-time temperature of the selected city."
    },
    {
      num: "02",
      title: "Weather Conditions",
      desc: "Identifies whether conditions are sunny, cloudy, rainy, or windy."
    },
    {
      num: "03",
      title: "Humidity Metrics",
      desc: "Measures and visualizes the moisture percentage in the air."
    },
    {
      num: "04",
      title: "Wind Speed",
      desc: "Tracks and communicates active wind velocities."
    },
    {
      num: "05",
      title: "Weather Forecast",
      desc: "Delivers upcoming weather predictions for forward planning."
    },
    {
      num: "06",
      title: "Global Location Search",
      desc: "Allows users to seamlessly lookup weather conditions for any city worldwide."
    },
    {
      num: "07",
      title: "Dynamic Weather Icons",
      desc: "Presents intuitive visual icon indicators tailored to live conditions."
    }
  ],
  verifiedFeatures: [
    "City search with instant query response",
    "Real-time temperature readouts",
    "Live weather condition indicators (sunny, cloudy, rainy, windy)",
    "Precise humidity percentage display",
    "Current wind velocity metrics",
    "Dynamic weather icons matched to live conditions",
    "Robust live Weather API integration",
    "Graceful error handling for invalid cities or network errors",
    "Fully responsive design adapting to all screen sizes"
  ]
};
