import type React from "react"
import { cn } from "@/lib/utils"
import {
  FileText,
  Layout,
  Mail,
  Users,
  BarChart,
  Megaphone,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  MessageSquare,
  CreditCard,
} from "lucide-react"

interface TimelineProps {
  children: React.ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return <div className={cn("space-y-8", className)}>{children}</div>
}

interface TimelineItemProps {
  title: string
  description: string
  icon: string
  className?: string
}

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="h-6 w-6 text-primary" />,
  Layout: <Layout className="h-6 w-6 text-primary" />,
  Mail: <Mail className="h-6 w-6 text-primary" />,
  Users: <Users className="h-6 w-6 text-primary" />,
  BarChart: <BarChart className="h-6 w-6 text-primary" />,
  Megaphone: <Megaphone className="h-6 w-6 text-primary" />,
  CheckCircle: <CheckCircle className="h-6 w-6 text-primary" />,
  Zap: <Zap className="h-6 w-6 text-primary" />,
  Shield: <Shield className="h-6 w-6 text-primary" />,
  Globe: <Globe className="h-6 w-6 text-primary" />,
  MessageSquare: <MessageSquare className="h-6 w-6 text-primary" />,
  CreditCard: <CreditCard className="h-6 w-6 text-primary" />,
}

export function TimelineItem({ title, description, icon, className }: TimelineItemProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">{iconMap[icon]}</div>
        <div className="flex-1 w-px bg-border mt-2"></div>
      </div>
      <div className="pb-8">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
