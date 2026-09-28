import Image from "next/image";

function Intro() {
  return (
    <section
      id="about-me"
      aria-labelledby="about-heading"
      className="relative z-10 px-6 pb-16 pt-14 text-white sm:px-10 sm:pb-24 sm:pt-16 lg:px-16"
    >
      {/* Ambient glow (bottom right, continuing the zigzag down the page) */}
      <div
        aria-hidden="true"
        className="ambient-glow ambient-glow-alt pointer-events-none absolute -bottom-[10%] -right-[10%] -z-10 h-[40rem] w-[40rem] bg-[radial-gradient(circle,rgb(154_200_214/0.11),transparent_65%)]"
      />

      <div className="reveal-on-scroll mx-auto max-w-6xl">
        <h2
          id="about-heading"
          className="font-satoshi mb-8 text-3xl font-bold tracking-tight sm:mb-9 sm:text-4xl"
        >
          About
        </h2>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
          <div className="relative aspect-[4/5] w-40 shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:w-48">
            <Image
              src="/images/about-snowboarding.jpg"
              alt="Mitchell snowboarding in fresh powder"
              fill
              sizes="192px"
              className="object-cover"
            />
          </div>

          <div className="font-satoshi min-w-0 flex-1 space-y-4 text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
            <p>
              I&rsquo;m a full-stack engineer in San Francisco, building
              software at OrderIQ that helps restaurants run and grow.
            </p>
            <p>
              I care a lot about how a product feels to use. Whether I&rsquo;m
              on the front end or deeper in the stack, I like making complex
              things feel simple, and I notice the small details most people
              skip.
            </p>
            <p>
              Outside of work, I&rsquo;m usually lifting, hiking, camping, or
              snowboarding. I recently got into running and chess, where
              I&rsquo;m regularly getting humbled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
