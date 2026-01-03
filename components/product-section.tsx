"use client"

export default function ProductSection() {
  const openModal = () => {
    const event = new CustomEvent('openModal')
    window.dispatchEvent(event)
  }

  return (
    <section className="py-12 sm:py-14 bg-white border-b border-gray-200">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          
          {/* Columna izquierda - Info del producto */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-1.5 bg-[#eff6ff] text-[#2563eb] py-1.5 px-3 rounded-[20px] text-xs font-semibold mb-4 animate-pulse-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              En Desarrollo — Lanzamiento Q1 2025
            </div>

            <h1 className="text-[36px] font-extrabold text-[#0a1628] tracking-[-1px] leading-[1.15] mb-4">
              Tu Estado de Resultados<br/>
              <span className="text-[#10b981]">en tiempo real</span>
            </h1>

            <p className="text-[17px] text-gray-600 mb-7 leading-relaxed">
              Sube tu archivo del SII y obtén un <strong className="text-[#0a1628] font-semibold">P&L profesional automático</strong>.
              Sin fórmulas complicadas. Sin esperar al contador.
              <strong className="text-[#0a1628] font-semibold"> Estamos construyendo la plataforma</strong> — únete a la lista de espera.
            </p>

            <ul className="list-none mb-8">
              {[
                { text: <><strong>Carga tu RCV</strong> y el sistema clasifica automáticamente</> },
                { text: <><strong>P&L profesional</strong> con análisis vertical y ratios</> },
                { text: <><strong>Dashboard ejecutivo</strong> con KPIs en tiempo real</> },
                { text: <><strong>Sin Excel complejo</strong> — todo funciona en la nube</> }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 py-[10px] border-b border-[#f1f5f9] last:border-0">
                  <div className="w-[22px] h-[22px] bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-[2px]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-white">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="text-[15px] text-gray-600">{item.text}</div>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6 pt-4 border-t border-gray-200 mt-2 flex-wrap">
              {[
                { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, text: "Datos encriptados" },
                { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, text: "Hecho en Chile" },
                { icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, text: "Setup en 5 min" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-[13px] text-gray-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-400">
                    {item.icon}
                  </svg>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha - CTA Card */}
          <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-7 lg:sticky lg:top-[90px]">
            <div className="bg-[#0a1628] rounded-xl p-5 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 to-transparent pointer-events-none"></div>
              
              <div className="text-[10px] uppercase tracking-wider text-[#94a3b8] mb-3 relative">Vista previa del dashboard</div>
              
              <div className="grid grid-cols-2 gap-4 relative">
                {[
                  { value: "$47.2M", label: "Ingresos Totales", color: "white" },
                  { value: "18.4%", label: "Margen Neto", color: "green" },
                  { value: "$38.5M", label: "Costos Totales", color: "white" },
                  { value: "+12%", label: "vs. Mes Anterior", color: "green" }
                ].map((kpi, index) => (
                  <div key={index} className="text-center">
                    <div className={`font-mono text-xl font-bold mb-1 ${kpi.color === 'green' ? 'text-[#10b981]' : 'text-white'}`}>
                      {kpi.value}
                    </div>
                    <div className="text-[11px] text-[#94a3b8]">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#10b981] text-white py-2 px-4 rounded-lg text-[13px] font-bold uppercase tracking-wide mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 animate-spin-slow">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Lanzamiento Próximamente
            </div>

            <p className="text-center text-[15px] text-gray-600 mb-5 leading-relaxed">
              Sé de los primeros en probar ScaleBI.<br/>
              <strong className="text-[#0a1628]">Acceso anticipado + beneficios exclusivos</strong> para early adopters.
            </p>

            <button 
              onClick={openModal}
              className="w-full py-4 px-6 bg-[#10b981] text-white border-none rounded-[10px] text-base font-bold cursor-pointer transition-all flex items-center justify-center gap-2.5 mb-3 hover:bg-[#059669] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(16,185,129,0.3)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
              Quiero Acceso Anticipado
            </button>

            <div className="text-center text-[13px] text-[#64748b] flex items-center justify-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#10b981]">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Sin compromiso — te avisamos al lanzar
            </div>

            <div className="h-px bg-[#e2e8f0] my-5"></div>

            <div className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-3">Incluye al lanzamiento:</div>
            
            <ul className="list-none">
              {[
                "Estado de Resultados profesional",
                "Clasificador de facturas inteligente",
                "Módulos RRHH, CxC y CxP",
                "Exportación Excel y PDF"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-[13px] text-[#475569] py-[6px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[14px] h-[14px] text-[#10b981]">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
