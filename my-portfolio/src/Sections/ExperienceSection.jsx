import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../Constants'
import GlowCard from '../components/GlowCard'

const ExperienceSection = () => {
  return (
    <section className='w-full py-20 md:py-40' id="experience">
      <div className='max-w-7xl mx-auto px-5 md:px-20'>
        <TitleHeader 
          title="Professional Work Experience" 
          sub="💼 My Career Overview"
        />
        
        {/* The Flex Wrap Grid */}
        <div className='mt-20 flex flex-wrap justify-center gap-8'>
          {expCards.map((card, index) => (
            <div 
              key={card.title || index} 
              // Responsive width logic: 1 col mobile, 2 col tablet, 3 col desktop
              className='w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]'
            >
              <GlowCard card={card}>
                <div className='pt-5 border-t border-white/10'>
                   <h3 className='text-white text-xl font-semibold mb-4'>{card.title}</h3>
                   <div className='overflow-hidden rounded-xl '>
                      <img 
                        src={card.imgPath} 
                        alt={card.title} 
                        className="  w-30 group-hover:grayscale-0 transition-all duration-700  group-hover:scale-103" 
                      />
                   </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection