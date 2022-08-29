//Login de usuario
export const postAuth = async (datos) => {
  const resp = await fetch(`${url}/auth/login`, {
    method: "POST",
    BODY: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};
