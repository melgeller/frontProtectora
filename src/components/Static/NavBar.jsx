import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { JwtContext } from '../../context/jwtContext';
import { useContext } from 'react';
import ButtonLogout from '../LoginComponent/ButtonLogout';

const NavBar = () => {
  const { jwt } = useContext(JwtContext);
  return (
    <div className='navbar'>
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
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
