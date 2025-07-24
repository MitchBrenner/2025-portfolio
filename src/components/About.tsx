"use client";

import { techStack } from "@/lib/tech";
import React, { useRef } from "react";
import Tech from "./Tech";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".tech-item", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-item",
          start: "top 90%",
        },
      });
      gsap.to(".blob", {
        x: -200,
        opacity: 0.5,
        scrollTrigger: {
          trigger: ".blob",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      id="about"
      ref={container}
      className="relative w-full min-h-screen bg-[#1a2229] z-200 p-20"
    >
      {/* Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden blob">
        <div className="absolute top-[20%] left-[15%] w-52 h-52 bg-purple-500 rounded-full opacity-15 blur-2xl" />
      </div>

      {/* Tech Section */}
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center space-x-4 mb-8 text-white text-5xl italic">
          <h1>Tech</h1>
        </div>

        {/* tech items */}
        <div className="flex flex-row flex-wrap gap-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="tech-item">
              <Tech name={tech.name} image={tech.image} />
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-5xl mx-auto mt-20">
        <div className="flex items-center space-x-4 mb-8 text-white text-5xl italic">
          <h1>Projects</h1>
        </div>
        <p className="text-gray-400 text-lg">
          Check out my projects on{" "}
          <a
            href="https://github.com/yourusername"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
