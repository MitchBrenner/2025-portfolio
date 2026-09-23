import ProjectsCarousel from "./ProjectsCarousel";
import Tech from "./Tech";
import { Marquee } from "./ui/marquee";
import { techStack } from "@/lib/tech";

function About() {
  const midpoint = Math.ceil(techStack.length / 2);

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
        <div className="mx-auto mb-8 grid max-w-6xl gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end md:gap-16">
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
          </div>
          <p className="font-satoshi max-w-md text-sm leading-relaxed text-white/60 md:justify-self-end">
            The technologies I use to take an idea from prototype to production.
          </p>
        </div>

        <div className="relative mx-auto max-w-[1320px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <Marquee pauseOnHover className="[--duration:60s] [--gap:1.25rem] p-1">
            {techStack.slice(0, midpoint).map((tech) => (
              <Tech key={tech.name} {...tech} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="mt-3 [--duration:56s] [--gap:1.25rem] p-1"
          >
            {techStack.slice(midpoint).map((tech) => (
              <Tech key={tech.name} {...tech} />
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
}

export default About;
