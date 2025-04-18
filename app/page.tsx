"use client"

{/* 
This is not another funnel.
It's a new format — designed for speed, clarity, and conversion.

We help you extract the one problem inside your offer that buyers actually want solved — then turn it into a Tiny Visual Course: a visual micro-course that delivers instant "aha" and triggers instant purchases.

You Get:
A scroll-stopping sketch that communicates your value in 3 seconds
A bite-sized product your audience will consume (and rave about) in 30 minutes
A plug-and-play system that turns strangers into superfans — without DMs or sales calls
The result?

Buyers rolling in while you sleep.
Fans sharing your product for you.
And a backend offer pipeline that practically fills itself.
Perfect for:
Coaches
Course Creators
Consultants
Experts with offers that should be working better than they are
*/}

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Check, Clock, Lightbulb, Play, Share, ShoppingCart, Star, X, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { FlickeringImage } from "@/components/ui/flickering-image"
import AnimatedDoodle from "@/components/animated-doodle"
import AnimatedStar from "@/components/animated-asterisk"
import AnimatedRectangle from "@/components/animated-rectangle"
import AnimatedPenCircle from "@/components/animated-pen-circle"
import TestimonialCard from "@/components/testimonial-card"
import PricingCard from "@/components/pricing-card"
import FeatureCard from "@/components/feature-card"
import ScrollingDiagrams from "@/components/scrolling-diagrams"
import ParallaxSection from "@/components/parallax-section"
import AnimatedBackground from "@/components/animated-background"
import TemplateShowcase from "@/components/template-showcase"
import { Timeline, TimelineItem } from "@/components/timeline"
import ValueStack from "@/components/value-stack"
import ProblemAgitation from "@/components/problem-agitation"
import ParadigmShift from "@/components/paradigm-shift"
import Transformation from "@/components/transformation"
import CustomerJourney from "@/components/customer-journey"
import ComparisonTable from "@/components/comparison-table"
import FloatingCTA from "@/components/floating-cta"
import Urgency from "@/components/urgency"

