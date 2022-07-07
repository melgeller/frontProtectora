import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.scss';

const Hero = () => {
  return (
  <section className='hero'>
  
   <h1>!UPGRADE HUB ADOPCIONES!</h1>
   <p>Somos una protectora sin animo de lucrp que se fundo en el añp 2010Surgimos como respuesta al elevado número de animales que son abandonados y/o maltratados a diario en este país y como una alternativa útil y humanitaria para mejorar la situación actual.

  Nuestro trabajo se centra en la protección y defensa de los animales en un sentido amplio, tanto a corto plazo, proporcionando un hogar a los animales abandonados, como a largo plazo, difundiendo una cultura y educación basadas en el conocimiento y respeto hacia los animales y fomentando una tenencia responsable de cualquier ser vivo.</p>
  
  <img src='../assets/perritoHero.jpeg' alt='perrequeHero' />

  <p>¿Nos ayudas? <button className='button'><Link to='/donaciones'> €€€ </Link></button></p>

  <button className='button'><Link to='/about'> Lee mas sobre nosotros </Link></button>
    
  </section>
  )
}

export default Hero