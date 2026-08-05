import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../Constants'
import GlowCard from '../components/GlowCard'

const Testimonial = () => {
  return (
    <section id='testimonials' className=' flex-center section-padding' >
     <div className='w-full h-fullmd:px-10 px-5'>
        <TitleHeader
        sub="🔥Client Feedback Highights "
        title="What People Say About Me "
        />
        <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
          {testimonials.map((testimonial) =>(
            <div key={testimonial.name} className='mb-4 mt-4 md:mb-5 '>
           <GlowCard  card={testimonial}>
             <div className='pt-5 border-t border-white/10'>
                  <div className='flex '>
                         <div className='overflow-hidden rounded-xl '>
                      <img 
                        src={testimonial.imgPath} 
                        alt={testimonial.title} 
                        className="  w-10 group-hover:grayscale-0 transition-all duration-700  group-hover:scale-103" 
                      />
                   </div>
                   <div className='ml-3 text-[0.8rem] test-semibold '> 
                    <p>{testimonial.name}</p>
                    <p>{testimonial.mentions}</p>
                   </div>
                 
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

export default Testimonial
