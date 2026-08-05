import React from 'react';
import { counterItems } from '../Constants';

const AnimatedCounter = () => {
  return (
    <section id='counter' className='max-w-7xl mx-auto px-6 py-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {counterItems.map((item, index) => (
          <div 
            key={index} 
            className='group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/50 transition-all duration-500'
          >
            {/* The Number & Suffix */}
            <div className='flex items-baseline gap-1'>
              <h2 className='text-5xl md:text-6xl font-black text-white tracking-tighter'>
                {item.value}
              </h2>
              <span className='text-3xl ml-1 font-bold text-cyan-500'>
                {item.suffix}
              </span>
            </div>

            {/* The Label */}
            <p className='mt-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300 transition-colors'>
              {item.label}
            </p>

            {/* Subtle Glow Background */}
            <div className='absolute inset-0 -z-10 bg-cyan-500/0 group-hover:bg-cyan-500/5 blur-2xl transition-all duration-500 rounded-full' />
            
            {/* Bottom Animated Line */}
            <div className='absolute bottom-0 left-0 h-1 w-0 bg-cyan-500 group-hover:w-full transition-all duration-700 rounded-b-2xl' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedCounter;