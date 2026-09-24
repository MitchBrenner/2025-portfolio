export type TechItem = {
  name: string;
  image: string;
  // Dark monochrome logos that need inverting on the dark background
  invert?: boolean;
};

export const techGroups: { label: string; items: TechItem[] }[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", image: "/icons/ts.png" },
      { name: "JavaScript", image: "/icons/javascript.svg" },
      { name: "Python", image: "/icons/python.webp" },
      { name: "Java", image: "/icons/java.svg" },
      { name: "SQL", image: "/icons/sql.svg" },
    ],
  },
  {
    label: "Frontend & Mobile",
    items: [
      { name: "React", image: "/icons/react.png" },
      { name: "Next.js", image: "/icons/next.webp", invert: true },
      { name: "Tailwind CSS", image: "/icons/tw.png" },
      { name: "GSAP", image: "/icons/gsap.webp" },
      { name: "React Native", image: "/icons/react.png" },
      { name: "Expo", image: "/icons/expo.webp", invert: true },
    ],
  },
  {
    label: "Backend & Data",
    items: [
      { name: "Node.js", image: "/icons/node.svg" },
      { name: "FastAPI", image: "/icons/fastapi.svg" },
      { name: "PostgreSQL", image: "/icons/post.png" },
      { name: "Supabase", image: "/icons/supabase.svg" },
      { name: "Convex", image: "/icons/convex.webp" },
      { name: "Prisma", image: "/icons/prisma.svg" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "OpenCV", image: "/icons/opencv.svg" },
      { name: "Docker", image: "/icons/docker.svg" },
      { name: "Git", image: "/icons/git.svg" },
      { name: "Clerk", image: "/icons/clerk.svg" },
    ],
  },
];
