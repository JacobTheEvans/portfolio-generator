import React, { Component, Fragment } from 'react'
import Menu from './components/Menu'
import Header from './components/Header'
import Profile from './components/Profile'
import Separator from './components/Separator'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { templates } from './config'
import { ThemeProvider } from './theme'

class App extends Component {
  constructor () {
    super()
    if (templates.length > 1) {
      this.state = {
        options: templates.map(({ language }) => language),
        index: 0
      }
    } else {
      this.state = {}
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect (index) {
    this.setState({ index })
  }

  addForkLink (index) {
    let social
    if (templates.length > 1) {
      social = templates[index].footer.social
    } else {
      social = templates[0].footer.social
    }
    if (social) {
      let isAdded = false
      for (let { icon } of social) {
        if (icon === 'code-fork') isAdded = true
      }
      if (!isAdded) {
        social.unshift({
          link: 'https://github.com/JacobTheEvans/portfolio-generator',
          icon: 'code-fork'
        })
      }
    }
  }

  render () {
    const { options, index } = this.state
    this.addForkLink(index)
    if (templates.length > 1) {
      return (
        <Fragment>
          <Template data={templates[index]} />
          <Menu handleSelect={this.handleSelect} options={options} />
        </Fragment>
      )
    } else {
      return <Template data={templates[0]} />
    }
  }
}

function Template ({ data }) {
  const { headerOverrides = {} } = data
  return (
    <ThemeProvider>
      {data.header && <Header brand={data.header.brand} slogan={data.header.slogan} />}
      {data.about && (
        <Fragment>
          <Separator heading={headerOverrides.about || 'About Me'} />
          <Profile img={data.about.img} description={data.about.description} />
        </Fragment>
      )}
      {data.skills && (
        <Fragment>
          <Separator heading={headerOverrides.skills || 'Skills'} />
          <Skills skills={data.skills} />
        </Fragment>
      )}
      {data.projects && (
        <Fragment>
          <Separator heading={headerOverrides.projects || 'Projects'} />
          <Projects projects={data.projects} />
        </Fragment>
      )}
      {data.testimonials && (
        <Fragment>
          <Separator heading={headerOverrides.testimonials || 'Testimonials'} />
          <Testimonials testimonials={data.testimonials} />
        </Fragment>
      )}
      {data.footer && <Footer social={data.footer.social} year={data.footer.year} />}
    </ThemeProvider>
  )
}

export default App
