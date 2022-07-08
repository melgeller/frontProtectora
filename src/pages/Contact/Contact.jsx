import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_5chznu8",
        "template_5fuon1n",
        form.current,
        "hfl_V3p8oPQyUbd77"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className='goBack'>
        <p className='main'>
          <Link to='/'> --Volver a la vista principal</Link>
        </p>
      </div>
      <div className='adoptForm'>
        <img src='../../assets/adoptarmascota.png' alt='foto about' />
        <p>
          Si estás en esta página es porque ya te has decidido a adoptar.
          ¡Enhorabuena! Estás a punto de comenzar una aventura que atesorarás el
          resto de tu vida. Vivirás momentos maravillosos junto a tu animal y
          junto a él/ella podrás aprender grandes lecciones de vida. Convivir
          junto a un perro es de las experiencias más gratificantes que podrás
          experimentar jamás. ¿Preparado/a para conocer a tu MEJOR AMIGO? Pero
          espera, esta relación es bidireccional, y por eso queremos asegurarnos
          de que tú también vas a convertirte en su mejor amigo/a, en su
          familia. Es una decisión con la que vas a asumir mucha
          responsabilidad. Si te estás preguntando que hacer para adoptar un
          perro, el primer paso para adoptar es rellenar el formulario que
          encontrarás aquí abajo. Una vez lo hayas rellenado, nuestro equipo de
          adopciones se pondrá en contacto contigo en un plazo de 72h para que
          podamos conocerte mejor y así concertar una cita para que vengas a
          conocer a tu futuro compañero/a Rellenar este formulario no te
          compromete a nada, y tus datos están seguros con nosotros, no te
          preocupes. Pero antes, echa un vistazo a nuestras condiciones de
          adopción para que tengas más claro aún si cabe el paso que estás a
          punto de dar.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <h2>Formulario Pre Adopción</h2>
        <h3>Datos del Animal</h3>
        <fieldset>
          <label for='petname'>Nombre del Animal</label>
          <input type='text' id='petname' name='petname' />
          <h3>Datos personales</h3>
          <section className='name'>
            <p>Nombre *</p>
            <label for='name'>Nombre</label>
            <input type='text' id='name' name='name' />
            <label for='surname'>Apellidos</label>
            <input type='text' id='surname' name='surname' />
          </section>
          <section className='adress'>
            <p>Direccion *</p>
            <label for='direccion'>Direccion</label>
            <input type='text' id='direccion' name='direccion' />
            <label for='localidad'>Localidad</label>
            <input type='text' id='localidad' name='localidad' />
            <label for='provincia'>Provincia</label>
            <input type='text' id='provincia' name='provincia' />
            <label for='cp'>Código Postal</label>
            <input type='text' id='cp' name='cp' />
          </section>
          <section className='telefono'>
            <p>Telefono *</p>
            <label for='telefono'></label>
            <input type='text' id='telefono' name='telefono' />
          </section>
          <section className='email'>
            <p>Email *</p>
            <label for='email'></label>
            <input type='text' id='email' name='email' />
          </section>
          <section className='dni'>
            <p>Dni *</p>
            <label for='dni'></label>
            <input type='text' id='dni' name='dni' />
          </section>
          <section className='fechana'>
            <p>Fecha de nacimiento *</p>
            <label for='fechana'></label>
            <input type='text' id='fechana' name='fechana' />
          </section>
          <section className='lugarna'>
            <p>Lugar de Nacimiento *</p>
            <label for='lugarna'></label>
            <input type='text' id='lugarna' name='lugarna' />
          </section>
          <section className='profesion'>
            <p>Profesión *</p>
            <label for='profesion'></label>
            <input type='text' id='profesion' name='profesion' />
          </section>
          <h3> Experiencia</h3>
          <section className='profesion'>
            <p>¿Has tenido mascota antes? *</p>
            <label for='mascota'>Elige una opcion</label>
            <select name='mascota' id='mascota'>
              <option value='si'>Si</option>
              <option value='no'>No</option>
            </select>
          </section>
          <section className='raza'>
            <p>¿De qué raza? *</p>
            <label for='raza'></label>
            <input type='text' id='raza' name='raza' />
          </section>
          <section className='seguimiento'>
            <p>¿El animal sigue con usted? *</p>
            <label for='seguimiento'></label>
            <input type='text' id='seguimiento' name='seguimiento' />
          </section>
          <section className='otros'>
            <p>¿Tiene otros animales en casa? *</p>
            <label for='otros'></label>
            <input type='text' id='otros' name='otros' />
          </section>
          <section className='cuantos'>
            <p>¿Cuántos y de qué especie? *</p>
            <label for='cuantos'></label>
            <input type='text' id='cuantos' name='cuantos' />
          </section>
          <section className='cantidad'>
            <p>¿Indique sexo, edad, especie..? *</p>
            <label for='cantidad'></label>
            <input type='text' id='cantidad' name='cantidad' />
          </section>
          <h2>Datos de la Vivienda</h2>
          <section className='tipocasa'>
            <p>¿Tipo de vivienda (casa, piso,..)? *</p>
            <label for='tipocasa'></label>
            <input type='text' id='tipocasa' name='tipocasa' />
          </section>
          <h2>¿Tiene Terraza?</h2>
          <label for='terraza'>Elige una opcion</label>
          <select name='terraza' id='terraza'>
            <option value='si'>Si</option>
            <option value='no'>No</option>
          </select>
          <h2>
            ¿En caso de estar en regimen de alquiler, ¿Está de acuerdo el
            propietario con la entrada de un perro a la vivienda?
          </h2>
          <label for='alquiler'>Elige una opcion</label>
          <select name='alquiler' id='alquiler'>
            <option value='si'>Si</option>
            <option value='no'>No</option>
            <option value='nose'>No lo sé</option>
          </select>

          <section className='lugarcasa'>
            <p>¿Que lugar de la casa estará destinado para el animal? *</p>
            <label for='lugarcasa'></label>
            <input type='text' id='lugarcasa' name='lugarcasa' />
          </section>
          <section className='lugarcasa'>
            <p>¿En qué lugar podrá descansar/dormir? *</p>
            <label for='dormir'></label>
            <input type='text' id='dormir' name='dormir' />
          </section>
          <section className='lugarcasa'>
            <p>¿A qué lugar de la vivienda no podrá acceder el animal? *</p>
            <label for='acceso'></label>
            <input type='text' id='acceso' name='acesso' />
          </section>
          <h3>DATOS DE LA FAMILIA</h3>
          <section className='convivencia'>
            <p>
              ¿Qué otras personas conviven con usted en la misma vivienda? *
            </p>
            <label for='convivencia'></label>
            <input type='text' id='convivencia' name='convivencia' />
          </section>
          <section className='alergias'>
            <p> ¿Alguno de ellos es alérgico a los animales? *</p>
            <label for='alergias'></label>
            <input type='text' id='alergias' name='alergias' />
          </section>
          <section className='hijos'>
            <p>¿Tiene hijos? *</p>
            <label for='hijos'></label>
            <input type='text' id='hijos' name='hijos' />
          </section>
          <section className='plazo'>
            <p>¿Tiene pensado ser padre/madre a corto plazo? *</p>
            <label for='plazo'></label>
            <input type='text' id='plazo' name='plazo' />
          </section>
          <h3>DATOS DE LA ADOPCION</h3>
          <section className='pq'>
            <p>¿Por qué ha decidido adoptar? *</p>
            <label for='decision'></label>
            <textarea id='decision' name='decision' rows='4' cols='50' />
          </section>
          <section className='pq'>
            <p>
              ¿Qué motivos o acciones harían que devolviese al animal a la
              asociación?*{" "}
            </p>
            <label for='motivos'></label>
            <textarea id='motivos' name='motivos' rows='4' cols='50' />
          </section>
          <h2>CONSENTIMIENTO Y ACEPTACIÓN DE CONDICIONES</h2>
          <h3>Consentimiento</h3>
          <section className='privacidad'>
            <div>
              <input
                type='checkbox'
                id='esperiencia1'
                name='experiencia1'
                value='experiencia1'
              />
              <label for='esperiencia'>
                He leído y acepto la política de privacidad
              </label>
            </div>
          </section>
          <button type='submit' value='Send'>
            enviar
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default Contact;
