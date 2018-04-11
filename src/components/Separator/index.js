import React from 'react'
import './Separator.css'

function Separator ({ heading }) {
  return (
    <div className='separator'>
      <h3>{heading}</h3>
      <div className='line'></div>
    </div>
  )
}

export default Separator
