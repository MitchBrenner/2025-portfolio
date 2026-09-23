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
          yPercent: -14,
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
      className="relative flex h-svh w-full overflow-hidden bg-[#EBEBEB]"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        targetWind.current = 0;
        startWind();
      }}
    >
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
          className="object-cover"
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
        <h1 className="text-[#1a2229] font-satoshi font-black text-5xl md:text-6xl lg:text-8xl">
          Mitch Brenner
        </h1>
        <p className="font-satoshi text-[11px] font-medium uppercase tracking-[0.16em] text-[#1a2229] sm:text-xs md:text-sm">
          Full-Stack Software Engineer · SF
        </p>
      </div>

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
