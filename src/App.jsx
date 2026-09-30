import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import Productos from "./components/Productos/productos.jsx";
import { FormularioContainer } from "./components/FormularioContainer/FormularioContainer.jsx";
import TarjetaProducto from "./components/TarjetaProducto/TarjetaProducto.jsx";
import { Contador } from "./components/EjemploUseEffect.jsx";
import Directorio from "./components/Directorio/Directorio.jsx";
import Inicio from "./components/Inicio/Inicio.jsx";
import ProductoDetalle from "./components/Productos/ProductoDetalle.jsx"; 


// Enrutador Principal dentro de App.jsx
function App() {
  return (
    <Routes>
      {/*envuelve a las demás para mostrar Header y Footer siempre */}
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos"
          element={<ItemListContainer Mensaje={"Productos destacados"} />}
        />
        <Route path="/destacados" element={<Productos Mensaje={"Todos los productos"} />}
        />
        <Route path="/alta" element={<FormularioContainer />} 
        />
        <Route path="/producto/:id" element={<ProductoDetalle />} 
        />
      </Route>
    </Routes>
  );
}

export default App;
