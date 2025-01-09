/* eslint-disable react/prop-types */
import { useState } from "react";

const RegistrarProducto = (props) => {
  const [producto, setProducto] = useState({
    nombre: props.producto ? props.producto.nombre : "",
    cantidad: props.producto ? props.producto.cantidad : "",
    precio: props.producto ? props.producto.precio : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { nombre, cantidad, precio } = producto;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "cantidad":
        if (value === "" || !isNaN(Number(value))) {
          setProducto((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "precio":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setProducto((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setProducto((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const valores = [nombre, precio, cantidad];
    let errorMsg = "";

    const todosLosCamposLlenos = valores.every((campo) => {
      const value = `${campo}`.trim();
      return value !== "" && value !== "0";
    });

    if (!todosLosCamposLlenos) {
      setErrorMsg("Por favor, rellene todos los campos.");
    } else {
      const libro = {
        id: crypto.randomUUID(),
        nombre,
        precio,
        cantidad,
      };
      props.handleOnSubmit(libro);
      setErrorMsg(""); // Limpiar mensaje de error tras el envío exitoso
    }
  };

  return (
    <div className="main-form">
      <form onSubmit={handleOnSubmit}>
        <h2>Registrar producto</h2>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <div className="form-group">
          <label htmlFor="nombre">Nombre de producto:</label>
          <input
            name="nombre"
            type="text"
            value={nombre}
            onChange={handleInputChange}
            placeholder="Ingrese el nombre del producto"
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio:</label>
          <input
            name="precio"
            value={precio}
            type="text"
            onChange={handleInputChange}
            placeholder="Ingre el precio del producto"
          />
        </div>
        <div>
          <label htmlFor="cantidad">Cantidad:</label>
          <input
            name="cantidad"
            type="number"
            value={cantidad}
            onChange={handleInputChange}
            placeholder="Ingrese la cantidad disponible"
          />
        </div>
        <button type="submit" className="submit-btn">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default RegistrarProducto;
