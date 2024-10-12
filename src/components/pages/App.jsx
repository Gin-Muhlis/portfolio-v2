import React from 'react'
import Layout from '../layouts/Layout'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skill from '../sections/Skill'
import Portfolio from '../sections/Portfolio'
import Contact from '../sections/Contact'
import Scroll from '../elements/Scroll'

const App = () => {
  return (
    <Layout>
      <img src="/assets/images/elipse1.png" alt="Image Elipse" className='absolute top-10 md:-top-0 right-0 w-full md:w-1/2 -z-10' />
      <img src="/assets/images/elipse2.png" alt="Image Elipse" className='absolute top-64 md:top-0 left-0 w-full md:w-1/2 -z-10' />
      <Scroll />
      <Hero />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </Layout>
  )
}

export default App