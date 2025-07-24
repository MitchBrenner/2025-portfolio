"use client";

import { techStack } from "@/lib/tech";
import React, { useRef } from "react";
import Tech from "./Tech";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "@/lib/projects";
import ProjectCard from "./Card";
import Image from "next/image";

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
          // scrub: true,
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
      // Project card animation
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8,
        delay: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-item",
          start: "top 70%",
          // scrub: true,
        },
      });
      gsap.to(".topo", {
        scale: 1.5,
        scrollTrigger: {
          trigger: ".topo",
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
      className="relative w-full min-h-screen bg-[#1a2229] z-72 p-4 sm:p-8 lg:p-16 overflow-hidden"
    >
      <div>
        <Image
          src="/images/top.jpg"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover opacity-5 topo"
          fill
        />
        {/* <div className="absolute inset-0 bg-[#1a2229] opacity-10 mix-blend-multiply" /> */}
      </div>

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
        <div className="flex flex-row flex-wrap gap-2">
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
          <h1 className="align">Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <ProjectCard
                title={project.title}
                image={project.image}
                tech={project.tech}
                description={project.description}
                githubUrl={project.githubLink}
                liveUrl={project.liveLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
