"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [footerDistance, setFooterDistance] = useState<number>(Infinity);

  // Turn scroll position into opacity (or you can replace with translateY for slide‑in)
  const opacity = useTransform(scrollY, [0, 80], [0, 1]);
  const y = useTransform(scrollY, [0, 80], [-40, 0]); // subtle slide

  // Calculate footer distance and adjust opacity
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        const distanceToFooter = footerTop - viewportHeight;
        setFooterDistance(distanceToFooter);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate fade opacity based on distance to footer
  const footerFadeOpacity = Math.max(0, Math.min(1, footerDistance / 200));

  return (
    <motion.header
      style={{ 
        opacity: useTransform(scrollY, [0, 80], [0, 1]),
        y,
        WebkitBackdropFilter: 'blur(10px)',
      }}
      className="fixed top-0 z-50 bg-background/90 backdrop-blur shadow-sm min-w-full transition-opacity"
      animate={{ opacity: footerFadeOpacity }}
    >
      <div className="mx-auto flex justify-around items-center px-4 py-3 transition-colors duration-300">
        <div className="flex items-center gap-2">
            <Link href="#home">
              <img src="/favicon.ico" alt="Logo" className="w-9 h-9" />
            </Link>
          {/* <h1 className="font-semibold text-xl">Daksh Shahani</h1> */}
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-6">
            {["Home", "Projects", "Experience", "Contact"].map((item) => (
              <NavigationMenuItem key={item}>
                <Link href={`#${item.toLowerCase()}`}>
                  <NavigationMenuLink className="text-sm font-medium hover:text-primary transition-colors">
                    {item}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex flex-col items-start gap-4 p-6"
          >
            {["Home", "Projects", "Experience", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium hover:text-primary"
              >
                {item}
              </Link>
            ))}
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
