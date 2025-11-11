import Hero from "@/components/hero"
import ConsultationForm from "@/components/consultation-form"
import Services from "@/components/services"
import Benefits from "@/components/benefits"
import Founders from "@/components/founders"
import CTA from "@/components/cta"
import Navigation from "@/components/navigation"

export const metadata = {
  title: "ScaleBI - Inteligencia Empresarial y BI Analytics",
  description: "Soluciones de datos, BI Analytics, Advanced Analytics y consultoría para optimizar tu empresa",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a2e3e] to-[#0f1f2e]">
      <Navigation />
      <Hero />
      <ConsultationForm />
      <Services />
      <Benefits />
      <Founders />
      <CTA />
    </main>
  )
}
