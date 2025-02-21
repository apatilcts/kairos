import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, GitBranch, Layers } from "lucide-react"

export function MachineLearningModels() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Machine Learning Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Cpu className="w-5 h-5 mr-2" />
              Regression Model
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Predicts resource requirements based on historical data and current workload patterns.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <GitBranch className="w-5 h-5 mr-2" />
              Reinforcement Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Optimizes scaling decisions through continuous interaction with the Kubernetes environment.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Layers className="w-5 h-5 mr-2" />
              Clustering Algorithms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Groups similar workloads to identify patterns and optimize resource allocation strategies.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

