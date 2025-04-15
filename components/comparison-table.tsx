import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"

export default function ComparisonTable() {
  const features = [
    {
      name: "Setup Time",
      courseStarterKit: "3-5 days",
      traditional: "2-6 months",
      webinar: "1-2 months",
    },
    {
      name: "Upfront Cost",
      courseStarterKit: "$49-249/month",
      traditional: "$5,000-15,000",
      webinar: "$2,000-5,000",
    },
    {
      name: "Technical Skills Required",
      courseStarterKit: "None",
      traditional: "Advanced",
      webinar: "Moderate",
    },
    {
      name: "Student Completion Rate",
      courseStarterKit: "87%",
      traditional: "23%",
      webinar: "35%",
    },
    {
      name: "Maintenance Required",
      courseStarterKit: "Minimal",
      traditional: "Extensive",
      webinar: "Moderate",
    },
    {
      name: "Mobile Optimized",
      courseStarterKit: true,
      traditional: false,
      webinar: "Partial",
    },
    {
      name: "Analytics & Insights",
      courseStarterKit: true,
      traditional: "Limited",
      webinar: "Basic",
    },
    {
      name: "Community Features",
      courseStarterKit: true,
      traditional: "Add-on",
      webinar: false,
    },
    {
      name: "Payment Processing",
      courseStarterKit: true,
      traditional: "Add-on",
      webinar: "Limited",
    },
    {
      name: "Marketing Tools",
      courseStarterKit: true,
      traditional: "Separate",
      webinar: "Basic",
    },
  ]

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Comparison
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            How We <span className="text-primary">Compare</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            See how Course Starter Kit stacks up against traditional course platforms and webinar systems
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-white"></th>
                <th className="p-4 text-center bg-primary text-white rounded-tl-xl">
                  <div className="text-lg font-bold">Course Starter Kit</div>
                  <div className="text-sm font-normal">All-in-one solution</div>
                </th>
                <th className="p-4 text-center bg-slate-800 text-white">
                  <div className="text-lg font-bold">Traditional Course</div>
                  <div className="text-sm font-normal">Custom development</div>
                </th>
                <th className="p-4 text-center bg-slate-600 text-white rounded-tr-xl">
                  <div className="text-lg font-bold">Webinar System</div>
                  <div className="text-sm font-normal">Live-focused approach</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-slate-50"} ${
                    index === features.length - 1 ? "border-b-0" : "border-b border-slate-200"
                  }`}
                >
                  <td className="p-4 font-medium">{feature.name}</td>
                  <td className="p-4 text-center">
                    {typeof feature.courseStarterKit === "boolean" ? (
                      feature.courseStarterKit ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span className="font-medium text-primary">{feature.courseStarterKit}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {typeof feature.traditional === "boolean" ? (
                      feature.traditional ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span>{feature.traditional}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {typeof feature.webinar === "boolean" ? (
                      feature.webinar ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span>{feature.webinar}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
