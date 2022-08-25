import React from 'react'
import { NavLink } from "react-router-dom";
import "../css/home.css"
import "animate.css";

const HomeScreen = () => {
  return (
    <div className="container-home">
      <div className="row w-100">
        <div className="col-12 frase-home animate__animated animate__fadeInDown mt-5 p-5">
          <hr />
           <h1>"Quédate con quien ya se preocupe si ya comiste."</h1>
           <h3>Nuestro único objetivo es que alimentes tu cuerpo, pero tambien tu alma. Te invitamos a ver nuestro menú.</h3>
           <hr />
           <NavLink to="/menu">
           <button className='btn btn-success'>Ver menú</button>

           </NavLink>
           <div className='d-flex justify-content-center'>
           <form className="col-md-8 col-sm-12 d-flex mt-5">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
           </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen