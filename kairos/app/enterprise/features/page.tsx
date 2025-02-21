import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Clock, Database } from "lucide-react"

export default function EnterpriseFeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Enterprise Features</h1>
        <p className="text-xl text-gray-600 mb-12">
          Advanced capabilities designed for enterprise-scale Kubernetes deployments.
        </p>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-emerald-500 mb-2" />
              <CardTitle>Advanced Security Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Role-based access control (RBAC)</li>
                <li>Single Sign-On (SSO) integration</li>
                <li>Audit logging and compliance reporting</li>
                <li>Encryption at rest and in transit</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-emerald-500 mb-2" />
              <CardTitle>Team Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Multi-team support</li>
                <li>Customizable dashboards</li>
                <li>Team-based resource quotas</li>
                <li>Collaboration tools integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-emerald-500 mb-2" />
              <CardTitle>24/7 Premium Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Dedicated support team</li>
                <li>Priority incident response</li>
                <li>Technical account management</li>
                <li>Custom SLA options</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Database className="w-8 h-8 text-emerald-500 mb-2" />
              <CardTitle>Enterprise Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>High availability configuration</li>
                <li>Global cluster management</li>
                <li>Custom retention policies</li>
                <li>Advanced backup and restore</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

