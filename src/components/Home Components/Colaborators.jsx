import React from 'react';
import "./Colaborators.scss";
const Colaborators = () => {
  return (
    <section className='colaboratorsContainer'>
      <ul>
        <li>
          <h4>
            Centro veterinario Eurocan
          </h4>
            <img
              src='../../assets/centro-veterinario-EUROCAN.jpeg'
              alt='Centro veterinario Eurocan'
            />
        </li>
        <li>
          <h4>Vanacasa</h4>
          <img
              src='../../assets/logo-vanacasa-300x198.png'
              alt='Van a casa'
            />
        </li>
        <li>
          <h4>Colaborador 3</h4>
          <img
              src='../../assets/nova-clinica-veterinarios.jpeg'
              alt='Nova Clinica Veterniarios'
            />
        </li>
      </ul>
    </section>
  );
};

export default Colaborators;
