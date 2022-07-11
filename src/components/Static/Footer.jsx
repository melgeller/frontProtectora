import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li>
          <img src='../../assets/1384015.png' alt='ig' />
        </li>
        <li>
          <img src='../../assets/facebook (2).png' alt='fb' />
        </li>
        <li>
          <img src='../../assets/gorjeo (2).png' alt='tw' />
        </li>
        <li>
        Copyright &copy; 2022, Upgrade Hub
        </li>
        <li>
        <a href="<Link to='/about'>">🐾</a>
        </li>

      </ul>
    </footer>
  );
};

export default Footer;
