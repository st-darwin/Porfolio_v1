import React from 'react'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'
import FeatureCards from './Sections/FeatureCards'
import ExperienceSection from './Sections/ExperienceSection'
import TechStack from './Sections/TechStack'
import Testimonial from './Sections/Testimonial'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const App = () => {
  return (
  <>
  <NavBar/>
  <Hero/>
  <ShowcaseSection/>
  <LogoSection/>
  <FeatureCards/>
  <ExperienceSection/>
  <TechStack/>
  <Testimonial/>
  <Contact/>
  <Footer/>

  </>
  )
}

export default App
