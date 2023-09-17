import React from 'react'

function Content() {
  return (
    <div className='row'>
      <div className='col-2'></div>
      <div className='col-8 m-5'>
        <h2  style={{textAlign:'center',fontWeight:'bolder'}}>Every choice counts:Protect the</h2>
        <h2  style={{textAlign:'center',fontWeight:'bolder'}}>environment starts with us</h2>
        <div className='m-4'>
          <h5>As individuals,we all have the power to make changes to protect the environment by reducing</h5>
          <h5>the use of plastic and choosing eco-friendly products.your actions can save earth's resourses</h5>
          <h5>and provide a better world for future generations</h5>
          <button className=' me-5 text-center w-70' style={{marginLeft:'500px',backgroundColor:'green',color:'white'}}>Learn More</button>
        </div>       
      </div>
      <div className='col-2'></div>
    </div>
  )
}

export default Content
