import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';
import logo from '../imagens/logo_MedTech.png'; // Certifique-se de que o caminho para o logo está correto
import { NavLink } from 'react-router-dom';


const NavigationBar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <NavLink exact to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo d-inline-block align-top" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            
            <NavLink exact to="/login" className="nav-link" activeClassName="active">
              Login
            </NavLink>
            <NavLink to="/catalogo" className="nav-link" activeClassName="active">
              Catálogo
            </NavLink>
            <a className="nav-link" href="#">
              Sobre
            </a>
            <a className="nav-link" href="#">
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
