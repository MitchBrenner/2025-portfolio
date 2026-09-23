function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative z-10 px-6 pb-14 pt-16 text-white sm:px-10 sm:pb-16 sm:pt-20 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14">
        <div>
          <p className="font-satoshi text-xs font-medium tracking-[0.2em] text-white/50">
            01 / EXPERIENCE
          </p>
          <h2
            id="experience-heading"
            className="font-satoshi mt-4 max-w-md text-3xl font-bold tracking-tight sm:text-4xl"
          >
            What I&apos;m building now.
          </h2>
        </div>

        <div className="border-t border-white/20 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div>
              <h3 className="font-satoshi text-2xl font-bold">OrderIQ</h3>
              <p className="font-satoshi mt-1 text-sm text-white/65">
                Software Engineer
              </p>
            </div>
            <p className="font-satoshi text-sm text-white/55 sm:pt-1 sm:text-right">
              Aug 2025 — Present
            </p>
          </div>

          <p className="font-satoshi mt-5 max-w-xl text-base leading-relaxed text-white/75">
            I build across OrderIQ&apos;s restaurant platform—from the data and
            APIs behind it to the POS, web, and mobile experiences people use
            every day.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
