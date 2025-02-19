import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-6">KAIROS: Kubernetes AI-driven Resource Optimization System</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Optimize your Kubernetes resources with AI-driven insights for enhanced performance and cost efficiency.
      </p>
      <div className="space-x-4">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </section>
  )
}

