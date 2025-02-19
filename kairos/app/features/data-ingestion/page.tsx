import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Server, Code } from "lucide-react"

export default function DataIngestionPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Data Ingestion Pipeline</h1>
      <p className="text-gray-600 mb-8">
        The KAIROS data ingestion pipeline collects metrics from various sources to provide a comprehensive view of your
        Kubernetes cluster's performance and resource utilization.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <Database className="w-8 h-8 text-blue-600 mb-2" />
            <CardTitle>Data Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Prometheus metrics</li>
              <li>Kubecost data</li>
              <li>Kubernetes API</li>
              <li>Application-specific metrics</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Server className="w-8 h-8 text-blue-600 mb-2" />
            <CardTitle>Storage</CardTitle>
          </CardHeader>
          <CardContent>
            <p>KAIROS uses specialized databases to efficiently store and query collected data:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Time-series database (e.g., InfluxDB) for metrics</li>
              <li>Relational database for cost data</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <Code className="w-8 h-8 text-blue-600 mb-2" />
            <CardTitle>Data Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The ingestion pipeline performs several key tasks:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Data normalization and cleaning</li>
              <li>Aggregation of metrics from multiple sources</li>
              <li>Real-time processing for immediate insights</li>
              <li>Batch processing for historical analysis</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

