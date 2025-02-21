import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, AlertTriangle, DollarSign } from "lucide-react"

export function PredictiveAnalytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Predictive Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Future Resource Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Forecasts CPU, memory, and storage needs based on historical trends and anticipated workloads.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Potential Bottlenecks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Identifies potential performance issues before they impact your applications.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Cost Optimization Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Suggests resource adjustments and scaling strategies to minimize costs without compromising performance.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

