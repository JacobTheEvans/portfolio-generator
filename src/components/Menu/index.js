import React from 'react'
import styled from 'styled-components'

const LangMenu = styled.div`
  position: absolute;
  top: 0px;
  right: 4px;
  z-index: 2;
  display: flex;
  color: white;
`

const Button = styled.div`
  padding: 4px 4px;
`

function Menu ({ options = [], handleSelect }) {
  return (
    <LangMenu>
      {options.map((language, index) => (
        <Button onClick={() => handleSelect(index)} key={language + index}>
          {language}
        </Button>
      ))}
    </LangMenu>
  )
}

export default Menu
