import React from 'react';
import { socialImgs } from '../Constants';

const Footer = () => {
  return (
    <footer className="relative w-full py-14 px-10 bg-[#0a0a0b] overflow-hidden border-t border-white/[0.03]">
      {/* 1. The "Cool" Ambient Ambient Lighting (Replacing the Cyan Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
        
        {/* Left: Brand & Blog */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <h3 className="text-lg font-bold tracking-tight text-white/90">
              NEXA<span className="text-white/40">LABS</span>
            </h3>
            <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em]">
              BEYOND FUTURISTIC --
            </p>
          </div>
          
          <a href="#" className="group flex items-center space-x-3 text-zinc-500 hover:text-white transition-all duration-500">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Internal Logs</span>
            <div className="h-[1px] w-5 bg-zinc-800 group-hover:w-10 group-hover:bg-zinc-400 transition-all duration-500" />
          </a>
        </div>

        {/* Center: Monochromatic Socials */}
        <div className="flex justify-center items-center space-x-3">
          {socialImgs.map((img) => (
            <a 
              key={img.name} 
              href={img.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group p-4 bg-white/[0.01] border border-white/[0.04] rounded-2xl transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.1] hover:-translate-y-1"
            >
              <img 
                src={img.imgPath} 
                alt={img.name} 
                className="w-5 h-5 z-10 relative opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400 filter brightness-200" 
              />
            </a>
          ))}
        </div>

        {/* Right: Copyright & Stealth Status */}
        <div className="flex flex-col md:items-end space-y-3">
          <div className="flex items-center space-x-3 px-3 py-1.5 bg-zinc-900/50 border border-white/[0.05] rounded-full">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-500 opacity-20"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-400"></span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold">NEXALABS v.01</span>
          </div>
          
          <p className="text-[10px] text-zinc-600 font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} <span className="text-zinc-400"> Darwin</span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;