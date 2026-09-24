import type { CSSProperties } from "react";
import ProjectsGallery from "./ProjectsGallery";
import Tech from "./Tech";
import { techGroups } from "@/lib/tech";

function About() {
  return (
    <div id="about" className="relative z-10 overflow-clip">
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="relative px-6 pb-14 pt-14 text-white sm:px-10 sm:pb-16 sm:pt-16 lg:px-16"
      >
        {/* Ambient glow (left side, alternating with Experience's right-side glow) */}
        <div
          aria-hidden="true"
          className="ambient-glow pointer-events-none absolute -left-[12%] top-[25%] -z-10 h-[42rem] w-[42rem] bg-[radial-gradient(circle,rgb(124_108_255/0.13),transparent_65%)]"
        />

        <div>
          <h2
            id="projects-heading"
            className="reveal-on-scroll font-satoshi mx-auto mb-8 max-w-6xl text-3xl font-bold tracking-tight sm:mb-9 sm:text-4xl"
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
          className="reveal-on-scroll font-satoshi mx-auto mb-8 max-w-6xl text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Tech stack
        </h2>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {techGroups.map((group, index) => (
            <div
              key={group.label}
              className="reveal-on-scroll"
              style={
                {
                  // Stagger columns left to right
                  "--reveal-offset": `${(index % 4) * 4}%`,
                } as CSSProperties
              }
            >
              <h3 className="font-satoshi text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-1">
                {group.items.map((tech) => (
                  <Tech key={tech.name} {...tech} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
