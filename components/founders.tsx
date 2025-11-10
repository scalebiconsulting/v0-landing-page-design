"use client"

export default function Founders() {
  const founders = [
    {
      id: 1,
      name: "Samuel Orellana",
      role: "CEO - Fundador",
      description:
        "Ingeniero Financiero con experiencia en el sector fintech y en el desarrollo de soluciones financieras para optimizar decisiones de inversión y gestión financiera.",
      linkedIn: "https://www.linkedin.com/in/samuelorellanabarria/",
    },
    {
      id: 2,
      name: "Marco Baeza Salazar",
      role: "CRO - Co-Fundador",
      description:
        "Ingeniero Civil en Informática con amplia trayectoria liderando empresas tecnológicas y de innovación. Actualmente co-fundador de ScaleBI, experto en TI, estrategia, liderazgo y crecimiento organizacional.",
      linkedIn: "https://www.linkedin.com/in/marco-baeza-salazar-a1048b65/",
    },
    {
      id: 3,
      name: "Leandro Marcelo",
      role: "CTO - Co-Fundador",
      description:
        "Ingeniero y emprendedor tecnológico, con experiencia en desarrollo de software, automatización e integración de sistemas. Especialista en soluciones tech para negocios en expansión.",
      linkedIn: "https://www.linkedin.com/in/leandro-marcelo/",
    },
  ]

  return (
    <section id="fundadores" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Conoce nuestro equipo</h2>
          <p className="text-xl text-gray-300">Profesionales apasionados por transformar negocios mediante datos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="bg-[#0f1f2e] rounded-xl overflow-hidden hover:shadow-lg transition duration-300 border border-[#e8d4b0]/20 hover:border-[#e8d4b0]/50"
            >
              <a
                href={founder.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-32 bg-gradient-to-br from-[#1a2e3e] to-[#0f1f2e] hover:from-[#2a3e4e] hover:to-[#1a2e3e] transition duration-300"
              >
                <svg
                  className="w-14 h-14 text-[#e8d4b0] hover:text-white transition duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                <p className="text-[#e8d4b0] font-semibold">{founder.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
