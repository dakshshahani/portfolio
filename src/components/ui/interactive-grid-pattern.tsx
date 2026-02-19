"use client"

import React, { useCallback, useRef, useState } from "react"

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
  text?: string
  letterFadeDelay?: number
}

interface LetterInfo {
  letter: string
}

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
  text,
  letterFadeDelay = 1500,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null)
  const [letterIndex, setLetterIndex] = useState(0)
  const [squareLetters, setSquareLetters] = useState<Map<number, LetterInfo>>(new Map())
  const timeoutsRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map())

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredSquare(index)

    if (text) {
      const currentLetter = text[letterIndex]
      setSquareLetters(prev => {
        const next = new Map(prev)
        next.set(index, { letter: currentLetter })
        return next
      })
      setLetterIndex(prev => (prev + 1) % text.length)

      const existingTimeout = timeoutsRef.current.get(index)
      if (existingTimeout) clearTimeout(existingTimeout)

      const timeoutId = setTimeout(() => {
        setSquareLetters(prev => {
          const next = new Map(prev)
          next.delete(index)
          return next
        })
        timeoutsRef.current.delete(index)
      }, letterFadeDelay)

      timeoutsRef.current.set(index, timeoutId)
    }
  }, [text, letterIndex, letterFadeDelay])

  const handleMouseLeave = useCallback(() => {
    setHoveredSquare(null)
  }, [])

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
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
            {squareLetters.get(index) && (
              <text
                x={x + width / 2}
                y={y + height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="pointer-events-none select-none fill-foreground/70"
                style={{ fontSize: `${Math.min(width, height) * 0.5}px` }}
              >
                {squareLetters.get(index)?.letter}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
