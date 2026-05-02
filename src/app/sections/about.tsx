"use client";

import { MorphingText } from "@/components/ui/morphing-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { useEffect, useState } from "react";





export function About() {
  return (
    <>
      {/*
      <section
        id="about"
        className="py-24 bg-transparent flex flex-col md:flex-row items-start justify-around gap-16"
      >
        <div className="text-left md:text-left bg-transparent md:max-w-xl">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Hey, I'm <span className="text-primary">Daksh</span>!
            </h1>
            <div className="flex flex-wrap items-baseline gap-3">
              <p className="text-xl font-light">I'm a</p>
              <MorphingText
                texts={[
                  "3rd Year CS Student",
                  "Software Developer",
                  "Hackathon Organizer",
                  "Motion Designer",
                  "Video Editor",
                  "Photographer",
                ]}
                morphTime={1.2}
                cooldownTime={1.6}
                className="mx-0 h-10 w-auto max-w-none text-left text-2xl md:h-12 md:text-3xl"
              />
            </div>
          </div>
        </div>

        <div className="text-left md:text-left bg-transparent">
          <h3 className="py-2 text-2xl">Currently I'm ..</h3>
          <ul className="space-y-1 text-md pl-2">
            <li>🔭 Full Stack Developer</li>
            <li>🎥 Media Specialist @ nwPlus</li>
            <li> 👨‍💻 working on cloud native projects!</li>
            <li>🧠 exploring cloud infrastructure on AWS</li>
          </ul>
          <h3 className="py-2 text-2xl">I'm passionate about...</h3>
          <ul className="space-y-1 text-md pl-2">
            <li>💻 Web Development</li>
            <li>🎨 Motion Design</li>
            <li>📸 Photography</li>
            <li>🧠 Maximizing Productivity</li>
          </ul>
          <h3 className="py-2 text-2xl">I also like...</h3>
          <ul className="space-y-1 text-md pl-2">
            <li>🏐 Volleyball</li>
            <li>🏎️ F1</li>
            <li>🍵 Matcha</li>
          </ul>
        </div>
      </section>
      */}

      <section
        id="about"
        className="py-24 md:px-24 px-8 gap-8 flex flex-col md:flex-row md:items-center justify-around"
      >
        {/* Left: heading + morphing text */}
        <div className="flex flex-col gap-4">
          <TextAnimate
            as="h1"
            animation="blurInUp"
            by="word"
            delay={0}
            once
            className="text-5xl md:text-6xl font-bold text-foreground"
          >
            {"Hey, I'm Daksh 👨‍💻"}
          </TextAnimate>

          <div className="flex flex-col gap-1">
            <TextAnimate
              as="p"
              animation="blurInUp"
              by="text"
              delay={0.3}
              once
              className="text-3xl font-light text-foreground"
            >
              {"I'm a"}
            </TextAnimate>
            <MorphingText
              texts={[
                "CS Student",
                "Software Developer",
                "Hackathon Organizer",
                "Motion Designer",
                "Video Editor",
                "Photographer",
              ]}
              morphTime={1.2}
              cooldownTime={1.6}
              animationDelay={0.2}
              className="text-3xl md:text-3xl h-10 text-foreground"
            />
          </div>
        </div>

        {/* Right: lists */}
        <div className="flex flex-col gap-6 text-left">
          <div>
            <TextAnimate
              as="h3"
              animation="blurInUp"
              by="text"
              delay={0.5}
              once
              className="py-2 text-2xl text-foreground"
            >
              {"Currently I'm .."}
            </TextAnimate>
            <ul className="space-y-1 text-md pl-2 text-muted-foreground">
              {[
                "💳 SWE Intern @ Mastercard",
                "👨‍💻 Dev @ nwPlus",
                "💻 working on cloud native projects!",
                "🧠 exploring and learning Swift!",
              ].map((item, i) => (
                <TextAnimate
                  key={item}
                  as="li"
                  animation="blurInUp"
                  by="text"
                  delay={0.6 + i * 0.08}
                  once
                  className="text-foreground"
                >
                  {item}
                </TextAnimate>
              ))}
            </ul>
          </div>

          <div>
            <TextAnimate
              as="h3"
              animation="blurInUp"
              by="text"
              delay={1.0}
              once
              className="py-2 text-2xl text-foreground"
            >
              {"I'm passionate about..."}
            </TextAnimate>
            <ul className="space-y-1 text-md pl-2 text-muted-foreground">
              {[
                "🌐 Web Development",
                "🎨 Motion Design",
                "📸 Photography",
                "🎥 Video Editing",
              ].map((item, i) => (
                <TextAnimate
                  key={item}
                  as="li"
                  animation="blurInUp"
                  by="text"
                  delay={1.1 + i * 0.08}
                  once
                  className="text-foreground"
                >
                  {item}
                </TextAnimate>
              ))}
            </ul>
          </div>

          <div>
            <TextAnimate
              as="h3"
              animation="blurInUp"
              by="text"
              delay={1.45}
              once
              className="py-2 text-2xl text-foreground"
            >
              {"I also like..."}
            </TextAnimate>
            <ul className="space-y-1 text-md pl-2 text-muted-foreground">
              {["🏐 Volleyball", "🏎️ F1", "🍵 Matcha"].map((item, i) => (
                <TextAnimate
                  key={item}
                  as="li"
                  animation="blurInUp"
                  by="text"
                  delay={1.55 + i * 0.08}
                  once
                  className="text-foreground"
                >
                  {item}
                </TextAnimate>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}


