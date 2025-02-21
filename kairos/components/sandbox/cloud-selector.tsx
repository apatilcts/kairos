"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, Database } from "lucide-react"

const cloudProviders = [
  { id: "aws", name: "Amazon Web Services", regions: ["us-east-1", "us-west-2", "eu-west-1"] },
  { id: "gcp", name: "Google Cloud Platform", regions: ["us-central1", "europe-west1", "asia-east1"] },
  { id: "azure", name: "Microsoft Azure", regions: ["eastus", "westeurope", "southeastasia"] },
  { id: "hybrid", name: "Hybrid", regions: ["on-premise", "aws-hybrid", "azure-hybrid"] },
]

export function CloudSelector() {
  const [selectedProvider, setSelectedProvider] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")
  const [clusters, setClusters] = useState([
    { id: 1, name: "production-cluster-1", provider: "aws", region: "us-east-1", status: "active" },
    { id: 2, name: "staging-cluster-1", provider: "gcp", region: "us-central1", status: "active" },
    { id: 3, name: "dev-cluster-1", provider: "azure", region: "eastus", status: "inactive" },
  ])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="w-5 h-5" />
              Cloud Provider
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={setSelectedProvider}>
              <SelectTrigger>
                <SelectValue placeholder="Select cloud provider" />
              </SelectTrigger>
              <SelectContent>
                {cloudProviders.map((provider) => (
                  <SelectItem key={provider.id} value={provider.id}>
                    {provider.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5" />
              Region
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={setSelectedRegion} disabled={!selectedProvider}>
              <SelectTrigger>
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {selectedProvider &&
                  cloudProviders
                    .find((p) => p.id === selectedProvider)
                    ?.regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            Available Clusters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clusters.map((cluster) => (
              <Card key={cluster.id} className="bg-gray-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{cluster.name}</span>
                    <Badge variant={cluster.status === "active" ? "default" : "secondary"}>{cluster.status}</Badge>
                  </div>
                  <div className="text-sm text-gray-500">
                    <div>Provider: {cluster.provider}</div>
                    <div>Region: {cluster.region}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

