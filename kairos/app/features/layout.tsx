import type React from "react"
import { Sidebar } from "@/components/sidebar"

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}

