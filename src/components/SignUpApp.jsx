import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../css/login.css";
import { postUsuarios } from "../helpers/fecthApiUsuarios";

const SignUpApp = () => {
  const [formValues, setFormValues] = useState({
    _id: "",
    nombre: "",
    email: "",
    password: "",
    role: "USERS_ROLE",
    estado: true,
    img : ""
  });

  const [message, setMessage] = useState([]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log(formValues);
    postUsuarios(formValues).then((respuesta) => {
      //console.log(respuesta);
      if (respuesta?.errors) {
        setMessage(respuesta.errors);
      } else {
        setMessage([{ ok: true, msg: "Registro exitoso!" }]);
        setFormValues({
          _id: "",
          nombre: "",
          email: "",
          password: "",
          role: "USERS_ROLE",
          estado: true,
          img : ""                    
        });
        setTimeout(() => {
          setMessage([]);
        }, 2000);
      }
    });
  };


  
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
            <form className="form" onSubmit={handleSubmit}>
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
              <input className="input" type="text" name="nombre" value={formValues.nombre} onChange={handleChange} placeholder="Nombre" />
              <input className="input" type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Email" />
              <input
                className="input"
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Contraseña"
              />
              <button className="button">Crear</button>
            </form>
            {message.length > 0 &&
            message.map((item, index) => (
              <div
                className={
                  item?.ok
                    ? "alert alert-success mt-3"
                    : "alert alert-danger mt-3"
                }
                role="alert"
                key={index}
              >
                {item.msg}
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpApp;
