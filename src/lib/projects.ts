export type Project = {
  title: string;
  category: string;
  image: string;
  tech?: string[];
  description: string;
  award?: { title: string; event: string };
  githubLink?: string;
  liveLink?: string;
};

export const projects: Project[] = [
  {
    title: "Hillstone",
    category: "Web",
    description:
      "A cocktail-bar site focused on atmosphere, motion, and easy menu browsing.",
    image: "/projects/hillstone.webp",
    githubLink: "https://github.com/MitchBrenner/hillstone",
    liveLink: "https://hillstone.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    title: "CoachGPT",
    category: "AI",
    description:
      "A voice AI fitness coach that builds personalized workout and diet plans through conversation.",
    image: "/projects/coachgpt-home.png",
    githubLink: "https://github.com/MitchBrenner/coachGPT",
    liveLink: "https://coachgpt-ai.vercel.app",
    tech: ["Next.js", "TypeScript", "Vapi", "Clerk", "Convex", "Gemini AI"],
  },
  {
    title: "Push Up Pong",
    category: "Game",
    description:
      "A workout game where your nose controls the paddle, tracked in real time by machine learning face detection.",
    image: "/projects/pushup-pong.webp",
    tech: ["React", "face-api.js", "Machine Learning", "Computer Vision"],
    award: {
      title: "Best Video Game · 2nd Overall",
      event: "Uncommon Hacks at UChicago",
    },
  },
  {
    title: "Logoless",
    category: "Mobile",
    description:
      "A mobile video editor using computer vision to detect and remove watermarks.",
    image: "/projects/logoless-screens.png",
    githubLink: "https://github.com/MitchBrenner/logoless-app",
    tech: [
      "React Native",
      "TypeScript",
      "FastAPI",
      "Expo",
      "OpenCV",
      "PaddleOCR",
    ],
  },
  {
    title: "Findly",
    category: "Web",
    description:
      "AI-powered candidate search with natural-language queries and structured filters.",
    image: "/projects/findly-home.png",
    githubLink: "https://github.com/MitchBrenner/findly",
    liveLink: "https://usefindly.vercel.app",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini AI",
      "Turso",
      "Drizzle ORM",
    ],
  },
  {
    title: "Spotlight",
    category: "Mobile",
    description:
      "An Instagram-style social app with a real-time feed for posts, likes, comments, and follows.",
    image: "/projects/spotlight-screens.png",
    githubLink: "https://github.com/MitchBrenner/spotlight-app",
    tech: ["React Native", "Expo", "TypeScript", "Clerk", "Convex"],
  },
  {
    title: "Buckymon Go",
    category: "Web",
    description:
      "A team-built geocaching app where players earn points by visiting real-world landmarks around campus.",
    image: "/projects/buckymon-go-showcase.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Google Maps API",
      "Spring Boot",
      "Docker",
    ],
  },
];
