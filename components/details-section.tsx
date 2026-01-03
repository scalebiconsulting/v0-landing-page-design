"use client"

export default function DetailsSection() {
  const openModal = () => {
    const event = new CustomEvent('openModal')
    window.dispatchEvent(event)
  }

  const modules = [
    { num: "1", title: "Dashboard Ejecutivo", desc: "KPIs, gráficos de ingresos vs egresos, top proveedores y clientes, evolución de márgenes." },
    { num: "2", title: "Estado de Resultados", desc: "P&L profesional con análisis vertical, ratios financieros y comparación mensual." },
    { num: "3", title: "Clasificador de Compras", desc: "Clasifica facturas del SII en 3 niveles: Fijo/Variable, Categoría y Cuenta contable." },
    { num: "4", title: "Clasificador de Ventas", desc: "Organiza tus ingresos por tipo: Ventas, Servicios, Otros Ingresos." },
    { num: "5", title: "Plan de Cuentas", desc: "28 cuentas predefinidas listas para usar. Agrega las tuyas si necesitas más." },
    { num: "6", title: "Reglas Automáticas", desc: "Crea reglas por proveedor o RUT. Las facturas se clasifican solas cada mes." },
    { num: "7", title: "Cuentas por Cobrar", desc: "Control de facturas pendientes, vencidas y cobradas. Antigüedad de cartera." },
    { num: "8", title: "Cuentas por Pagar", desc: "Gestiona pagos a proveedores, vencimientos y prioriza lo urgente." },
    { num: "9", title: "Recursos Humanos", desc: "Empleados, contratos, honorarios, nómina mensual y liquidaciones." },
    { num: "10", title: "Configuración", desc: "Datos de empresa, logo, y entrada manual de operaciones sin factura." }
  ]

  const objections = [
    {
      icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
      title: "¿Qué archivo necesito?",
      desc: "El Registro de Compras y Ventas (RCV) que descargas del portal del SII en formato CSV. Lo encuentras en \"Mis Documentos\"."
    },
    {
      icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
      title: "¿Mis datos están seguros?",
      desc: "Sí. Usamos encriptación de nivel bancario. Tus datos nunca se comparten con terceros y puedes eliminarlos cuando quieras."
    },
    {
      icon: <><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
      title: "¿Necesito saber contabilidad?",
      desc: "No. El sistema incluye 28 cuentas predefinidas y te guía paso a paso. Solo necesitas saber a qué categoría pertenece cada gasto."
    },
    {
      icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
      title: "¿Cuánto tarda en estar listo?",
      desc: "Tu primer P&L estará listo en menos de 5 minutos. La clasificación inicial toma unos minutos más, pero solo se hace una vez."
    },
    {
      icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
      title: "¿Cuánto costará?",
      desc: "Estamos definiendo los planes. Los early adopters tendrán acceso a precios especiales y beneficios exclusivos de por vida."
    },
    {
      icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
      title: "¿Puedo agregar a mi contador?",
      desc: "Próximamente. Por ahora puedes exportar reportes en Excel y PDF para compartirlos con tu equipo o contador externo."
    }
  ]

  return (
    <section className="py-14">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Módulos */}
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-extrabold text-[#0a1628] tracking-tight mb-2">
            10 Módulos en una sola plataforma
          </h2>
          <p className="text-base text-gray-500">
            Todo lo que necesitas para controlar las finanzas de tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {modules.map((module) => (
            <div key={module.num} className="bg-white border border-[#e2e8f0] rounded-xl p-5 flex gap-4 transition-all hover:border-[#0a1628] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
              <div className="w-9 h-9 bg-[#0a1628] text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                {module.num}
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#0a1628] mb-1">{module.title}</h4>
                <p className="text-[13px] text-[#64748b] leading-[1.5]">{module.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Objeciones */}
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-extrabold text-[#0a1628] tracking-tight">
            Dudas comunes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {objections.map((obj, index) => (
            <div key={index} className="bg-white border border-[#e2e8f0] rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-[#f1f5f9] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#0a1628]">
                  {obj.icon}
                </svg>
              </div>
              <h4 className="text-[15px] font-bold text-[#0a1628] mb-2">{obj.title}</h4>
              <p className="text-[13px] text-[#64748b] leading-[1.6]">{obj.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="bg-[#0a1628] rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.15)_0%,transparent_50%)] pointer-events-none"></div>
          
          <h3 className="text-[26px] font-extrabold text-white mb-3 relative">¿Quieres ser de los primeros?</h3>
          <p className="text-base text-[#94a3b8] mb-7 relative">
            Únete a la lista de espera y obtén acceso anticipado + beneficios exclusivos
          </p>
          <button 
            onClick={openModal}
            className="inline-flex items-center gap-2.5 py-4 px-8 bg-[#10b981] text-white border-none rounded-[10px] text-base font-bold cursor-pointer transition-all relative hover:bg-[#059669] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(16,185,129,0.4)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M5 12h14"/>
              <path d="M12 5l7 7-7 7"/>
            </svg>
            Quiero Acceso Anticipado
          </button>
        </div>

      </div>
    </section>
  )
}
