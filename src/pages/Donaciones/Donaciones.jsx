import React from "react";
import "./Donaciones.scss";
import { Link } from "react-router-dom";

const Donaciones = () => {
  return (
    <>
        <div className="atras">
        <div className='main'>
          <Link to='/'>
          <img src="../../../assets/flecha.png" alt="flecha"/>
          </Link>
        </div>
        </div>
      <div className='donations'>
        <div className='titulo'>
          <h2>Formas de Colaborar</h2>
        </div>
        <div className='texto'>
          <h3>Hay muchos campos en los que tu ayuda nos será muy valiosa</h3>
          <p>
            Si te gustan los animales, te preocupa su bienestar y te indigna el
            enorme problema de abandono que tenemos en este país puedes aportar
            tu granito de arena colaborando como voluntario. Puedes elegir una
            de las muchas formas que tenemos según tus necesidades de tiempo y
            espacio: hazte casa de acogida temporal, voluntario en el albergue,
            adopta a unos de nuestros animales, apadrínalo o hazte socio, se
            padrino de vuelo en tus viajes al extranjero …
          </p>
        </div>
        <div className='galeriaDonaciones'>
          <div className='carta'>
            <h4>Adopta</h4>
            <img src='../../assets/donations.webp' alt='donations' />
            <p>
              Si te decides por adoptar un perro o un cachorro , te lo llevarás
              a casa vacunado, desparasitado, con análisis de sangre completos,
              esterilizado, identificado con microchip y con pasaporte
              internacional.
            </p>
          </div>
          <div className='carta'>
            <h4>Hazte casa de acogida</h4>
            <img src='../../assets/donations.webp' alt='donations' />
            <p>
              Si te gustan los animales, pero no tienes ahora mismo una vida
              estable para poder hacerte responsable de una adopción que durará
              toda la vida del animal, existe otra forma para disfrutar de la
              compañía de un perro o gato …
            </p>
          </div>
          <div className='carta'>
            <h4>Volunariado</h4>
            <img src='../../assets/donations.webp' alt='donations' />
            <p>
              Los voluntarios siempre son indispensables para el buen
              funcionamiento de cualquier asociación. El único requisito es que
              te gusten los animales.
            </p>
          </div>
          <div className='carta'>
            <h4>Unete a nuestro Teaming</h4>
            <img src='../../assets/donations.webp' alt='donations' />
            <p>
              Teaming es una herramienta online para recaudar fondos para causas
              sociales a través de micro donaciones de 1€ al mes.
            </p>
          </div>
          <div className='carta'>
            <h4>Hazte socio</h4>
            <img src='../../assets/donations.webp' alt='donations' />
            <p>
              Salvar vidas supone una importante inversión de dinero en el
              mantenimiento de nuestro albergue, en gastos veterinarios,
              quirúrgicos y medicamentos, en manutención, alimentación y un
              sinfín de gastos que se ven reducidos gracias a las aportaciones
              de nuestros socios.
            </p>
          </div>
          <div className='carta'>
            <h4>Haz un donativo puntual</h4>
            <img src='../../assets/donations.webp' alt='donations' />
            <p>
              Puedes hacer un donativo puntual para ayudar a nuestros animales
              siempre y cuando tus circunstancias te lo permitan. En cualquier
              momento puedes donar la cantidad de dinero que puedas permitirte,
              sin compromisos, sin mensualidades.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donaciones;
