import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../theme'

const SeparatorSection = styled.div`
  max-width: 750px;
  width: 100%;
  margin: 50px auto 10px auto;

  & ~ & {
    margin: 60px auto 10px auto;
  }
`

const Heading = styled.h3`
  font-size: 20px;
  color: ${props => props.main};
  padding: 0px 9px;
  flex-grow: 0;
  margin: auto
`

const Line = styled.div`
  flex-grow: 3;
  height: 2px;
  margin-top: 5px;
  background-color: #a8a8a8;
`

function Separator ({ heading }) {
  return (
    <ThemeContext.Consumer>
      {({ main }) => (
        <SeparatorSection>
          <Heading main={main}>{heading}</Heading>
          <Line />
        </SeparatorSection>
      )}
    </ThemeContext.Consumer>
  )
}

export default Separator
