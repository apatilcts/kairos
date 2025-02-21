import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, BarChart, Gauge, GitBranch, AlertTriangle, Cloud } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "AI-Powered Optimization",
    description: "Machine learning models continuously analyze and optimize your Kubernetes resources.",
    icon: Cpu,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Multi-Cloud Support",
    description: "Seamlessly manage resources across AWS, GCP, Azure, and hybrid environments.",
    icon: Cloud,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Real-Time Monitoring",
    description: "Track performance metrics and resource utilization in real-time.",
    icon: BarChart,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Intelligent Scaling",
    description: "Automatically scale resources based on workload patterns and demands.",
    icon: Gauge,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "GitOps Integration",
    description: "Integrate with your existing GitOps workflow for consistent deployments.",
    icon: GitBranch,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Proactive Alerts",
    description: "Get notified of potential issues before they impact your applications.",
    icon: AlertTriangle,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to optimize your Kubernetes infrastructure</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-gray-100 overflow-hidden">
              <div className="relative h-48">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <feature.icon className="h-12 w-12 text-emerald-500 mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

