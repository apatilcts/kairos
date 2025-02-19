import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitBranch, Gauge, Layers } from "lucide-react"

export function KubernetesIntegration() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Kubernetes Integration</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <GitBranch className="w-5 h-5 mr-2" />
              VPA Integration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Automatically adjust resource requests and limits for pods based on AI-driven recommendations.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Layers className="w-5 h-5 mr-2" />
              Cluster Autoscaler
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Dynamically scale the cluster size based on workload demands and cost optimization insights.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gauge className="w-5 h-5 mr-2" />
              Node Replacement Controller
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Custom controller to replace underutilized or expensive nodes with more cost-effective options.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

