import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, XCircle, Clock, DollarSign, BrainCircuit, Frown } from "lucide-react"
import Image from "next/image"

export default function ProblemAgitation() {
  const painPoints = [
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: "Time-Consuming",
      description: "Spending months building course platforms, designing pages, and figuring out tech",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-red-500" />,
      title: "Expensive",
      description: "Hiring developers, designers, and marketers costing $5,000-$15,000 before making a sale",
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-red-500" />,
      title: "Overwhelming",
      description: "Juggling dozens of tools, platforms, and systems that don't work together",
    },
    {
      icon: <Frown className="h-6 w-6 text-red-500" />,
      title: "Disappointing Results",
      description: "Low conversion rates, poor student experience, and high refund rates despite your best efforts",
    },
  ]

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="destructive">
            The Problem
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Why Creating & Selling Courses Is <span className="text-red-500">Unnecessarily Hard</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            The current approach to course creation is broken, leaving creators frustrated, overwhelmed, and out of
            pocket before they even make their first sale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className="flex-shrink-0 mt-1">{point.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold">This Isn't Your Fault</h3>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                <strong>The truth is:</strong> The traditional course creation process was designed for tech companies
                and large educational institutions with teams of developers and six-figure budgets — not for independent
                creators and experts like you.
              </p>
              <p>
                You've been set up to fail with fragmented tools, complex systems, and outdated advice that makes
                everything harder than it needs to be.
              </p>
              <p>
                <strong className="text-primary">
                  What if there was a simpler, faster, and more effective way to create and sell courses?
                </strong>
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Discover the Better Way
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="relative h-64 md:h-80 bg-slate-200">
            <Image
              src="/placeholder.svg?height=400&width=800&text=Frustrated+Course+Creator"
              alt="Frustrated course creator struggling with complex systems"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <p className="font-medium text-lg">
                  "I spent 6 months and over $12,000 building my course platform before I made a single sale..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
