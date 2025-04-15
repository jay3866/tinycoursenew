"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, FileText, Layers, Settings, Users, BarChart, MessageSquare } from "lucide-react"

export default function ScrollingDiagrams() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Set up automatic scrolling
    let animationId: number
    let scrollPosition = 0
    const totalWidth = container.scrollWidth
    const visibleWidth = container.clientWidth
    const scrollSpeed = 0.5 // pixels per frame

    const scroll = () => {
      if (!container) return

      // Increment scroll position
      scrollPosition += scrollSpeed

      // Reset when we've scrolled through all items
      if (scrollPosition >= totalWidth - visibleWidth) {
        scrollPosition = 0
      }

      // Apply the scroll position
      container.scrollLeft = scrollPosition

      // Continue animation
      animationId = requestAnimationFrame(scroll)
    }

    // Start animation when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationId = requestAnimationFrame(scroll)
          } else {
            cancelAnimationFrame(animationId)
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(container)

    // Pause scrolling when user hovers
    const pauseScroll = () => cancelAnimationFrame(animationId)
    const resumeScroll = () => {
      cancelAnimationFrame(animationId)
      animationId = requestAnimationFrame(scroll)
    }

    container.addEventListener("mouseenter", pauseScroll)
    container.addEventListener("mouseleave", resumeScroll)

    return () => {
      cancelAnimationFrame(animationId)
      observer.disconnect()
      container.removeEventListener("mouseenter", pauseScroll)
      container.removeEventListener("mouseleave", resumeScroll)
    }
  }, [])

  const cards = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Content Planning",
      description: "Organize your course structure with our intuitive planning tools",
      steps: ["Course Outline", "Module Structure", "Lesson Plan"],
    },
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: "Content Creation",
      description: "Create engaging lessons with our multimedia content tools",
      steps: ["Video Recording", "Slide Decks", "Worksheets"],
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Course Setup",
      description: "Configure your course settings, pricing, and access controls",
      steps: ["Pricing Model", "Access Rules", "Branding"],
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Community Building",
      description: "Create an engaged student community around your course",
      steps: ["Discussion Forums", "Live Sessions", "Student Groups"],
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Analytics & Insights",
      description: "Track student progress and optimize your course performance",
      steps: ["Engagement Metrics", "Completion Rates", "Revenue Tracking"],
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Student Support",
      description: "Provide excellent support to maximize student success",
      steps: ["Q&A System", "Feedback Tools", "Help Resources"],
    },
  ]

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-6 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Add duplicate cards at the beginning for seamless looping */}
        {cards.map((card, index) => (
          <div key={`card-${index}`} className="flex-shrink-0 w-[350px] px-4">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-muted-foreground mb-4">{card.description}</p>
              <div className="flex items-center text-sm text-primary">
                {card.steps.map((step, stepIndex) => (
                  <span key={stepIndex} className="flex items-center">
                    {step}
                    {stepIndex < card.steps.length - 1 && <ArrowRight className="h-4 w-4 mx-2" />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Duplicate the first few cards at the end for seamless looping */}
        {cards.slice(0, 3).map((card, index) => (
          <div key={`card-dup-${index}`} className="flex-shrink-0 w-[350px] px-4">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-muted-foreground mb-4">{card.description}</p>
              <div className="flex items-center text-sm text-primary">
                {card.steps.map((step, stepIndex) => (
                  <span key={stepIndex} className="flex items-center">
                    {step}
                    {stepIndex < card.steps.length - 1 && <ArrowRight className="h-4 w-4 mx-2" />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
