"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, AlertTriangle, DollarSign } from "lucide-react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const generateData = (label: string, color: string) => ({
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label,
      data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
      borderColor: color,
      backgroundColor: color,
    },
  ],
})

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Predictive Analytics",
    },
  },
}

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
            <Line options={options} data={generateData("CPU Usage", "rgb(75, 192, 192)")} />
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
            <Line options={options} data={generateData("Memory Usage", "rgb(255, 99, 132)")} />
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
            <Line options={options} data={generateData("Cost Savings", "rgb(53, 162, 235)")} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

