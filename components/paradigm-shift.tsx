import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowDown, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ParadigmShift() {
  const oldWayNewWay = [
    {
      old: "Complex tech stack with multiple platforms",
      new: "All-in-one integrated solution",
    },
    {
      old: "Months of setup time before launch",
      new: "Launch your course in days, not months",
    },
    {
      old: "$5,000-$15,000 upfront investment",
      new: "Affordable monthly subscription",
    },
    {
      old: "Hiring developers, designers & marketers",
      new: "Done-for-you templates and systems",
    },
    {
      old: "Low completion rates & high refunds",
      new: "Engaging experience with 87% completion",
    },
  ]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            The Solution
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Introducing a <span className="text-primary">Revolutionary Approach</span> to Course Creation
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            We've reimagined the entire course creation process from the ground up, focusing on simplicity, speed, and
            student success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-primary/5 -z-10"></div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Visual+Course+Framework"
                alt="Visual Course Framework"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">The Shift from Complexity to Clarity</h3>
            <div className="space-y-6">
              {oldWayNewWay.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-7 gap-4">
                  <div className="col-span-3 bg-red-50 p-4 rounded-lg border border-red-100 relative">
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 md:hidden">
                      <ArrowDown className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium">{item.old}</p>
                  </div>
                  <div className="col-span-4 bg-green-50 p-4 rounded-lg border border-green-100 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="font-medium">{item.new}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Visual Learning Framework</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Our approach leverages visual learning principles to create courses that are easier to create, more engaging
            to consume, and more effective at driving results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "90%",
                text: "of information transmitted to the brain is visual",
              },
              {
                number: "65%",
                text: "higher retention rate with visual learning",
              },
              {
                number: "4x",
                text: "faster processing of visual information",
              },
            ].map((stat, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
