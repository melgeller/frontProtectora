import React from 'react';
import './NavBar.scss';
import SideBar from '../Navbar/SideBar';
import NavLinks from './NavLinks';

const NavBar = () => {
  return (
    <div className='navbar' id='outer-container'>
      <SideBar
        className='SideBar'
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
      />
      <img src='../../assets/logoperro.png' alt='logoperro' />
      <nav className='lista'>
         <NavLinks></NavLinks>
      </nav>
    </div>
  );
};

export default NavBar;
