"use client";

import { Navbar } from "@/app/sections/navbar";
import { Hero } from "@/app/sections/hero";
import { Projects } from "@/app/sections/projects";
import { Experience } from "@/app/sections/experience";
import { Contact } from "@/app/sections/contact";
import { Footer } from "@/app/sections/footer";
import { About } from "@/app/sections/about";
import { ShaderBackground } from "@/components/ShaderBackground";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      {/* 🔹 Shader layer */}
      <ShaderBackground />

      {/* 🔝 Site content */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
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