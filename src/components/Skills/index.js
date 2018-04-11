import React from 'react'
import { toCapitalize } from '../../utils'
import './Skills.css'

function Skills ({ skills }) {
  return (
    <div className='skills'>
      {
        Object.keys(skills).map(key => <Section key={key} header={key} items={skills[key]} />)
      }
    </div>
  )
}

function Section ({ header, items }) {
  return (
    <div className='section'>
      <h3>{toCapitalize(header)}</h3>
      {
        items.map((item, i) => (
          <p key={item + i}>
            {item}
          </p>
        ))
      }
    </div>
  )
}

export default Skills
