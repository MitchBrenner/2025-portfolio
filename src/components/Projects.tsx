import ProjectsGallery from "./ProjectsGallery";
import SectionHeading from "./SectionHeading";

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-10 px-6 pb-14 pt-14 text-white sm:px-10 sm:pb-16 sm:pt-16 lg:px-16"
    >
      {/* Ambient glow (left side, alternating with Experience's right-side glow) */}
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none absolute -left-[12%] top-[25%] -z-10 h-[42rem] w-[42rem] bg-[radial-gradient(circle,rgb(124_108_255/0.13),transparent_65%)]"
      />

      <SectionHeading
        id="projects-heading"
        className="mx-auto mb-8 max-w-6xl sm:mb-9"
      >
        Projects
      </SectionHeading>

      <ProjectsGallery />
    </section>
  );
}

export default Projects;
