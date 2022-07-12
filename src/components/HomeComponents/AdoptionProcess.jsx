import React from 'react';
import './Adoption.scss';
const AdoptionProcess = () => {
  return (
    <section>
      <h2 id="h2">Proceso de adopción</h2>
      <div className='firstdiv'>
      <ul className='numeracionlu'>
        <li>
          <img src='../../assets/numeros/sinfondo1.png' alt='one' />
          <p className='ps'>Ven a conocernos a la prote y si sientes mach un con alguno de nuestros peludos escribenos. </p>
        </li>
        <li>
        <img src='../../assets/numeros/el2.png' alt='one' />
          <p className='ps'>Después de recibir tu email, estudiaremos tu caso, nos pondremos en contacto con vosotros lo antes posible y organizaremos otra visita para que os podáis seguir conociendo.</p>
        </li>
        <li>
        <img src='../../assets/numeros/el3.png' alt='one' />
          
          <p className='ps'>Si entre vosotos existe una conexión y cumpleslos requisitos imprescincibles para nosotros y estás de acuerdo con las condiciones de la protectora ya solo queda una cosa...</p>
        </li>
        <li>
        <img src='../../assets/numeros/el4.png' alt='one' />
        <p className='ps'>Organizar el dia perfecto para venir a recoger al nuevo miembro de la familia y disfrutar toda la vida de él.</p>
        </li>
      </ul>
      </div>
    </section>
  );
};

export default AdoptionProcess;
