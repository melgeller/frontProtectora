import React from "react";
import "./Colaborators.scss";
const Colaborators = () => {
  return (
    <section className='colaboratorsContainer'>
      <ul>
        <li>
          <img
            src='../../assets/eukanuba.png'
            alt='Centro veterinario Eurocan'
          />
        </li>
        <li>
          <img src='../../assets/logo-vanacasa-300x198.png' alt='Van a casa' />
        </li>
        <li>
          <img
            src='../../assets/nova-clinica-veterinarios.jpeg'
            alt='Nova Clinica Veterniarios'
          />
        </li>
        <li>
          <img src='../../assets/kiwoko.png' alt='Van a casa' />
        </li>
        <li>
          <img src='../../assets/affinity.png' alt='Van a casa' />
        </li>
      </ul>
    </section>
  );
};

export default Colaborators;
