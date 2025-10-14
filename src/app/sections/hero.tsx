"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrambleCycle } from "@/components/effects/ScrambleCycle";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen px-4 flex justify-around items-center gap-8 bg-background"
    >
        <div className="flex flex-col gap-8">
      {/* ---------- Name & Intro ---------- */}
      <h1 className="text-6xl font-bold">
        Hi, I’m <span className="text-primary">Daksh Shahani</span>
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
      <p className="text-muted-foreground max-w-xl">
        I'm a third-year Computer Science student at the University of British Columbia with a passion for creating seamless web experiences. I love working with JavaScript frameworks like React and Express.js to build efficient, engaging, and user-centered applications.
      </p>
      <Button asChild size="lg" className="mt-6">
        <a href="#projects">View My Work</a>
      </Button>
      </div>

    </section>
  );
}