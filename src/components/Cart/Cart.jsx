import React from "react";
import { useCart } from "../../context/CartContext"; //1. Importamos el Hook
import { Link } from "react-router-dom"; // Importamos Link para la navegacion (clase 9)

const Cart = () => {
  // Por ahora, este componente solo mostrará un mensaje.
  // Más adelante, consumirá los datos de nuestro contexto.

  const { cart, clearCart, getCartTotal, removeItem } = useCart();

  // Si el carrito esta vacio, mostramos un mensaje (y un boton para volver -clase 9)
  if (cart.length === 0) {
    return (
      <div>
        <h1>El carrito esta vacio</h1>
        <p>Agrega productos para continuar con la compra.</p>
        <Link to="/productos" className="btn-volver">
          Ver Productos
        </Link>
      </div>
    );
  }

  // Si hay productos, los mostramos (con las opciones de finalizar y vaciar - clase 9-)
  return (
    <div>
      {" "}
      <h1>Carrito de Compras</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.nombre}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.precio}</p>
          <p>Subtotal: ${item.precio * item.quantity}</p>{" "}
          {/*/boton de eliminar (clase 9) */}
          <button onClick={() => removeItem(item.id)} className="btn-eliminar">
            Eliminar producto
          </button>
        </div>
      ))}
      <hr />
      <h3>Total a pagar: ${getCartTotal()}</h3>
      <button onClick={clearCart} className="btn-vaciar">
        Vaciar Carrito
      </button>
      <Link
        to="/"
        onClick={() => alert("Gracias por comprar")}
        className="btn-finalizar"
      >
        Finalizar compra
      </Link>
    </div>
  );
};
export default Cart;
