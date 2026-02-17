import React from 'react'
import Hero from './Hero.jsx'
import HomeServices from './HomeServices.jsx'
import HomeProducts from './HomeProducts.jsx'
import WhyChooseUs from './WhyChooseUs.jsx'
// import StatsSection from './StatsSection.jsx'
import ValuesSection from './ValuesSection.jsx'
import AboutHighlights from './AboutHighlights.jsx'
import ContactNewsletter from './ContactNewsletter.jsx'

const home = () => {
  return (
    <div>
      <Hero/>
      <HomeServices/>
      <HomeProducts/>
      <WhyChooseUs/>
      <AboutHighlights/>
      <ValuesSection/>
      {/* <StatsSection/> */}
      <ContactNewsletter/>
    </div>
  )
}

export default home
