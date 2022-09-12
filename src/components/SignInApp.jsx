import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../helpers/fetchApi";
import { NavLink } from "react-router-dom";
import "../css/login.css";

const SignInApp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const validarDatos = (e) => {    
    e.preventDefault(); //desactivo el envio por defecto    

    const datos = {
      email,
      password,
    };

    console.log(datos);
    postAuth(datos).then((respuesta) => { 
      
      console.log(respuesta);
     if (respuesta?.msg) {
          setMessage(respuesta);         
          navigate("/");
      } else {        
          setMessage({ ok: true, msg: "Login ok" });
          //localStorage.setItem("token", JSON.stringify(respuesta.usuario.nombre));
          navigate("/");        
      }
       
    });
  };


  return (
    <div className="fondo mt-0">
      <div className="animate__animated animate__backInLeft">
        <div className="container d-flex justify-content-center">
          <div className="row div-contenedor contain mt-5">
            <div className="overlay-panel col-md-6 col-sm-12">
              <form className="form" onSubmit={validarDatos}>
                <h1>Iniciar Sesión</h1>
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
                <input
                  name="email"                 
                  className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <input
                  name="password" 
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"                  
                  required
                />
                <button className="button">
                  Iniciar Sesion
                </button>
                {message && (
                  <div
                    className={
                      message?.ok
                        ? "alert alert-success mt-3"
                        : "alert alert-danger mt-3"
                    }
					role="alert"
                  >
					{message.msg}
				  </div>
                )}
              </form>
            </div>
            <div className="overlay-panel col-md-6 col-sm-12 background-welcome">
              <div className="p">
                <h1>Hola!</h1>
                <p>Si no estás Registrado ingresa aquí</p>
                <NavLink to="/registrar">
                  <button className="button">Registrarse</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInApp;
