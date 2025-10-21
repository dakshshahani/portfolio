"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/app/sections/navbar";
import { Hero } from "@/app/sections/hero";
import { Projects } from "@/app/sections/projects";
import { Experience } from "@/app/sections/experience";
import { Contact } from "@/app/sections/contact";
import { Footer } from "@/app/sections/footer";
import { About } from "@/app/sections/about";

export default function HomePage() {
  const { scrollY } = useScroll();
  const videoOpacity = useTransform(scrollY, [1, 1000], [1, 0]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
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