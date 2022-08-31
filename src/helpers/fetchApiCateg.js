const url="https://backend-proy-final-node.herokuapp.com/api"


//funcion para obtener gifs trending, USO EL export para poder llmarla desde un componente
export const postCategoria = async (datos) => {
  try {
    const resp = await fetch(
      `${url}/categoriasmenu`,{
        method: "POST",
        body : JSON.stringify(datos),
        headers:{
            "Content-type":"application/json; charset=UTF-8",
        },
      }
    );
    const { data } = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};


export const getCategoria = async () => {
  const resp = await fetch(`${url}/categoriasmenu`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",      
    },
  });
  const data = await resp.json();

  return data;
};

//"x-token": JSON.parse(localStorage.getItem("token")),
