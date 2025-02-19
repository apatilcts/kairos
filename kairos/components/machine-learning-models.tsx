"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, GitBranch, Layers } from "lucide-react"
import * as tf from "@tensorflow/tfjs"
import * as tfvis from "@tensorflow/tfjs-vis"

export function MachineLearningModels() {
  const regressionRef = useRef<HTMLDivElement>(null)
  const reinforcementRef = useRef<HTMLDivElement>(null)
  const clusteringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (regressionRef.current && reinforcementRef.current && clusteringRef.current) {
      // Regression model
      const regressionModel = tf.sequential()
      regressionModel.add(tf.layers.dense({ units: 1, inputShape: [1] }))
      regressionModel.compile({ loss: "meanSquaredError", optimizer: "sgd" })

      const xs = tf.tensor2d([1, 2, 3, 4], [4, 1])
      const ys = tf.tensor2d([1, 3, 5, 7], [4, 1])

      regressionModel.fit(xs, ys, { epochs: 100 }).then(() => {
        const surface = tfvis.visor().surface({ name: "Regression Model", tab: "Model" })
        tfvis.show.modelSummary(surface, regressionModel)
      })

      // Reinforcement learning (simplified Q-learning visualization)
      const qTable = tf.zeros([5, 5])
      const surface = tfvis.visor().surface({ name: "Q-Learning", tab: "Model" })
      tfvis.render.heatmap(surface, {
        values: qTable.arraySync(),
        xTickLabels: ["A", "B", "C", "D", "E"],
        yTickLabels: ["1", "2", "3", "4", "5"],
      })

      // Clustering (K-means visualization)
      const points = tf.randomNormal([100, 2])
      const numClusters = 3
      const kmeans = tf.sequential()
      kmeans.add(tf.layers.dense({ units: numClusters, inputShape: [2], activation: "softmax" }))
      kmeans.compile({ loss: "categoricalCrossentropy", optimizer: "adam" })

      const surface2 = tfvis.visor().surface({ name: "K-means Clustering", tab: "Model" })
      tfvis.render.scatterplot(surface2, { values: points.arraySync(), series: ["Points"] })
    }
  }, [])

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
            <div ref={regressionRef} className="h-64"></div>
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
            <div ref={reinforcementRef} className="h-64"></div>
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
            <div ref={clusteringRef} className="h-64"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

