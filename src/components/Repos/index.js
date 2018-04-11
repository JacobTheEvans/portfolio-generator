import React from 'react'
import './Repos.css'

function Repos ({ repos }) {
  return (
    <div className='repos'>
      {
        repos.map(({ name, description, url }) => (
          <div key={name} className='card'>
            <a href={url} target='_blank'>{name}</a>
            <p>{description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Repos
