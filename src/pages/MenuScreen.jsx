import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import CardMenu from '../components/CardMenu';
// import menu from '../css/menu.css'
import { getMenus } from '../helpers/fetchMenu';

const MenuScreen = () => {
  const [Menu, setMenu] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    getMenus().then((respuesta) => {
      console.log(respuesta);
      let arreglo = [];

      Array.from(respuesta).forEach((element) => {
        const { nombre, precio, img } = element;

        arreglo.push({ nombre, precio, img });
      });

      setMenu([...arreglo]);
      setLoading(false);
    });
  }, []);
  
  return (
<div className="card">
            {Menu.map((nombre, index) => (
              <div
                className="mb-3 animate__animated animate__fadeIn "
                key={index}
              >
                <div className="card-body">
      <h5 className="card-title">{Menu.nombre}</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
              </div>
            ))}
          </div>
    
  )
}

export default MenuScreen