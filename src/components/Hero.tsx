"use client";

import { useGSAP } from "@gsap/react";
import type { Container } from "@tsparticles/engine";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { MoveDown } from "lucide-react";
import { LightRays } from "@/components/ui/light-rays";
import { Meteors } from "@/components/ui/meteors";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

gsap.registerPlugin(ScrollTrigger);

const MAX_WIND = 0.8;

function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const particlesContainer = useRef<Container | null>(null);
  const targetWind = useRef(0);
  const currentWind = useRef(0);
  const windFrame = useRef<number | null>(null);

  const animateWind = useCallback(() => {
    const particles = particlesContainer.current?.particles;
    if (!particles) {
      windFrame.current = null;
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targetWind.current = 0;
    }

    currentWind.current += (targetWind.current - currentWind.current) * 0.08;
    if (Math.abs(targetWind.current - currentWind.current) < 0.001) {
      currentWind.current = targetWind.current;
    }

    const horizontal = currentWind.current;
    const vertical = Math.sqrt(1 - horizontal * horizontal);
    for (let index = 0; index < particles.count; index++) {
      const particle = particles.get(index);
      if (particle) {
        particle.velocity.x = horizontal;
        particle.velocity.y = vertical;
      }
    }

    windFrame.current =
      targetWind.current !== 0 || currentWind.current !== 0
        ? requestAnimationFrame(animateWind)
        : null;
  }, []);

  const startWind = useCallback(() => {
    if (windFrame.current === null) {
      windFrame.current = requestAnimationFrame(animateWind);
    }
  }, [animateWind]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = container.current?.getBoundingClientRect();
    if (!bounds) {
      return;
    }

    const position = (event.clientX - bounds.left) / bounds.width;
    targetWind.current = Math.max(
      -MAX_WIND,
      Math.min(MAX_WIND, (position * 2 - 1) * MAX_WIND),
    );
    startWind();
  };

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".front-mountain", {
          yPercent: -22,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(".name-text", {
          y: () => (container.current?.clientHeight ?? 0) * 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        gsap.to(".scroll-text", {
          opacity: 0,
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: () =>
              `+=${Math.min(250, (container.current?.clientHeight ?? 0) * 0.35)}`,
            scrub: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope: container },
  );

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });

    return () => {
      if (windFrame.current !== null) {
        cancelAnimationFrame(windFrame.current);
      }
      particlesContainer.current = null;
    };
  }, []);

  return (
    <div
      id="hero"
      ref={container}
      className="relative flex h-svh w-full overflow-hidden bg-[#EBEBEB] dark:bg-[#020305]"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        targetWind.current = 0;
        startWind();
      }}
    >
      {/* Sun Rays (day only, behind mountains and name) */}
      <LightRays
        className="z-0 dark:hidden"
        color="rgba(255, 205, 95, 0.35)"
        count={3}
        blur={22}
        glow={false}
        speed={16}
        length="100vh"
      />

      {/* Aurora Light Rays (night only, behind mountains and name) */}
      <LightRays
        className="z-0 hidden dark:block"
        color="rgba(16, 220, 150, 0.35)"
        count={4}
        blur={40}
        speed={10}
        length="100vh"
      />
      <LightRays
        className="z-0 hidden dark:block"
        color="rgba(40, 150, 255, 0.35)"
        count={3}
        blur={44}
        speed={13}
        length="90vh"
      />

      {/* Meteors (night only) */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden dark:block">
        <Meteors number={2} angle={75} minDelay={1} maxDelay={10} minDuration={14} maxDuration={20} />
      </div>

      {/* Particles Component */}
      {init && (
        <Particles
          className="absolute inset-0 z-5 h-full w-full overflow-hidden"
          options={{
            fullScreen: { enable: false },
            particles: {
              color: {
                value: "#fff",
              },
              number: {
                value: 500,
              },
              opacity: {
                value: { min: 0.3, max: 1 },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
              move: {
                direction: "bottom",
                enable: true,
                speed: { min: 2, max: 7 },
                straight: true,
              },
            },
          }}
          id="tsparticles"
          particlesLoaded={async (loaded) => {
            particlesContainer.current = loaded ?? null;
            startWind();
          }}
        />
      )}
      {/* Background Mountain */}
      <div className="absolute -top-20 left-0 z-1 h-[90%] w-full">
        <Image
          src="/images/back-mountain.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover blur-[0.6px] dark:brightness-[0.78] dark:saturate-[0.8]"
        />
      </div>

      {/* Foreground Mountain */}
      <div className="absolute inset-x-0 bottom-0 z-7 h-[12%] bg-[#1a222b]" />
      <div className="front-mountain absolute -bottom-[12%] left-0 z-10 h-[80%] w-full">
        <Image
          src="/images/front-mountain.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Introduction */}
      <div
        id="name"
        className="name-text absolute inset-x-0 top-0 z-2 flex flex-col items-center gap-2 px-4 pt-10 text-center sm:pt-14 lg:pt-16"
      >
        <h1 className="text-[#1a2229] dark:text-[#EBEBEB] font-satoshi font-black text-5xl md:text-6xl lg:text-8xl">
          Mitchell Brenner
        </h1>
        <p className="font-satoshi text-[11px] font-medium uppercase tracking-[0.16em] text-[#1a2229] dark:text-[#EBEBEB] sm:text-xs md:text-sm">
          Full-Stack Software Engineer · SF
        </p>
      </div>

      {/* Theme Toggle (sky + name only) */}
      <AnimatedThemeToggler
        className="absolute right-4 top-4 z-40 cursor-pointer rounded-full p-2 text-[#1a2229] transition-colors hover:bg-black/5 dark:text-[#EBEBEB] dark:hover:bg-white/10 sm:right-6 sm:top-6 [&_svg]:size-5"
        aria-label="Toggle sky theme"
      />

      {/* Scroll Text */}
      <div
        className=" cursor-pointer absolute bottom-12 sm:bottom-0 p-4 z-36 w-full flex justify-center items-center scroll-text"
        onClick={() => {
          document
            .getElementById("experience")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className="cursor-pointer text-white flex flex-col space-y-3 items-center justify-center p-3">
          <p className="font-satoshi -rotate-90 mr-1">scroll</p>
          <MoveDown />
        </div>
      </div>
    </div>
  );
}

export default Hero;
