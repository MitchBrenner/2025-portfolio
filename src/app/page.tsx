import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { personJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <div className="relative isolate overflow-clip bg-page text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[url('/images/topographic.jpg')] bg-[length:900px_auto] bg-top opacity-60 mix-blend-multiply [mask-image:linear-gradient(to_bottom,transparent,black_64px,black)]"
        />
        <Experience />
        <Projects />
        <TechStack />
        <About />
        <Footer buildYear={new Date().getFullYear()} />
      </div>
    </main>
  );
}
