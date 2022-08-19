import React from 'react'
import "../css/home.css"
import "animate.css";

const HomeScreen = () => {
  return (
    <div className="container-home">
      <div className="row">
        <div className="col-12 frase-home animate__animated animate__fadeInDown mt-5 p-5">
          <hr />
           <h1>"Quédate con quien ya se preocupe si ya comiste."</h1>
           <h3>Nuestro único objetivo es que alimentes tu cuerpo, pero tambien tu alma. Te invitamos a ver nuestro menú.</h3>
           <hr />
           <button className='btn btn-success'>Ver menú</button>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen