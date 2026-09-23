import ProjectsCarousel from "./ProjectsCarousel";
import Tech from "./Tech";
import { techStack } from "@/lib/tech";

const toolkit = [
  {
    title: "Web & mobile",
    names: ["Next.js", "React", "React Native", "Expo", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Data & services",
    names: ["PostgreSQL", "Convex", "Clerk", "Python"],
  },
  {
    title: "Motion",
    names: ["GSAP"],
  },
];

function About() {
  return (
    <div id="about" className="relative z-10 overflow-hidden">
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="relative px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16"
      >
        <div>
          <div className="mx-auto mb-8 grid max-w-6xl gap-4 md:mb-9 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end md:gap-16">
            <div>
              <p className="font-satoshi text-xs font-bold tracking-[0.2em] text-[#a9c7d4]">
                02 / SELECTED WORK
              </p>
              <h2
                id="projects-heading"
                className="font-satoshi mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Built to be used.
              </h2>
            </div>
            <p className="font-satoshi max-w-md text-sm leading-relaxed text-white/60 md:justify-self-end">
              A few projects spanning web, mobile, and the space between.
            </p>
          </div>

          <div className="mx-auto max-w-[1320px]">
            <ProjectsCarousel />
          </div>
        </div>
      </section>

      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="relative px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16"
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14">
          <div>
            <p className="font-satoshi text-xs font-medium tracking-[0.2em] text-white/50">
              03 / TOOLKIT
            </p>
            <h2
              id="skills-heading"
              className="font-satoshi mt-4 max-w-md text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Tools I reach for.
            </h2>
            <p className="font-satoshi mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              The technologies I use to take an idea from prototype to
              production.
            </p>
          </div>

          <div>
            {toolkit.map((group) => (
              <div
                key={group.title}
                className="border-t border-white/15 py-4 first:pt-4 last:border-b last:border-white/15"
              >
                <h3 className="font-satoshi mb-3 text-xs font-medium uppercase tracking-[0.14em] text-white/50">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.names.map((name) => {
                    const tech = techStack.find((item) => item.name === name);
                    return tech ? <Tech key={name} name={name} image={tech.image} /> : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
