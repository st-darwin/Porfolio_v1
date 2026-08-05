import React from 'react'
import { logoIconsList } from '../Constants'

// logo icon component 
const LogoIcon = ({icon}) =>{
    return(
         <div className='flex-none flex-center marquee-item'>
            <img src={icon.imgPath} alt={icon.name} />
         </div> 
    )
}

const LogoSection = () => {
  return (
       <div className='md:my-20 xl:my-20 my-2 relative ' > 
         <div className='gradient-edge'/>
         <div className='gradient-edge'/>
         <div className='marquee h-45'>
            <div className='marquee-box md:gap-12 gap-5'>
              {logoIconsList.map((icon) =>(
                  <LogoIcon key={icon.name} icon={icon} />
              ))}
                 {logoIconsList.map((icon) =>(
                  <LogoIcon key={icon.name} icon={icon} />
              ))}
            </div>

         </div>
       </div>
  )
}

export default LogoSection
