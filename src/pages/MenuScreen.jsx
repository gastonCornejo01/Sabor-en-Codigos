import React from "react";
import { useState, useEffect, useReducer } from "react";
import { TYPES } from "../actions/pedidosAction";
import { pedidoInitialState, pedidosReducer } from "../actions/pedidosReducer";
import CardMenu from "../components/CardMenu";
// import menu from '../css/menu.css'
import { getMenus } from "../helpers/fetchMenu";

const MenuScreen = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus().then((respuesta) => {
      console.log(respuesta);
      let arreglo = [];

      Array.from(respuesta.menus).forEach((element) => {
        const { nombre, precio, img, _id } = element;

        arreglo.push({ nombre, precio, img, _id });
      });

      setMenus([...arreglo]);
      // setLoading(false);
    });
  }, []);

  const [state, dispatch] = useReducer(
    pedidosReducer,
    pedidoInitialState
  );

  

  const { menusPedido, pedido } = state;

  const agregarItem = (_id) => {
    console.log(_id);
    dispatch({ type: TYPES.AGREGAR_ITEM, payload: _id });
  };

  return (
    <div className="container">
      <div className="row">
        {menus.map((menu, index) => (
          <CardMenu key={index} data={menu} agregarItem={agregarItem} />
        ))}
      </div>
    </div>
  );
};

export default MenuScreen;
