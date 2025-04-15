import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating: number
}

export default function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-md transition-all hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
          ))}
        </div>
        <p className="text-lg mb-6 italic">"{quote}"</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 border-t pt-4">
        <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-200">
          <Image src={`/placeholder.svg?height=48&width=48`} alt={`${author} avatar`} width={48} height={48} />
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
