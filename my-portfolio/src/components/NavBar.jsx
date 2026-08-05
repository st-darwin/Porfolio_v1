import React, { useState, useEffect } from 'react';
import { navLinks } from '../Constants';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className='inner'>
        
        {/* LEFT: Logo */}
        <a className='logo' href="#hero"> 
          Darwin <span className="text-white/30 mx-1">|</span> <span className="text-white">NexaLabs</span>
        </a>
        
        {/* CENTER: Desktop Links (Hidden on Mobile) */}
        <nav className='hidden lg:flex flex-1 justify-center'>
          <ul className='flex items-center gap-10'>
            {navLinks.map(({ name, link }) => (
              <li key={name} className="group relative">
                <a href={link} className="text-sm font-medium text-white/60 hover:text-white transition-all"> 
                  {name}
                </a>
                <span className='underline-hover'/>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT: Contact Button */}
        <div className='flex justify-end'>
          <a href="#contact">
            <button className=' active:shadow-inner hover:scale-103 active:scale-50 duration-600 contact-hover bg-white text-black px-4 py-2.5 rounded-full  font-semibold text-[1rem] hover:bg-white/90 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]'>
              Contact Me
            </button>
          </a>
        </div>

      </div>
    </header>
  );
};

export default NavBar;