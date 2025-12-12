"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-[#0f1f2e] text-gray-300">
      <div className="w-full px-12 sm:px-20 lg:px-32 py-20">
        <div className="grid md:grid-cols-4 gap-24">
          {/* Logo y descripción */}
          <div className="md:col-span-2 flex items-start gap-6">
            <img
              src="/images/design-mode/logo_scale_bi_1080x1080px.png"
              alt="ScaleBI Logo"
              className="h-24 w-auto flex-shrink-0"
            />
            <p className="text-gray-400 max-w-md">
              Transformamos datos en decisiones inteligentes. Soluciones de Business Intelligence, 
              Machine Learning y automatización para escalar tu negocio.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("hero")} 
                  className="hover:text-[#e8d4b0] transition"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicios")} 
                  className="hover:text-[#e8d4b0] transition"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("beneficios")} 
                  className="hover:text-[#e8d4b0] transition"
                >
                  Por qué elegirnos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("fundadores")} 
                  className="hover:text-[#e8d4b0] transition"
                >
                  Equipo
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e8d4b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="https://mail.google.com/mail/?view=cm&to=samuel@scalebi.ai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e8d4b0] transition"
                >
                  samuel@scalebi.ai
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e8d4b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+56982422956" className="hover:text-[#e8d4b0] transition">
                  (+56) 982422956
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} ScaleBI. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#e8d4b0] transition">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e8d4b0] transition">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
