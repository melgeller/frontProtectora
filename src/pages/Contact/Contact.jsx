import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <><div className='goBack'>
    <p className='main'>
      <Link to='/'> --Volver a la vista principal</Link>
    </p>
  </div>
        <div className="contact_form">

<div class="formulario">			
<h1>Formulario de contacto</h1>
        <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>


            <form ref={form} onSubmit={sendEmail}>				

                
                        <p>
                            <label for="nombre" class="colocar_nombre">Nombre
                                <span className="obligatorio">*</span>
                            </label>
                                <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"/>
                        </p>
                    
                        <p>
                            <label for="email" class="colocar_email">Email
                                <span className="obligatorio">*</span>
                            </label>
                                <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email"/>
                        </p>
                
                        <p>
                            <label for="telefone" class="colocar_telefono">Teléfono
                            </label>
                                <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono"/>
                        </p>			
                    
                        <p>
                            <label for="asunto" class="colocar_asunto">Asunto
                                <span className="obligatorio">*</span>
                            </label>
                                <input type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto"/>
                        </p>		
                    
                        <p>
                            <label for="mensaje" class="colocar_mensaje">Mensaje
                                <span className="obligatorio">*</span>
                            </label>                     
                                 <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
                           </p>	  								
                    
                        <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>

                        <p className="aviso">
                            <span class="obligatorio"> * </span>los campos son obligatorios.
                        </p>					
                
            </form>
</div>	
</div>
    </>




  )

}

export default Contact