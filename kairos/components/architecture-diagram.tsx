import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Gauge, GitBranch } from "lucide-react"
import Image from "next/image"

export function ArchitectureDiagram() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">KAIROS Architecture</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          KAIROS integrates seamlessly with your Kubernetes cluster, leveraging AI-driven insights to optimize resource
          allocation, automate scaling, and reduce costs. Here's a detailed look at how the components work together:
        </p>
      </div>

      <div className="relative mb-12">
        <Image
          src="/placeholder.svg?height=400&width=1000"
          alt="KAIROS Architecture Overview"
          width={1000}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
        {/* Architecture Component Labels */}
        <div className="absolute top-1/4 left-1/4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <h3 className="font-semibold">Data Collection</h3>
          <p className="text-sm text-gray-600">Metrics & Telemetry</p>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <h3 className="font-semibold">AI Engine</h3>
          <p className="text-sm text-gray-600">ML Models & Optimization</p>
        </div>
        <div className="absolute top-1/4 right-1/4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <h3 className="font-semibold">Resource Management</h3>
          <p className="text-sm text-gray-600">Automated Scaling</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-semibold text-indigo-600">Grafana Dashboards</h3>
            </div>
            <Image
              src="/placeholder.svg?height=150&width=300"
              alt="Grafana Dashboard"
              width={300}
              height={150}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-600">Visualizes metrics and optimization recommendations</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-semibold text-indigo-600">Node Replacement Controller</h3>
            </div>
            <Image
              src="/placeholder.svg?height=150&width=300"
              alt="Node Controller"
              width={300}
              height={150}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-600">Optimizes node allocation for cost-efficiency</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-semibold text-indigo-600">GitOps Integration</h3>
            </div>
            <Image
              src="/placeholder.svg?height=150&width=300"
              alt="GitOps Flow"
              width={300}
              height={150}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-600">Ensures consistent and auditable deployments</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

