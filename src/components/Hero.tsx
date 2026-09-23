"use client";

import { useGSAP } from "@gsap/react";
import type { Container } from "@tsparticles/engine";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { LightRays } from "@/components/ui/light-rays";
import { Meteors } from "@/components/ui/meteors";
import HeroLinks from "@/components/HeroLinks";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

gsap.registerPlugin(ScrollTrigger);

const MAX_WIND = 0.8;
const NAME = "Mitchell Brenner";
const NAME_INTRO_DELAY = 0.4;
const NAME_LETTER_STAGGER = 0.025;

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
        <Meteors
          number={2}
          angle={75}
          minDelay={1}
          maxDelay={10}
          minDuration={14}
          maxDuration={20}
        />
      </div>

      {/* Particles Component */}
      {init && (
        <Particles
          className="pointer-events-none absolute inset-0 z-5 h-full w-full overflow-hidden"
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
      <div className="hero-intro-back-mountain absolute -top-20 left-0 z-1 h-[90%] w-full">
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
          className="hero-intro-front-mountain object-cover"
        />
      </div>

      {/* Introduction */}
      <div
        id="name"
        className="name-text absolute inset-x-0 top-0 z-2 flex flex-col items-center gap-2 px-4 pt-10 text-center sm:pt-14 lg:pt-16"
      >
        <h1
          aria-label={NAME}
          className="text-[#1a2229] dark:text-[#EBEBEB] font-satoshi font-black text-[clamp(2rem,10.5vw,3.75rem)] md:text-6xl lg:text-8xl"
        >
          {NAME.split(" ").map((word, wordIndex, words) => {
            const offset = words
              .slice(0, wordIndex)
              .reduce((total, previous) => total + previous.length, 0);
            return (
              <Fragment key={word}>
                {wordIndex > 0 && " "}
                <span aria-hidden className="inline-block whitespace-nowrap">
                  {word.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className="hero-intro-letter inline-block"
                      style={{
                        animationDelay: `${NAME_INTRO_DELAY + (offset + letterIndex) * NAME_LETTER_STAGGER}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </Fragment>
            );
          })}
        </h1>
        <p className="hero-intro-role font-satoshi text-[11px] font-medium uppercase tracking-[0.16em] text-[#1a2229] dark:text-[#EBEBEB] sm:text-xs md:text-sm">
          Full-Stack Software Engineer · SF
        </p>
        <HeroLinks />
      </div>

      {/* Theme Toggle (sky + name only) */}
      <AnimatedThemeToggler
        className="hero-intro-fade absolute right-4 top-4 z-40 cursor-pointer rounded-full p-2 text-[#1a2229] transition-colors hover:bg-black/5 dark:text-[#EBEBEB] dark:hover:bg-white/10 sm:right-6 sm:top-6 [&_svg]:size-5"
        aria-label="Toggle sky theme"
      />

      {/* Intro Fog: screen clears, then fog banks drift off the mountains */}
      <div
        aria-hidden
        className="hero-intro-fog pointer-events-none absolute inset-0 z-50 bg-[#EBEBEB] dark:bg-[#020305]"
      />
      <div
        aria-hidden
        className="hero-fog-bank hero-fog-drift-left pointer-events-none absolute -inset-x-1/4 top-[42%] z-8 h-[38%] text-white dark:text-[#8a9bb0]"
      />
      <div
        aria-hidden
        className="hero-fog-bank hero-fog-drift-right pointer-events-none absolute -inset-x-1/4 top-[50%] z-8 h-[34%] text-white dark:text-[#8a9bb0]"
      />
      <div
        aria-hidden
        className="hero-fog-bank hero-fog-drift-low pointer-events-none absolute -inset-x-1/4 -bottom-[6%] z-20 h-[34%] text-white dark:text-[#8a9bb0]"
      />

      {/* Scroll Indicator */}
      <button
        type="button"
        aria-label="Scroll to experience"
        className="scroll-text group absolute bottom-10 left-1/2 z-36 -translate-x-1/2 cursor-pointer p-3 sm:bottom-8"
        onClick={() => {
          document
            .getElementById("experience")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="hero-intro-fade flex flex-col items-center gap-3 text-white/70 transition-colors duration-300 group-hover:text-white">
          <span className="mr-[-0.3em] font-satoshi text-[10px] font-medium uppercase tracking-[0.3em] transition-[letter-spacing,margin] duration-500 group-hover:mr-[-0.45em] group-hover:tracking-[0.45em]">
            Scroll
          </span>
          <span className="flex flex-col items-center">
            <span className="relative h-12 w-px overflow-hidden bg-current/30 transition-[height] duration-500 group-hover:h-16">
              <span className="scroll-indicator-line absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-transparent to-current" />
            </span>
            <svg
              aria-hidden
              viewBox="0 0 12 8"
              className="-mt-[6.5px] h-2 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 1 6 6.5 11 1" />
            </svg>
          </span>
        </span>
      </button>
    </div>
  );
}

export default Hero;
