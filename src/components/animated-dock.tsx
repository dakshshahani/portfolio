"use client"

import React from "react"

import { Dock, DockIcon } from "@/components/ui/dock"
import Link from "next/link"
import { Briefcase, FolderKanban, Home, Mail, User } from "lucide-react"

const navItems = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#projects", icon: FolderKanban, label: "Projects" },
  { href: "#experience", icon: Briefcase, label: "Experience" },
  { href: "#contact", icon: Mail, label: "Contact" },
]

export function DockDemo() {
  return (
    <div className="relative">
      <Dock direction="middle">
        {navItems.map(({ href, icon: Icon, label }) => (
          <DockIcon key={href}>
            <Link href={href} aria-label={label} className="flex">
              <Icon className="size-6" />
            </Link>
          </DockIcon>
        ))}
      </Dock>
    </div>
  )
}
