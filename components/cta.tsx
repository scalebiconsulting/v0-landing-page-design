"use client"

export default function CTA() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1a2e3e] to-[#0f1f2e] p-12 rounded-2xl border border-[#e8d4b0]/20">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">¿Listo para escalar tu negocio?</h2>
            <p className="text-xl text-gray-300">
              Agenda una consultoría gratuita con nuestro equipo y descubre cómo podemos ayudarte
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/tulink"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#e8d4b0] text-[#1a2e3e] font-bold rounded-lg hover:bg-[#f5deb3] transition-colors text-lg"
            >
              Agenda tu Consultoría Gratuita
            </a>
          </div>

          <p className="text-sm text-gray-400">Sin compromiso. Consultoría completamente gratuita de 30 minutos.</p>
        </div>
      </div>
    </section>
  )
}
