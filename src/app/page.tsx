"use client";

import { DockDemo } from "@/components/animated-dock";
import { Hero } from "@/app/sections/hero";
import { InteractiveGridPatternDemo } from "@/app/sections/animated-hero";
import { Projects } from "@/app/sections/projects";
import { Experience } from "@/app/sections/experience";
import { Contact } from "@/app/sections/contact";
import { Footer } from "@/app/sections/footer";
import { About } from "@/app/sections/about";
import { ShaderBackground } from "@/components/ShaderBackground";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
    {/* 🔹 Shader layer */}
    {/* <div className="hidden md:block">
        <ShaderBackground />
    </div> */}

    {/* 🔝 Site content */}
      <div className="relative z-10 flex flex-col">
        <DockDemo />
        <main className="flex-1">
          <InteractiveGridPatternDemo />
          {/* <Hero /> */}
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
