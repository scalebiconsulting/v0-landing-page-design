"use client"

export default function Navigation() {
  const openModal = () => {
    const event = new CustomEvent('openModal')
    window.dispatchEvent(event)
  }

  return (
    <header className="bg-white border-b border-[#e2e8f0] py-3.5 sticky top-0 z-[100]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <div className="w-[34px] h-[34px] bg-[#0a1628] rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[18px] h-[18px] text-white">
                <path d="M3 3v18h18"/>
                <path d="M18 9l-5-6-4 8-3-2"/>
              </svg>
            </div>
            <span className="text-[19px] font-bold text-[#0a1628] tracking-[-0.5px]">ScaleBI</span>
          </a>
          <div className="flex items-center gap-4">
            <button 
              onClick={openModal}
              className="py-2.5 px-5 bg-[#0a1628] text-white border-none rounded-lg text-sm font-semibold cursor-pointer transition-all hover:bg-[#0f1f3a] hover:-translate-y-0.5"
            >
              Acceso Anticipado
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
