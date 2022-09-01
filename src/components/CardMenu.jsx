import React from 'react'
import "../css/cardMenu.css"

const CardMenu = ({menus, data, agregarItem}) => {
  // let {id, nombre, precio} = data;
  return (
    <>
    <div className='row mt-5 tarjeta'>
            {menus.map((menu, index) => (
    <div className="mb-3 col-lg-4 col-md-6 col-sm-12 animate__animated animate__fadeIn" key={index}>
    <div className="card mb-3 border border-dark" >
  <div className="card-title container fondo-titulo">
    <h5 className='mt-2  text-white'>{menu.nombre}</h5>
    </div>
  <div className="card-body fondo-body">
    <img
                  src={menu.img}
                  className="card-img-top img_paginas animate__animated animate__fadeIn"
                  alt={menu.nombre}
                />
    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius voluptatum ratione dolorem tempore sed ab amet porro vel veritatis ad?</p>
  </div>
    <div className='card-footer bg-'>
  <div className='row  footer'>
    <div className="col-4">
      <small className="text-muted">${menu.precio}</small>
    </div>
    <div className='col-4 offset-4'>
      <button className='btn btn-success' onClick={() => agregarItem(id)}>Añadir+</button>
    </div>
  </div>
  </div>
</div>
    </div>

            ))}
    </div>
    </>
  )
}

export default CardMenu
