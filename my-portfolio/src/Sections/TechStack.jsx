
import TitleHeader from '../components/TitleHeader'
import { techStackImgs } from '../Constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'

const TechStack = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div id='skills' className='flex-center px-5'>
        <div className='w-full h-full md:px-10 px-5 mb-5'>

            {/* Title */}
            <TitleHeader
              title="My Preferred Tech Stack"
              sub=" ✌️ The Skills I Bring to the Table "
            /> 

            <div className='tech-grid'>
                {techStackImgs.map((icon, index) => (
                    <div 
                      key={icon.name} 
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      className='group card-border tech-card overflow-hidden xl:rounded-lg rounded-lg relative'
                    > 
                      {/* Interactive Glow Layers */}
                      <div className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 spotlight-inner" />
                      <div className="glow-edge opacity-0 group-hover:opacity-100" />

                      {/* Your Original Animated BG */}
                      <div className='tech-card-animated-bg z-1' />

                      <div className='tech-card-content relative z-10'>
                        <div className='tech-icon-wrapper w-30'>
                            <img src={icon.imgPath} alt={icon.title} />
                        </div>
                        <div className='padding-x w-full'>
                          <p className="transition-colors duration-300 group-hover:text-white">
                            {icon.name}
                          </p>
                        </div>
                      </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TechStack