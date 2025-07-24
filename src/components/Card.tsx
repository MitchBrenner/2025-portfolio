import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  title: string;
  image: string;
  tech: string[];
  description: string;
  githubUrl: string;
  liveUrl?: string;
};

function ProjectCard({
  title,
  image,
  tech,
  description,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-[#1a2229] text-white rounded-xl overflow-hidden shadow-md border border-white/10 max-w-md relative pb-12 min-h-[530px]">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-5 space-y-4">
        {/* Title */}
        <h2 className="text-2xl font-semibold">{title}</h2>

        {/* Tech bubbles */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 transition"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-white/80">{description}</p>

        {/* Buttons */}
        <div className="flex gap-3 pt-2 absolute bottom-5 left-5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20 flex items-center gap-2"
          >
            <Github />
            GitHub
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm rounded-lg bg-blue-500 hover:bg-blue-600 transition flex items-center gap-2 text-white border border-blue-600"
            >
              Live Demo
              <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
