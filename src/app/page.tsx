import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="relative h-[90vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Composting facility"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Smart Composting for a Sustainable Future</h1>
            <p className="text-xl mb-8">
              Transform your waste management with AI-powered composting solutions that make sustainability simple and
              efficient.
            </p>
            <div className="space-y-4">
              <div className="space-x-4">
                <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049]">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
              <p className="text-sm text-gray-300">
                By signing up, you agree to the{" "}
                <Link href="/terms" className="text-white hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-white hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CompostConnect?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Smart Sensors</h3>
              <p className="text-gray-600">Real-time monitoring of your compost conditions for optimal results</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">AI-Powered</h3>
              <p className="text-gray-600">Personalized recommendations based on your specific needs</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Educational Tools</h3>
              <p className="text-gray-600">Learn composting best practices with our comprehensive resources</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

