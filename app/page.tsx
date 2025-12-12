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
    <main className="min-h-screen bg-[#f3f5fb]">
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
