import React from "react";
import './NavBar.scss'
import { Link } from 'react-router-dom'
import SideBar from '../Navbar/SideBar';

const NavBar = () => {
  return (
    <div className='navbar' id="outer-container">
     <SideBar className='SideBar' pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <img src='../../assets/logoperro.png' alt='logoperro' />
      <nav className='lista'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/gallery'>Adopta</Link></li>
          <li><Link to='/about'>Quienes somos</Link></li>
          <li><Link to='/blog'>Noticias</Link></li>
          <li><Link to='/contact'>Contacto</Link></li>
          <li><Link to='/donaciones'>Donaciones</Link></li>
          <li><Link to='/admin'>Administración</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
