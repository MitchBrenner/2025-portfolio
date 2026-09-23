import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="relative isolate overflow-hidden bg-[#1a222b] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[url('/images/topographic.jpg')] bg-[length:900px_auto] bg-top opacity-60 mix-blend-multiply [mask-image:linear-gradient(to_bottom,transparent,black_64px,black)]"
        />
        <Experience />
        <About />
      </div>
    </main>
  );
}
