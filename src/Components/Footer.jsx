import React from "react";
import { Outlet } from "react-router-dom";


const Footer = () => {
  return (
    <div>
    <Outlet />
    <footer>
      <nav>
        <ul>
          <li>
            <a href="http://instagram.com" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="http://facebook.com" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
        </ul>
      </nav>
      <p>Copyright Alkemy Challenge</p>
    </footer>
    
    </div>
  );
};

export default Footer;
