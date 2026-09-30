import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

fetch("/data/productos.json") /* fetch('/data/productos.json'): Le pide al
                                  servidor el archivo productos.json que está en
                                  la carpeta /data/. y nos devuelve una promesa
                                  que representa la respuesta del servidor*/
  .then((respuesta) => {
    /* then(respuesta => { ... }) : Cuando el servidor
                            contesta, entramos al primer .then. que nos
                            devuelve un objeto de tipo Response con datos
                            crudos (no JSON todavía).*/
    console.log("Respuesta cruda del servidor:", respuesta);
    return respuesta.json(); /* console.log('Respuesta cruda del servidor:',
                                respuesta); return respuesta.json(); : Una vez impreso por consulta la respuesta,la convierte en un objeto/array/vector de JavaScript. (Esto también devuelve otra promesa).*/
  })

  .then((datos) => {
    console.log("¡Productos cargados!", datos);
  }) /* then(datos => { ... }) : Ahora sí tenemos los datos ya convertidos en JSON y los
        mostramos en consola:*/

  .catch((error) => {
    console.log("¡Ups! Hubo un error:", error);
  }) /* console.log('¡Productos cargados!', datos);
        catch(error => { ... }) : Si algo sale mal caemos en este bloque y al igual que los demás, lo mostramos por consola: console.error('¡Ups! Hubo un error:', error);*/

  .finally(
    () => {},
  ); /*  finally(() => {console.log('¡Productos cargados!', datos)}                 Se ejecuta siempre al final, haya funcionado o no.*/
