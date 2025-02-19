import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, BarChart, Bell } from "lucide-react"

export function MonitoringAlerting() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Monitoring and Alerting</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="w-5 h-5 mr-2" />
              Performance Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>CPU and memory utilization</li>
              <li>Application response times</li>
              <li>Throughput metrics</li>
              <li>Error rates</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Cost Savings Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Resource cost trends</li>
              <li>Optimization impact</li>
              <li>Cost anomaly detection</li>
              <li>Budget adherence</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Alerting System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Performance degradation alerts</li>
              <li>Cost spike notifications</li>
              <li>Resource bottleneck warnings</li>
              <li>Optimization opportunity alerts</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

