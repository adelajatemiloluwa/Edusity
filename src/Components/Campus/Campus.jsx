import React from 'react'
import './Campus.css'
import gallery from '../../assets/gallery.jpeg'
import gallery1 from '../../assets/gallery1.jpeg'
import gallery2 from '../../assets/gallery2.jpeg'
import gallery3 from '../../assets/gallery3.jpeg'
import whitearrow from '../../assets/whitearrow.jpeg'

const Campus = () => {
  return (
    <div className='campus' id='campus'>
      <div className="gallery">
        <img src={gallery} alt="" />
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
      </div>
      <buttonn className= 'btn dark-btn'>See more here <img src={whitearrow} alt="" /></buttonn>
    </div>
  )
}

export default Campus
