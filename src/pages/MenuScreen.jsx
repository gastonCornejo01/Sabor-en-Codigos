import React from "react";
import { useState, useEffect } from "react";
import CardMenu from "../components/CardMenu";
import { getMenus } from "../helpers/fetchMenu";

const MenuScreen = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus().then((respuesta) => {
      // console.log(respuesta);
      let arreglo = [];

      Array.from(respuesta.menus).forEach((element) => {
        const { nombre, precio, img, _id } = element;

        arreglo.push({ nombre, precio, img, _id });
      });

      setMenus([...arreglo]);
      // setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {menus.map((menu, index) => (
          <CardMenu key={index} data={menu} />
        ))}
      </div>
    </div>
  );
};

export default MenuScreen;
