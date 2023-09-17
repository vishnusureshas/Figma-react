import React from 'react'
import videobg from '../../assets/video.mp4'
import './Video.css';

function Video() {
  return (
    <div className='main'>
      <video src={videobg} autoPlay muted />
    </div>
  )
}

export default Video
