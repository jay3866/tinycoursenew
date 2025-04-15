import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Layout,
  VideoIcon,
  CreditCard,
  Users,
  BarChart,
  Smartphone,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  MessageSquare,
  FileText,
} from "lucide-react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="h-10 w-10 text-primary" />,
  VideoIcon: <VideoIcon className="h-10 w-10 text-primary" />,
  CreditCard: <CreditCard className="h-10 w-10 text-primary" />,
  Users: <Users className="h-10 w-10 text-primary" />,
  BarChart: <BarChart className="h-10 w-10 text-primary" />,
  Smartphone: <Smartphone className="h-10 w-10 text-primary" />,
  CheckCircle: <CheckCircle className="h-10 w-10 text-primary" />,
  Zap: <Zap className="h-10 w-10 text-primary" />,
  Shield: <Shield className="h-10 w-10 text-primary" />,
  Globe: <Globe className="h-10 w-10 text-primary" />,
  MessageSquare: <MessageSquare className="h-10 w-10 text-primary" />,
  FileText: <FileText className="h-10 w-10 text-primary" />,
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-0 shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">{iconMap[icon]}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
