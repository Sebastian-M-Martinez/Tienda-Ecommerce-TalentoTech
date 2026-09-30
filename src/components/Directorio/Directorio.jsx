// Integrando todo: useEffect + fetch + useState

// 1. Importamos los hooks desde react y generamos la funcion con sus estados de inicio
import React, { useState, useEffect } from "react";
import TarjetaContacto from "./TarjetaContacto.jsx";

function Directorio({ Mensaje }) {
  const [nosotros, setNosotros] = useState([]); // nosotros: vector arranca vacio
  const [error, setError] = useState(null); // error: manseja de error en caso de fallo
  const [cargando, setCargando] = useState(true); // cargando: indica si estamos esperando la respuesta (true al inicio)

  // =================================================================================

  // 2. Efecto con useEffect
  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(
            "No se pudo cargar la información de los colaboradores",
          );
        }
        return respuesta.json();
      })
      .then((datos) => {
        setNosotros(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []); // *[] al final: significa que este useEffect se ejecuta solo una vez,      cuando el componente aparece en pantalla.
  /* * explicacion:
                    1. Pide el archivo nosotros.json.
                    2. Si la respuesta no es validad (!respuesta.ok), lanza un error.
                    3. Si es correcta, convierte los datos a JSON y los guarda en nosotros.
                    4. Si ocurre un error, lo guarda en error.
                    5. Al final (exitoso o no), cambia cargando a false
*/

  // ====================================================================================

  // 3. Renderizado condicional
  if (cargando) {
    return <p>Cargando equipo, por favor espere...</p>;
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
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>{Mensaje}</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {nosotros.map((colaborador) => (
          <TarjetaContacto key={colaborador.id} {...colaborador} />
        ))}
      </div>
    </div>
  );
}
// * Mostramos el mensaje que mandamos como props segun corresponda.
// * Recorre el array/vector productos con .map.
// * Por cada producto, crea un <li> mostrando su nombre, imagen y precio.
// * key={poducto-id} es importante en React para identificar cada elemento de la lista

export default Directorio;
