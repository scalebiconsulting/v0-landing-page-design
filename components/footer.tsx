"use client"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e2e8f0] py-6">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[13px] text-[#64748b]">
            © 2025 ScaleBI SPA · Santiago, Chile
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-[13px] text-[#64748b] no-underline transition-colors hover:text-[#0a1628]">
              Términos
            </a>
            <a href="#" className="text-[13px] text-[#64748b] no-underline transition-colors hover:text-[#0a1628]">
              Privacidad
            </a>
            <a href="mailto:hola@scalebi.cl" className="text-[13px] text-[#64748b] no-underline transition-colors hover:text-[#0a1628]">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
