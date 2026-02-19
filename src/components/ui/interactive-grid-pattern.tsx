"use client"

import React, { useState } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param width - The width of each square.
 * @param height - The height of each square.
 * @param squares - The number of squares in the grid. The first element is the number of horizontal squares, and the second element is the number of vertical squares.
 * @param className - The class name of the grid.
 * @param squaresClassName - The class name of the squares.
 */
interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  squares?: [number, number] // [horizontal, vertical]
  className?: string
  squaresClassName?: string
  rowOffset?: number
  colOffset?: number
  animate?: boolean
}

// Letters to embed in the grid, centered
const LINE1 = "Daksh Shahani's"
const LINE2 = "Portfolio"

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  rowOffset = 0,
  colOffset = 0,
  animate = true,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null)

  // Build a set of { squareIndex -> letter } for the two centered lines
  const letterMap = new Map<number, { letter: string; charIndex: number }>()

  const centerRow1 = Math.floor(vertical / 2) - 1 + rowOffset
  const centerRow2 = Math.floor(vertical / 2) + 1 + rowOffset

  const startCol1 = Math.floor((horizontal - LINE1.length) / 2) + colOffset
  const startCol2 = Math.floor((horizontal - LINE2.length) / 2) + colOffset

  for (let i = 0; i < LINE1.length; i++) {
    const col = startCol1 + i
    if (col >= 0 && col < horizontal) {
      letterMap.set(centerRow1 * horizontal + col, { letter: LINE1[i], charIndex: i })
    }
  }

  for (let i = 0; i < LINE2.length; i++) {
    const col = startCol2 + i
    if (col >= 0 && col < horizontal) {
      letterMap.set(centerRow2 * horizontal + col, { letter: LINE2[i], charIndex: LINE1.length + i })
    }
  }

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      className={cn(
        "absolute inset-0 h-full w-full border border-gray-400/30",
        className
      )}
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width
        const y = Math.floor(index / horizontal) * height
        const letter = letterMap.get(index)
        return (
          <g key={index}>
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              className={cn(
                "stroke-gray-400/30 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
                hoveredSquare === index ? "fill-gray-300/30" : "fill-transparent",
                squaresClassName
              )}
              onMouseEnter={() => setHoveredSquare(index)}
              onMouseLeave={() => setHoveredSquare(null)}
            />
            {letter && (
              animate ? (
                <motion.text
                  x={x + width / 2}
                  y={y + height / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="pointer-events-none select-none fill-foreground"
                  style={{ fontSize: `${Math.min(width, height) * .7}px`, fontWeight: 500 }}
                  initial={{ opacity: 0, translateY: 10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: letter.charIndex * 0.04, duration: 0.4, ease: "easeOut" }}
                >
                  {letter.letter}
                </motion.text>
              ) : (
                <text
                  x={x + width / 2}
                  y={y + height / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="pointer-events-none select-none fill-foreground"
                  style={{ fontSize: `${Math.min(width, height) * 0.8}px`, fontWeight: 500 }}
                >
                  {letter.letter}
                </text>
              )
            )}
          </g>
        )
      })}
    </svg>
  )
}
