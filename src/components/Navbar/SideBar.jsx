import React from "react";
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'
import './SideBar.scss'

const SideBar = () => {
  return (
    <div className="Menu">
      <Menu right>
    <ul className="MHamburguesa">
          <li className="menu-item"><Link to='/'>Home</Link></li>
          <li className="menu-item"><Link to='/gallery'>Adopta</Link></li>
          <li className="menu-item"><Link to='/about'>Quienes somos</Link></li>
          <li className="menu-item"><Link to='/blog'>Noticias</Link></li>
          <li className="menu-item"><Link to='/adopcion'>Formulario</Link></li>
          <li className="menu-item"><Link to='/donaciones'>Donaciones</Link></li>
          <li className="menu-item"><Link to='/admin'>Administración</Link></li>
        </ul>
        </Menu>
        </div>
  )
}

export default SideBar