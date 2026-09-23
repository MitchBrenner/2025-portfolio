import Image from "next/image";

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative z-10 px-6 pb-14 pt-16 text-white sm:px-10 sm:pb-16 sm:pt-20 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2
          id="experience-heading"
          className="font-satoshi text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Experience
        </h2>

        <article className="mt-8 grid gap-7 sm:mt-9 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
          <div className="flex items-start gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/orderiq-logo.png"
                alt="OrderIQ logo"
                fill
                sizes="56px"
                className="scale-[1.35] object-cover"
              />
            </div>
            <div>
              <h3 className="font-satoshi text-3xl font-bold tracking-tight">
                OrderIQ
              </h3>
              <p className="font-satoshi mt-1 text-base text-white/70">
                Software Engineer
              </p>
              <p className="font-satoshi mt-4 flex items-center gap-2 text-sm text-white/50">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#9ac8d6]" />
                Aug 2025 — Present
              </p>
            </div>
          </div>

          <div className="md:pt-1">
            <p className="font-satoshi max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg sm:leading-8">
              At OrderIQ, I build end-to-end features for a restaurant platform
              that teams and customers use every day. My work spans backend
              services and data through POS, web, and mobile experiences,
              turning complex restaurant workflows into reliable, intuitive
              tools that work together across the product.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
