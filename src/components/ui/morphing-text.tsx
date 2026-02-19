"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const defaultMorphTime = 1.5
const defaultCooldownTime = 0.5

interface UseMorphingTextOptions {
  texts: string[]
  morphTime: number
  cooldownTime: number
  isInView: boolean
}

const useMorphingText = ({
  texts,
  morphTime,
  cooldownTime,
  isInView,
}: UseMorphingTextOptions) => {
  const textIndexRef = useRef(0)
  const morphRef = useRef(0)
  const cooldownRef = useRef(0)
  const timeRef = useRef(new Date())
  const hasStartedRef = useRef(false)
  const startTimeRef = useRef<Date | null>(null)

  const text1Ref = useRef<HTMLSpanElement>(null)
  const text2Ref = useRef<HTMLSpanElement>(null)

  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current]
      if (!current1 || !current2) return

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

      const invertedFraction = 1 - fraction
      current1.style.filter = `blur(${Math.min(
        8 / invertedFraction - 8,
        100
      )}px)`
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`

      current1.textContent = texts[textIndexRef.current % texts.length]
      current2.textContent = texts[(textIndexRef.current + 1) % texts.length]
    },
    [texts]
  )

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current
    cooldownRef.current = 0

    let fraction = morphRef.current / morphTime

    if (fraction > 1) {
      cooldownRef.current = cooldownTime
      fraction = 1
    }

    setStyles(fraction)

    if (fraction === 1) {
      textIndexRef.current++
    }
  }, [setStyles, morphTime, cooldownTime])

  const doCooldown = useCallback(() => {
    morphRef.current = 0
    const [current1, current2] = [text1Ref.current, text2Ref.current]
    if (current1 && current2) {
      current2.style.filter = "none"
      current2.style.opacity = "100%"
      current1.style.filter = "none"
      current1.style.opacity = "0%"
    }
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Only animate if in view
      if (!isInView) return

      const newTime = new Date()
      
      // Initialize start time on first visible frame
      if (!hasStartedRef.current) {
        hasStartedRef.current = true
        startTimeRef.current = newTime
        timeRef.current = newTime
        return
      }

      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000
      timeRef.current = newTime

      cooldownRef.current -= dt

      if (cooldownRef.current <= 0) doMorph()
      else doCooldown()
    }

    animate()
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [doMorph, doCooldown, isInView])

  return { text1Ref, text2Ref }
}

interface MorphingTextProps {
  className?: string
  texts: string[]
  morphTime?: number
  cooldownTime?: number
  animationDelay?: number
}

const Texts: React.FC<MorphingTextProps & { isInView: boolean }> = ({
  texts,
  morphTime,
  cooldownTime,
  isInView,
}) => {
  const { text1Ref, text2Ref } = useMorphingText({
    texts,
    morphTime: morphTime ?? defaultMorphTime,
    cooldownTime: cooldownTime ?? defaultCooldownTime,
    isInView,
  })
  return (
    <>
      <span
        ref={text1Ref}
        style={{ opacity: 0 }}
        className="absolute inset-x-0 top-0 w-full"
      />
      <span
        ref={text2Ref}
        style={{ opacity: 0 }}
        className="absolute inset-x-0 top-0 w-full"
      />
    </>
  )
}

const SvgFilters: React.FC = () => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
)

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
  morphTime,
  cooldownTime,
  animationDelay = 0,
}) => {
  const [isInView, setIsInView] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Delay the fade-in animation
          setTimeout(() => {
            setShowAnimation(true)
          }, animationDelay * 1000)
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [animationDelay])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative font-sans font-bold [filter:url(#threshold)_blur(0.6px)]",
        className
      )}
      style={{
        opacity: showAnimation ? 1 : 0,
        transition: `opacity 0.5s ease`,
        transitionDelay: `${animationDelay}s`,
      }}
    >
      <Texts 
        texts={texts} 
        morphTime={morphTime} 
        cooldownTime={cooldownTime}
        isInView={isInView}
      />
      <SvgFilters />
    </div>
  )
}
