import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
// Importamos tu módulo de estilos original para que no pierdas diseño
import clases from "./Item.module.css";

export function Item({ id, nombre, precio, stock, imagen }) {
  // Creamos el objeto producto a partir de las props
  const producto = { id, nombre, precio, stock, imagen };

  const [cantidad, setCantidad] = useState(0);

  // Mantenemos los estados y funciones anteriores comentadas
  /*
  const [esFavorito, setEsFavorito] = useState(false);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };
  */

  // Lógica del Carrito
  const { cart, addToCart } = useCart(); // Traemos la función del contexto

  // Buscamos si el producto está en el carrito comparando ambos IDs como string para evitar errores de tipo
  const productoEnCarrito = cart.find((item) => String(item.id) === String(id));
  const cantidadEnCarrito = productoEnCarrito ? productoEnCarrito.quantity : 0;

  // Restamos correctamente el stock inicial menos lo que ya está en el carrito
  const stockDisponible = stock - cantidadEnCarrito;

  const handleAddToCart = () => {
    addToCart(producto, cantidad);
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);

    setCantidad(0); // <-- AGREGADO: Resetea el contador local tras agregar
  };

  return (
    // Usamos la clase de la tarjeta o la estructura del material respetando el diseño
    <div className={clases.tarjeta || "card-producto"}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        width={100}
        height={100}
      />

      {/* Respetando la sintaxis exacta del material de la página 9 */}
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>

      {/* Incorporamos el detalle del stock */}
      <p>Stock disponible: {stockDisponible}</p>

      {/* consevamos el contador interactivo*/}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px 0",
        }}
      >
        <button onClick={() => cantidad > 0 && setCantidad(cantidad - 1)}>
          -
        </button>
        <p style={{ margin: "0 10px" }}>{cantidad}</p>
        <button
          onClick={() =>
            cantidad < stockDisponible && setCantidad(cantidad + 1)
          }
        >
          +
        </button>
      </div>

      <Link to={`/producto/${producto.id}`}>Ver detalle</Link>

      {/* Mantenemos el favorito y el botón exacto que pide el material de la clase 8 */}

      <button onClick={handleAddToCart} disabled={stockDisponible === 0}>
        {stockDisponible === 0 ? "Sin stock" : `Agregar ${cantidad} al carrito`}
      </button>
    </div>
  );
}

export default Item;

/* =========================================================================
   CÓDIGO ORIGINAL ANTERIOR (PRESERVADO ÍNTEGRAMENTE EN COMENTARIO)
   =========================================================================
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import clases from "./Item.module.css";

export function ItemOriginal({ id, nombre, precio, stock, imagen }) {
  const producto = { id, nombre, precio, stock, imagen };
  const [cantidad, setCantidad] = useState(0);
  const [esFavorito, setEsFavorito] = useState(false);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(producto, cantidad);
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
  };

  return (
    <div className={clases.tarjeta}>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>Stock disponible: {stock}</p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "10px 0" }}>
        <button onClick={decrementar}>-</button>
        <p style={{ margin: "0 10px" }}>{cantidad}</p>
        <button onClick={incrementar}>+</button>
      </div>

      <button onClick={handleAddToCart}>Agregar al Carrito</button>

      <span onClick={marcarComoFavorito} style={{ fontSize: "24px" }}>
        {" "}
        {esFavorito ? "⭐" : "☆"}
      </span>
    </div>
  );
}
========================================================================= */
