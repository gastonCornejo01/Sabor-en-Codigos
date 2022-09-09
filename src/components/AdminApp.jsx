import React, { useEffect, useState } from "react";
import "../css/admin.css";
import {
  getMenus,
  postMenus,
  putMenus,
  deleteMenus,
} from "../helpers/fetchAdmin";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { getCategoria } from "../helpers/fetchApiCateg";

const AdminApp = () => {
  const [menus, setMenus] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formValues, setFormValues] = useState({
    _id: "",
    nombre: "",
    precio: 0,
    nombcateg: "",
    img: "",
    activo: true,
  });

  const [message, setMessage] = useState([]);
  const [habmodal, setHabmodal] = useState(false); //este hook lo uso para habilitar el modal
  const [modaldelete, setModaldelete] = useState(false); //para mostrar o no el modal de eliminacion
  const [menuselecc, setMenuselecc] = useState({
    _id: "",
    nombre: "",
    precio: 0,
    nombcateg: "",
    img: "",
    activo: true,
  });

  const hola = (menu, accion) => {
    console.log(menu._id);
    setMenuselecc({
      nombre: menu.nombre,
      precio: menu.precio,
      nombcateg: menu.nombcateg,
      img: menu.img,
      activo: menu.activo,
      _id: menu._id,
    });

    accion === "actualizar"
      ? setHabmodal(!habmodal)
      : setModaldelete(!modaldelete);
  };

  const handleChangeact = (e) => {
    setMenuselecc({
      ...menuselecc,
      [e.target.name]: e.target.value,
    });
  };

  const guardaract = (dato, id) => {
    putMenus(dato, id).then((respuesta) => {
      setFormValues({
        nombre: "",
        precio: 0,
        nombcateg: "",
        img: "",
        activo: true,
      });

      setHabmodal(!habmodal);
    });
  };

  const eliminar = (id) => {
    deleteMenus(id).then((respuesta) => {
      setFormValues({
        nombre: "",
        precio: 0,
        nombcateg: "",
        img: "",
        activo: true,
      });

      setModaldelete(!modaldelete);
    });
  };

  useEffect(() => {
    getMenus().then((respuesta) => {
      let arreglo = [];

      respuesta.menus.forEach((element) => {
        const { nombre, precio, nombcateg, img, activo, _id } = element;
        arreglo.push({ nombre, precio, nombcateg, img, activo, _id });
      });

      setMenus([...arreglo]);
      setLoading(false);
    });
  }, [formValues]);

  useEffect(() => {
    getCategoria().then((respuesta) => {
      console.log(respuesta.categorias);

      setCategorias([...respuesta.categorias]);
    });
  }, []);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //desactivo el envio por defecto

    postMenus(formValues).then((respuesta) => {
      //console.log(respuesta)

      setFormValues({
        nombre: "",
        precio: 0,
        nombcateg: "",
        img: "",
        activo: true,
      });
    });

    const actualizarmenus = (menuactual, tipo) => {
      setMenuselecc({ menuactual });
    };
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col text-white">
            <h1>Administración de Menus</h1>
            <hr />
          </div>
        </div>
        <div className="row mb-3 text-white">
          <div className="col-12 col-md-6 offset-md-3 form_curso">
            <h3>Agregar Menu</h3>
            <form onSubmit={handleSubmit}>
              <label>Nombre</label>
              <input
                name="nombre"
                className="form-control"
                type="text"
                maxLength={40}
                required
                value={formValues.nombre}
                onChange={handleChange}
              />

              <label>Categoria</label>
              <select
                name="nombcateg"
                className="form-select"
                aria-label="Default select example"
                required
                value={formValues.nombcateg}
                onChange={handleChange}
              >
                <option
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  Seleccionar Categoria
                </option>
                {categorias.map((cat) => (
                  <option key={cat._id} value={cat.nombre}>
                    {cat.nombre}
                  </option>
                ))}
              </select>

              <label>Precio</label>
              <input
                name="precio"
                className="form-control"
                type="number"
                min={1}
                max={100000}
                required
                value={formValues.precio}
                onChange={handleChange}
              />

              <label>Imagen</label>
              <input
                name="img"
                className="form-control"
                type="url"
                placeholder="Ingrese una url"
                value={formValues.img}
                onChange={handleChange}
                required
              />

              <br />

              <label>Activar</label>
              <select
                name="activo"
                value={formValues.activo}
                onChange={handleChange}
              >
                <option value="true">si</option>
                <option value="false">no</option>
              </select>

              <button className="btn btn-primary mt-3 float-end">
                Guardar
              </button>
            </form>
          </div>
        </div>

        <div className="row container">
          <div className="col text-white">
            {loading ? (
              <div className="col-6 offset-3">
                <h3 className="text-white text-center">Cargando...</h3>
              </div>
            ) : (
              <table className="table text-white">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Precio</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="table_body">
                  {menus.map((menu, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{menu.nombre}</td>
                      <td>{menu.nombcateg}</td>
                      <td>{menu.precio}</td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => hola(menu, "actualizar")}
                        >
                          Editar
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => hola(menu, "eliminar")}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Modal isOpen={habmodal}>
        <ModalHeader>
          <p>Actualizar Menu</p>
        </ModalHeader>

        <ModalBody>
          <div className="form-group">
            <label htmlFor="id">Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              id="nombre"
              value={menuselecc.nombre}
              onChange={handleChangeact}
              readOnly
            />
            <br />
            <label htmlFor="nombre">Categoria</label>
            <input
              className="form-control"
              type="text"
              name="nombcateg"
              id="nombcateg"
              value={menuselecc.nombcateg}
              onChange={handleChangeact}
            />
            <br />
            <label htmlFor="nombre">Precio</label>
            <input
              className="form-control"
              type="text"
              name="precio"
              id="precio"
              value={menuselecc.precio}
              onChange={handleChangeact}
            />
            <br />
            <label htmlFor="capital_bursatil">Imagen</label>
            <input
              className="form-control"
              type="text"
              name="img"
              id="img"
              value={menuselecc.img}
              onChange={handleChangeact}
            />
            <br></br>
            <label>Activar</label>
            <select
              name="activo"
              value={menuselecc.activo}
              onChange={handleChange}
            >
              <option value="true">si</option>
              <option value="false">no</option>
            </select>
          </div>
        </ModalBody>

        <ModalFooter>
          <button
            className="btn btn-success"
            onClick={() => guardaract(menuselecc, menuselecc._id)}
          >
            Guardar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setHabmodal(!habmodal)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
      //modal eliminacion
      <Modal isOpen={modaldelete}>
        <ModalHeader>
          <p>Desea Eliminar el Menu</p>
        </ModalHeader>

        <ModalBody>{menuselecc.nombre}</ModalBody>

        <ModalFooter>
          <button
            className="btn btn-success"
            onClick={() => eliminar(menuselecc._id)}
          >
            Guardar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModaldelete(!modaldelete)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AdminApp;
