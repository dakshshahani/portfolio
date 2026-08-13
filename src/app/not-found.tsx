"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { TextAnimate } from "@/components/ui/text-animate"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* Desktop: same skewed interactive grid as the hero, but showing the 404 */}
      <div className="relative hidden md:block h-[90vmin] w-[100vmin]">
        <InteractiveGridPattern
          width={100}
          height={100}
          squares={[30, 30]}
          rowOffset={-1}
          colOffset={1}
          line1="4 0 4"
          line2="Page Not Found"
          className={cn(
            "border-0",
            "absolute inset-0 h-full w-full",
            "[mask-image:radial-gradient(45%_45%_at_50%_50%,black_60%,transparent_100%)]",
            "skew-y-12 opacity-70",
            "[transform-origin:center] scale-125"
          )}
          squaresClassName="stroke-foreground/40"
        />
      </div>

      {/* Desktop overlay message + CTA */}
      <div className="relative z-10 -mt-[12vmin] hidden flex-col items-center gap-5 text-center md:flex">
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          This page went off the grid
        </p>
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/">Back to home</Link>
        </Button>
      </div>

      {/* Mobile: text-led layout matching the About section's style */}
      <div className="flex flex-col items-center gap-6 px-6 text-center md:hidden">
        <TextAnimate
          as="h1"
          animation="blurInUp"
          by="text"
          delay={0}
          once
          className="text-6xl font-bold text-foreground"
        >
          {"404"}
        </TextAnimate>
        <TextAnimate
          as="p"
          animation="blurInUp"
          by="text"
          delay={0.2}
          once
          className="text-2xl font-light text-foreground"
        >
          {"Page not found"}
        </TextAnimate>
        <TextAnimate
          as="p"
          animation="blurInUp"
          by="text"
          delay={0.35}
          once
          className="max-w-xs text-sm text-muted-foreground"
        >
          {"This page went off the grid"}
        </TextAnimate>
        <Button asChild size="lg" className="mt-2 rounded-full px-8">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  )
}
