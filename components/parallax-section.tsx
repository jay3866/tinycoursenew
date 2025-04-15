"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  backgroundImage?: string
}

export default function ParallaxSection({ 
  children, 
  className, 
  id, 
  backgroundImage = "/images/doodle-background.jpg"
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top, height } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the section is from the center of the viewport
      const scrollPosition = top - windowHeight / 2

      // Create a very subtle parallax effect to ensure background stays visible
      // Use a very small multiplier to minimize movement
      setOffset(scrollPosition * 0.1)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} id={id} className={cn("relative py-32 overflow-hidden", className)}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full -z-10"
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 100ms ease-out",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
          backgroundRepeat: 'repeat-y',
          height: '400%',  // Make the background 4x the height of the section
          top: '-150%',    // Position it to start well above the section
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {children}
    </section>
  )
}
