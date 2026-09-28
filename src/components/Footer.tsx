"use client";

import { Check, FileText, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useCopyEmail } from "@/hooks/use-copy-email";
import { socialLinks } from "@/lib/links";

const iconLinkClassName =
  "relative flex size-9 cursor-pointer items-center justify-center rounded-full text-white/55 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist after:absolute after:-inset-1 after:content-['']";

// `buildYear` comes from the server so the first render matches the static
// HTML; the effect then corrects it if the site hasn't been rebuilt this year
function Footer({ buildYear }: { buildYear: number }) {
  const { copied, copyEmail } = useCopyEmail();
  const [year, setYear] = useState(buildYear);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const iconProps = { size: 18, strokeWidth: 1.5, "aria-hidden": true };

  return (
    <footer
      id="contact"
      className="relative z-10 px-6 text-white sm:px-10 lg:px-16"
    >
      <div className="font-satoshi mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8">
        <p className="text-xs text-white/55">
          © {year} Mitchell Brenner · San Francisco, CA
        </p>

        <nav aria-label="Footer links" className="flex items-center gap-1">
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
            className={iconLinkClassName}
          >
            {copied ? <Check {...iconProps} /> : <Mail {...iconProps} />}
            {copied && (
              <span className="absolute bottom-full mb-1 whitespace-nowrap text-[11px] text-accent">
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

export default Footer;
