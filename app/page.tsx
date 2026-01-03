import Navigation from "@/components/navigation"
import ProductSection from "@/components/product-section"
import DetailsSection from "@/components/details-section"
import Modal from "@/components/modal"
import Footer from "@/components/footer"

export const metadata = {
  title: "Estado de Resultados Automático | ScaleBI - Próximamente",
  description: "Sube tu archivo del SII y obtén un P&L profesional automático. Sin fórmulas complicadas. Únete a la lista de espera.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <Navigation />
      <ProductSection />
      <DetailsSection />
      <Footer />
      <Modal />
    </main>
  )
}
