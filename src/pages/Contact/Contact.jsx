import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {
  const form = useRef();
  const MySwal = withReactContent(Swal);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_5chznu8",
        "template_9nqklmw",
        form.current,
        "hfl_V3p8oPQyUbd77"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset()
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
    
  
      
          <h1>Formulario de contacto</h1>
          <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>
          <div class='w-full max-w-xs'>
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={form} onSubmit={sendEmail}>
               <div class="mb-4">
              <label  class="block text-gray-700 text-sm font-bold mb-2" for='nombre'>
                Nombre
                <span className='obligatorio'>*</span>
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type='text'
                name='introducir_nombre'
                id='nombre'
                required='obligatorio'
                placeholder='Escribe tu nombre'
              />
              </div>
            

              <div class="mb-6">
              <label for='email' class='colocar_email'>
                Email
                <span className='obligatorio'>*</span>
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type='email'
                name='introducir_email'
                id='email'
                required='obligatorio'
                placeholder='Escribe tu Email'
              />
              </div>
            

              <div class="mb-6">
              <label for='telefone' class='colocar_telefono'>
                Teléfono
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type='tel'
                name='introducir_telefono'
                id='telefono'
                placeholder='Escribe tu teléfono'
              />
              </div>
            

              <div class="mb-6">
              <label for='asunto' class='colocar_asunto'>
                Asunto
                <span className='obligatorio'>*</span>
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type='text'
                name='introducir_asunto'
                id='assunto'
                required='obligatorio'
                placeholder='Escribe un asunto'
              />
            </div>

            <div class="mb-6">
              <label for='mensaje' class='colocar_mensaje'>
                Mensaje
                <span className='obligatorio'>*</span>
              </label>
              <textarea
                name='introducir_mensaje'
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id='mensaje'
                required='obligatorio'
                placeholder='Deja aquí tu comentario...'></textarea>
                </div>
            
              <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  type='submit' name='enviar_formulario' id='enviar'>
              <p>Enviar</p>
            </button>
            </div>

            <p className='aviso'>
              <span class='obligatorio'> * </span>los campos son obligatorios.
            </p>
          </form>
        </div>
      
    </>
  );
};

export default Contact;
