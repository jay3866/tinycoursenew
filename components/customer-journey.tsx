import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function CustomerJourney() {
  const steps = [
    {
      number: 1,
      title: "Watch the 45 min Training",
      description: "Learn the key strategies and frameworks to create your high-converting Tiny Visual Course.",
      timeline: "45 mins",
      highlight: "Comprehensive training",
    },
    {
      number: 2,
      title: "Create Your Tiny Visual Course",
      description: "Transform your expertise into a visual micro-course that instantly communicates your value.",
      timeline: "60 mins",
      highlight: "No design skills needed",
    },
    {
      number: 3,
      title: "Launch & Generate Buyers On Demand",
      description: "Release your Tiny Visual Course to the marketplace and start attracting your ideal clients.",
      timeline: "30 mins",
      highlight: "Zero net ad cost",
    },
    {
      number: 4,
      title: "Scale Your Client Pipeline",
      description: "Watch as your Tiny Visual Course pays for traffic while profitably bringing in your best clients.",
      timeline: "Ongoing",
      highlight: "Automated client acquisition",
    },
  ]

  return (
    <section className="pt-10 pb-20 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-8">
          <Badge className="mb-4" variant="outline">
            Your Journey
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            What Happens After You <span className="text-primary">Sign Up</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            From concept to cash flow: How your Tiny Visual Course becomes a client-generating machine
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-slate-200"></div>

            {/* Vertical line for mobile */}
            <div className="md:hidden absolute top-0 bottom-0 left-12 w-1 bg-slate-200"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Circle on timeline */}
                  <div className="absolute md:top-24 md:left-1/2 md:-translate-x-1/2 top-0 left-12 -translate-x-1/2 z-10">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:pt-32 pl-20 md:pl-0">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-full hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
                        <span className="px-3 py-1 bg-primary/10 rounded-full">{step.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{step.highlight}</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow between steps (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-24 right-0 translate-x-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mt-16 bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold mb-4 text-center">The End Result</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2.5 Hours</div>
                <p className="text-muted-foreground">From concept to buyers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50-100</div>
                <p className="text-muted-foreground">Buyers daily on autopilot</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">$0</div>
                <p className="text-muted-foreground">Net cost for client acquisition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
