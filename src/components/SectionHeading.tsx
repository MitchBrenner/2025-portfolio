import type { ReactNode } from "react";

// Shared h2 style for the page sections
function SectionHeading({
  id,
  className = "",
  reveal = true,
  children,
}: {
  id: string;
  className?: string;
  // Off when a parent already fades the heading in with its content
  reveal?: boolean;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className={`${reveal ? "reveal-on-scroll " : ""}font-satoshi text-3xl font-bold tracking-tight sm:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
