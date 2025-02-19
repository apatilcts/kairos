import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, PieChart, Tags } from "lucide-react"

export function CostAllocation() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Cost Allocation</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="w-5 h-5 mr-2" />
              Visualization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Cost breakdown by namespace</li>
              <li>Team-based cost allocation</li>
              <li>Application-level expenses</li>
              <li>Historical cost trends</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Tags className="w-5 h-5 mr-2" />
              Tagging and Labeling
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Automated resource tagging</li>
              <li>Custom label management</li>
              <li>Cost center assignment</li>
              <li>Project-based tagging</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Cost Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Resource utilization vs. cost</li>
              <li>Idle resource identification</li>
              <li>Cost optimization suggestions</li>
              <li>Chargeback/showback reports</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

