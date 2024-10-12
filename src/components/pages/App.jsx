import React from 'react'
import Layout from '../layouts/Layout'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skill from '../sections/Skill'
import Portfolio from '../sections/Portfolio'

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skill />
      <Portfolio />
    </Layout>
  )
}

export default App