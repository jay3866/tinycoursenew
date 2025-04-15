import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Transformation() {
  const transformations = [
    {
      title: "Course Creation",
      before: {
        image: "/placeholder.svg?height=300&width=500&text=Before:+Complex+Process",
        points: [
          "Weeks of planning and setup",
          "Multiple disconnected tools",
          "Technical headaches",
          "Expensive development costs",
        ],
      },
      after: {
        image: "/placeholder.svg?height=300&width=500&text=After:+Streamlined+System",
        points: [
          "Ready in days, not months",
          "All-in-one integrated platform",
          "No technical skills required",
          "Fraction of the traditional cost",
        ],
      },
    },
  ]

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            The Transformation
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            <span className="text-primary">Before & After:</span> See The Difference
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience the dramatic transformation in both course creation and student experience
          </p>
        </div>

        <div className="space-y-20">
          {transformations.map((transform, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-center mb-8">{transform.title}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-6 items-center">
                {/* Before */}
                <div className="col-span-4 bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={transform.before.image || "/placeholder.svg"}
                      alt={`Before ${transform.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-4 text-red-500">Before</h4>
                    <ul className="space-y-2">
                      {transform.before.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">✕</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Arrow */}
                <div className="col-span-1 flex justify-center">
                  <div className="hidden lg:flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex lg:hidden h-12 w-12 rounded-full bg-primary/10 items-center justify-center transform rotate-90">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* After */}
                <div className="col-span-4 bg-white rounded-xl shadow-md overflow-hidden border-2 border-primary">
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={transform.after.image || "/placeholder.svg"}
                      alt={`After ${transform.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-4 text-primary">After</h4>
                    <ul className="space-y-2">
                      {transform.after.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
