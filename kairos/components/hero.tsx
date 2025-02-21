import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center">
      {/* Hexagon Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-600/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' fill-opacity='0.1' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">AI-Driven Kubernetes Optimization</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              KAIROS optimizes your Kubernetes infrastructure using advanced AI, reducing costs and improving
              performance automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="text-white">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-400">No credit card required · 100 GB + 1 user free</div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative h-[600px] w-full">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="KAIROS Dashboard"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
                style={{
                  filter: "drop-shadow(0 0 1rem rgba(0,0,0,0.5))",
                }}
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-lg rounded-lg p-4 shadow-lg">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Cost Savings Graph"
                  width={200}
                  height={100}
                  className="rounded"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-lg rounded-lg p-4 shadow-lg">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Performance Metrics"
                  width={200}
                  height={100}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

