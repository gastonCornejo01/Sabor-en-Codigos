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

  const validarDatos = () => {
    const datos = {
      email,
      password,
    };
    postAuth(datos).then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.token) {
        setMessage({ ok: true, msg: "Login ok" });
        localStorage.setItem("token", JSON.stringify(respuesta.token));
        navigate("/");
      } else {
        setMessage(respuesta);
      }
    });
  };
  return (
    <div className="fondo mt-0">
      <div className="animate__animated animate__backInLeft">
        <div className="container d-flex justify-content-center">
          <div className="row div-contenedor contain m-5">
            <div className="overlay-panel col-md-6 col-sm-12">
              <form className="form">
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
                  className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                />
                <button className="button" onClick={validarDatos}>
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
