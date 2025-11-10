"use client"

const benefits = [
  {
    title: "No es magia, es data",
    description: "Toma decisiones óptimas basadas en información confiable y análisis profundo",
  },
  {
    title: "Automatización Completa",
    description: "Libérate del tiempo en creación de reportes manuales para dedicarte al análisis",
  },
  {
    title: "Experiencia Multindustria",
    description: "Más de 100 clientes en diferentes industrias: retail, abogados, construcción, restaurantes y más",
  },
  {
    title: "Implementación Rápida",
    description: "Proceso ágil: conectamos tus sistemas, entendemos tu negocio y visualizamos resultados",
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1f2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Por Qué Elegirnos</h2>
          <p className="text-xl text-gray-300">Diferentes razones para trabajar con ScaleBI</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#e8d4b0] text-[#1a2e3e]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#e8d4b0] mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
