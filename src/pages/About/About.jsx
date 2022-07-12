import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class='about'>
      <div className='main'>
        <Link to='/'>
          <img src='../../../assets/flecha.png' alt='flecha' />
        </Link>
      </div>

      <h1>Sobre Nosotros</h1>

      <div class='mapa'>
        <iframe
          width='350rem'
          height='300'
          id='gmap_canvas'
          src='https://maps.google.com/maps?q=calle%20orense,69&t=&z=13&ie=UTF8&iwloc=&output=embed'
          frameborder='0'
          scrolling='no'
          marginheight='0'
          marginwidth='0'
          frameborderradius='10px'>
          </iframe>
        <p className='protect'>
          La Protectora  está formada por un grupo de
          voluntarios que trabajan de manera continua para evitar el abandono de
          los animales, facilitar su adopción, y cuidar a los que no tienen
          hogar. Nuestra protectora es una organización sin ánimo de lucro cuya
          labor es posible gracias a las aportaciones mayoritariamente de fondos
          privados. Todo los fondos económicos y donaciones de material que
          recibimos están destinados en su totalidad al rescate y cuidado de los
          animales abandonados. Nuestro principal objetivo es fomentar el
          respeto por los animales y en la medida de nuestra posibilidades
          paliar las consecuencias que derivan de los actos de muchas personas
          irresponsables que abandonan y dejan tirados, como si de un trasto
          viejo se tratase, a sus fieles amigos peludos, que lo único que han
          hecho, es darles cariño desinteresadamente. Llegan a nosotros
          asustados, heridos y muchas veces sufriendo sociopatías producidas por
          continuos maltratos que es necesario tratar durante meses. Todos
          aquellos perritos y gatos que un día fueron abandonados por sus
          dueños, encuentran con nosotros cariño, cuidados y la esperanza de
          "UNA SEGUNDA OPORTUNIDAD”.
        </p>
      </div>
      <div className='equipo1'>
        <h2>Nuestro Equipo</h2>
        <div className="equipo">
        <div className="jose">
        <img src="https://media-exp2.licdn.com/dms/image/C4E03AQGbq3W4vKVjOg/profile-displayphoto-shrink_800_800/0/1654880329465?e=1663200000&v=beta&t=K6-nXO_PA6xDwox19AHt3A26SY-1_-84TiZ9wvLe5uw" alt="jose"/>
        <p>Jose</p>
        </div>
         <div className="silvia">
         <img src="https://media-exp2.licdn.com/dms/image/C4E03AQHBlBP8RLyUxA/profile-displayphoto-shrink_800_800/0/1657291881798?e=1663200000&v=beta&t=6CD3jGG7kTadHdoHhT-MMFTZApkLh3PzYJTr85M048Q" alt="silvia"/>
         <p>Silvia</p>
         </div>
          <div className="esther">
          <img src="../../assets/IMG_1585.jpg" alt=""/>
          <p>Esther</p>
          </div>
          <div className="diego">
          <img src="../../assets/fotodiego.jpeg" alt=""/>
          <p>Diego</p>
          </div>
          <div className="lucas">
          <img src="https://media-exp2.licdn.com/dms/image/C4E03AQE5WyE0yy_KVw/profile-displayphoto-shrink_800_800/0/1650292905425?e=1663200000&v=beta&t=rRr71F6h0zCeadoVjNOjrgrzgFNFPvFV-CeoCl_LqfM" alt=""/>
          <p>Lucas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
