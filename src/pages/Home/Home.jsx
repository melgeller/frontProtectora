import React from 'react'
import Hero from '../../components/HomeComponents/Hero';
import Carousel from '../../components/HomeComponents/Carousel'
import AdoptionProcess from '../../components/HomeComponents/AdoptionProcess';
import Colaborators from '../../components/HomeComponents/Colaborators';
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