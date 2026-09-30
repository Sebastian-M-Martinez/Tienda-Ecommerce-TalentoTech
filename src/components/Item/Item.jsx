import { useState } from "react";
// Importamos el módulo de estilos recién creado
import clases from "./Item.module.css";

export function Item({ id, nombre, precio, stock }) {
  const [cantidad, setCantidad] = useState(0);
  const [esFavorito, setEsFavorito] = useState(false);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    // Corregido: Evaluamos que sea mayor a 1 (o 0) para poder restar
    if (cantidad > 1) {
      setCantidad(cantidad - 1); // Corregido: cambiamos 'cant' por 'cantidad'
    }
  };

  const agregarAlCarrito = () => {
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  return (
    // Reemplazamos el style en línea externo por la clase del módulo CSS
    <div className={clases.tarjeta}>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>Stock disponible: {stock}</p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px 0",
        }}
      >
        <button onClick={decrementar}>-</button>
        <p style={{ margin: "0 10px" }}>{cantidad}</p>
        <button onClick={incrementar}>+</button>
      </div>

      <button onClick={agregarAlCarrito}>Agregar al Carrito</button>

      <span onClick={marcarComoFavorito} style={{ fontSize: "24px" }}>
        {" "}
        {esFavorito ? "⭐" : "☆"}
      </span>
    </div>
  );
}

// Recibe las props usando destructuring
/*export function Item({ nombre, precio, stock}) {
const CompraClick = () => {
    alert(`¡Agregaste ${nombre} al chango!`);
};

    return(
        <div style={{ 
            border: '1px solid #ccc', 
            padding: '15px', 
            borderRadius: '8px', 
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
        }}>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>
            <button onClick={CompraClick}>Comprar</button>
        </div>
    );
}
*/
