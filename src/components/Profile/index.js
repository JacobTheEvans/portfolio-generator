import React from 'react'
import './Profile.css'

function Profile ({ img, description }) {
  return (
    <div className='profile'>
      <div className='img' style={{ backgroundImage: `url(${img})` }}></div>
      <p>{description}</p>
    </div>
  )
}

export default Profile
