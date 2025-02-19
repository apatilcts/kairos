import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Server, ArrowRightIcon } from "lucide-react"

export function DataIngestionPipeline() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Data Ingestion Pipeline</h2>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="w-5 h-5 mr-2" />
              Data Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Prometheus metrics</li>
              <li>Kubecost data</li>
              <li>Kubernetes API</li>
              <li>Application-specific metrics</li>
            </ul>
          </CardContent>
        </Card>
        <ArrowRightIcon className="w-8 h-8 text-blue-500 hidden md:block" />
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Server className="w-5 h-5 mr-2" />
              Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Data normalization</li>
              <li>Aggregation</li>
              <li>Time-series alignment</li>
              <li>Anomaly detection</li>
            </ul>
          </CardContent>
        </Card>
        <ArrowRightIcon className="w-8 h-8 text-blue-500 hidden md:block" />
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="w-5 h-5 mr-2" />
              Storage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Time-series database</li>
              <li>Relational database</li>
              <li>Data warehouse</li>
              <li>Object storage</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

