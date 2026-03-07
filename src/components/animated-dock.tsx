"use client"

import React from "react"

import { Dock, DockIcon } from "@/components/ui/dock"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import { Briefcase, FolderKanban, Home, Mail, User } from "lucide-react"
import { useWebHaptics } from "web-haptics/react"

const navItems = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#projects", icon: FolderKanban, label: "Projects" },
  { href: "#experience", icon: Briefcase, label: "Experience" },
  { href: "#contact", icon: Mail, label: "Contact" },
]

export function DockDemo() {
  const { trigger } = useWebHaptics()

  const triggerNavHaptic = () => {
    if (typeof window === "undefined" || !window.matchMedia("(pointer: coarse)").matches) {
      return
    }

    trigger([{ duration: 25 }], { intensity: 0.7 })
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <Dock
        direction="middle"
        iconSize={36}
        iconMagnification={52}
        iconDistance={120}
        className="border border-border/60 bg-background/70"
      >
        {navItems.map(({ href, icon: Icon, label }) => (
          <DockIcon key={href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  aria-label={label}
                  onClick={triggerNavHaptic}
                  className="group flex items-center justify-center rounded-full p-2 transition-colors hover:bg-muted"
                >
                  <Icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={14}>
                {label}
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </div>
  )
}
