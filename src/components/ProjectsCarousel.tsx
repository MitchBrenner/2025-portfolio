"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import ProjectCard from "./Card";
import { projects } from "@/lib/projects";

// Layout-only placeholders appear in development, never on the published site.
const previewProjects = [
  {
    title: "Project 04",
    description: "A preview space for the next project worth sharing.",
    tech: [],
    preview: true as const,
  },
  {
    title: "Project 05",
    description: "Another preview space for work still to come.",
    tech: [],
    preview: true as const,
  },
];

const carouselProjects =
  process.env.NODE_ENV === "development"
    ? [...projects, ...previewProjects]
    : projects;

function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setCanScrollLeft(track.scrollLeft > 2);
    setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new ResizeObserver(updateControls);
    observer.observe(track);
    updateControls();

    return () => observer.disconnect();
  }, [updateControls]);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !card) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = card.getBoundingClientRect().width + gap;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    track.scrollBy({
      left: distance * direction,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <div className="relative">
      <p className="sr-only">
        Scroll horizontally or use the arrow buttons to browse projects.
      </p>
      <div
        ref={trackRef}
        role="region"
        aria-label="Projects"
        tabIndex={0}
        onScroll={updateControls}
        className="projects-track focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9eef5]"
      >
        {carouselProjects.map((project, index) => (
          <div
            key={project.title}
            className="min-w-0 snap-start"
          >
            <ProjectCard project={project} index={String(index + 1).padStart(2, "0")} />
          </div>
        ))}
      </div>

      {canScrollLeft && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-[48%] w-16 bg-gradient-to-r from-[#1a222b] via-[#1a222b]/80 to-transparent sm:w-24"
          />
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous project"
            className="absolute left-2 top-[24%] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#d9eef5] text-[#1a2229] shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:left-4 sm:h-14 sm:w-14"
          >
            <ArrowLeft aria-hidden="true" size={24} strokeWidth={2.25} />
          </button>
        </>
      )}
      {canScrollRight && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-[48%] w-16 bg-gradient-to-l from-[#1a222b] via-[#1a222b]/80 to-transparent sm:w-24"
          />
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next project"
            className="absolute right-2 top-[24%] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#d9eef5] text-[#1a2229] shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-4 sm:h-14 sm:w-14"
          >
            <ArrowRight aria-hidden="true" size={24} strokeWidth={2.25} />
          </button>
        </>
      )}
    </div>
  );
}

export default ProjectsCarousel;
