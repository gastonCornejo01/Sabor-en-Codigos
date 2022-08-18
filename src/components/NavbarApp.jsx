import React from 'react'
import { Link , NavLink } from "react-router-dom";
import "../css/navbar.css"

const NavbarApp = () => {
  return (
    <nav className="navbar navbar-expand-lg title-nav w-100">
      <div className="container">
        <Link className='navbar-brand' to="/">
        <i className="fa fa-code-fork" aria-hidden="true"></i> Sabor en Codigos
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
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link text-light"
                aria-current="page"
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-light" to="/menu">
                Nuestro Menú
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-light" to="/pedidos">
              <i className='fa fa-shopping-cart' aria-hidden="true"></i> Tu Pedido
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li>
              <button className="btn btn-login">
                <i className='fa fa-sign-in' aria-hidden="true"></i> Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarApp