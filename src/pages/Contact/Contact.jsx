import React from "react";
import { Link } from "react-router-dom";
import "./Contact.scss"


const Contact = () => {
  return (
    <>
      <div className='goBack'>
        <p className='main'>
          <Link to='/'> --Volver a la vista principal</Link>
        </p>
      </div>
      <div>
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
      <form>
        <h2>Formulario Pre Adopción</h2>
        <h3>Datos del Animal</h3>
        <fieldset>
          <label for='petname'>Nombre del Animal</label>
          <input type='text' id='petname' formControlName='petname' />
          <h3>Datos personales</h3>
          <section className='name'>
            <p>Nombre *</p>
            <label for='name'>Nombre</label>
            <input type='text' id='name' formControlName='name' />
            <label for='surname'>Apellidos</label>
            <input type='text' id='surname' formControlName='surname' />
          </section>
          <section className='adress'>
            <p>Direccion *</p>
            <label for='direccion'>Direccion</label>
            <input type='text' id='direccion' formControlName='direccion' />
            <label for='localidad'>Localidad</label>
            <input type='text' id='localidad' formControlName='localidad' />
            <label for='provincia'>Provincia</label>
            <input type='text' id='provincia' formControlName='provincia' />
            <label for='cp'>Código Postal</label>
            <input type='text' id='cp' formControlName='cp' />
          </section>
          <section className='telefono'>
            <p>Telefono *</p>
            <label for='telefono'></label>
            <input type='text' id='telefono' formControlName='telefono' />
          </section>
          <section className='email'>
            <p>Email *</p>
            <label for='email'></label>
            <input type='text' id='email' formControlName='email' />
          </section>
          <section className='dni'>
            <p>Dni *</p>
            <label for='dni'></label>
            <input type='text' id='dni' formControlName='dni' />
          </section>
          <section className='fechana'>
            <p>Fecha de nacimiento *</p>
            <label for='fechana'></label>
            <input type='text' id='fechana' formControlName='fechana' />
          </section>
          <section className='lugarna'>
            <p>Lugar de Nacimiento *</p>
            <label for='lugarna'></label>
            <input type='text' id='lugarna' formControlName='lugarna' />
          </section>
          <section className='profesion'>
            <p>Profesión *</p>
            <label for='profesion'></label>
            <input type='text' id='profesion' formControlName='profesion' />
          </section>
          <h3> Experiencia</h3>
          <section className='profesion'>
            <p>¿Has tenido mascota antes? *</p>
            <div>
              <input
                type='checkbox'
                id='expiencia'
                name='experiencia'
                value='experiencia'
              />
              <label for='experiencia'>Si</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='esperiencia1'
                name='experiencia1'
                value='experiencia1'
              />
              <label for='esperiencia'>No</label>
            </div>
          </section>
          <section className='raza'>
            <p>¿De qué raza? *</p>
            <label for='raza'></label>
            <input type='text' id='raza' formControlName='raza' />
          </section>
          <section className='seguimiento'>
            <p>¿El perro sigue con usted? *</p>
            <label for='seguimiento'></label>
            <input type='text' id='seguimiento' formControlName='seguimiento' />
          </section>
          <section className='otros'>
            <p>¿Tiene otros animales en casa? *</p>
            <label for='otros'></label>
            <input type='text' id='otros' formControlName='otros' />
          </section>
          <section className='cuantos'>
            <p>¿Cuántos y de qué especie? *</p>
            <label for='cuantos'></label>
            <input type='text' id='cuantos' formControlName='cuantos' />
          </section>
          <section className='cantidad'>
            <p>¿Indique sexo, edad, especie..? *</p>
            <label for='cantidad'></label>
            <input type='text' id='cantidad' formControlName='cantidad' />
          </section>
          <h2>Datos de la Vivienda</h2>
          <section className='tipocasa'>
            <p>¿Tipo de vivienda (casa, piso,..)? *</p>
            <label for='tipocasa'></label>
            <input type='text' id='tipocasa' formControlName='tipocasa' />
          </section>
          <h2>¿Tiene Terraza?</h2>
          <div>
            <input
              type='checkbox'
              id='expiencia'
              name='experiencia'
              value='experiencia'
            />
            <label for='experiencia'>Si</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='esperiencia1'
              name='experiencia1'
              value='experiencia1'
            />
            <label for='esperiencia'>No</label>
          </div>
          <h2>
            ¿En caso de estar en regimen de alquiler, ¿Está de acuerdo el
            propietario con la entrada de un perro a la vivienda?
          </h2>
          <div>
            <input
              type='checkbox'
              id='expiencia'
              name='experiencia'
              value='experiencia'
            />
            <label for='experiencia'>Si</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='esperiencia1'
              name='experiencia1'
              value='experiencia1'
            />
            <label for='esperiencia'>No</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='esperiencia1'
              name='experiencia1'
              value='experiencia1'
            />
            <label for='esperiencia'>No lo sé</label>
          </div>
          <section className='lugarcasa'>
            <p>¿Que lugar de la casa estará destinado para el animal? *</p>
            <label for='lugarcasa'></label>
            <input type='text' id='lugarcasa' formControlName='lugarcasa' />
          </section>
          <section className='lugarcasa'>
            <p>¿En qué lugar podrá descansar/dormir? *</p>
            <label for='dormir'></label>
            <input type='text' id='dormir' formControlName='dormir' />
          </section>
          <section className='lugarcasa'>
            <p>¿A qué lugar de la vivienda no podrá acceder el perro? *</p>
            <label for='acceso'></label>
            <input type='text' id='acceso' formControlName='acesso' />
          </section>
          <h3>DATOS DE LA FAMILIA</h3>
          <section className='convivencia'>
            <p>
              ¿Qué otras personas conviven con usted en la misma vivienda? *
            </p>
            <label for='convivencia'></label>
            <input type='text' id='convivencia' formControlName='convivencia' />
          </section>
          <section className='alergias'>
            <p> ¿Alguno de ellos es alérgico a los perros? *</p>
            <label for='alergias'></label>
            <input type='text' id='alergias' formControlName='alergias' />
          </section>
          <section className='hijos'>
            <p>¿Tiene hijos? *</p>
            <label for='hijos'></label>
            <input type='text' id='alergias' formControlName='alergias' />
          </section>
          <section className='plazo'>
            <p>¿Tiene pensado ser padre/madre a corto plazo? *</p>
            <label for='plazo'></label>
            <input type='text' id='plazo' formControlName='plazo' />
          </section>
          <h3>DATOS DE LA ADOPCION</h3>
          <section className='pq'>
            <p>¿Por qué ha decidido adoptar? *</p>
            <label for='plazo'></label>
            <textarea id='plazo' name='plazo' rows="4" cols='50' />
          </section>
          <section className='pq'>
            <p>
              ¿Qué motivos o acciones harían que devolviese al perro a la
              asociación?*{" "}
            </p>
            <label for='motivos'></label>
            <textarea id='motivos' name='motivos' rows="4" cols='50' />
          </section>
          <h2>CONSENTIMIENTO Y ACEPTACÓN DE CONDICIONES</h2>
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
          <button>Enviar</button>
        </fieldset>
      </form>
    </>
  );
};

export default Contact;
