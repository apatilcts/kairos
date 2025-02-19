import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Kubernetes Infrastructure?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Get started with KAIROS today and experience the power of AI-driven resource optimization for your Kubernetes
        clusters.
      </p>
      <Button size="lg" variant="secondary">
        Request a Demo
      </Button>
    </section>
  )
}

