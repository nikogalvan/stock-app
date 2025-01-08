import React from "react";

const App = () => {
  return (
    <form action="">
      <h2>Registrar producto</h2>
      <div>
        <label htmlFor="name">Nombre de producto:</label>
        <input name="name" type="text" placeholder="Helado" />
      </div>
      <button>Agregar</button>
    </form>
  );
};

export default App;
