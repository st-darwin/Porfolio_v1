import React from 'react'

const TechIcon = ({model , index}) => {
  return (
    <div key={index}>
      {model.imgPatch}
    </div>
  )
}

export default TechIcon

