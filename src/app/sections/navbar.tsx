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

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="font-semibold text-xl">Daksh Shahani</h1>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-6">
            {["Home", "Projects", "Experience", "Contact"].map((item) => (
              <NavigationMenuItem key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  passHref
                  legacyBehavior
                >
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
          <SheetContent side="right" className="flex flex-col items-start gap-4 p-6">
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
    </header>
  );
}