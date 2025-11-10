"use client"

const templates = [
  {
    title: "Plan de Negocio",
    description: "Plantilla profesional para estructurar tu estrategia empresarial",
  },
  {
    title: "Análisis Financiero",
    description: "Herramientas para proyecciones y control de flujo de caja",
  },
  {
    title: "Gestión de Proyectos",
    description: "Sistema completo para planificación y seguimiento de iniciativas",
  },
  {
    title: "Indicadores KPI",
    description: "Tablero de control para monitorear el desempeño de tu negocio",
  },
  {
    title: "Evaluación de Riesgos",
    description: "Metodología para identificar y mitigar riesgos empresariales",
  },
  {
    title: "Plan de Marketing",
    description: "Estrategia integral de marketing y posicionamiento en mercado",
  },
]

export default function Templates() {
  return (
    <section id="plantillas" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Plantillas Disponibles</h2>
          <p className="text-xl text-gray-300">Recursos listos para usar en tu negocio</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-[#1a2e3e] p-6 rounded-lg border border-[#e8d4b0]/10 hover:border-[#e8d4b0]/30 transition-all group cursor-pointer"
            >
              <h3 className="text-lg font-bold text-[#e8d4b0] mb-2 group-hover:text-white transition">
                {template.title}
              </h3>
              <p className="text-gray-300 mb-4">{template.description}</p>
              <div className="text-sm text-[#e8d4b0] opacity-0 group-hover:opacity-100 transition">Descargar →</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#cta"
            className="inline-block px-8 py-3 border-2 border-[#e8d4b0] text-[#e8d4b0] font-semibold rounded-lg hover:bg-[#e8d4b0]/10 transition-colors"
          >
            Ver Plantillas
          </a>
        </div>
      </div>
    </section>
  )
}
