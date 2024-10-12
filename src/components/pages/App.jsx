import React from 'react'
import Layout from '../layouts/Layout'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skill from '../sections/Skill'

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skill />
    </Layout>
  )
}

export default App