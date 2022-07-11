import React from "react";
import { stack as Menu } from 'react-burger-menu';
import './SideBar.scss'
import NavLinks from "./NavLinks";

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