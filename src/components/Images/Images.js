import React from 'react'
import bottle from '../../assets/bottle.jpg'
import recycle from '../../assets/recycle.jpg'
import ocean from '../../assets/ocean.jpg'
import './Images.css'

function Images() {
  return (
    <div className='container m-5'>
      <div className='home-image'>
         <img src={ocean} alt=''/>
         <img src={bottle} alt=''/>
         <img src={recycle} alt=''/>
      </div>
    </div>
  )
}

export default Images
