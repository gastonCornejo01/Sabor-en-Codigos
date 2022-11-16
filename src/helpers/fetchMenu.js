<<<<<<< HEAD
// const url = "https://backend-proy-final-node.herokuapp.com/api";
=======
// const url = "https://git.heroku.com/sabor-en-codigos.git";
>>>>>>> 3514c8179edbe0de1164ed07e4973e37d7e11340

const url = "http://localhost:8080/api";

//funcion para obtener gifs trending, USO EL export para poder llmarla desde un componente
export const postMenus = async (datos) => {
  try {
    const resp = await fetch(`${url}/menus`, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const { data } = await resp.json();

    return data;
  } catch (error) {
    // console.log(error);
  }
};

export const getMenus = async () => {
  const resp = await fetch(`${url}/menus`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await resp.json();

  return data;
};
