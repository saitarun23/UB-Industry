import React from 'react'
import Hero from './Hero.jsx'
import Services from './Services.jsx'
import Products from './Products.jsx'
import WhyChooseUs from './WhyChooseUs.jsx'
import StatsSection from './StatsSection.jsx'
import ValuesSection from './ValuesSection.jsx'
import AboutHighlights from './AboutHighlights.jsx'
import ContactNewsletter from './ContactNewsletter.jsx'

const home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <Products/>
      <WhyChooseUs/>
      <StatsSection/>
      <ValuesSection/>
      <AboutHighlights/>
      <ContactNewsletter/>
    </div>
  )
}

export default home
