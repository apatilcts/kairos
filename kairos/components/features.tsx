import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Cpu, GitBranch, AlertTriangle, BarChart, Zap } from "lucide-react"

const features = [
  {
    title: "Data Ingestion Pipeline",
    description: "Collect metrics from Prometheus, Kubecost, Kubernetes API, and application-specific sources.",
    icon: Database,
  },
  {
    title: "AI Engine",
    description: "Train and serve machine learning models for optimal resource configurations and scaling actions.",
    icon: Cpu,
  },
  {
    title: "Kubernetes Integration",
    description: "Seamlessly integrate with VPA, cluster autoscaler, and custom node replacement controller.",
    icon: GitBranch,
  },
  {
    title: "Monitoring and Alerting",
    description: "Track performance, cost savings, and resource utilization with a continuous feedback loop.",
    icon: AlertTriangle,
  },
  {
    title: "Cost Allocation",
    description: "Visualize and analyze cost allocation across your Kubernetes infrastructure using Kubecost.",
    icon: BarChart,
  },
  {
    title: "Performance Optimization",
    description: "Continuously improve resource utilization and application performance using AI-driven insights.",
    icon: Zap,
  },
]

export function Features() {
  return (
    <section id="features" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

