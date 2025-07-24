"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { MoveDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".back-mountain", {
        y: 0,
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".front-mountain", {
        y: -320,
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".name-text", {
        y: 800,
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".scroll-text", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=250",
          scrub: true,
        },
      });
    },
    { scope: container }
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
  }, []);

  return (
    <div
      id="hero"
      ref={container}
      className="relative flex w-full h-screen bg-[#EBEBEB]"
    >
      {/* Particles Component */}
      {init && (
        <Particles
          className="h-[50vh] overflow-hidden absolute top-0 left-0 z-5"
          options={{
            particles: {
              color: {
                value: "#fff",
              },
              number: {
                value: 300,
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
                direction: "bottom-right",
                enable: true,
                speed: { min: 2, max: 7 },
                straight: true,
              },
            },
          }}
          id="tsparticles"
          //   particlesLoaded={particlesLoaded}
        />
      )}
      {/* Background Mountain */}
      <div className="absolute -top-20 left-0 w-full h-[90%] z-1 back-mountain">
        <Image
          src="/images/back-mountain.png"
          alt="Back Mountain"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Foreground Mountain */}
      <div className="absolute -bottom-40 left-0 w-full h-[80%] z-10 front-mountain">
        <Image
          src="/images/front-mountain.png"
          alt="Front Mountain"
          fill
          priority
          className="object-cover"
        />

        {/* 1a2229 */}
      </div>
      <div className="absolute bg-[#1a2229] w-full h-100 z-7 -bottom-64 md:-bottom-48" />

      {/* Name Text */}
      <div
        id="name"
        className="absolute flex w-full mt-24 justify-center items-center text-center name-text z-2"
      >
        <h1 className="text-[#1a2229] font-satoshi font-black text-5xl md:text-6xl lg:text-8xl">
          Mitch Brenner
        </h1>
      </div>

      {/* Scroll Text */}
      <div
        className=" cursor-pointer absolute bottom-12 sm:bottom-0 p-4 z-36 w-full flex justify-center items-center scroll-text"
        onClick={() => {
          document
            .getElementById("about")
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
