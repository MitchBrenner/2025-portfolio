import { useEffect, useRef, useState } from "react";
import { socialLinks } from "@/lib/links";

// Copies the email address and flags `copied` briefly;
// falls back to opening the mail app if the clipboard is blocked
export function useCopyEmail(resetAfter = 1800) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCopied(false), resetAfter);
    } catch {
      window.location.href = `mailto:${socialLinks.email}`;
    }
  };

  return { copied, copyEmail };
}
