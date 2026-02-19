"use client";

import { MorphingText } from "@/components/ui/morphing-text";

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
        className="py-24 px-24 flex flex-col md:flex-row items-center justify-around"
      >
        <div className="flex flex-col text-left gap-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Hey, I'm <span className="text-primary">Daksh 👨‍💻</span>
            </h1>
            <div className="flex gap-2">
              <p className="text-3xl font-light shrink-0">I'm a</p>
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
                className="text-3xl md:text-3xl h-10 flex-1"
              />
            </div>
          </div>

        <div className="flex flex-col gap-6 text-left">
          <div>
            <h3 className="py-2 text-2xl">Currently I'm ..</h3>
            <ul className="space-y-1 text-md pl-2">
              <li>🔭 Full Stack Developer</li>
              <li>🎥 Media Specialist @ nwPlus</li>
              <li> 👨‍💻 working on cloud native projects!</li>
              <li>🧠 exploring cloud infrastructure on AWS</li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 text-2xl">I'm passionate about...</h3>
            <ul className="space-y-1 text-md pl-2">
              <li>💻 Web Development</li>
              <li>🎨 Motion Design</li>
              <li>📸 Photography</li>
              <li>🧠 Maximizing Productivity</li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 text-2xl">I also like...</h3>
            <ul className="space-y-1 text-md pl-2">
              <li>🏐 Volleyball</li>
              <li>🏎️ F1</li>
              <li>🍵 Matcha</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
