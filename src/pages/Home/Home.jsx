import React from 'react'
import Hero from '../../components/Home Components/Hero';
import Carousel from '../../components/Home Components/Carousel'
import AdoptionProcess from '../../components/Home Components/AdoptionProcess';
import Colaborators from '../../components/Home Components/Colaborators';
const Home = () => {
  return (
    <div className="container">
      <Hero/>
      <Carousel/>
      <AdoptionProcess/>
      <Colaborators/>
    </div>
  )
}

export default Home