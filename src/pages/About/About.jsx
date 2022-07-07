import React from 'react'
import "./About.scss"
import AboutPhoto from './perro_5.webp'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div class="about">
    <div className='goBack'>
    <li className='main'><Link to='/'> --Volver a la vista principal</Link></li>
    </div>
    <div className='titulo'>
    <h1>Sobre Nosotros</h1>
    <h3>Ladrando</h3>
    <img src={AboutPhoto} alt="foto about"/>
    </div>
    <p>LA PLATAFORMA IDEAL NO PARA TI, PARA TU MASCOTA. Nuestra mision es crear vinculos con animales que aseguren...
    Lorem fistrum a gramenawer al ataquerl pecador pecador. Va usté muy cargadoo papaar papaar está la cosa muy malar benemeritaar. Mamaar amatomaa ese pedazo de se calle ustée va usté muy cargadoo me cago en tus muelas papaar papaar jarl ahorarr me cago en tus muelas condemor. Ese que llega te voy a borrar elrrr ahora eroereorme si o si vale.
     
    </p>
    <ul>
    Cumplimos los siguientes objetivos:
        <li>
        1:.- Luchar contra el abandono y maltrato de los animales, a través de distintas vías, tales como la concienciación social, partiendo fundamentalmente de los más jóvenes, para lo cual se organizarán coloquios y charlas en colegios e institutos, distribuyendo información en exposiciones o cualesquiera otros foros que pudieran ser idóneos.
        </li>
        <li>
        2:.- Evitar la utilización de animales en espectáculos, peleas, fiestas o cualesquiera otra actividad que implique crueldad, maltrato, vejación, sometimiento a estrés o les haga objeto de tratamientos inadecuados o antinaturales.
        </li>
        <li>
        3:.- Presentar denuncias ante las instancias oportunas (Comunidad de Madrid o Jurisdicción Penal) o informar sobre cuál sea el cauce más adecuado, así como el procedimiento a seguir en los supuestos de maltrato y/o abandono, todo ello a través de su Gabinete Jurídico. Igualmente ALBA asesorará sobre cualquier duda respecto de la Legislación sobre Protección Animal y sobre la tenencia de animales domésticos
        </li>
        <li>
        4:.- Fomentar la adopción de animales abandonados, dándoles una segunda oportunidad de una vida digna, para lo cual se informará sobre las ventajas de adoptar un animal. Igualmente se publicarán anuncios en revistas, artículos de prensa y se participará en programas de televisión o radio.
        </li>
        <li>
        5:.- Realizar y promover campañas de esterilización para evitar la reproducción descontrolada que conduce inexorablemente a la superpoblación y al abandono. A este respecto se divulgará las ventajas que proporciona la esterilización a nuestros animales de compañía.
        </li>
    
    </ul>
    </div>
  )
}

export default About