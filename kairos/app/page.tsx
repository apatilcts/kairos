import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ArchitectureDiagram } from "@/components/architecture-diagram"
import { DataIngestionPipeline } from "@/components/data-ingestion-pipeline"
import { KubernetesIntegration } from "@/components/kubernetes-integration"
import { MonitoringAlerting } from "@/components/monitoring-alerting"
import { CostAllocation } from "@/components/cost-allocation"
import { PerformanceOptimization } from "@/components/performance-optimization"
import { MachineLearningModels } from "@/components/machine-learning-models"
import { PredictiveAnalytics } from "@/components/predictive-analytics"
import { ContinuousLearning } from "@/components/continuous-learning"
import { Implementation } from "@/components/implementation"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Features />
      <section id="architecture" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-6">KAIROS Architecture</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          KAIROS integrates seamlessly with your Kubernetes cluster, leveraging AI-driven insights to optimize resource
          allocation, automate scaling, and reduce costs. Here's a detailed look at how the components work together:
        </p>
        <ArchitectureDiagram />
      </section>
      <section id="data-ingestion" className="py-20 bg-gray-50">
        <DataIngestionPipeline />
      </section>
      <section id="kubernetes-integration" className="py-20">
        <KubernetesIntegration />
      </section>
      <section id="monitoring-alerting" className="py-20 bg-gray-50">
        <MonitoringAlerting />
      </section>
      <section id="cost-allocation" className="py-20">
        <CostAllocation />
      </section>
      <section id="performance-optimization" className="py-20 bg-gray-50">
        <PerformanceOptimization />
      </section>
      <section id="ai-engine" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">AI Engine</h2>
        <MachineLearningModels />
        <div className="mt-20">
          <PredictiveAnalytics />
        </div>
        <div className="mt-20">
          <ContinuousLearning />
        </div>
      </section>
      <Implementation />
      <CTA />
    </div>
  )
}

