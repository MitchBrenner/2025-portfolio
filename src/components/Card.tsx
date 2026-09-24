"use client";

import { ArrowUpRight, Code2, Github, Trophy } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useRef, useState, type CSSProperties } from "react";

type Project = {
  title: string;
  category: string;
  image: string;
  tech?: string[];
  description: string;
  award?: { title: string; event: string };
  githubLink?: string;
  liveLink?: string;
};

function ProjectCard({ project, index }: { project: Project; index: string }) {
  const [techOpen, setTechOpen] = useState(false);
  const techRef = useRef<HTMLDivElement>(null);
  const pointerTypeRef = useRef<string>("mouse");
  const techId = useId();

  useEffect(() => {
    if (!techOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!techRef.current?.contains(event.target as Node)) {
        setTechOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [techOpen]);

  return (
    <article
      className="reveal-on-scroll group min-w-0 text-white"
      style={
        {
          // Stagger cards across a row of three
          "--reveal-offset": `${((Number(index) - 1) % 3) * 4}%`,
        } as CSSProperties
      }
    >
      <div className="relative aspect-[1.9] overflow-hidden rounded-2xl border border-white/10 bg-[#26343d]">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10191f]/55 via-transparent to-transparent"
        />
        {project.award && (
          <span className="font-satoshi absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-[#10191f]/75 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-amber-200 shadow-[0_4px_14px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <Trophy aria-hidden="true" size={12} strokeWidth={2.25} />
            Award winner
          </span>
        )}
        <span className="font-satoshi absolute bottom-3 left-4 text-xs font-semibold tracking-[0.18em] text-white/90">
          {index} / {project.category.toUpperCase()}
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-satoshi text-xl font-bold tracking-tight sm:text-[1.375rem]">
            {project.title}
          </h3>
          <p className="font-satoshi mt-1.5 line-clamp-2 text-sm leading-5 text-white/60">
            {project.description}
          </p>
        </div>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} live site`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[#d9eef5] hover:bg-[#d9eef5] hover:text-[#1a222b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9eef5]"
          >
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        )}
      </div>

      <div className="font-satoshi mt-3 flex items-center gap-5 text-xs font-medium">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#b8d3df] transition-colors hover:text-white hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9eef5]"
          >
            <Github aria-hidden="true" size={14} /> Source code
          </a>
        )}

        {project.tech && project.tech.length > 0 && (
          <div
            ref={techRef}
            className="relative"
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setTechOpen(true);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") setTechOpen(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setTechOpen(false);
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setTechOpen(false);
              }
            }}
          >
            <button
              type="button"
              aria-expanded={techOpen}
              aria-controls={techOpen ? techId : undefined}
              onPointerDown={(event) => {
                pointerTypeRef.current = event.pointerType;
              }}
              onClick={(event) => {
                if (event.detail === 0 || pointerTypeRef.current !== "mouse") {
                  setTechOpen((open) => !open);
                } else {
                  setTechOpen(true);
                }
              }}
              className="inline-flex items-center gap-1.5 text-[#b8d3df] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9eef5]"
            >
              <Code2 aria-hidden="true" size={14} /> Tech
            </button>

            {techOpen && (
              <div className="absolute bottom-full left-0 z-20 w-56 max-w-[calc(100vw-3rem)] pb-2">
                <div
                  id={techId}
                  role="region"
                  aria-label={`Technologies used for ${project.title}`}
                  className="rounded-xl border border-white/15 bg-[#293641] p-4 shadow-[0_16px_35px_rgba(0,0,0,0.4)]"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-white/45">
                    Built with
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {project.tech?.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-normal text-white/85"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
        {project.award && (
          <span
            title={`${project.award.title}, ${project.award.event}`}
            className="inline-flex items-center gap-1.5 text-amber-200/90"
          >
            <Trophy aria-hidden="true" size={13} className="shrink-0" />
            {project.award.title}
            <span className="sr-only">, {project.award.event}</span>
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
