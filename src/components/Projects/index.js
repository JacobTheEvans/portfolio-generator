import React from 'react'
import './Projects.css'

function Projects ({ projects }) {
  return (
    <div className='projects'>
      {
        projects.map(({ name, description, url }) => (
          <div key={name} className='card'>
            <a href={url} target='_blank'>{name}</a>
            <p>{description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Projects
