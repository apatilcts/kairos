"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const features = [
  { name: "Data Ingestion", href: "/features/data-ingestion" },
  { name: "AI Engine", href: "/features/ai-engine" },
  { name: "Kubernetes Integration", href: "/features/kubernetes-integration" },
  { name: "Monitoring and Alerting", href: "/features/monitoring-alerting" },
  { name: "Cost Allocation", href: "/features/cost-allocation" },
  { name: "Performance Optimization", href: "/features/performance-optimization" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="w-64 space-y-2">
      {features.map((feature) => (
        <Link
          key={feature.href}
          href={feature.href}
          className={cn(
            "block px-4 py-2 rounded-md",
            pathname === feature.href ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100",
          )}
        >
          {feature.name}
        </Link>
      ))}
    </nav>
  )
}

