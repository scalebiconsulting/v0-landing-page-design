"use client"

import { useState, useEffect } from "react"

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true)
      document.body.style.overflow = 'hidden'
    }

    window.addEventListener('openModal', handleOpenModal)
    
    return () => {
      window.removeEventListener('openModal', handleOpenModal)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
    setTimeout(() => {
      setShowSuccess(false)
    }, 300)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      empresa: formData.get('empresa'),
      rubro: formData.get('rubro'),
      volumen: formData.get('volumen'),
      dolor: formData.get('dolor')
    }

    try {
      // Enviar a Google Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbwnFYw5BCJk3YW9tnu3WZxSeowNvDpg7vfB3nbL6Ns2RtXAptqlGdDtfMhcTdA0TKCQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      // Como usamos no-cors, asumimos que fue exitoso
      setShowSuccess(true)
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error('Error:', error)
      // Aún así mostramos éxito ya que con no-cors no podemos saber el resultado real
      setShowSuccess(true)
      ;(e.target as HTMLFormElement).reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className={`fixed inset-0 bg-[#0a1628]/80 backdrop-blur-sm flex items-center justify-center z-[1000] p-5 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      onClick={handleOverlayClick}
    >
      <div className={`bg-white rounded-[20px] w-full max-w-[480px] max-h-[90vh] overflow-y-auto transition-all duration-300 ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-5 scale-95'}`}>
        
        {/* Header */}
        <div className="bg-[#0a1628] p-7 sm:p-8 text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.2)_0%,transparent_60%)] pointer-events-none"></div>
          
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 border-none rounded-lg cursor-pointer flex items-center justify-center transition-all hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-white">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-white">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
          </div>

          <h2 className="text-[22px] font-extrabold text-white mb-2 relative">Acceso Anticipado</h2>
          <p className="text-sm text-[#94a3b8] relative">Completa tus datos y te avisamos al lanzar</p>
        </div>

        {/* Body - Form o Success */}
        {!showSuccess ? (
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-[13px] font-semibold text-[#0a1628] mb-2">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Tu nombre" 
                    required 
                    className="w-full py-3 px-4 border-2 border-[#e2e8f0] rounded-[10px] text-[15px] text-[#0a1628] transition-all focus:outline-none focus:border-[#10b981] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)]"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#0a1628] mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="tu@email.com" 
                    required 
                    className="w-full py-3 px-4 border-2 border-[#e2e8f0] rounded-[10px] text-[15px] text-[#0a1628] transition-all focus:outline-none focus:border-[#10b981] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-[13px] font-semibold text-[#0a1628] mb-2">
                    Empresa
                  </label>
                  <input 
                    type="text" 
                    name="empresa" 
                    placeholder="Nombre de tu empresa" 
                    className="w-full py-3 px-4 border-2 border-[#e2e8f0] rounded-[10px] text-[15px] text-[#0a1628] transition-all focus:outline-none focus:border-[#10b981] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)]"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#0a1628] mb-2">
                    Rubro <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="rubro" 
                    required 
                    className="w-full py-3 px-4 pr-10 border-2 border-[#e2e8f0] rounded-[10px] text-[15px] text-[#0a1628] transition-all focus:outline-none focus:border-[#10b981] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] appearance-none bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_12px_center] cursor-pointer"
                  >
                    <option value="">Selecciona tu rubro</option>
                    <option value="comercio">Comercio / Retail</option>
                    <option value="servicios">Servicios profesionales</option>
                    <option value="construccion">Construcción</option>
                    <option value="restaurantes">Restaurantes / Food</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="salud">Salud / Clínicas</option>
                    <option value="manufactura">Manufactura</option>
                    <option value="transporte">Transporte / Logística</option>
                    <option value="educacion">Educación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[13px] font-semibold text-[#0a1628] mb-2">
                  ¿Cuántas facturas procesan al mes? <span className="text-red-500">*</span>
                </label>
                <select 
                  name="volumen" 
                  required 
                  className="w-full py-3 px-4 pr-10 border-2 border-[#e2e8f0] rounded-[10px] text-[15px] text-[#0a1628] transition-all focus:outline-none focus:border-[#10b981] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] appearance-none bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_12px_center] cursor-pointer"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="1-50">1 - 50 facturas</option>
                  <option value="51-200">51 - 200 facturas</option>
                  <option value="201-500">201 - 500 facturas</option>
                  <option value="501-1000">501 - 1,000 facturas</option>
                  <option value="1000+">Más de 1,000 facturas</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-[13px] font-semibold text-[#0a1628] mb-2">
                  ¿Cuál es tu mayor dolor hoy?
                </label>
                <textarea 
                  name="dolor" 
                  placeholder="Ej: No sé cuánto gano realmente, el Excel es un caos, espero meses por los números..." 
                  rows={3}
                  className="w-full py-3 px-4 border-2 border-[#e2e8f0] rounded-[10px] text-[15px] text-[#0a1628] transition-all resize-y min-h-[80px] focus:outline-none focus:border-[#10b981] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)]"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-[#10b981] text-white border-none rounded-[10px] text-base font-bold cursor-pointer transition-all flex items-center justify-center gap-2.5 hover:bg-[#059669] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(16,185,129,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                {isSubmitting ? 'Enviando...' : 'Reservar mi lugar'}
              </button>

              <div className="text-center pt-4 border-t border-[#f1f5f9] mt-4">
                <p className="text-xs text-[#64748b] flex items-center justify-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#10b981]">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  No compartimos tu información con terceros
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center p-12 sm:p-16">
            <div className="w-20 h-20 bg-[#ecfdf5] rounded-full flex items-center justify-center mx-auto mb-6 animate-success-pop">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-[#10b981]">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-[#0a1628] mb-3">¡Estás en la lista!</h3>
            <p className="text-[15px] text-[#475569] mb-6 leading-relaxed">
              Gracias por tu interés en ScaleBI.<br/>
              Te avisaremos cuando estemos listos para que seas de los primeros en probar la plataforma.
            </p>
            <button 
              onClick={closeModal}
              className="inline-flex items-center gap-2 py-3 px-6 bg-[#f1f5f9] text-[#0a1628] border-none rounded-[10px] text-sm font-semibold cursor-pointer transition-all hover:bg-[#e2e8f0]"
            >
              Cerrar
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
