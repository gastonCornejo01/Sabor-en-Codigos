import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import CardMenu from '../components/CardMenu';
// import menu from '../css/menu.css'
import { getMenus } from '../helpers/fetchMenu';

const MenuScreen = () => {
  const [menus, setMenus] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMenus().then((respuesta) => {
      console.log(respuesta);
      let arreglo = [];

      Array.from(respuesta.menus).forEach((element) => {
        const { nombre, precio, img } = element;

        arreglo.push({ nombre, precio, img });
      });

      setMenus([...arreglo]);
      setLoading(false);
    });
  }, []);
  
  return (
    <div className="container">
      <div className="row">
        <CardMenu menus={menus}/>
      </div>
    </div>
    
  )
}

export default MenuScreen