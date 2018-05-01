import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../theme'

const ProfileSection = styled.div`
  max-width: 750px;
  width: 100%;
  margin: 0 auto;
`

const Card = styled.div`
  width: 100%;
  background-color: #EEE;
  padding: 20px 30px;
  height: 135px;
  margin: 30px auto;
  @media screen and (max-width: 650px) {
    height: 175px;
  }
`

const Link = styled.a`
  color: ${props => props.main};
  font-size: 20px;
  transition: color 0.5s ease;
  &:hover {
    color: ${props => props.secondary};
  }
`

const Text = styled.p`
  font-size: 16px;
`

function Projects ({ projects }) {
  return (
    <ThemeContext.Consumer>
      {({ main, secondary }) => (
        <ProfileSection>
          {projects.map(({ name, description, url }) => (
            <Card key={name}>
              <Link
                main={main}
                secondary={secondary}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {name}
              </Link>
              <Text>{description}</Text>
            </Card>
          ))}
        </ProfileSection>
        )}
    </ThemeContext.Consumer>
  )
}

export default Projects