// Define the profile item type
type ProfileItem = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [profileItems, setProfileItems] = useState<ProfileItem[]>([])

  // Define all available profile images and details with gender-appropriate names
  // and consistent pairings between images and names based on actual image content
  const allProfiles = [
    {
      id: 1,
      name: "Jessica Reynolds", // Female in b2.png
      designation: "Digital Marketer",
      image: "/b2.png" // Female image
    },
    {
      id: 2,
      name: "Sophia Anderson", // Female in b3.png
      designation: "Course Creator",
      image: "/b3.png" // Female image
    },
    {
      id: 3,
      name: "David Thompson", // Male in g1.png
      designation: "Online Coach",
      image: "/g1.png" // Male image
    },
    {
      id: 4,
      name: "Olivia Parker", // Female in g2.png
      designation: "Content Strategist",
      image: "/g2.png" // Female image
    },
    {
      id: 5,
      name: "Sophia Chen", // Female in g3.png
      designation: "Course Creator",
      image: "/g3.png" // Female image
    },
    {
      id: 6,
      name: "Robert Taylor", // Male in s3.png
      designation: "Digital Entrepreneur",
      image: "/s3.png" // Male image
    },
    {
      id: 7,
      name: "Natalie Kim", // Female in s5.png
      designation: "Content Creator",
      image: "/s5.png" // Female image
    },
    {
      id: 8,
      name: "Maria Gonzalez", // Female in t1.png
      designation: "Online Educator",
      image: "/t1.png" // Female image
    }
  ]

  useEffect(() => {
    // Create two fixed sets of profiles matching the Boy-Boy-Girl-Girl pattern shown in the image
    // Set 1: Boy-Boy-Girl-Girl
    const profileSetOne = [
      {
        id: 1,
        name: "Robert Taylor",
        designation: "Digital Entrepreneur",
        image: "/s3.png" // First male image (bearded man)
      },
      {
        id: 2,
        name: "James Wilson",
        designation: "Course Creator",
        image: "/t1.png" // Second male image (man with shorter beard)
      },
      {
        id: 3,
        name: "Olivia Parker",
        designation: "Content Strategist",
        image: "/g2.png" // First female image (brunette woman)
      },
      {
        id: 4,
        name: "Emma Davis",
        designation: "Online Coach",
        image: "/g3.png" // Second female image (woman with shorter hair)
      }
    ];
    
    // Set 2: Boy-Boy-Girl-Girl (different people)
    const profileSetTwo = [
      {
        id: 5,
        name: "Michael Bennett",
        designation: "Course Creator",
        image: "/b3.png" // First male image
      },
      {
        id: 6,
        name: "Daniel Martinez",
        designation: "Online Educator",
        image: "/s5.png" // Second male image
      },
      {
        id: 7,
        name: "Sophia Martinez",
        designation: "Content Creator",
        image: "/b2.png" // First female image
      },
      {
        id: 8,
        name: "Jessica Reynolds",
        designation: "Digital Marketer",
        image: "/g1.png" // Second female image
      }
    ];
    
    // Randomly select one of the two sets when the page loads
    // This ensures consistency within each page view while providing variety between visits
    const selectedSet = Math.random() < 0.5 ? profileSetOne : profileSetTwo;
    
    setProfileItems(selectedSet);
    
    // No interval needed since we're using fixed profiles for each page load
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Urgency Bar - temporarily hidden for initial version */}
      {/* <Urgency /> */}

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/TVO-icon-5498596.png" alt="Tiny Visual Course Logo" width={32} height={32} className="h-8 w-auto" />
            <span className="text-xl font-bold">Tiny Visual Courses</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:flex" asChild>
              <Link href="https://members.tinyvisualcourses.com/">Log in</Link>
            </Button>
            <Button asChild><Link href="https://checkout.tinyvisualcourses.com">Get Started</Link></Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <FlickeringGrid
            className="absolute inset-0 -z-10"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
          <div className="container relative z-10">
            {/* Limited Time Offer Badge - temporarily hidden for initial version */}
            {/* <Badge className="mb-4 animate-fade-in" variant="outline">
              <span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span> Limited Time Offer
            </Badge> */}
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
                Turn Your Expertise Into a <span className="text-primary">Tiny Visual Course</span><br />
                That Generates Buyers<br />
                <span className="relative inline-block">
                  On Demand
                  <span className="absolute -bottom-2 left-0 w-full">
                    <AnimatedDoodle width={"100%"} height={20} className="w-full" />
                  </span>
                </span>
              </h1>
              <p className="max-w-2xl text-lg font-medium text-slate-800 md:text-xl animate-fade-in-up animation-delay-100">
                And Funnels Them Straight Into Your Backend Programs — Automatically
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
                <Button size="lg" className="group" asChild>
                  <Link href="https://checkout.tinyvisualcourses.com">
                    YES! I WANT MY TINY VISUAL COURSE
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-800 animate-fade-in-up animation-delay-250 mt-2">
                {/* Modified to hide name tooltips and prevent image extraction */}
                <div className="flex items-center gap-2">
                  {profileItems.map((item) => (
                    <div 
                      className="-mr-4 relative" 
                      key={item.id}
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <div 
                        className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 border-background relative transition duration-500 overflow-hidden"
                        style={{ pointerEvents: 'none' }}
                      >
                        <Image
                          height={100}
                          width={100}
                          src={item.image}
                          alt="Profile"
                          className="w-full h-full object-cover"
                          draggable="false"
                          unoptimized={true}
                          style={{ userSelect: 'none' }}
                        />
                        {/* Invisible overlay to prevent direct interaction */}
                        <div 
                          className="absolute inset-0" 
                          style={{ pointerEvents: 'auto' }}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p>
                  <span className="font-medium">500+</span> course creators trust us
                </p>
              </div>
              
              <div className="flex flex-col gap-2 text-base text-slate-800 animate-fade-in-up animation-delay-300">
                <p className="font-medium text-lg">One Visual. One Page. One Buyer-Generating System That Works While You Sleep</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p>Proven in 100+ niches</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p>Works with cold traffic</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p>Built in a weekend</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p>No tech overwhelm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tight">Drowning in Details</h2>
                  <h2 className="text-3xl font-bold tracking-tight text-muted-foreground">Starving for Sales</h2>
                </div>
                <div className="space-y-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-primary">Visually Irresistible:</h2>
                  <h2 className="text-3xl font-bold tracking-tight">982%+ Sales Boost</h2>
                </div>
              </div>
              <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/tvo-sampleOLD-NEW.png" 
                  alt="Old way vs New way comparison" 
                  width={1200} 
                  height={600} 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Shift Happening Section */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight mb-6">There Is a Shift Happening...</h2>
              
              <div className="text-left space-y-6 text-lg">
                <p>You have valuable expertise to share.</p>
                <p>But the old ways of selling online aren't working like they used to:</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl font-bold">✕</span>
                    <p>Everyone and their mother has a "Book" funnel (thanks A.I.).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl font-bold">✕</span>
                    <p>Webinars take weeks to create and hours to deliver are less effective.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl font-bold">✕</span>
                    <p>Complicated funnels confuse more than convert.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl font-bold">✕</span>
                    <p>Great Content gets lost in the noise.</p>
                  </div>
                </div>
                
                <p className="font-medium text-xl">There's a simpler, more effective way to turn your knowledge into profit.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-4xl font-bold tracking-tight text-primary mb-12">Introducing Tiny Visual Courses</h2>
              <div className="rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
                <Image 
                  src="/TinyCourseProcess-4402892.gif" 
                  alt="Tiny Visual Course Process" 
                  width={1200} 
                  height={600} 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Imagine Being Able To Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold tracking-tight mb-10">Imagine being able to:</h2>
              
              <div className="space-y-6 text-xl">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">-</span>
                  <p>Create an irresistible visual course in <span className="font-bold">less than an hour.</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">-</span>
                  <p>Explain your value so clearly that clients instantly understand</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">-</span>
                  <p>Deliver transformative results in 30-60 minutes</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">-</span>
                  <p>Naturally guide customers to your higher-ticket programs</p>
                </div>
              </div>
              
              <p className="text-2xl font-bold mt-10 mb-16">This isn't some wish list, it's the real power of Tiny Visual Courses.</p>
              
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/TinyCourseDifference-4402826.gif" 
                  alt="The Visual Course Difference" 
                  width={1200} 
                  height={800} 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why This Works So Well Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold tracking-tight mb-12 flex items-center justify-center">
                <span className="inline-block mr-4">
                  <AnimatedStar width={40} height={40} />
                </span>
                Here's why this works so well:
                <span className="inline-block ml-4">
                  <AnimatedStar width={40} height={40} flip={true} delay={3} />
                </span>
              </h2>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-xl">Visual aids like doodle drawings reduce cognitive load.</p>
                  <p className="text-xl font-medium">AKA, they make our brains do less work to understand things.</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xl font-medium">When we can help people do less work, they'll consume more of our stuff!</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xl">Using images will make your content more memorable as well. According to the Picture Superiority Effect, people can more easily recall images than words.</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xl font-bold">Our brains process visuals 60,000x faster than text</p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-8">Look at the image below...</h3>
                
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <FlickeringImage 
                      src="/caution-sign2-5043472.png" 
                      alt="Caution Wet Floor Sign" 
                      width={600} 
                      height={600} 
                      flickerInterval={[2000, 5000]} 
                      flickerDuration={100} 
                    />
                  </div>
                </div>
                
                <div className="mt-16 space-y-24">
                  <div className="text-center max-w-3xl mx-auto">
                    <p className="text-2xl font-bold mb-12">Did you notice how quickly your brain processed the warning?</p>
                    <p className="text-xl leading-relaxed mb-10">By the time you read the first word on the sign on the left, your brain has already processed and understands what the sign on the right means.</p>
                    <p className="text-xl leading-relaxed">You will also remember the sign on the right, for days after seeing it once.</p>
                  </div>
                  
                  <div className="text-center py-10 mt-16">
                    <p className="text-2xl font-bold mb-24">This is why a Tiny Visual Course isn't just a simpler approach - it's also:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
                      <div className="bg-slate-50 p-10 rounded-xl shadow-sm">
                        <div className="flex justify-center mb-6">
                          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <Brain className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold mb-2">400%</h3>
                        <div className="px-3">
                          <p className="text-lg">more likely to be remembered by your audience</p>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 p-10 rounded-xl shadow-sm">
                        <div className="flex justify-center mb-6">
                          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <Share className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold mb-2">40x</h3>
                        <div className="px-3">
                          <p className="text-lg">more likely to be shared on social media</p>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 p-10 rounded-xl shadow-sm">
                        <div className="flex justify-center mb-6">
                          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <ShoppingCart className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold mb-2">80%</h3>
                        <div className="px-3">
                          <p className="text-lg">more effective at driving purchasing decisions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-6 mt-10">
                    <p className="text-2xl font-bold text-center mb-8">By using strategic visuals, you can:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
                      <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-xl leading-relaxed">Grab attention instantly in your ads</p>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Lightbulb className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-xl leading-relaxed">Explain complex ideas with ease</p>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Star className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-xl leading-relaxed">Create a memorable brand</p>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-xl leading-relaxed">Drastically shorten your sales cycle</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center py-6 mt-8">
                    <p className="text-xl font-medium mb-6">The best part? You don't need to be an artist or designer.</p>
                    
                    <p className="text-3xl font-bold mt-8 mb-8">Ready to harness the power of tiny visual courses and skyrocket your sales?</p>
                    
                    {/* Course Bundle Image */}
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
                    
                    <div className="mt-4 relative">
                      <div className="relative z-10">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-20 py-8 text-xl rounded-xl" asChild>
                          <Link href="https://checkout.tinyvisualcourses.com">
                            <span className="px-2">Access Tiny Visual Courses</span>
                            <ArrowRight className="ml-4 h-6 w-6" />
                          </Link>
                        </Button>
                      </div>
                      <div className="absolute inset-0 -m-4 sm:-m-6">
                        <AnimatedPenCircle />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What This Is NOT About Section */}
        <section className="pt-6 pb-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto px-6">
              <div className="text-center mb-12">
                <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">IMPORTANT DISTINCTION</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">What Makes This Different</h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              </div>
              
              <div className="space-y-16">
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <X className="h-6 w-6 text-red-500 mr-3" />
                    <span>This Is NOT About:</span>
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <X className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold">"Low Ticket Offers"</p>
                        <p className="text-slate-600">This isn't about creating cheap products that don't deliver real value</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <X className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Writing "Books" or Book Funnels</p>
                        <p className="text-slate-600">This has nothing to do with creating lengthy content that nobody finishes</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <X className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Your Typical Course</p>
                        <p className="text-slate-600">This is not another bloated course that overwhelms your buyers</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <X className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Yet Another "A.I. Solution"</p>
                        <p className="text-slate-600">This isn't about replacing your expertise with artificial intelligence</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Check className="h-6 w-6 text-green-500 mr-3" />
                    <span>All You Need Is:</span>
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-3 bg-green-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold">One problem worth solving</p>
                        <p className="text-slate-600">Focus on a single, valuable transformation your audience wants</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4 p-3 bg-green-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold">One explainer 'doodle'</p>
                        <p className="text-slate-600">A simple visual that explains your solution clearly and memorably</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4 p-3 bg-green-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold">One 30 Minute Tiny Visual Course</p>
                        <p className="text-slate-600">A concise, focused course that delivers results quickly</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4 p-3 bg-green-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold">One $5/day Traffic Source</p>
                        <p className="text-slate-600">A simple, affordable way to get your course in front of the right people</p>
                      </div>
                    </li>
                  </ul>
                </div>
                

              </div>
            </div>
          </div>
        </section>
        


        {/* Paradigm Shift Section */}
        {/* Commented out section - This is not another funnel */}
        {/* <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">This is not another funnel.</h2>
              <p className="text-lg mb-6">It's a new format — designed for speed, clarity, and conversion.</p>
              
              <div className="prose prose-lg max-w-none">
                <p>We help you extract the one problem inside your offer that buyers actually want solved — then turn it into a Tiny Visual Course: a visual micro-course that delivers instant "aha" and triggers instant purchases.</p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">You Get:</h3>
                <ul className="my-6">
                  <li>A scroll-stopping sketch that communicates your value in 3 seconds</li>
                  <li>A bite-sized product your audience will consume (and rave about) in 30 minutes</li>
                  <li>A plug-and-play system that turns strangers into superfans — without DMs or sales calls</li>
                </ul>
                
                <p className="text-xl font-medium">The result?</p>
                <ul className="my-4">
                  <li>Buyers rolling in while you sleep.</li>
                  <li>Fans sharing your product for you.</li>
                  <li>And a backend offer pipeline that practically fills itself.</li>
                </ul>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Perfect for:</h3>
                <ul className="grid grid-cols-2 gap-2 my-4">
                  <li>Coaches</li>
                  <li>Course Creators</li>
                  <li>Consultants</li>
                  <li>Experts with offers that should be working better than they are</li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}

        {/* Template Showcase Section - Commented out */}
        {/* <section className="py-16 overflow-hidden bg-white">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
                Beautiful <span className="text-primary">Templates</span> For Every Course Type
              </h2>
              <p className="text-muted-foreground">
                Choose from dozens of professionally designed templates to match your course style
              </p>
            </div>
          </div>

          <TemplateShowcase />
        </section> */}

        {/* Features Section */}
        {/* Features Section - Hidden */}
        {/* <section id="features" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Everything You Need To <span className="text-primary">Succeed</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Our comprehensive toolkit eliminates the guesswork and technical hurdles, so you can focus on what
                matters most - creating amazing content.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon="Layout"
                title="Ready-Made Templates"
                description="Beautiful, conversion-optimized page templates for your entire course ecosystem - just add your content."
              />
              <FeatureCard
                icon="VideoIcon"
                title="Video Hosting & Delivery"
                description="Seamless video hosting with adaptive streaming, engagement analytics, and content protection."
              />
              <FeatureCard
                icon="CreditCard"
                title="Payment Processing"
                description="Accept payments globally with multiple payment methods and flexible pricing options."
              />
              <FeatureCard
                icon="Users"
                title="Student Community"
                description="Built-in discussion forums, Q&A sections, and community features to boost engagement and retention."
              />
              <FeatureCard
                icon="BarChart"
                title="Analytics Dashboard"
                description="Comprehensive insights into student progress, engagement, and revenue metrics."
              />
              <FeatureCard
                icon="Smartphone"
                title="Mobile Optimization"
                description="Fully responsive design ensures perfect experience on any device, increasing completion rates."
              />
            </div>
          </div>
        </section> */}

        {/* Customer Journey Section */}
        <CustomerJourney />



        {/* Creator's Story Section with Parallax */}
        <ParallaxSection 
          id="story"
          backgroundImage="/images/doodle2.png"
        >
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-xl border border-slate-200">

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                From Overwhelmed Creator to <span className="text-primary">Visual Offer Strategist for 100+ Niches</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  When I launched my first few digital products, I did what most creators do:
                </p>
                <p>
                  - Built complex funnels<br />
                  - Tried to write a book to establish authority<br />
                  - Spent weeks making slide-heavy courses that no one finished
                </p>
                <p>
                  The results? Lots of effort. Very few buyers.
                </p>
                <p>
                  After testing ad after ad and watching people scroll past my offers, I realized the problem wasn't my content — it was how it was presented.
                </p>
                <p>
                  The truth is, we live in a scroll-first, short-attention, visual world — and the old ways of selling just don't work like they used to.
                </p>
                <p>
                  So I scrapped the funnel.
                </p>
                <p>
                  I simplified everything into a single sketch, a single problem, and a 30-minute course that could sell itself.
                </p>
                <p>
                  What happened next changed everything:
                </p>
                <p>
                  That visual offer started pulling in cold traffic buyers at under $5/day, and sent them directly into my premium programs — no sales calls, no overwhelm, no burnout.
                </p>
                <p>
                  Now, we've used this Tiny Visual Course method to help coaches, consultants, fortune 1000 companies, and course creators in over 100 niches turn their ideas into simple, scroll-stopping offers that convert.
                </p>
                <p>
                  And the best part?<br />
                  You don't need to be a designer. You just need a sketch, a message, and the right framework.
                </p>
                <p>
                  I've packaged everything into the Tiny Visual Courses Starter Kit — so you can skip the overwhelm and start building offers that are not just smart… but visual, viral, and wildly effective.
                </p>
                <div className="mt-8">
                  <p className="font-medium text-lg">See you inside,<br />— Bobby</p>
                  <p className="text-muted-foreground">Co-Founder, Tiny Visual Courses</p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Science Behind the Strategy Section with Animated Background - Commented out for now, may use later
        <AnimatedBackground id="science">
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <Badge className="mb-4" variant="outline">
                Research-Backed Methodology
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-white">
                The <span className="text-primary">Science</span> Behind Our Strategy
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-white/80">
                Our approach is grounded in educational psychology and learning science
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <CardTitle>Spaced Repetition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Our course structure implements scientifically-proven spaced repetition techniques that improve
                    knowledge retention by up to 74% compared to traditional learning methods.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <CardTitle>Active Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Our templates incorporate active learning principles that increase engagement by 60% and completion
                    rates by 43% through interactive elements and practical application.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <CardTitle>Microlearning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Our course structure breaks content into optimal 5-15 minute segments, which research shows improves
                    focus and information processing by up to 80%.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-4xl">87%</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Higher Completion Rates</h3>
                  <p className="text-white/80">
                    Courses built with our methodology see an average 87% higher completion rate than industry standard.
                    This leads to better results, more testimonials, and higher satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedBackground>
        */}

        {/* Comparison Table Section - Commented out for now, may use later
        <ComparisonTable />
        */}

        {/* Value Stack Section */}
        <section id="value" className="overflow-hidden">
          <ValueStack />
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Create Your Tiny Visual Course In <span className="text-primary">3 Simple Steps</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Our proven framework helps you extract, visualize, and scale your expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <CardTitle>Find the Hidden Gem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Extract the real value from your offer — identify the one problem you solve that clients are willing to pay for immediately.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <CardTitle>Design Your Visual Framework</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create a compelling visual framework that clearly communicates your solution and makes complex ideas instantly understandable.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <CardTitle>Optimize & Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get your solution in front of as many people as possible who have the same problem, turning your expertise into a scalable, automated income stream.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Trusted in <span className="text-primary">100+ Niches</span> and Counting...
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                See how the Tiny Visual Course method is transforming businesses across industries.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <img 
                src="/TVO-Testimonials.png" 
                alt="Tiny Visual Course Testimonials" 
                className="max-w-full h-auto rounded-lg" 
              />
            </div>

            {/* Testimonial cards hidden as requested */}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-50">
          <div className="container">
            {/* Limited Time section and pricing card hidden as requested */}
            <div className="max-w-4xl mx-auto">
              
              <div className="mt-12 bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-md border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -z-10 transform skew-x-12"></div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Guarantee Seal */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="h-32 w-32 rounded-full bg-primary flex items-center justify-center rotate-[20deg] shadow-lg border-4 border-white">
                        <div className="h-28 w-28 rounded-full border-2 border-dashed border-white flex items-center justify-center">
                          <div className="text-center text-white rotate-[-20deg]">
                            <div className="text-xs font-bold">30-DAY</div>
                            <div className="text-lg font-extrabold">NO-REGRET</div>
                            <div className="text-xs font-bold">GUARANTEE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Guarantee Text */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Try the Tiny Visual Course Starter Kit — Risk-Free</h3>
                    <p className="mb-4 text-slate-700">We believe in building real buyer assets, not just giving you more PDFs to download and forget.</p>
                    <p className="mb-4 text-slate-700">That's why the Tiny Visual Course Starter Kit is backed by our <span className="font-semibold text-primary">30-Day No-Regret Guarantee</span>:</p>
                    <p className="mb-4 text-slate-700">If you go through the process, build your sketch, and don't walk away with the clearest, most high-converting version of your offer you've ever had — we'll refund every penny.</p>
                    <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <p className="font-medium text-slate-800">No questions. No weird forms. No hoops.</p>
                      <p className="font-medium text-slate-800">You'll either get a breakthrough visual offer that finally sells... Or you'll get your money back.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Find answers to common questions about the Tiny Visual Course Starter Kit.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-5">
                {[
                  {
                    question: "What exactly am I building here?",
                    answer:
                      "You're building your first Visual Demand Engine™ — a buyer-generating mini-course built around one powerful sketch that sells your offer on sight. This is a real asset, not just a theory or template.",
                  },
                  {
                    question: "What exactly is a Tiny Visual Course?",
                    answer:
                      "A Tiny Visual Course is a 60-minute doodle course that solves a specific problem for your audience. It's designed to be easily consumed, highly engaging, and priced as an irresistible impulse buy.",
                  },
                  {
                    question: "Is this just a course? Or is anything done with me?",
                    answer:
                      "This is a process, not a passive course. You'll get step-by-step guidance, visual templates, swipe files, and for the first 20 signups — a personal review of your sketch and offer. This is the closest thing to 'done-with-you' you'll find for under $500.",
                  },
                  {
                    question: "What if I'm not a designer or can't draw?",
                    answer:
                      "Perfect. The Tiny Visual Course method works even if you can barely draw a stick figure. The framework shows you how to think visually, using plug-and-play doodle templates to make it feel effortless.",
                  },
                  {
                    question: "I'm not an artist. Can I still create effective Tiny Visual Course?",
                    answer:
                      "Absolutely! The Tiny Visual Course Toolkit includes a foolproof 3-step process for creating engaging doodles, even if you can't draw. You don't need artistic skills - just the ability to make simple shapes and lines.",
                  },
                  {
                    question: "How long will this take me?",
                    answer:
                      "We built this to be fast. You can go from idea → visual model → launched course in 3 days or less. Most people finish the core sketch and page in one afternoon.",
                  },
                  {
                    question: "How long does it take to create and launch a Tiny Visual Course?",
                    answer:
                      "With our step-by-step system, you can go from idea to launched tiny course in just a few days. Many of our students create their first tiny course in a weekend!",
                  },
                  {
                    question: "Does this work if I don't have a big audience?",
                    answer:
                      "Yes — this is actually how you build your audience of buyers. We show you how to launch this with as little as $5/day in ad spend (or post it organically), and how to convert cold traffic into warm fans.",
                  },
                  {
                    question: "What if I don't have an audience or email list?",
                    answer:
                      "That's perfectly fine! Tiny Visual Course are an excellent way to quickly build an audience and email list of buyers. The toolkit includes strategies for attracting your first customers, even without an existing audience.",
                  },
                  {
                    question: "Is this method compliant with ad network policies?",
                    answer:
                      "Yes, the Tiny Visual Course Method is fully compliant with major ad networks as of 2024. We've successfully used this method across various niches, including some considered 'high risk'.",
                  },
                  {
                    question: "Will selling a Tiny Visual Courses make me look 'salesy' to my audience?",
                    answer:
                      "Not at all. When done correctly, your Tiny Visual Courses will be seen as a valuable, low-cost solution to a specific problem. Your audience will appreciate the accessible format and immediate value you're providing.",
                  },
                  {
                    question: "Do I need marketing or copywriting experience to succeed with this method?",
                    answer:
                      "No prior experience is necessary. The Tiny Visual Courses Toolkit includes plug-and-play templates for your sales page, order bump, and upsell, allowing you to skip the learning curve and start selling quickly.",
                  },
                  {
                    question: "How is this different from other course creation methods?",
                    answer:
                      "The Tiny Visual Courses Method leverages the power of visual learning (60,000x faster than text!) to create highly engaging, easily consumable courses. This leads to faster customer results, higher satisfaction, and more sales.",
                  },
                  {
                    question: "What's included in the Tiny Visual Courses Toolkit?",
                    answer:
                      "Detailed modules for offer creation, visual design, course structure, pricing strategy, and funnel building. Bonus Rapid Implementation Roadmap. Plug-and-play templates for your sales page, order bump, and upsell.",
                  },
                  {
                    question: "Is there a guarantee?",
                    answer:
                      "Yes! We offer a 30-day, no-questions-asked money-back guarantee. If you follow the method and don't see at least a 10x return on your investment, or if you're unsatisfied for any reason, we'll refund your entire $27 investment.",
                  },
                  {
                    question: "Is there any upsell or hidden offer after I buy?",
                    answer:
                      "Nope. What you see is what you get. There's no surprise coaching pitch, no membership upsell, and no 'unlock the real stuff' after purchase. You'll have everything you need to launch your first Visual Demand Engine™ inside the $27 kit.",
                  },
                ].map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white rounded-lg overflow-hidden border border-slate-200 transition-all duration-200 hover:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 data-[state=open]:border-primary/20"
                  >
                    <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 text-base text-foreground/80 data-[state=open]:animate-glow">
                      <div className="py-4 border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zinc-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                Ready to Create a <span className="text-white">Visual Asset</span> That Sells for You?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Imagine a simple sketch bringing in buyers, a tiny visual course converting them, and them saying, "This is exactly what I needed — what else do you offer?"
              </p>
              <div className="flex justify-center">
                <Button size="lg" variant="default" className="group bg-primary hover:bg-primary/90" asChild>
                  <Link href="https://checkout.tinyvisualcourses.com">
                    YES — I'M READY TO ACTIVATE MY VISUAL DEMAND ENGINE
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-white/80">Backed by our 30-Day No-Risk Guarantee</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Detailed */}
      <footer className="border-t bg-slate-50 py-10">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center gap-2">
              <Image src="/TVO-icon-5498596.png" alt="Tiny Visual Course Logo" width={24} height={24} className="h-6 w-auto" />
              <span className="text-sm font-medium">Tiny Visual Courses</span>
              <span className="text-slate-400 mx-2">|</span>
              <Link href="https://members.tinyvisualcourses.com/" className="text-sm hover:text-primary transition-colors">Log in</Link>
            </div>
            
            <div className="text-center text-sm text-slate-700 mb-2">
              Need help? Email: support@tinyvisualcourses.com
            </div>
            
            <div className="flex items-center justify-center gap-4 text-xs text-slate-600">
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <span className="text-slate-400">|</span>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <span className="text-slate-400">|</span>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <span className="text-slate-400">|</span>
              <span className="text-slate-500">© Tiny Visual Courses, 2025 All Rights Reserved</span>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xs text-slate-500 text-center mb-4">
                This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
              </p>
              
              <p className="text-xs text-slate-500 text-center">
                DISCLAIMER: The sales figures stated on this page and discussed in the training curriculum are our personal sales figures and in some cases the sales figures of previous or existing clients. Please understand these results are not typical. We're not implying you'll duplicate them (or do anything for that matter). The average person who buys "how to" information gets little to no results. We're using these references for example purposes only. Your results will vary and depend on many factors including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action. If you're not willing to accept that, please DO NOT PURCHASE FROM TINYVISUALCOURSES.COM.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <FloatingCTA />
    </div>
  )
}
