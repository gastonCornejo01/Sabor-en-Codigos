import React from "react";
import { useState, useEffect, useReducer } from "react";
import { getMenus } from "../helpers/fetchMenu";
import { pedidoInitialState, pedidosReducer } from "../actions/pedidosReducer";
import PedidoApp from "../components/PedidoApp";

const PedidosScreen = () => {
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

  const [state, dispatch] = useReducer(pedidosReducer, pedidoInitialState);

  const eliminarItem = () => {};
  const limpiarPedido = () => {};

  return (
    <div className="container">
      <h3>Tu Pedido</h3>
      <button className="btn btn-danger" onClick={limpiarPedido}>
        Eliminar Pedido
      </button>
      {pedido.map((item, index) => (
        <PedidoApp key={index} data={item} eliminarItem={eliminarItem} />
      ))}
    </div>
  );
};

export default PedidosScreen;
