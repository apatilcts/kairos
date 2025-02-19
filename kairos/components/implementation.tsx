import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const implementationSteps = [
  {
    title: "Resource Monitoring",
    description: "Deploy Prometheus and Grafana for comprehensive resource metrics collection and visualization.",
  },
  {
    title: "Vertical Pod Autoscaling",
    description: "Configure VPA to automatically adjust resource requests and limits based on real-time metrics.",
  },
  {
    title: "Node Optimization",
    description: "Implement custom controllers for analyzing node costs and optimizing node selection.",
  },
  {
    title: "GPU Optimization",
    description: "Profile and tune GPU workloads for maximum efficiency and utilization.",
  },
  {
    title: "Cost Visibility",
    description: "Implement Kubecost for detailed cost breakdowns and allocation policies.",
  },
  {
    title: "AI-driven Optimization",
    description: "Develop an AI engine to predict optimal resource configurations and guide scaling decisions.",
  },
  {
    title: "Cluster Rebalancing",
    description: "Create a controller for periodic cluster evaluation and automated rebalancing actions.",
  },
  {
    title: "Testing and Validation",
    description: "Establish comprehensive monitoring, alerting, and testing processes to ensure system reliability.",
  },
]

export function Implementation() {
  return (
    <section id="implementation" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Implementation Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {implementationSteps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

