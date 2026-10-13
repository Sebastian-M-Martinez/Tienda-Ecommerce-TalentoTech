import React from "react";
import { useCart } from "../../context/CartContext"; //1. Importamos el Hook

const Cart = () => {
  // Por ahora, este componente solo mostrará un mensaje.
  // Más adelante, consumirá los datos de nuestro contexto.

  const { cart, clearCart, getCartTotal } = useCart();

  // Si el carrito esta vacio, mostramos un mensaje
  if (cart.length === 0) {
    return (
      <div>
        <h1>El carrito esta vacio</h1>
        <p>Agrega productos para continuar con la compra.</p>
      </div>
    );
  }

  // Si hay productos, los mostramos
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
        </div>
      ))}
      <hr />
      <h3>Total a pagar: ${getCartTotal()}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};
export default Cart;
