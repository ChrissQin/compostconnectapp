import Link from "next/link"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    id: "smart-sensors",
    title: "Smart Sensors",
    description: "Real-time monitoring of your compost conditions for optimal results.",
  },
  {
    id: "ai-analytics",
    title: "AI Analytics",
    description: "Personalized recommendations based on your specific composting needs.",
  },
  {
    id: "educational-tools",
    title: "Educational Tools",
    description: "Comprehensive resources to learn composting best practices.",
  },
]

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Solutions</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <div key={solution.id} className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{solution.title}</h2>
            <p className="text-gray-600 mb-6">{solution.description}</p>
            <Button asChild>
              <Link href={`/solutions/${solution.id}`}>Learn More</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

