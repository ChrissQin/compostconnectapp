import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About CompostConnect</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg mb-6">
            CompostConnect is an AI-powered platform that revolutionizes composting and waste management. Our mission is
            to make sustainable waste management accessible and efficient for everyone, from individual households to
            large-scale facilities.
          </p>
          <p className="text-lg mb-6">
            Founded in 2023, we combine cutting-edge technology with environmental consciousness to create smart
            composting solutions that benefit both people and the planet.
          </p>
          <Button size="lg">Learn More About Our Technology</Button>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="CompostConnect team"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

