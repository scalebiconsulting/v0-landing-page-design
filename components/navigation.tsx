"use client"

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full bg-[#1a2e3e]/95 backdrop-blur-sm z-50 border-b border-[#e8d4b0]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center -ml-4">
          <img
            src="/images/design-mode/logo_scale_bi_1080x1080px.png"
            alt="ScaleBI Logo"
            className="h-12 w-auto"
          />
        </div>
        <div className="hidden md:flex gap-8 text-sm text-white">
          <button onClick={() => scrollToSection("servicios")} className="hover:text-[#e8d4b0] transition">
            Servicios
          </button>
          <button onClick={() => scrollToSection("beneficios")} className="hover:text-[#e8d4b0] transition">
            Por qué elegirnos
          </button>
          <button onClick={() => scrollToSection("fundadores")} className="hover:text-[#e8d4b0] transition">
            Equipo
          </button>
        </div>
      </div>
    </nav>
  )
}
