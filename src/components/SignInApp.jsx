
import React from 'react'
import { NavLink } from "react-router-dom";
import "../css/login.css"

const SignInApp = () => {
  return (
	<div className='fondo mt-0'>
	<div className='animate__animated animate__backInLeft'>
	<div className='container d-flex justify-content-center'>

    <div className='row div-contenedor contain mt-5'>
    <div className="overlay-panel col-md-6 col-sm-12">
		<form className='form'>
			<h1>Iniciar Sesión</h1>
			<div className="social-container">
				<a href="https://m.facebook.com/?locale=es_LA&_rdr" className="a"><i className="fa fa-facebook" aria-hidden="true"></i></a>
				<a href="https://www.google.com/" className="a"><i className="fa fa-google" aria-hidden="true"></i></a>
				<a href="https://github.com/" className="a"><i className="fa fa-github-square" aria-hidden="true"></i></a>
			</div>
			<input className='input' type="email" placeholder="Email" />
			<input className='input' type="password" placeholder="Contraseña" />
			<button className='button'>Iniciar Sesion</button>
		</form>
	</div>
    <div className='overlay-panel col-md-6 col-sm-12 background-welcome'>
        <div className='p'>
            <h1>Hola!</h1>
            <p>Si no estás Registrado ingresa aquí</p>
			<NavLink to="/registrar">
            <button className='button'>Registrarse</button>
			</NavLink>
        </div>
    </div>
    </div>
</div>
</div>
</div>
  )
}

export default SignInApp