import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Cpu, GitBranch, AlertTriangle, BarChart, Layers, Gauge, Server } from "lucide-react"

export function ArchitectureDiagram() {
  return (
    <div className="relative w-full h-[800px] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#4F46E5" />
          </marker>
        </defs>
        <path d="M 180 140 L 400 140" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <path d="M 480 200 L 480 280" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <path d="M 480 440 L 280 560" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <path d="M 480 440 L 480 560" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <path d="M 480 440 L 680 560" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />
      </svg>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-indigo-700">
        KAIROS Architecture
      </div>

      <Card className="absolute top-16 left-4 w-64 bg-white shadow-lg border-indigo-200">
        <CardHeader className="p-4">
          <Database className="w-8 h-8 text-indigo-600 mb-2" />
          <CardTitle className="text-lg text-indigo-700">Data Sources</CardTitle>
        </CardHeader>
        <CardContent className="text-sm p-4">
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Prometheus</li>
            <li>Kubecost</li>
            <li>Kubernetes API</li>
            <li>Application metrics</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 bg-white shadow-lg border-indigo-200">
        <CardHeader className="p-4">
          <Server className="w-8 h-8 text-indigo-600 mb-2" />
          <CardTitle className="text-lg text-indigo-700">Data Ingestion Pipeline</CardTitle>
        </CardHeader>
        <CardContent className="text-sm p-4 text-gray-600">
          Collects and processes data from various sources
        </CardContent>
      </Card>

      <Card className="absolute top-64 left-1/2 transform -translate-x-1/2 w-72 bg-white shadow-lg border-indigo-200">
        <CardHeader className="p-4">
          <Cpu className="w-8 h-8 text-indigo-600 mb-2" />
          <CardTitle className="text-lg text-indigo-700">AI Engine</CardTitle>
        </CardHeader>
        <CardContent className="text-sm p-4">
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Resource prediction</li>
            <li>Scaling decisions</li>
            <li>Workload analysis</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="absolute bottom-32 left-4 w-64 bg-white shadow-lg border-indigo-200">
        <CardHeader className="p-4">
          <GitBranch className="w-8 h-8 text-indigo-600 mb-2" />
          <CardTitle className="text-lg text-indigo-700">VPA & Cluster Autoscaler</CardTitle>
        </CardHeader>
        <CardContent className="text-sm p-4 text-gray-600">Adjusts pod resources and cluster size</CardContent>
      </Card>

      <Card className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-64 bg-white shadow-lg border-indigo-200">
        <CardHeader className="p-4">
          <Gauge className="w-8 h-8 text-indigo-600 mb-2" />
          <CardTitle className="text-lg text-indigo-700">Node Replacement Controller</CardTitle>
        </CardHeader>
        <CardContent className="text-sm p-4 text-gray-600">Optimizes node allocation for cost-efficiency</CardContent>
      </Card>

      <Card className="absolute bottom-32 right-4 w-64 bg-white shadow-lg border-indigo-200">
        <CardHeader className="p-4">
          <AlertTriangle className="w-8 h-8 text-indigo-600 mb-2" />
          <CardTitle className="text-lg text-indigo-700">Monitoring & Alerting</CardTitle>
        </CardHeader>
        <CardContent className="text-sm p-4 text-gray-600">Provides real-time insights and notifications</CardContent>
      </Card>

      <Card className="absolute bottom-4 left-4 w-64 bg-white shadow-lg border-indigo-200">
        <CardHeader className="p-4">
          <BarChart className="w-8 h-8 text-indigo-600 mb-2" />
          <CardTitle className="text-lg text-indigo-700">Grafana Dashboards</CardTitle>
        </CardHeader>
        <CardContent className="text-sm p-4 text-gray-600">
          Visualizes metrics and optimization recommendations
        </CardContent>
      </Card>

      <Card className="absolute bottom-4 right-4 w-64 bg-white shadow-lg border-indigo-200">
        <CardHeader className="p-4">
          <Layers className="w-8 h-8 text-indigo-600 mb-2" />
          <CardTitle className="text-lg text-indigo-700">GitOps Integration</CardTitle>
        </CardHeader>
        <CardContent className="text-sm p-4 text-gray-600">Ensures consistent and auditable deployments</CardContent>
      </Card>
    </div>
  )
}

