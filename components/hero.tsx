"use client"

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Escala tu negocio con <span className="text-[#e8d4b0]">estrategia integral</span>
            </h1>
            <p className="text-xl text-gray-300">
              Soluciones de consultoría diseñadas para llevar tu empresa al siguiente nivel con estrategias probadas y
              resultados medibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="#cta"
                className="px-8 py-4 bg-[#e8d4b0] text-[#1a2e3e] font-semibold rounded-lg hover:bg-[#f5deb3] transition-colors text-center"
              >
                Agenda tu Consultoría Gratuita
              </a>
            </div>
          </div>
          <div className="relative aspect-[9/16] bg-[#0f1f2e] rounded-xl overflow-hidden border border-[#e8d4b0]/20 max-w-sm mx-auto">
            <video className="w-full h-full object-cover" controls muted playsInline>
              <source
                src="https://res.cloudinary.com/dbumkshal/video/upload/v1762790702/Vsl_yjlj0j.mov"
                type="video/mp4"
              />
              Tu navegador no soporta video HTML5
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
