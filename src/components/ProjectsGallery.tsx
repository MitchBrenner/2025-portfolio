"use client";

import { useState } from "react";
import ProjectCard from "./Card";
import { projects } from "@/lib/projects";

const featuredCount = 3;

function ProjectsGallery() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, featuredCount);
  const hiddenCount = projects.length - featuredCount;

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={String(index + 1).padStart(2, "0")}
          />
        ))}
      </div>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          aria-expanded={showAll}
          className="font-satoshi mt-10 inline-flex min-h-11 items-center gap-3 rounded-full border border-white/20 px-5 text-sm font-medium text-white/80 transition-colors hover:border-white/45 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9eef5]"
        >
          {showAll ? "Show less" : `View all (${projects.length})`}
          <span aria-hidden="true" className="text-[#a9c7d4]">
            {showAll ? "−" : "+"}
          </span>
        </button>
      )}
    </div>
  );
}

export default ProjectsGallery;
