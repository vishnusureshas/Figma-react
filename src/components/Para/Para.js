import React from 'react'

function Para() {
  return (
    <div className='row m-5'>
      <div className='col-4 '>
        <img src='https://cdn-icons-png.flaticon.com/512/1996/1996822.png'   style={{height:'60px',marginLeft:'120px'}} alt=''/>
        <h3 className='ms-5 ' style={{fontWeight:'bold',fontStyle:'italic'}}>100% plastic-free</h3>
        <h6>We believe that every small step towards reducing</h6>
        <h6>plastic waste can make a significant difference,and</h6>
        <h6>we encourage our customers to join us in this effort.</h6>
      </div>
      <div className='col-4'>
      <img src='https://www.shutterstock.com/image-vector/cruelty-free-vegan-vector-icon-600w-1628857525.jpg' style={{height:'60px',marginLeft:'120px'}} alt=''/>
        <h3 className='ms-5' style={{fontWeight:'bold',fontStyle:'italic'}}>Cruelty-free</h3>
        <h6>Note of our products are tested on animals or any insects.</h6>
        <h6>We are offering you cruelty-free options that align with your</h6>
        <h6>values and help create a more and sustainable world.</h6>
      </div>
      <div className='col-4 '>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRluPwL50kLq2H79ByBRzA6Em3W3eVWqSEMVA&usqp=CAU' style={{height:'60px',marginLeft:'120px'}} alt=''/>
        <h3 className='ms-5' style={{fontWeight:'bold',fontStyle:'italic'}}>Locally sourced</h3>
        <h6>All our products are sourced from locations closed to</h6>
        <h6>where you are to keep the carbon footprint and </h6>
        <h6>empower local business.</h6>
      </div>
    </div>
  )
}

export default Para
