import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.scss';



const Hero = () => {
  return (
   <section className='homepri'>
   <div class="data-container">
   <span class="btn">Upgrade Hub Protectora </span>
</div>
       <div className='second'>
   <img src='../assets/perritoHero.jpeg' alt='perrequeHero' />
   <p className='ph'>Somos una protectora sin ánimo de lucro que se fundó en el año 2010. Surgimos como respuesta al elevado número de animales que son abandonados y/o maltratados a diario en este país y como una alternativa útil y humanitaria para mejorar la situación actual. Nuestro trabajo se centra en la protección y defensa de los animales en un sentido amplio, tanto a corto plazo, proporcionando un hogar a los animales abandonados, como a largo plazo, difundiendo una cultura y educación basadas en el conocimiento y respeto hacia los animales y fomentando una tenencia responsable de cualquier ser vivo..</p>
  </div>
<div className='secondhome'>
<p>Si quieres aportar tu granito de arena, dale aquì. <button className='buttonh'><Link to='/donaciones'>Colabora</Link></button></p>

<button className='buttonh'><Link to='/about'>Nosotros </Link></button>

</div>

 
    
  </section>
  )
}

export default Hero