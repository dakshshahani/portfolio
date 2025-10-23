"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/app/sections/navbar";
import { Hero } from "@/app/sections/hero";
import { Projects } from "@/app/sections/projects";
import { Experience } from "@/app/sections/experience";
import { Contact } from "@/app/sections/contact";
import { Footer } from "@/app/sections/footer";
import { About } from "@/app/sections/about";

// Dynamically load ShaderScene to prevent SSR WebGL issues
const ShaderScene = dynamic(() => import("@/components/ShaderScene"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background flex flex-col overflow-hidden">
      {/* 🎨 Background Shader */}
      <div className="pointer-events-none fixed inset-0 ">
        {/* <ShaderScene /> */}
      </div>

      {/* 🔝 Site Content */}
      <main className="flex-1 bg-background">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}