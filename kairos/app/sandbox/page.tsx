"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function SandboxPage() {
  const [data, setData] = useState([])
  const [newPod, setNewPod] = useState({ name: "", cpu: 0, memory: 0, cost: 0 })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch("/api/metrics")
    const metrics = await response.json()
    setData(metrics)
  }

  const handleAddPod = async () => {
    if (newPod.name && newPod.cpu && newPod.memory && newPod.cost) {
      await fetch("/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPod),
      })
      await fetchData()
      setNewPod({ name: "", cpu: 0, memory: 0, cost: 0 })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">KAIROS Sandbox</h1>
      <p className="text-gray-600 mb-8">
        Explore KAIROS functionality by adding pods and seeing AI-driven resource optimization.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Add New Pod</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="pod-name">Pod Name</Label>
                <Input
                  id="pod-name"
                  value={newPod.name}
                  onChange={(e) => setNewPod({ ...newPod, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="pod-cpu">CPU Usage (%)</Label>
                <Input
                  id="pod-cpu"
                  type="number"
                  value={newPod.cpu}
                  onChange={(e) => setNewPod({ ...newPod, cpu: Number.parseFloat(e.target.value) })}
                />
              </div>
              <div>
                <Label htmlFor="pod-memory">Memory Usage (%)</Label>
                <Input
                  id="pod-memory"
                  type="number"
                  value={newPod.memory}
                  onChange={(e) => setNewPod({ ...newPod, memory: Number.parseFloat(e.target.value) })}
                />
              </div>
              <div>
                <Label htmlFor="pod-cost">Cost ($)</Label>
                <Input
                  id="pod-cost"
                  type="number"
                  value={newPod.cost}
                  onChange={(e) => setNewPod({ ...newPod, cost: Number.parseFloat(e.target.value) })}
                />
              </div>
              <Button onClick={handleAddPod}>Add Pod</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Optimization Results</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cpuBefore" fill="#8884d8" name="CPU Before (%)" />
                <Bar dataKey="cpu" fill="#82ca9d" name="CPU After (%)" />
                <Bar dataKey="memoryBefore" fill="#ffc658" name="Memory Before (%)" />
                <Bar dataKey="memory" fill="#ff7300" name="Memory After (%)" />
                <Bar dataKey="costBefore" fill="#a4de6c" name="Cost Before ($)" />
                <Bar dataKey="cost" fill="#d0ed57" name="Cost After ($)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Optimization Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Pod Name</th>
                  <th className="px-6 py-3">CPU Before</th>
                  <th className="px-6 py-3">CPU After</th>
                  <th className="px-6 py-3">Memory Before</th>
                  <th className="px-6 py-3">Memory After</th>
                  <th className="px-6 py-3">Cost Before</th>
                  <th className="px-6 py-3">Cost After</th>
                </tr>
              </thead>
              <tbody>
                {data.map((pod, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{pod.name}</td>
                    <td className="px-6 py-4">{pod.cpuBefore.toFixed(2)}%</td>
                    <td className="px-6 py-4">{pod.cpu.toFixed(2)}%</td>
                    <td className="px-6 py-4">{pod.memoryBefore.toFixed(2)}%</td>
                    <td className="px-6 py-4">{pod.memory.toFixed(2)}%</td>
                    <td className="px-6 py-4">${pod.costBefore.toFixed(2)}</td>
                    <td className="px-6 py-4">${pod.cost.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

