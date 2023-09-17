import React from 'react'
import './EcoFriendly.css'

function EcoFriendly() {
  return (
    <div className='row h-20' style={{backgroundColor:'silver'}} >
     <div className='col-4'></div>
     <div className='col-4'>
          <h3  style={{fontWeight:'bold'}}>Join Our Eco-Friendly Journey</h3>
          <h5 >Join ou malling list and receive a 10% discount for your first order.We'll also send you some<br/>handly tips & tricks to help you lead an eco-friendly,cruelty-free,sustainable lifecycle</h5>
       <input type='email'  className='form-control' placeholder='Email' />               
     </div>
     <div className='col-4'></div>
    </div>
  )
}

export default EcoFriendly