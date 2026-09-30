// Integrando todo: useEffect + fetch + useState

// 1. Importamos los hooks desde react y generamos la funcion con sus estados de inicio
import React, { useState, useEffect } from "react";
import classes from "./Productos.module.css";
import { Link } from "react-router-dom";

function Productos({ Mensaje }) {
  const [productos, setProductos] = useState([]); // productos: vector arranca vacio
  const [error, setError] = useState(null); // error: manseja de error en caso de fallo
  const [cargando, setCargando] = useState(true); // cargando: indica si estamos esperando la respuesta (true al inicio)

  // =================================================================================

  // 2. Efecto con useEffect
  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los productos");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []); // *[] al final: significa que este useEffect se ejecuta solo una vez, cuando el componente aparece en pantalla.
  /* * explicacion:
                    1. Pide el archivo prodcutos.json.
                    2. Si la respuesta no es valida (!respuesta.ok), lanza un error.
                    3. Si es correcta, convierte los datos a JSON y los guarda en productos.
                    4. Si ocurre un error, lo guarda en error.
                    5. Al final (exitoso o no), cambia cargando a false
*/

  // ====================================================================================

  // 3. Renderizado condicional
  if (cargando) {
    return <p>Cargando, por favor espere...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  // * Si estamos cargando, muestra un mensaje de "Cargando...".
  // * Si hubo error, muestra el mensaje de error.

  // ====================================================================================

  // 4. Mostramos los productos
  return (
    <div>
      <h1>{Mensaje}</h1>
      {/* 1. Aplicamos la clase contenedorLista al <ul> */}
      <ul className={classes.contenedorLista}>
        {productos.map((producto) => (
          /* 2. Aplicamos la clase tarjetaProducto al <li> */
          <li key={producto.id} className={classes.tarjetaProducto}>
            <Link to={`/producto/${producto.id}`}>
              <h2>{producto.nombre}</h2>
              <img src={producto.imagen} alt={producto.nombre} width="150" />
              <p>Precio: ${producto.precio}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
// * Mostramos el mensaje que mandamos como props segun corresponda.
// * Recorre el array/vector productos con .map.
// * Por cada producto, crea un <li> mostrando su nombre, imagen y precio.
// * key={poducto-id} es importante en React para identificar cada elemento de la lista

export default Productos;
