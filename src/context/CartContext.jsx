// Importaciones necesarias
import React, { useState, useContext, createContext } from "react";

// Creacion del contexto
export const CartContext = createContext();

// Creacion personalizada del Hook useCart que nos facilitará el consumo del contexto en cualquier componente.
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};

// El CartProvider es el componente especial que envolverá a toda la App. Todo lo que esté dentro de este Provider tendrá acceso a la inofrmacion del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Dentro del useState el carrito arranca vacio

  // Funcion addToCart. creamos las funciones que manejan el carrito
  const addToCart = (product, quantity) => {
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );

      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    } // Busca si el producto ya esta en el carrito
    // Si esta, suma la cantidad
    // Si no esta, lo agrega como nuevo
  };

  // NUEVA FUNCION: Eliminar un producto del carrito (clase 9)
  const removeItem = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  }; // remorveItem(productId): utiliza el metodo filter() de los vectores para     generar un nuevo carrito que contiene todos lo items excepto el que coincide con el productId recibido. Es una forma inmutable y declarativa de eliminar elementos.

  // NUEVA FUNCION: verificar si un producto ya esta en el carrito (clase 9)
  const isInCart = (productId) => {
    return cart.some(item => item.id == productId);
  };  // isInCart(productId): usa el metodo some(), que devuelve true si al menos un elemento del vector/array cumple con la condicion (si algun item.id es igual al productId). Es ideal para validaciones rapidas.

  // NUEVA FUNCION (clase 9): Obtener la acantidad de un item especifico
  const getCantidadActual = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  //Funcion clearCart
  const clearCart = () => {
    setCart([]);
  }; // Vacía el carrito

  // Funcion getCartQuantity
  const getCartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }; // Recorre el carrito y suma todas las cantidades.
  // Sirve para mostrar, por ejemplo, el numerito de productos en un icono

  // Funcion getCartTotal
  const getCartTotal = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  }; // Calcula el precio total de todos los productos del carrito

  // Retorno del CartProvider
  return (
    <CartContext.Provider
      value={{
        cart,
        getCantidadActual,
        addToCart,
        clearCart,
        getCartQuantity,
        getCartTotal,
        removeItem, // exportamos la nueva funcion (clase 9)
        isInCart    // exportamos la nueva funcion (clase 9)
      }}>
      {children}
    </CartContext.Provider>
  ); // CartContext.Provider es el que realmente comparte la informacion.
  /* El value={{...}} contiene todo lo que cualquier componente va a poder usar:
                cart, es el estado del carrito.
                getCantidadActual, addToCart, clearCart, getCartQuantity, getCartTotal, son las funciones que controlan el carrito
            */
  // {children} asegura que todo lo que envuelva CartProvider (la App completa o un grupo de componenetes) pueda acceder al carrito
};
