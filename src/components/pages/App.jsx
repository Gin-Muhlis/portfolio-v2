import React from 'react'
import Layout from '../layouts/Layout'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skill from '../sections/Skill'
import Portfolio from '../sections/Portfolio'
import Contact from '../sections/Contact'

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </Layout>
  )
}

export default App