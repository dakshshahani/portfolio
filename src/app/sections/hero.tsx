"use client";

import { Button } from "@/components/ui/button";
import { ScrambleCycle } from "@/components/effects/ScrambleCycle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // start fading out when hero scrolls away
  });

  // Fade opacity from 1→0 as user scrolls
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <>
      {/* ----------- Background Video ----------- */}
      <motion.video
        style={{ opacity }}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </motion.video>
      {/* ---------- Desktop Hero ---------- */}
      <section
        id="home"
        className="hidden md:flex min-h-screen px-4 justify-around items-center gap-8 bg-background"
      >
        <div className="flex flex-col gap-8">
          {/* ---------- Name & Intro ---------- */}
          <h1 className="text-6xl font-bold">
            Hi, I’m <span className="text-primary">Daksh</span>
          </h1>

          {/* ---------- Scramble Text ---------- */}
          <h2 className="text-2xl sm:text-3xl font-light">
            I’m a{" "}
            <span className="text-primary font-sans">
              <ScrambleCycle
                phrases={[
                  "3rd Year CS Student",
                  "Software Developer",
                  "Hackathon Organizer",
                  "Motion Designer",
                  "Video Editor",
                  "Photographer",
                ]}
                delay={2000}
              />
            </span>
          </h2>
        </div>

        {/* ---------- About line / CTA ---------- */}
        <div className="flex flex-col items-center text-center gap-8">
          <p className="text-muted-foreground max-w-xl p-8">
            I'm a third-year Computer Science student at the University of
            British Columbia with a passion for creating seamless web
            experiences. I love working with JavaScript frameworks like React
            and Express.js to build efficient, engaging, and user-centered
            applications.
          </p>
          {/* ---------- Buttons ---------- */}
          <div className="flex gap-4 items-center">
            <Button asChild size="lg" className="mt-6 m-0">
              <a href="#contact">Get in Touch!</a>
            </Button>
            <a
              href="https://github.com/dakshshahani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/dakshit-shahani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Mobile Hero ---------- */}
      <section className="flex md:hidden flex-col justify-center items-center text-center min-h-screen px-6 gap-8 bg-background">
        {/* ---------- Name & Intro (Smaller Text) ---------- */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold leading-tight">
            Hi, I’m <span className="text-primary">Daksh Shahani</span>
          </h1>

          <h2 className="text-xl font-light">
            I’m a{" "}
            <span className="text-primary font-sans">
              <ScrambleCycle
                phrases={[
                  "3rd Year CS Student",
                  "Software Developer",
                  "Hackathon Organizer",
                  "Motion Designer",
                  "Video Editor",
                  "Photographer",
                ]}
                delay={2000}
              />
            </span>
          </h2>
        </div>

        {/* ---------- About Text / CTA ---------- */}
        <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
          I'm a third-year Computer Science student at UBC passionate about
          crafting smooth, dynamic web experiences using React and Express.js.
        </p>
        {/* ---------- Buttons ---------- */}
        <div className="flex gap-4 items-center">
          <Button asChild size="lg" className="mt-6 m-0">
            <a href="#contact">Get in Touch!</a>
          </Button>
          <a
            href="https://github.com/dakshshahani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/dakshit-shahani/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </section>
    </>
  );
}
