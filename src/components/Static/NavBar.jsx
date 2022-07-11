import React from 'react';
import './NavBar.scss';
import { JwtContext } from '../../context/jwtContext';
import { useContext } from 'react';
import ButtonLogout from '../LoginComponent/ButtonLogout';
import SideBar from '../Navbar/SideBar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const { jwt } = useContext(JwtContext);
  const activeClassName = 'selected';
  return (
    <div className='navbar' id='outer-container'>
      <SideBar
        className='SideBar'
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
      />
      <img src='../../assets/logoperro.png' alt='logoperro' />
      <nav className='lista'>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/gallery'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>
              Adopta
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>
              Quienes somos
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blog'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>
              Noticias
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/donaciones'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>
              Donaciones
            </NavLink>
          </li>
          {jwt && (
            <>
              <li>|</li>
              <li>
                <NavLink
                  to='/adminblog'
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/adminmascota'
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }>
                  Mascotas
                </NavLink>
              </li>
              <li>
                <ButtonLogout></ButtonLogout>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
