import React from 'react'
import Icon from 'react-fontawesome'
import './Footer.css'

function Footer ({ social = [], year = (new Date()).getYear() }, recommend = true) {
  return (
    <div className='footer'>
      <p className='text'>Copyright {year}</p>
      <Social social={social} />
    </div>
  )
}

function Social ({ social }) {
  social.unshift({
    link: 'https://github.com/JacobTheEvans/portfolio-generator',
    icon: 'code-fork'
  })
  return (
    <div className='social'>
      {
        social.map(({ link, icon }) => (
          <a key={link} target='_blank' rel='noopener noreferrer' href={link} className='link'>
            <Icon name={icon} />
          </a>
        ))
      }
    </div>
  )
}

export default Footer
