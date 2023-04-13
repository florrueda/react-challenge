import React from "react";
import { Link, Outlet } from "react-router-dom";


const Footer = () => {
  return (
    <div>
    <Outlet />
    <footer className="bg-dark d-flex justify-content-center">
    <Link to='https://florrueda.github.io/' className="text-decoration-none text-light m-2 link-opacity-50-hover" target="_blank">
      Copyright Alkemy Challenge & Florencia Rueda
    </Link>
    </footer>
    
    </div>
  );
};

export default Footer;
