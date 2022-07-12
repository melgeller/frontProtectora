import React from 'react';
import './Adoption.scss';
const AdoptionProcess = () => {
  return (
    <section>
      <div className='containerProcess'>
      <h2 id="h2">Proceso de adopción</h2>
      <ul className='progressbar'>
        <li className='active'>
          <img src='../../assets/1step.jpg' alt='one' />
          <p className='ps'>Vienes a verme y nos conocemos, y si surge el flechazo...</p>
        </li>
        <hr></hr>
        <li>
        <img src='../../assets/2step.jpg' alt='one' />
          <p className='ps'>Documentamos la adopción y consulta veterinaria.</p>
        </li>
        <hr></hr>
        <li>
        <img src='../../assets/3step.jpg' alt='one' />
          
          <p className='ps'>Y comenzamos una vida juntos.</p>
        </li>
        <hr></hr>
        <li>
        <img src='../../assets/4step.jpg' alt='one' />
        <p className='ps'>UHA estará pendiente de nosotros, haciendo seguimientos.</p>
        </li>
       
      </ul>
      </div>
    </section>
  );
};

export default AdoptionProcess;
