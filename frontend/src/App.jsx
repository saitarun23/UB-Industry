import React from 'react'
import useScrollEffect from './assets/hooks/useScrollEffect.js'
import Navbar from './assets/components/Navbar.jsx'
import Hero from './assets/components/Hero'
import WhyChooseUs from './assets/components/WhyChooseUs.jsx'
import StatsSection from './assets/components/STatsSection.jsx'
import ValuesSection from './assets/components/ValuesSection.jsx'
import Services from './assets/components/Services.jsx'
import Products from './assets/components/Products.jsx'
import AboutHighlights from './assets/components/AboutHighlights.jsx'
import ContactNewsletter from './assets/components/ContactNewsletter.jsx'
import Footer from './assets/components/Footer.jsx'

const App = () => {

    useScrollEffect();

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Products />
      <AboutHighlights /> 
      <StatsSection />
      <ContactNewsletter />
      <ValuesSection />
      <Footer />

    </div>
  )
}

export default App
