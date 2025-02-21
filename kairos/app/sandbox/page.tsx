import { CloudSelector } from "@/components/sandbox/cloud-selector"
import { ResourceMetrics } from "@/components/sandbox/resource-metrics"
import { PodForm } from "@/components/sandbox/pod-form"

export default function SandboxPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">KAIROS Sandbox</h1>
      <p className="text-gray-600 mb-8">
        Explore KAIROS functionality by adding pods and seeing AI-driven resource optimization across different cloud
        providers.
      </p>

      <div className="space-y-8">
        <CloudSelector />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PodForm />
          <ResourceMetrics />
        </div>
      </div>
    </div>
  )
}

