import ProjectsGallery from "./ProjectsGallery";
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
        className="relative px-6 pb-14 pt-14 text-white sm:px-10 sm:pb-16 sm:pt-16 lg:px-16"
      >
        <div>
          <h2
            id="projects-heading"
            className="font-satoshi mx-auto mb-8 max-w-6xl text-3xl font-bold tracking-tight sm:mb-9 sm:text-4xl"
          >
            Projects
          </h2>

          <ProjectsGallery />
        </div>
      </section>

      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="relative px-6 pb-14 pt-14 text-white sm:px-10 sm:pb-16 sm:pt-16 lg:px-16"
      >
        <h2
          id="skills-heading"
          className="font-satoshi mx-auto mb-8 max-w-6xl text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Tech stack
        </h2>

        <div className="relative mx-auto max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
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
