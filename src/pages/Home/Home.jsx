import React from 'react'
import Hero from '../../components/Home/Hero';
import Carousel from '../../components/Home/Carousel'
import AdoptionProcess from '../../components/Home/AdoptionProcess';
import Colaborators from '../../components/Home/Colaborators';
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