import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../css/login.css";
import { postUsuarios } from "../helpers/fecthApiUsuarios";

const SignUpApp = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const registroUsuario =()=>{
    const datos={
      nombre,
      email,
      password,
    }
    postUsuarios(datos).then((respuesta) => {
      console.log(respuesta)
    })


  }
  return (
    <div className="animate__animated animate__backInRight">
      <div className="container d-flex justify-content-center mt-5">
        <div className="row div-contenedor contain">
          <div className="overlay-panel col-md-6 col-sm-12 background-welcome">
            <div className="p">
              <h1>Bienvenido</h1>
              <p>Ingresa si ya estas registrado</p>
              <NavLink to="/iniciar">
                <button className="button">Ingresar</button>
              </NavLink>
            </div>
          </div>
          <div className="overlay-panel col-md-6 col-sm-12">
            <form className="form">
              <h1>Crear nueva Cuenta</h1>
              <div className="social-container">
                <a
                  href="https://m.facebook.com/?locale=es_LA&_rdr"
                  className="a"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://www.google.com/" className="a">
                  <i className="fa fa-google" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/" className="a">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
              </div>
              <input className="input" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
              <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
              />
              <button className="button" onClick={registroUsuario}>Crear</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpApp;
