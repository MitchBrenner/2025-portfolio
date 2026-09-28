"use client";

import { Check, FileText, Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { useCopyEmail } from "@/hooks/use-copy-email";
import { socialLinks } from "@/lib/links";

const itemClassName =
  "group relative flex size-9 cursor-pointer items-center justify-center rounded-full opacity-70 transition duration-300 hover:-translate-y-0.5 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current after:absolute after:-inset-1 after:content-['']";

function Label({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-none absolute top-full mt-1 whitespace-nowrap font-satoshi text-[10px] font-medium uppercase tracking-[0.2em] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
      {children}
    </span>
  );
}

function HeroLinks() {
  const { copied, copyEmail } = useCopyEmail();

  const iconProps = { size: 18, strokeWidth: 1.5, "aria-hidden": true };

  return (
    <nav
      aria-label="Social links"
      className="hero-intro-links mt-2 flex items-center gap-3 text-ink dark:text-daylight sm:gap-4"
    >
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={itemClassName}
      >
        <Github {...iconProps} />
        <Label>GitHub</Label>
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={itemClassName}
      >
        <Linkedin {...iconProps} />
        <Label>LinkedIn</Label>
      </a>
      <button
        type="button"
        onClick={copyEmail}
        aria-label={copied ? "Email copied" : `Copy email ${socialLinks.email}`}
        className={itemClassName}
      >
        {copied ? <Check {...iconProps} /> : <Mail {...iconProps} />}
        <Label>{copied ? "Copied" : "Email"}</Label>
        <span aria-live="polite" className="sr-only">
          {copied ? "Email copied to clipboard" : ""}
        </span>
      </button>
      <a
        href={socialLinks.resume}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
        className={itemClassName}
      >
        <FileText {...iconProps} />
        <Label>Resume</Label>
      </a>
    </nav>
  );
}

export default HeroLinks;
