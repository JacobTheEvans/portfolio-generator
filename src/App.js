import React, { Component, Fragment } from 'react'
import Menu from './components/Menu'
import Header from './components/Header'
import Profile from './components/Profile'
import Separator from './components/Separator'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import data from './config'

class App extends Component {
  constructor () {
    super()
    if (Array.isArray(data)) {
      this.state = {
        options: data.map(({ language }) => language),
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

  render () {
    const { options, index } = this.state
    if (Array.isArray(data)) {
      return (
        <Fragment>
          <Template data={data[index]} />
          <Menu handleSelect={this.handleSelect} options={options} />
        </Fragment>
      )
    } else {
      return <Template data={data} />
    }
  }
}

function Template ({ data }) {
  const { headerOverrides = {} } = data
  return (
    <div>
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
    </div>
  )
}

export default App
