"use client";

import { Check, FileText, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { socialLinks } from "@/lib/links";

const itemClassName =
  "group relative flex size-9 cursor-pointer items-center justify-center rounded-full opacity-70 transition duration-300 hover:-translate-y-0.5 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current";

function Label({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-none absolute top-full mt-1 whitespace-nowrap font-satoshi text-[10px] font-medium uppercase tracking-[0.2em] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
      {children}
    </span>
  );
}

function HeroLinks() {
  const [copied, setCopied] = useState(false);
  const copiedTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimeout.current) {
        clearTimeout(copiedTimeout.current);
      }
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      if (copiedTimeout.current) {
        clearTimeout(copiedTimeout.current);
      }
      copiedTimeout.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${socialLinks.email}`;
    }
  };

  const iconProps = { size: 18, strokeWidth: 1.5, "aria-hidden": true };

  return (
    <nav
      aria-label="Social links"
      className="hero-intro-links mt-2 flex items-center gap-3 text-[#1a2229] dark:text-[#EBEBEB] sm:gap-4"
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
