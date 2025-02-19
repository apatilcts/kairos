import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            KAIROS
          </Link>
          <div className="space-x-4">
            <Link href="/features/data-ingestion" className="text-gray-600 hover:text-blue-600">
              Features
            </Link>
            <Link href="/architecture" className="text-gray-600 hover:text-blue-600">
              Architecture
            </Link>
            <Link href="/implementation" className="text-gray-600 hover:text-blue-600">
              Implementation
            </Link>
            <Link href="/sandbox" className="text-gray-600 hover:text-blue-600">
              Sandbox
            </Link>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

