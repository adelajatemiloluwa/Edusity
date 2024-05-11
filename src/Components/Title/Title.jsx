import React from 'react'
import './Title.css'

const Title = ({Subtitle, title}) => {
  return ( 
    <div className='title' id='title'>
        <p>{Subtitle}</p>
        <h2>{title}</h2>
      
    </div>
  )
}

export default Title
