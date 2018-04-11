import React from 'react'
import './Header.css'
import Particles from 'react-particles-js'

const defaultParticlesProps = {
  width: '100vw',
  height: '275px'
}

function Header ({ brand, slogan }) {
  return (
    <div id='header' className='header'>
      <Particles {...defaultParticlesProps} />
      <div className='content'>
        <h1>{brand}</h1>
        <h2>{slogan}</h2>
      </div>
    </div>
  )
}

export default Header
