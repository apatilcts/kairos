import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ArchitectureDiagram } from "@/components/architecture-diagram"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="architecture" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">KAIROS integrates seamlessly with your Kubernetes infrastructure</p>
            </div>
            <ArchitectureDiagram />
          </div>
        </section>
      </main>
    </>
  )
}

