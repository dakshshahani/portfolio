"use client";

import { DockDemo } from "@/components/animated-dock";
import { InteractiveGridPatternDemo } from "@/app/sections/animated-hero";
import { Projects } from "@/app/sections/projects";
import { Experience } from "@/app/sections/experience";
import { Contact } from "@/app/sections/contact";
import { Footer } from "@/app/sections/footer";
import { About } from "@/app/sections/about";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { JevOverlay } from "@/components/jev-overlay";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      {/* 🔝 Site content */}
      <div className="relative z-10 flex flex-col">
        <div data-jevid="nav"><DockDemo /></div>
        <main className="flex-1">
          <div data-jevid="hero"><InteractiveGridPatternDemo /></div>
          <div data-jevid="about"><About /></div>
          <div data-jevid="experience"><Experience /></div>
          <div data-jevid="projects"><Projects /></div>
          <div data-jevid="contact"><Contact /></div>
        </main>
        <div data-jevid="footer"><Footer /></div>
      </div>

      <JevOverlay />

      {/* 🎨 Theme Toggler */}
      <AnimatedThemeToggler
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-secondary hover:bg-secondary/70 text-secondary-foreground transition-colors duration-200 dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/90"
        variant="circle"
        duration={600}
      />
    </div>
  );
}
