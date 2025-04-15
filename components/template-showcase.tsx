"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TemplateShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const templates = [
    {
      id: 1,
      name: "Design with Icons",
      description: "Clean, modern design with eye-catching icons",
      image: "/placeholder.svg?height=600&width=800&text=Design+with+Icons",
    },
    {
      id: 2,
      name: "Simplify Conversations",
      description: "Minimal interface focused on content delivery",
      image: "/placeholder.svg?height=600&width=800&text=Simplify+Conversations",
    },
    {
      id: 3,
      name: "Nature Discovery",
      description: "Beautiful illustrations for nature-based courses",
      image: "/placeholder.svg?height=600&width=800&text=Nature+Discovery",
    },
    {
      id: 4,
      name: "Analytics Dashboard",
      description: "Data-focused template for technical courses",
      image: "/placeholder.svg?height=600&width=800&text=Analytics+Dashboard",
    },
    {
      id: 5,
      name: "Creative Portfolio",
      description: "Showcase creative work with this artistic template",
      image: "/placeholder.svg?height=600&width=800&text=Creative+Portfolio",
    },
    {
      id: 6,
      name: "Business Pro",
      description: "Professional template for business courses",
      image: "/placeholder.svg?height=600&width=800&text=Business+Pro",
    },
  ]

  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons)
      // Initial check
      checkScrollButtons()

      return () => scrollContainer.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const scrollAmount = 600 // Adjust as needed
    const currentScroll = scrollContainerRef.current.scrollLeft

    scrollContainerRef.current.scrollTo({
      left: direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative">
      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full ${
          !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full ${
          !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Scrolling container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-8 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {templates.map((template) => (
          <div key={template.id} className="flex-shrink-0 w-[300px] md:w-[400px] mx-4 snap-center group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="relative h-[225px] md:h-[300px] bg-slate-100">
                <Image src={template.image || "/placeholder.svg"} alt={template.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{template.name}</h3>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator dots */}
      <div className="flex justify-center gap-2 mt-4">
        {templates.map((template) => (
          <button
            key={template.id}
            className="w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400 focus:bg-primary transition-colors"
            aria-label={`View ${template.name} template`}
            onClick={() => {
              if (!scrollContainerRef.current) return

              const scrollContainer = scrollContainerRef.current
              const itemWidth = 400 + 32 // width + margin
              scrollContainer.scrollTo({
                left: (template.id - 1) * itemWidth,
                behavior: "smooth",
              })
            }}
          />
        ))}
      </div>
    </div>
  )
}
