import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { MainNav } from "@/components/navigation-menu"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-white">
              KAIROS
            </Link>
            <div className="hidden lg:block">
              <MainNav />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-300">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-gray-300">
              Log in
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600">Get Started Free</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

