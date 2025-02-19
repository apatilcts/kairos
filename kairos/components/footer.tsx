import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">&copy; 2024 KAIROS. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

