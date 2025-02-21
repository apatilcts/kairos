"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, ArrowLeft, AlertTriangle } from "lucide-react"
import Link from "next/link"

interface PodConfig {
  name: string
  cpu: number
  memory: number
  cost: number
  type: string
  priority: string
}

interface OptimizationSuggestion {
  type: "warning" | "info"
  title: string
  description: string
}

const initialPodConfig: PodConfig = {
  name: "",
  cpu: 0,
  memory: 0,
  cost: 0,
  type: "general",
  priority: "medium",
}

export function PodForm() {
  const [podConfig, setPodConfig] = useState<PodConfig>(initialPodConfig)
  const [submitted, setSubmitted] = useState(false)
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([])

  const analyzePodConfig = (config: PodConfig) => {
    const newSuggestions: OptimizationSuggestion[] = []

    // CPU Analysis
    if (config.cpu > 50) {
      newSuggestions.push({
        type: "warning",
        title: "High CPU Usage",
        description: "Consider using horizontal pod autoscaling to distribute load across multiple pods.",
      })
    }

    // Memory Analysis
    if (config.memory > 40) {
      newSuggestions.push({
        type: "warning",
        title: "Memory Optimization Required",
        description: "Memory usage is high. Review memory limits and implement resource quotas.",
      })
    }

    // Cost Analysis
    if (config.cost > 50) {
      newSuggestions.push({
        type: "info",
        title: "Cost Optimization",
        description: "Consider using spot instances or reserved capacity for cost savings.",
      })
    }

    return newSuggestions
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newSuggestions = analyzePodConfig(podConfig)
    setSuggestions(newSuggestions)
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Pod</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="pod-name">Pod Name</Label>
              <Input
                id="pod-name"
                value={podConfig.name}
                onChange={(e) => setPodConfig({ ...podConfig, name: e.target.value })}
                placeholder="Enter pod name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Pod Type</Label>
              <Select value={podConfig.type} onValueChange={(value) => setPodConfig({ ...podConfig, type: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select pod type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Purpose</SelectItem>
                  <SelectItem value="compute">Compute Optimized</SelectItem>
                  <SelectItem value="memory">Memory Optimized</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Priority Level</Label>
              <Select
                value={podConfig.priority}
                onValueChange={(value) => setPodConfig({ ...podConfig, priority: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>CPU Usage (%)</Label>
              <Slider
                value={[podConfig.cpu]}
                onValueChange={(value) => setPodConfig({ ...podConfig, cpu: value[0] })}
                min={0}
                max={100}
                step={1}
              />
              <div className="text-sm text-gray-500">{podConfig.cpu}%</div>
            </div>

            <div className="space-y-2">
              <Label>Memory Usage (%)</Label>
              <Slider
                value={[podConfig.memory]}
                onValueChange={(value) => setPodConfig({ ...podConfig, memory: value[0] })}
                min={0}
                max={100}
                step={1}
              />
              <div className="text-sm text-gray-500">{podConfig.memory}%</div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cost">Estimated Cost ($)</Label>
              <Input
                id="cost"
                type="number"
                value={podConfig.cost}
                onChange={(e) => setPodConfig({ ...podConfig, cost: Number(e.target.value) })}
                placeholder="Enter estimated cost"
                min={0}
                step={0.01}
              />
            </div>

            <Button type="submit" className="w-full">
              Add Pod
            </Button>
          </form>
        </CardContent>
      </Card>

      {submitted && (
        <div className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Pod Added Successfully</AlertTitle>
            <AlertDescription>
              Pod "{podConfig.name}" has been added to the cluster. Review the optimization suggestions below.
            </AlertDescription>
          </Alert>

          {suggestions.map((suggestion, index) => (
            <Alert key={index} variant={suggestion.type === "warning" ? "destructive" : "default"}>
              {suggestion.type === "warning" ? (
                <AlertTriangle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertTitle>{suggestion.title}</AlertTitle>
              <AlertDescription>{suggestion.description}</AlertDescription>
            </Alert>
          ))}

          <Card>
            <CardHeader>
              <CardTitle>Developer Action Items</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Review and implement resource limits for the pod</li>
                <li>Set up monitoring alerts for resource usage</li>
                <li>Configure horizontal pod autoscaling if needed</li>
                <li>Implement cost allocation tags</li>
                <li>Review pod affinity and anti-affinity rules</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

