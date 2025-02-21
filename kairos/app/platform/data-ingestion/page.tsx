import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Filter, Server, Share2 } from "lucide-react"

export default function DataIngestionPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Data Ingestion</h1>
        <p className="text-xl text-gray-600 mb-12">
          Collect and process metrics from multiple sources to power KAIROS's AI-driven optimization.
        </p>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <Database className="w-8 h-8 text-emerald-500 mb-2" />
              <CardTitle>Data Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Prometheus metrics</li>
                <li>Kubernetes API</li>
                <li>Cloud provider metrics</li>
                <li>Custom application metrics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Filter className="w-8 h-8 text-emerald-500 mb-2" />
              <CardTitle>Data Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time data filtering</li>
                <li>Metric aggregation</li>
                <li>Data normalization</li>
                <li>Time series alignment</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Server className="w-8 h-8 text-emerald-500 mb-2" />
              <CardTitle>Storage & Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Time series database</li>
                <li>Long-term storage</li>
                <li>Data compression</li>
                <li>Retention policies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Share2 className="w-8 h-8 text-emerald-500 mb-2" />
              <CardTitle>Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>API endpoints</li>
                <li>Data export</li>
                <li>Third-party integration</li>
                <li>Custom collectors</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

