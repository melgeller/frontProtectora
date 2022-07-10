import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Adopcion.scss";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Adopcion = () => {
  const form = useRef();
  const MySwal = withReactContent(Swal);

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
          e.target.reset();
          MySwal.fire({
            title: <strong>Gracias por contactar</strong>,
            html: <i>En breves, nos pondremos en contacto contigo</i>,
            icon: "success",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      );
  };
  return (
    <>
      <div className='formularioCompleto'>
        <div className='main'>
          <Link to='/'>
            <img src='../../../assets/flecha.png' alt='flecha' />
          </Link>
        </div>
        <div className='adoptForm'>
          <img src='../../assets/adoptarmascota.png' alt='foto about' />
          <p>
            Si estás en esta página es porque ya te has decidido a adoptar.
            ¡Enhorabuena! Estás a punto de comenzar una aventura que atesorarás
            el resto de tu vida. Vivirás momentos maravillosos junto a tu animal
            y junto a él/ella podrás aprender grandes lecciones de vida.
            Convivir junto a un perro es de las experiencias más gratificantes
            que podrás experimentar jamás. ¿Preparado/a para conocer a tu MEJOR
            AMIGO? Pero espera, esta relación es bidireccional, y por eso
            queremos asegurarnos de que tú también vas a convertirte en su mejor
            amigo/a, en su familia. Es una decisión con la que vas a asumir
            mucha responsabilidad. Si te estás preguntando que hacer para
            adoptar un perro, el primer paso para adoptar es rellenar el
            formulario que encontrarás aquí abajo. Una vez lo hayas rellenado,
            nuestro equipo de adopciones se pondrá en contacto contigo en un
            plazo de 72h para que podamos conocerte mejor y así concertar una
            cita para que vengas a conocer a tu futuro compañero/a Rellenar este
            formulario no te compromete a nada, y tus datos están seguros con
            nosotros, no te preocupes. Pero antes, echa un vistazo a nuestras
            condiciones de adopción para que tengas más claro aún si cabe el
            paso que estás a punto de dar.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className='formulario2'>
          <h2>Formulario Pre Adopción</h2>
            <h3>Datos del Animal</h3>
            <div className="animalform">
            <label for='petname'>Nombre del Animal*</label>
            <input
              type='text'
              id='petname'
              name='petname'
              required='obligatorio'
            />
            </div>
            <h3>Datos personales</h3>
            <p>Nombre *</p>
            <section className='name'>
              <label for='name'>Nombre</label>
              <input type='text' id='name' name='name' required='obligatorio' />
              <label for='surname'>Apellidos</label>
              <input
                type='text'
                id='surname'
                name='surname'
                required='obligatorio'
              />
            </section>

            <p>Dirección *</p>
            <section className='adress'>
              <label for='direccion'>Dirección</label>
              <input
                type='text'
                id='direccion'
                name='direccion'
                required='obligatorio'
              />
              <label for='localidad'>Localidad</label>
              <input
                type='text'
                id='localidad'
                name='localidad'
                required='obligatorio'
              />
              <label for='provincia'>Provincia</label>
              <input
                type='text'
                id='provincia'
                name='provincia'
                required='obligatorio'
              />
              <label for='cp'>Código Postal</label>
              <input type='text' id='cp' name='cp' required='obligatorio' />
            </section>
            <section className='telefono'>
              <p>Teléfono *</p>
              <label for='telefono'></label>
              <input
                type='text'
                id='telefono'
                name='telefono'
                required='obligatorio'
              />
            </section>
            <section className='email'>
              <p>Email *</p>
              <label for='email'></label>
              <input
                type='email'
                id='email'
                name='email'
                required='obligatorio'
              />
            </section>
            <section className='dni'>
              <p>Dni *</p>
              <label for='dni'></label>
              <input type='text' id='dni' name='dni' required='obligatorio' />
            </section>
            <section className='fechana'>
              <p>Fecha de nacimiento *</p>
              <label for='fechana'></label>
              <input
                type='date'
                id='fechana'
                name='fechana'
                required='obligatorio'
              />
            </section>
            <section className='lugarna'>
              <p>Lugar de Nacimiento *</p>
              <label for='lugarna'></label>
              <input
                type='text'
                id='lugarna'
                name='lugarna'
                required='obligatorio'
              />
            </section>
            <section className='profesion'>
              <p>Profesión *</p>
              <label for='profesion'></label>
              <input
                type='text'
                id='profesion'
                name='profesion'
                required='obligatorio'
              />
            </section>
            <h3>Experiencia</h3>
            <section className='profesion'>
              <p>¿Has tenido mascota antes? *</p>
              <label for='mascota'>Elige una opcion</label>
              <select name='mascota' id='mascota' required='obligatorio'>
                <option value='si'>Si</option>
                <option value='no'>No</option>
              </select>
            </section>
            <section className='raza'>
              <p>¿De qué raza?*</p>
              <label for='raza'></label>
              <input type='text' id='raza' name='raza' required='obligatorio' />
            </section>
            <section className='seguimiento'>
              <p>¿El animal sigue con usted? *</p>
              <label for='seguimiento'></label>
              <input
                type='text'
                id='seguimiento'
                name='seguimiento'
                required='obligatorio'
              />
            </section>
            <section className='otros'>
              <p>¿Tiene otros animales en casa? *</p>
              <label for='otros'></label>
              <input
                type='text'
                id='otros'
                name='otros'
                required='obligatorio'
              />
            </section>
            <section className='cuantos'>
              <p>¿Cuántos y de qué especie? *</p>
              <label for='cuantos'></label>
              <input
                type='text'
                id='cuantos'
                name='cuantos'
                required='obligatorio'
              />
            </section>
            <section className='cantidad'>
              <p>¿Indique sexo, edad, especie..? *</p>
              <label for='cantidad'></label>
              <input
                type='text'
                id='cantidad'
                name='cantidad'
                required='obligatorio'
              />
            </section>
            <h3>Datos de la Vivienda</h3>
            <section className='tipocasa'>
              <p>¿Tipo de vivienda (casa, piso,..)? *</p>
              <label for='tipocasa'></label>
              <input
                type='text'
                id='tipocasa'
                name='tipocasa'
                required='obligatorio'
              />
            </section>
            <p>¿Tiene Terraza?</p>
            <label for='terraza'>Elige una opcion</label>
            <select name='terraza' id='terraza' required='obligatorio'>
              <option value='si'>Si</option>
              <option value='no'>No</option>
            </select>
            <p>
              ¿En caso de estar en regimen de alquiler, ¿Está de acuerdo el
              propietario con la entrada de un perro a la vivienda?
            </p>
            <label for='alquiler'>Elige una opcion</label>
            <select name='alquiler' id='alquiler' required='obligatorio'>
              <option value='si'>Si</option>
              <option value='no'>No</option>
              <option value='nose'>No lo sé</option>
            </select>

            <section className='lugarcasa'>
              <p>¿Que lugar de la casa estará destinado para el animal? *</p>
              <label for='lugarcasa'></label>
              <input
                type='text'
                id='lugarcasa'
                name='lugarcasa'
                required='obligatorio'
              />
            </section>
            <section className='lugarcasa'>
              <p>¿En qué lugar podrá descansar/dormir? *</p>
              <label for='dormir'></label>
              <input
                type='text'
                id='dormir'
                name='dormir'
                required='obligatorio'
              />
            </section>
            <section className='lugarcasa'>
              <p>¿A qué lugar de la vivienda no podrá acceder el animal? *</p>
              <label for='acceso'></label>
              <input
                type='text'
                id='acceso'
                name='acesso'
                required='obligatorio'
              />
            </section>
            <h3>Datos de la Familia</h3>
            <section className='convivencia'>
              <p>
                ¿Qué otras personas conviven con usted en la misma vivienda? *
              </p>
              <label for='convivencia'></label>
              <input
                type='text'
                id='convivencia'
                name='convivencia'
                required='obligatorio'
              />
            </section>
            <section className='alergias'>
              <p> ¿Alguno de ellos es alérgico a los animales? *</p>
              <label for='alergias'></label>
              <input
                type='text'
                id='alergias'
                name='alergias'
                required='obligatorio'
              />
            </section>
            <section className='hijos'>
              <p>¿Tiene hijos? *</p>
              <label for='hijos'></label>
              <input
                type='text'
                id='hijos'
                name='hijos'
                required='obligatorio'
              />
            </section>
            <section className='plazo'>
              <p>¿Tiene pensado ser padre/madre a corto plazo? *</p>
              <label for='plazo'></label>
              <input
                type='text'
                id='plazo'
                name='plazo'
                required='obligatorio'
              />
            </section>
            <h3>Datos de la adopción</h3>
            <section className='pq'>
              <p>¿Por qué ha decidido adoptar? *</p>
              <label for='decision'></label>
              <textarea
                id='decision'
                name='decision'
                rows='4'
                cols='50'
                required='obligatorio'
              />
            </section>
            <section className='pq'>
              <p>
                ¿Qué motivos o acciones harían que devolviese al animal a la
                asociación?*{" "}
              </p>
              <label for='motivos'></label>
              <textarea
                id='motivos'
                name='motivos'
                rows='4'
                cols='50'
                required='obligatorio'
              />
            </section>
            <section className='privacidad'>
              
                <input className="inputprivacy"
                  type='checkbox'
                  id='esperiencia1'
                  name='experiencia1'
                  value='experiencia1'
                />
                <label for='esperiencia'>
                  He leído y acepto la política de privacidad
                </label>
              
            </section>
            <div className="button">
            <button type='submit' value='Send'>
              Enviar
            </button>
            <h5 className='aviso'>
              <span class='obligatorio'> * </span>los campos son obligatorios.
            </h5>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Adopcion;
