"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrambleCycle } from "@/components/effects/ScrambleCycle";

export function Hero() {
  return (
    <section
      id="home"
      className="py-24 px-4 flex flex-col items-center text-center gap-8 bg-background"
    >
      {/* ---------- Name & Intro ---------- */}
      <h1 className="text-5xl font-bold">
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

      {/* ---------- About line / CTA ---------- */}
      <p className="text-muted-foreground max-w-xl">
        I love building web experiences and creating digital content that combines code, motion, and design.
      </p>

      <div className="flex flex-wrap gap-2 justify-center">
        <Badge>TypeScript</Badge>
        <Badge>Next.js</Badge>
        <Badge>TailwindCSS</Badge>
        <Badge>shadcn/ui</Badge>
      </div>

      <Button asChild size="lg" className="mt-6">
        <a href="#projects">View My Work</a>
      </Button>
    </section>
  );
}