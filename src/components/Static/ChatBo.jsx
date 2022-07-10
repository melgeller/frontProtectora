import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components'

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#eb3449',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#eb3449',
    botFontColor: '#fff',
    userBubbleColor: '#0cb3c9',
    userFontColor: '#fff',
    
}

export default class ChatBo extends Component {
  state = {
    opened: false
  }

  toggleFloating = ({ opened }) => {
    this.setState({ opened }); 
  }

  render() {
    const { opened } = this.state;
    const steps = [
        {
            id: "1",
            message: "Bienvenido a UpgradeAdopciones. Soy robby. ¿como puedo llamarte?",
            trigger: "2"
        },
        {
            id: "2",
            user: true,
            validator: (value) => {
                if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                    return true;
                }
                else {
                    return 'Please enter a valid name.';
                }
            },
            trigger: "3"
        },
        {
            id: "3",
            message: "Hola {previousValue}, encantado de conocerte!",
            trigger: "4"
        },
        {
            id: "4",
            message: "¿Te puedo ayudar?",
            trigger: "5"
        },
        {
            id: "5",
            options: [
                {value: "s", label: "Si", trigger: "6A"},
                {value: "n", label: "No", trigger: "6B"},
            ]
        },
        {
            id: "6A",
            message: "Genial, dime con que te puedo ayudar..",
            trigger: "seleccion"
        },
        {
            id: "6B",
            message: "Lamento oir eso, nos vemos en otro momento",
            end: true
        },
        {
            id: "seleccion",
            options: [
                {value: "a", label: "Quiero adoptar/colaborar", trigger: "7A"},
                {value: "o", label: "Obtener información", trigger: "7B"},
            ]
        },
        {
            id: "7A",
            message: "Eso esta genial, elige como te gustaría colaborar y te redireccionare al contenido",
            trigger: "seleccionColaborar"
        },
        {
            id: "7B",
            message: "Eso esta genial, elige a que información te gustaría acceder",
            trigger: "seleccionInfo"
        },
        {
            id: "seleccionColaborar",
            options: [
                {value: "adoptar", label: "Adoptar", trigger: "9"},
                {value: "colaborar", label: "Colaborar", trigger: "10"},
            ]
        },
        {
            id: "seleccionInfo",
            options: [
                {value: "Noticias", label: "Noticias", trigger: "11"},
                {value: "Contacto", label: "Contacto", trigger: "12"},
                {value: "Quienes somos", label: "Quienes somos", trigger: "13"},
                

            ]
        },
        {
            id: "9",
            component: (<a href=" "><NavLink to='/gallery'>Adoptar</NavLink></a>  ),
            asMessage: true,
            trigger: "preguntaVuelta"
        },
        {
            id: "10",
            component: (<a href=" "><NavLink to='/donaciones'>Formas de colaborar</NavLink></a>  ),
            asMessage: true,
            trigger: "preguntaVuelta"
        },
        {
            id: "11",
            component: (<a href=" "><NavLink to='/blog'>Blog</NavLink></a>  ),
            asMessage: true,
            trigger: "preguntaVuelta"
        },
        {
            id: "12",
            component: (<a href=" "><NavLink to='/contact'>Contacto</NavLink></a>  ),
            asMessage: true,
            trigger: "preguntaVuelta"
        },
        {
            id: "13",
            component: (<a href=" "><NavLink to='/about'>Quienes somos</NavLink></a>  ),
            asMessage: true,
            trigger: "preguntaVuelta"
        },
       
        {
            id: "preguntaVuelta",
            message: "¿necesitas alguna cosa mas?",
            trigger: "respuestaVuelta",
        }, 
        {
            id: "respuestaVuelta",
            options: [
                {value: "s", label: "Si", trigger: "6A"},
                {value: "n", label: "No", trigger: "6B"},
            ],
        }
    ];

    return (
        <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        floating={true}
        opened={opened}
        toggleFloating={this.toggleFloating}
      />
      </ThemeProvider>
    )
  }
}