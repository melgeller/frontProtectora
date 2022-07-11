
import React from 'react';
import './NavBar.scss';
import { JwtContext } from '../../../context/jwtContext';
import { useContext } from 'react';
import ButtonLogout from '../../LoginComponent/ButtonLogout';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const { jwt } = useContext(JwtContext);
  const activeClassName = 'selected';
    return (
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
  )
}

export default NavLinks