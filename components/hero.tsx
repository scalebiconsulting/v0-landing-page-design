"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const heroImages = [
  "/images/design-mode/image-1.jpg",
  "/images/design-mode/image-2.jpg",
  "/images/design-mode/image-3.jpg",
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Hero background ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e3e]/30 via-[#1a2e3e]/20 to-[#0f1f2e]/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center space-y-6">
          <h1 
            className="text-5xl md:text-6xl font-bold leading-tight text-balance text-white"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4), 0 2px 12px rgba(0,0,0,0.3)' }}
          >
            Escala tu negocio con <span className="text-[#e8d4b0]">Data Science y Automatización de procesos.</span>
          </h1>
          <p 
            className="text-xl text-white max-w-3xl mx-auto"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}
          >
            Conectamos tus sistemas, automatizamos procesos y visualizamos lo que importa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
            <a
              href="#consultation-form"
              className="px-8 py-4 bg-[#e8d4b0] text-[#1a2e3e] font-semibold rounded-lg hover:bg-[#f5deb3] transition-colors text-center shadow-lg"
            >
              Agenda tu Consultoría Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
