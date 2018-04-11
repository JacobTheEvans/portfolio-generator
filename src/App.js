import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Separator from './components/Separator'
import Repos from './components/Repos'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import data from './config'

function App () {
  return (
    <div>
      <Header brand={data.brand} slogan={data.slogan} />
      <Separator heading='About Me' />
      <Profile img={data.img} description={data.description} />
      <Separator heading='Skills' />
      <Skills skills={data.skills} />
      <Separator heading='Projects' />
      <Repos repos={data.repos} />
      <Separator heading='Testimonials' />
      <Testimonials testimonials={data.testimonials} />
      <Footer social={data.social} year={data.year} />
    </div>
  )
}

export default App
