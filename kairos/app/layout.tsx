import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "KAIROS - Kubernetes AI-driven Resource Optimization System",
  description: "Optimize your Kubernetes resources with AI-driven insights",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'