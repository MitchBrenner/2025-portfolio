import type { CSSProperties } from "react";
import SectionHeading from "./SectionHeading";
import Tech from "./Tech";
import { techGroups } from "@/lib/tech";

function TechStack() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative z-10 px-6 pb-14 pt-14 text-white sm:px-10 sm:pb-16 sm:pt-16 lg:px-16"
    >
      <SectionHeading id="skills-heading" className="mx-auto mb-8 max-w-6xl">
        Tech stack
      </SectionHeading>

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
            <h3 className="font-satoshi text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
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
  );
}

export default TechStack;
