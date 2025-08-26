import React from 'react'
import Hero from '../components/ServicesCom/Hero';
import EmpServCard from '../components/ServicesCom/EmpServCard';
import ContactSection from '../components/ServicesCom/ContactSection';
import Satisfaction from '../components/ServicesCom/Satisfaction';

const Services = () => {
  return (
    <div>
        <Hero/>
        <EmpServCard/>
        <Satisfaction/>
        <ContactSection/>
        
    </div>
  )
}

export default Services;