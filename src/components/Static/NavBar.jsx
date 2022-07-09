import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { JwtContext } from '../../context/jwtContext';
import { useContext } from 'react';
import ButtonLogout from '../LoginComponent/ButtonLogout';
import SideBar from '../Navbar/SideBar';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { jwt } = useContext(JwtContext);
  return (
    <div className='navbar' id="outer-container">
     <SideBar className='SideBar' pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <img src='../../assets/logoperro.png' alt='logoperro' />
      <nav className='lista'>
        <ul>

          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/gallery'>Adopta</Link>
          </li>
          <li>
            <Link to='/about'>Quienes somos</Link>
          </li>
          <li>
            <Link to='/blog'>Noticias</Link>
          </li>
          <li>
            <Link to='/contact'>Contacto</Link>
          </li>
          <li>
            <Link to='/donaciones'>Donaciones</Link>
          </li>
          {jwt && (
            <>
              <li>|</li>
              <li>
                <Link to='/admin'>Administración</Link>
              </li>
              <li>
                <ButtonLogout></ButtonLogout>
              </li>
            </>
          )}
          <li><NavLink to='/' exact activeClassName='selected'>Home</NavLink></li>
          <li><NavLink to='/gallery' activeClassName='selected'>Adopta</NavLink></li>
          <li><NavLink to='/about' activeClassName='selected'>Quienes somos</NavLink></li>
          <li><NavLink to='/blog' activeClassName='selected'>Noticias</NavLink></li>
          <li><NavLink to='/contacto' activeClassName='selected'>Contacto</NavLink></li>
          <li><NavLink to='/donaciones' activeClassName='selected'>Donaciones</NavLink></li>
          <li><NavLink to='/admin' activeClassName='selected'>Administración</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
