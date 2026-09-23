import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  image?: string;
  tech: string[];
  description: string;
  githubLink?: string;
  liveLink?: string;
  preview?: boolean;
};

function ProjectCard({ project, index }: { project: Project; index: string }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#202a33]/95 text-white shadow-[0_16px_30px_-28px_rgba(0,0,0,0.9)] transition-colors hover:border-[#a9c7d4]/50">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#30404b]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            unoptimized
            loading="eager"
            sizes="(min-width: 1024px) 430px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          />
        ) : (
          <div
            aria-hidden="true"
            className={`flex h-full items-center justify-center bg-gradient-to-br ${
              index === "04"
                ? "from-[#405665] via-[#283943] to-[#1c2932]"
                : "from-[#514b63] via-[#313744] to-[#1c2932]"
            }`}
          >
            <span className="font-satoshi text-7xl font-black tracking-tight text-white/10">
              {index}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <p className="font-satoshi text-[11px] font-bold uppercase tracking-[0.17em] text-[#a9c7d4]">
          {index} / {project.preview ? "Layout preview" : "Project"}
        </p>
        <h3 className="font-satoshi mt-2 text-2xl font-bold tracking-tight">
          {project.title}
        </h3>
        <p className="font-satoshi mt-2 line-clamp-2 text-sm leading-5 text-white/65">
          {project.description}
        </p>

        {project.tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1" aria-label="Technologies used">
            {project.tech.slice(0, 3).map((tech) => (
              <li key={tech} className="font-satoshi text-xs text-white/65">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4 text-sm">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-satoshi inline-flex min-h-8 items-center gap-1.5 font-bold text-[#d9eef5] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Live site <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-satoshi inline-flex min-h-8 items-center gap-1.5 text-white/75 hover:text-white hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Github aria-hidden="true" size={16} /> Source
            </a>
          )}
          {project.preview && (
            <span className="font-satoshi text-xs text-white/45">Coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
