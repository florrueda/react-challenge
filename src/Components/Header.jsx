import React from "react";
import { Link, Outlet } from "react-router-dom";
import Buscador from "./Buscador";

const Header = (props) => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              AlkeFlix
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/listado" className="nav-link">
                    Listado
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/favoritos" className="nav-link">
                    Favoritos: {props.favs.length}  
                  </Link>
                  
                </li>
              </ul>
            </div>
            <Buscador />
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
