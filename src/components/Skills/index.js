import React from 'react'
import styled from 'styled-components'
import { toCapitalize } from '../../utils'

const SkillsSection = styled.div`
  max-width: 750px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const SectionDiv = styled.div`
  flex-basis: 33.33%;
  &:last-child  {
    margin-right: auto;
  }
`

const Header = styled.h3`
  font-size: 17px;
  margin: 10px 0 0 0;
`

const Skill = styled.p`
  margin: 13px 0px;
`

function Skills ({ skills }) {
  return (
    <SkillsSection>
      {Object.keys(skills).map(key => <Section key={key} header={key} items={skills[key]} />)}
    </SkillsSection>
  )
}

function Section ({ header, items }) {
  return (
    <SectionDiv>
      <Header>{toCapitalize(header)}</Header>
      {
        items.map((item, i) => (
          <Skill key={item + i}>
            {item}
          </Skill>
        ))
      }
    </SectionDiv>
  )
}

export default Skills
