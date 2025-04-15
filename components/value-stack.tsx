"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Gift, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ValueItemProps {
  title: string
  description: string
  value: string
  highlight?: boolean
  isBonus?: boolean
  delay?: number
}

function ValueItem({ title, description, value, highlight = false, isBonus = false, delay = 0 }: ValueItemProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={cn(
        "flex items-start gap-4 p-6 rounded-xl transition-all duration-500 transform",
        highlight ? "bg-primary/10 border border-primary/20" : "bg-white border border-slate-200",
        isBonus ? "relative overflow-hidden" : "",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
    >
      {isBonus && (
        <div className="absolute -right-12 top-5 bg-primary text-white text-xs font-bold py-1 px-12 transform rotate-45">
          BONUS
        </div>
      )}
      <div
        className={cn(
          "flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center",
          isBonus ? "bg-primary/20" : "bg-slate-100",
        )}
      >
        {isBonus ? <Gift className="h-5 w-5 text-primary" /> : <Check className="h-5 w-5 text-primary" />}
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="text-xl font-bold text-primary">{value}</div>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export default function ValueStack() {
  const [totalVisible, setTotalVisible] = useState(false)
  const [sparkleVisible, setSparkleVisible] = useState(false)

  useEffect(() => {
    const totalTimer = setTimeout(() => {
      setTotalVisible(true)
    }, 1200)

    const sparkleTimer = setTimeout(() => {
      setSparkleVisible(true)
    }, 1500)

    return () => {
      clearTimeout(totalTimer)
      clearTimeout(sparkleTimer)
    }
  }, [])

  const mainItems = [
    {
      title: "Tiny Visual Course Masterclass",
      description: "Master the Tiny Visual Course method in just 50 minutes with our comprehensive visual training",
      value: "$199",
      highlight: true,
    },
    {
      title: "Action-Implementation Guide (50 pages)",
      description: "Step-by-step guide to implement everything you learn in the workshop",
      value: "$97",
    },
    {
      title: "Tiny Visual Courses Workbook",
      description: "Unlock your million-dollar 'Doodle Idea', craft irresistible visual frameworks, and design your visual curriculum for maximum impact",
      value: "$77",
    },
    {
      title: "The Visual Selling Machine",
      description: "Create scroll-stopping visual sales pages and one-doodle-one-line ads that convert 20% of buyers into high-ticket clients",
      value: "$97",
    },
    {
      title: "TVC Implementation",
      description: "Step-by-step tech setup, done-for-you frameworks, plug-and-play graphics, and over-the-shoulder video guides",
      value: "$97",
    },
  ]

  const bonusItems = [
    {
      title: "Private Creator Community Access",
      description:
        "Join our exclusive community of successful Tiny Visual Course creators for networking, support, and collaboration",
      value: "$1250",
    },
    {
      title: "Hands-On Support",
      description:
        "Get personalized assistance from our team of experts to ensure your success with the Tiny Visual Course method",
      value: "$299",
    },
    {
      title: "Visual Framework Assistance",
      description:
        "Get expert feedback on your visual frameworks to ensure they're optimized for maximum impact and conversion",
      value: "$999",
    },
  ]

  // Calculate total value
  const calculateTotal = () => {
    const mainTotal = mainItems.reduce((sum, item) => sum + Number.parseInt(item.value.replace(/\$|,|\//g, "")), 0)
    const bonusTotal = bonusItems.reduce((sum, item) => {
      const value = item.value.replace(/\$|,/g, "")
      return sum + Number.parseInt(value.split("/")[0])
    }, 0)
    return mainTotal + bonusTotal
  }

  const totalValue = calculateTotal()

  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 -z-10" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -z-10 transform skew-x-12" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 -z-10 transform -skew-x-12" />

      {/* Sparkle animations */}
      <div
        className={cn(
          "absolute top-40 right-20 transition-all duration-1000",
          sparkleVisible ? "opacity-100" : "opacity-0",
        )}
      >
        <Sparkles className="h-12 w-12 text-primary/30" />
      </div>
      <div
        className={cn(
          "absolute bottom-40 left-20 transition-all duration-1000 delay-300",
          sparkleVisible ? "opacity-100" : "opacity-0",
        )}
      >
        <Sparkles className="h-8 w-8 text-primary/20" />
      </div>

      <div className="container py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Limited Time Offer
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Here's <span className="text-primary">Everything</span> You'll Get
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            The complete package to create, launch, and scale your successful Tiny Visual Course
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Core components */}
          <div className="space-y-4 mb-12">
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <Image 
                  className="mx-auto" 
                  src="/TVC-bundle.png" 
                  width={480} 
                  height={360} 
                  alt="Course bundle" 
                  style={{ objectFit: 'contain', width: '120%', maxWidth: '720px', height: 'auto' }} 
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">The Tiny Visual Courses Training Includes:</h3>
            {mainItems.map((item, index) => (
              <ValueItem
                key={index}
                title={item.title}
                description={item.description}
                value={item.value}
                highlight={index === 0}
                delay={index * 100}
              />
            ))}
          </div>

          {/* Bonus items */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Gift className="h-5 w-5 text-primary mr-2" />
              Special Bonuses:
            </h3>
            {bonusItems.map((item, index) => (
              <ValueItem
                key={index}
                title={item.title}
                description={item.description}
                value={item.value}
                isBonus={true}
                delay={800 + index * 100}
              />
            ))}
          </div>

          {/* Total value */}
          <div className="bg-[#333333] text-white rounded-xl p-8 shadow-xl transform transition-all duration-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <p className="text-slate-300 mb-1">Total Value:</p>
                <div
                  className={cn(
                    "text-4xl md:text-5xl font-bold transition-all duration-700",
                    totalVisible ? "opacity-100" : "opacity-0",
                  )}
                >
                  ${totalValue.toLocaleString()}
                </div>
                <p className="text-slate-300 mt-2">Today's Price:</p>
                <div className="flex items-center gap-3">
                  <span className="text-xl text-slate-400 line-through">$97</span>
                  <div className="text-3xl md:text-4xl font-bold text-primary">$27</div>
                </div>
                <div className="text-xl text-primary mt-1">Access Tiny Visual Courses</div>
              </div>
              <div className="mt-6 md:mt-0">
                <Button size="lg" className="text-lg px-8 py-6 group" asChild>
                  <Link href="https://checkout.tinyvisualcourses.com">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <p className="text-sm text-slate-400 mt-2 text-center">30-day money-back guarantee</p>
              </div>
            </div>
          </div>

          {/* What You Can Achieve Section - Entire section hidden as requested */}
          {/* 
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">With the Tiny Visual Course Method, You Can...</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg font-medium">Say goodbye to endless sales calls</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg font-medium">Generate profit directly from your ads</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg font-medium">Build a massive, engaged audience</p>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}
