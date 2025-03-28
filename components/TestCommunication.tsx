import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

interface CardProps {
  title: string
  description: string
}

export default function ProportionalCard({ title, description }: CardProps) {
  return (
    <Card className="relative overflow-hidden border-none bg-white shadow-lg rounded-lg max-w-sm mx-auto">
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full -ml-8 -mb-8"></div>

      <CardContent className="p-6 relative z-10">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        <div className="mt-4 flex justify-end">
          <div className="text-xs font-medium text-primary">Tecnologia avançada</div>
        </div>
      </CardContent>
    </Card>
  )
}
