"use client";

import { Check, FileText, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { socialLinks } from "@/lib/links";

const iconLinkClassName =
  "flex size-9 cursor-pointer items-center justify-center rounded-full text-white/55 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9eef5]";

function Contact() {
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
    <footer
      id="contact"
      className="relative z-10 px-6 text-white sm:px-10 lg:px-16"
    >
      <div className="font-satoshi mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Mitchell Brenner · San Francisco, CA
        </p>

        <nav aria-label="Social links" className="flex items-center gap-1">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconLinkClassName}
          >
            <Github {...iconProps} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconLinkClassName}
          >
            <Linkedin {...iconProps} />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label={
              copied ? "Email copied" : `Copy email ${socialLinks.email}`
            }
            className={`relative ${iconLinkClassName}`}
          >
            {copied ? <Check {...iconProps} /> : <Mail {...iconProps} />}
            {copied && (
              <span className="absolute bottom-full mb-1 whitespace-nowrap text-[11px] text-[#9ac8d6]">
                Copied
              </span>
            )}
            <span aria-live="polite" className="sr-only">
              {copied ? "Email copied to clipboard" : ""}
            </span>
          </button>
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className={iconLinkClassName}
          >
            <FileText {...iconProps} />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Contact;
