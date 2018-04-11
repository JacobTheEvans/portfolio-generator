import React from 'react'
import './Menu.css'

function Menu ({ options = [], handleSelect }) {
  return (
    <div className='lang-menu'>
      {options.map((language, index) => (
        <div onClick={() => handleSelect(index)} key={language + index}>
          {language}
        </div>
      ))}
    </div>
  )
}

export default Menu
