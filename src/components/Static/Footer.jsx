import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li>
          <a href='https://www.instagram.com/milongomilo/'>
            <img src='../../assets/1384015.png' alt='ig' />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/milongomilo/'>
            <img src='../../assets/facebook (2).png' alt='fb' />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/milongomilo/'>
            <img src='../../assets/gorjeo (2).png' alt='tw' />
          </a>
        </li>
       
      </ul>
      <div className="copy ">
      <p>Copyright &copy; 2022, Upgrade Hub <a href="<Link to='/about'>">🐾</a></p>
      </div>
    </footer>
  );
};

export default Footer;
