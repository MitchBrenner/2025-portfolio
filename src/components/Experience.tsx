import Image from "next/image";

type Entry = {
  name: string;
  title: string;
  date: string;
  current?: boolean;
  logo: { src: string; alt: string; className?: string };
  description?: string;
  highlights?: string[];
};

const entries: Entry[] = [
  {
    name: "OrderIQ",
    title: "Software Engineer",
    date: "Aug 2025 — Present · Remote",
    current: true,
    logo: {
      src: "/images/orderiq-logo.png",
      alt: "OrderIQ logo",
      className: "scale-[1.35] object-cover",
    },
    description:
      "I build end-to-end features for a multi-tenant restaurant platform used across POS, web, and mobile.",
    highlights: [
      "Designed and built a reservation system end to end, from database schema and validated APIs to a bitmask-based O(n) availability algorithm for real-time scheduling.",
      "Architected an incentives program with tier-based rewards, configurable promotions, and earning and redemption flows.",
      "Built and maintained backend architecture and cross-platform features during a company merger and full system rebuild.",
    ],
  },
  {
    // Word joiners keep "Wisconsin–Madison" from breaking at the dash
    name: "University of Wisconsin\u2060–\u2060Madison",
    title: "B.S. Computer Science & Data Science",
    date: "Class of 2024 · 3.5 GPA",
    logo: {
      src: "/images/uw-madison-crest.png",
      alt: "University of Wisconsin–Madison crest",
      className: "object-contain",
    },
    description:
      "Double majored in Computer Science and Data Science, with coursework spanning algorithms and data structures, machine organization, databases, and user interfaces, plus electives in artificial intelligence and virtual reality.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative z-10 px-6 pb-14 pt-10 text-white sm:px-10 sm:pb-16 sm:pt-14 lg:px-16"
    >
      {/* Ambient glows (teal near the timeline, blue-violet on the right) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="ambient-glow absolute -left-[10%] top-[5%] h-[36rem] w-[36rem] bg-[radial-gradient(circle,rgb(154_200_214/0.10),transparent_65%)]" />
        <div className="ambient-glow ambient-glow-alt absolute -right-[8%] top-[35%] h-[40rem] w-[40rem] bg-[radial-gradient(circle,rgb(124_108_255/0.09),transparent_65%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <h2
          id="experience-heading"
          className="reveal-on-scroll font-satoshi text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Experience
        </h2>

        <ol className="mt-8 sm:mt-9">
          {entries.map((entry, index) => (
            <li
              key={entry.name}
              className="reveal-on-scroll relative grid gap-5 pb-12 last:pb-0 md:grid-cols-[360px_minmax(0,1fr)] md:gap-12"
            >
              {/* Timeline line connecting this entry's logo to the next */}
              {index < entries.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-7 top-17 hidden w-px md:block -translate-x-1/2 bg-linear-to-b from-white/20 to-white/5"
                />
              )}

              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                  <Image
                    src={entry.logo.src}
                    alt={entry.logo.alt}
                    fill
                    sizes="56px"
                    className={entry.logo.className}
                  />
                </div>
                <div>
                  <h3 className="font-satoshi text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                    {entry.name}
                  </h3>
                  <p className="font-satoshi mt-1 text-base text-white/70">
                    {entry.title}
                  </p>
                  <p className="font-satoshi mt-3 flex items-center gap-2 text-sm text-white/50">
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${
                        entry.current ? "bg-[#9ac8d6]" : "bg-white/25"
                      }`}
                    />
                    {entry.date}
                  </p>
                </div>
              </div>

              {entry.description && (
                <div className="md:pt-1">
                  <p className="font-satoshi max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg sm:leading-8">
                    {entry.description}
                  </p>
                  {entry.highlights && (
                    <ul className="mt-4 max-w-2xl space-y-3">
                      {entry.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="font-satoshi flex gap-3 text-[15px] leading-relaxed text-white/65 sm:text-base"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.7em] h-px w-3 shrink-0 bg-[#9ac8d6]/70"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
