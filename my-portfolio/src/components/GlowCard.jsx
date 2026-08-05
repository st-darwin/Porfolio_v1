import React, { useRef } from 'react'

const GlowCard = ({ card, children }) => {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const cardElement = cardRef.current
    if (!cardElement) return

    const rect = cardElement.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    cardElement.style.setProperty("--mouse-x", `${x}px`)
    cardElement.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <div 
      ref={cardRef} 
      onMouseMove={handleMouseMove} 
      className='group relative h-full flex flex-col rounded-2xl bg-zinc-900 border border-white/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 overflow-hidden'
    >
      {/* Visual Effect Layers */}
      <div className='absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 spotlight-inner' />
      <div className='glow-edge' />
      
      {/* Content Layer */}
      <div className='relative z-10 flex flex-col h-full'>
        <div className='flex items-center gap-1 mb-4'>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="text-yellow-500 text-lg">★</span>
          ))}
        </div>

        <p className='text-zinc-400 text-base leading-relaxed mb-6'>
          "{card.review}"
        </p>
        
        <div className='mt-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default GlowCard