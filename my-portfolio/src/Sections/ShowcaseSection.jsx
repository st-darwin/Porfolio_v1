import React, { useEffect, useRef, useState } from 'react';

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id='work' 
      ref={sectionRef} 
      className={`app-showcase ${isVisible ? 'is-visible' : ''}`}
    >
      <div className='w-full'>
        <div className='showcaselayout'>
          
          {/* PROJECT 1 - Left Side */}
          <div className='first-image-wrapper  md:w-160 md:mt-3 reveal-item delay-1'>
            <div className='image-wrapper'>
              <img style={{marginBottom:"0.9rem"}} className="rounded-lg " src="/images/expTracker.png" alt="expTracker" />
            </div>
            <div className="text-content">
              <h1 className="md:text-2xl text-[1.2rem]  xl:text-[1.4rem]   md:mb-2 xl:mb-3 mb-2" style={{ fontWeight: 600, marginTop: "0.2rem" }}>
                Smart Financial Tracking Made Simple with a Powerful, User-Friendly 
                App called Expense tracker.
              </h1>
      
              <p className="text-white-50  text mt-2 md:text-[1rem] text-[0.9rem]">
                A comprehensive personal finance tool built with React Native, Expo, & TailwindCSS 
                to take the stress out of managing your budget.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE PROJECTS */}
          <div className='project-list-wrapper overflow-hidden'>
            
            <div className='project reveal-item delay-2'>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img className='mx-3' src="/images/ecommerce.png" alt="project2" />
              </div>
              <h2>Shoe E-commerce Platform</h2>
            </div>

            <div className='project reveal-item delay-3'>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <img src="/images/aura.png" alt="project3" />
              </div>
              <h2>A Clothing E-commerce Platform</h2>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;