import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Server, Shield } from "lucide-react"

export default function MultiCloudPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Multi-Cloud Management</h1>
        <p className="text-xl text-gray-600 mb-12">
          Manage and optimize your Kubernetes infrastructure across multiple cloud providers with KAIROS's intelligent
          platform.
        </p>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <Cloud className="w-8 h-8 text-emerald-500 mb-2" />
              <CardTitle>Unified Cloud Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Centrally manage resources across AWS, GCP, Azure, and hybrid environments from a single dashboard.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Server className="w-8 h-8 text-emerald-500 mb-2" />
              <CardTitle>Intelligent Resource Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Automatically distribute workloads across cloud providers based on cost, performance, and availability
                requirements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-emerald-500 mb-2" />
              <CardTitle>Cross-Cloud Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Implement consistent security policies and compliance controls across all cloud environments.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

