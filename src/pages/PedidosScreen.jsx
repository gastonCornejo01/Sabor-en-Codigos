import React from "react";
import { pedidosReducer } from "../actions/pedidosReducer";
import CardMenu from "../components/CardMenu";

const PedidosScreen = () => {
  const [state, dispatch] = useReducer(pedidosReducer)

  const agregarItem = (id) => {
    console.log(id);
  };
  const eliminarItem = () => {};
  const limpiarPedido = () => {};

  return (
    <div className="fondo mt-0">
      <div className="animate__animated animate__backInLeft">
        <div className="container d-flex justify-content-center">
          <div className="row div-contenedor contain mt-5">
            <div className="overlay-panel col-md-6 col-sm-12">
              {menus.map((menu) =>(
                <CardMenu key={menu.id} data={menu} agregarItem={agregarItem}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidosScreen;
