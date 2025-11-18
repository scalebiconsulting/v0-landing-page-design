"use client"

const services = [
  {
    icon: "📊",
    title: "BI Analytics",
    description: "Ve todos tus informes en línea y en un solo lugar. Dashboards interactivos que te muestran en tiempo real todo lo que pasa en tu empresa",
    features: [
      "Reportes en tiempo real actualizados automáticamente",
      "Acceso centralizado desde cualquier dispositivo",
      "Integración de múltiples sistemas (ERP, CRM, Excel)",
      "Visualización de datos clara y personalizada",
      "Automatización de informes mensuales",
      "Alertas inteligentes de KPIs críticos",
      "Análisis financiero detallado",
      "Comparativas históricas y tendencias",
    ],
    cta: "Agendar Consultoría Gratuita",
  },
  {
    icon: "🤖",
    title: "Machine Learning & IA",
    description: "Algoritmos inteligentes que predicen, detectan y optimizan tu negocio de forma automática",
    features: [
      { label: "Regresión Lineal:", text: "Predice ventas, costos y gastos futuros" },
      { label: "Random Forest:", text: "Predice demanda de productos y stock óptimo" },
      { label: "XGBoost:", text: "Detecta fraudes, clientes en riesgo de fuga y anomalías" },
      { label: "K-Means:", text: "Segmenta clientes automáticamente por comportamiento" },
      { label: "Prophet (Series de Tiempo):", text: "Forecasting precisos de ingresos mensuales" },
      { label: "Redes Neuronales:", text: "Reconoce patrones complejos en grandes volúmenes" },
      { label: "Árboles de Decisión:", text: "Crea reglas automáticas de negocio" },
    ],
    cta: "Agendar Consultoría Gratuita",
  },
  {
    icon: "⚡",
    title: "Automatización de Procesos",
    description: "Elimina tareas manuales y repetitivas con automatización inteligente. Soluciones con y sin IA para optimizar tus operaciones",
    features: [
      "Automatización de procesos repetitivos (RPA)",
      "Automatización con Inteligencia Artificial",
      "Extracción automática de datos de documentos",
      "Integración y conexión entre sistemas",
      "Automatización de flujos de trabajo completos",
      "Conexión con ERPs, CRMs y APIs",
      "Procesos automáticos sin necesidad de código",
      "Optimización y eficiencia operacional",
    ],
    cta: "Agendar Consultoría Gratuita",
  },
]

export default function Services() {
  const handleCtaClick = () => {
    const formSection = document.getElementById("consultation-form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1f2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-300">
            Soluciones integrales de datos e inteligencia empresarial para optimizar tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a2e3e] p-8 rounded-xl border border-[#e8d4b0]/10 hover:border-[#e8d4b0]/30 transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="text-[#4ade80] mr-3 mt-1 flex-shrink-0">✓</span>
                    {typeof feature === 'string' ? (
                      <span>{feature}</span>
                    ) : (
                      <span>
                        <span className="text-[#3b82f6] font-medium">{feature.label}</span>{' '}
                        <span>{feature.text}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <button
                onClick={handleCtaClick}
                className="w-full py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
