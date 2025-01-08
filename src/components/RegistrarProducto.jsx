import React from 'react'

const RegistrarProducto = () => {
  return (
    <form action="">
    <h2>Registrar producto</h2>
    <div>
      <label htmlFor="name">Nombre de producto:</label>
      <input name="name" type="text" placeholder="Helado" />
    </div>
    <div>
      <label htmlFor="price">Precio:</label>
      <input name="price" type="text" placeholder="$10" />
    </div>
    <div>
      <label htmlFor="quantity">Cantidad:</label>
      <input name="quantity" type="text" placeholder="5" />
    </div>
    <button>Agregar</button>
  </form>
  )
}

export default RegistrarProducto