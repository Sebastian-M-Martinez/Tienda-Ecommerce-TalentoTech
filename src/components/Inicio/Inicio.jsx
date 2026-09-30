import { Contador } from "../EjemploUseEffect.jsx";
import "../../App.css";

import TarjetaProducto from "../TarjetaProducto/TarjetaProducto.jsx";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer.jsx";
import Productos from "../Productos/productos.jsx";
import Directorio from "../Directorio/Directorio.jsx";
import { FormularioProducto } from "../FormularioProducto/FormularioProducto.jsx";
import { FormularioContainer } from "../FormularioContainer/FormularioContainer.jsx";

function Inicio() {
  return (
    <>
      <h1>¡Bienvenidos a mi tienda online!</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <TarjetaProducto
          imagen="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8emFwYXRpbGxhcyUyMGRlcG9ydGl2YXN8ZW58MHx8MHx8fDA%3D"
          nombre="Zapatillas Deportivas"
          precio="$45.000"
        />

        <TarjetaProducto
          imagen="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8emFwYXRvcyUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D"
          nombre="Zapatos de Mujer"
          precio="$75.000"
        />

        <TarjetaProducto
          imagen="https://images.unsplash.com/photo-1668069226492-508742b03147?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8emFwYXRvcyUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww"
          nombre="Zapatos de Hombre"
          precio="$65.000"
        />
      </div>
      <p>Este es el contenido principal.</p>
      <ItemListContainer Mensaje="Nuestros productos destacados" />
      <Contador />
      <Productos Mensaje="Productos locales"></Productos>
      <Directorio />
      <FormularioContainer />
    </>
  );
}
export default Inicio;
