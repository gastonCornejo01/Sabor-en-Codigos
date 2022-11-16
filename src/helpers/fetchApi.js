<<<<<<< HEAD
// const url="https://backend-proy-final-node.herokuapp.com/api"
=======
// const url="https://git.heroku.com/sabor-en-codigos.git"
>>>>>>> 3514c8179edbe0de1164ed07e4973e37d7e11340

const url = "http://localhost:8080/api";

//Login de usuario
export const postAuth = async (datos) => {
  const resp = await fetch(`${url}/auth/login`, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};
