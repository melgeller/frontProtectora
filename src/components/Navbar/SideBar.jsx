import React from "react";
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'
import './SideBar.scss'
import NavLinks from "../Static/NavLinks";

const SideBar = () => {
  return (
    <div className="Menu">
      <Menu right>
    
    <nav className="MHamburguesa">
          <NavLinks></NavLinks>
        </nav>
        </Menu>
        </div>
  )
}

export default SideBar