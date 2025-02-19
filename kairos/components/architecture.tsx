import Image from "next/image"

export function Architecture() {
  return (
    <section id="architecture" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">System Architecture</h2>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <Image
          src="/placeholder.svg?height=600&width=800"
          alt="KAIROS System Architecture"
          width={800}
          height={600}
          className="mx-auto"
        />
        <p className="text-center mt-4 text-gray-600">
          KAIROS system architecture showing the interaction between various components
        </p>
      </div>
    </section>
  )
}

