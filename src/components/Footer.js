import React from 'react'
import Icon from 'react-fontawesome'
import styled from 'styled-components'
import { ThemeContext } from '../theme'

const FooterSection = styled.div`
  max-width: 750px;
  width: 100%;
  margin: 50px auto 20px auto;
  display: flex;
  align-items: center;
`

const Copyright = styled.p`
  flex-basis: 50%;
  font-size: 16px;
`

const SocialSection = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Link = styled.a`
  color: ${props => props.main};
  font-size: 22px;
  padding: 0px 7px;
  transition: color 0.5s ease;
  &:hover {
    color: ${props => props.secondary};
  }
`

function Footer ({ social = [], year = (new Date()).getYear() }, recommend = true) {
  return (
    <ThemeContext.Consumer>
      {({main, secondary}) => (
        <FooterSection main={main} secondary={secondary}>
          <Copyright>Copyright {year}</Copyright>
          <Social social={social} />
        </FooterSection>
      )}
    </ThemeContext.Consumer>
  )
}

function Social ({ social }) {
  return (
    <ThemeContext.Consumer>
      {({ main, secondary }) => (
        <SocialSection>
          {social.map(({ link, icon }) => (
            <Link
              key={link}
              target='_blank'
              rel='noopener noreferrer'
              href={link}
              main={main}
              secondary={secondary}
            >
              <Icon name={icon} />
            </Link>
          ))}
        </SocialSection>
      )}
    </ThemeContext.Consumer>
  )
}

export default Footer
