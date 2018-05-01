import React, { Component } from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import { mobileParticles } from '../utils'
import { ThemeContext } from '../theme'

const HeaderSection = styled.div`
  width: 100%;
  background-color: ${props => props.main};
  color: #ffffff;
  height: 275px;
  overflow: hidden;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 275px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const MainHeader = styled.h1`
  font-size: 65px;
  margin: 0;
  @media screen and (max-width: 650px) {
    font-size: 50px;
  }
`

const SubHeader = styled.h2`
  font-size: 33px;
  margin: 5px 0 0 0;
  @media screen and (max-width: 650px) {
    font-size: 25px;
  }
`

function Header ({ brand, slogan }) {
  return (
    <ThemeContext.Consumer>
      {({ main }) => (
        <HeaderSection main={main}>
          <ResponsiveParticles />
          <Content>
            <MainHeader>{brand}</MainHeader>
            <SubHeader>{slogan}</SubHeader>
          </Content>
        </HeaderSection>
      )}
    </ThemeContext.Consumer>

  )
}

const defaultParticlesProps = {
  width: '100vw',
  height: '275px'
}

class ResponsiveParticles extends Component {
  constructor () {
    super()
    this.state = {
      resize: false,
      shouldRender: false
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    setTimeout(() => this.setState({ shouldRender: true }), 200)
  }

  handleResize () {
    const width = this.getWidth()
    const { resize } = this.state
    if (resize && width >= 850) {
      this.setState({
        resize: false
      })
    }
    if (!resize && width < 850) {
      this.setState({
        resize: true
      })
    }
  }

  getWidth () {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  }

  render () {
    const { resize, shouldRender } = this.state
    if (!shouldRender) {
      return false
    } else if (resize) {
      return (
        <div>
          <Particles params={mobileParticles} {...defaultParticlesProps} />
        </div>
      )
    } else {
      return (
        <Particles {...defaultParticlesProps} />
      )
    }
  }
}

export default Header
